
const fs = require('fs')
    , lsr = JSON.parse(fs.readFileSync(path.join(__dirname, '/data/iana-language-subtag-registry.json')).toString())
    , lsr_keys = Object.keys(lsr)

const target = {
  getAcceptLanguageInfo(accept_language) {
    const slices = accept_language.split(',').reduce((acc, al) =>
      al.match(/([^-;]+)(?:-([^;]+))?/)
        ? acc.concat({
            language: RegExp.$1,
            region: RegExp.$2
          })
        : acc
      ,
      []
    )

    return slices.reduce((acc, slice) => {
      const language_info = al_api.getLanguageDescriptionBySubtag(slice.language)
          , region_info = al_api.getRegionDescriptionBySubtag(slice.region)
          , result = {}

      if(language_info)
        result.language = {
          subtag: slice.language,
          info: language_info
        }

      if(region_info)
        result.region = {
          subtag: slice.region,
          info: region_info
        }

      return result.language || result.region
        ? acc.concat(result)
        : acc
    }, [])
  }
}

const al_api = new Proxy(target, {
  get(target, name) {
    if(target[name])
      return target[name]

    if(!(name && name.match && name.match(/^get(.+?)By(.+)$/)))
      return undefined

    const cat = lsr_keys.find(lsr_key => RegExp.$1.toLowerCase().startsWith(lsr_key.toLowerCase()))
    if(!cat)
      return undefined

    const subcat = RegExp.$1.substr(cat.length)
        , key = RegExp.$2

    const subcat_object = lsr[cat.toLowerCase()].reduce((acc, lsr_fields) => {
      if(!(lsr_fields && lsr_fields[subcat] && lsr_fields[key]))
        return acc

      if(!acc[lsr_fields[key]])
        acc[lsr_fields[key]] = []

      acc[lsr_fields[key]].push(lsr_fields[subcat])
      return acc
    }, {})

    return target[name] = subcat => subcat_object[subcat]
  }
})

module.exports = Object.create(al_api)
