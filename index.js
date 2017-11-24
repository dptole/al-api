
const fs = require('fs')
    , path = require('path')
    , lsr = JSON.parse(fs.readFileSync(path.resolve(__dirname, '/data/iana-language-subtag-registry.json')).toString())

const al_api = new Proxy({}, {
  get(target, name) {
    if(!name.match(/^get(.*?)By(.*?)$/))
      return undefined

    const category = RegExp.$1
        , subcategory = RegExp.$2

    if(target[name])
      return target[name]

    const subtag = lsr[category.toLowerCase()].reduce((acc, language) => {
            acc[language[subcategory]] = language
            return acc
          }, {})

    return target[name] = tag => subtag[tag] && subtag[tag].Description
  }
})

module.exports = Object.create(al_api)
