
const al_api = require('../index.js')
    , log = console.log

log(al_api.getLanguageDescriptionBySubtag('aa')) // ['Afar']

log(al_api.getLanguageDescriptionBySubtag('en')) // ['English']

log(al_api.getRegionDescriptionBySubtag('US')) // ['United States']

log(al_api.getRegionDescriptionBySubtag('VE')) // ['Venezuela']

log(al_api.getRegionDescriptionBySubtag('419')) // ['Latin America and the Caribbean']

log(al_api.getRegionDescriptionBySubtag('FR')) // ['France']

log(al_api.getRegionDescriptionBySubtag('SE')) // ['Sweden']

log(al_api.getRegionDescriptionBySubtag('ES')) // ['Spain']

log(al_api.getRegionDescriptionBySubtag('DE')) // ['Germany']

log(al_api.getRegionDescriptionBySubtag('CN')) // ['China']

log(al_api.getLanguageDescriptionBySubtag('zh')) // ['Chinese']

log(al_api.getLanguageDescriptionBySubtag('ar')) // ['Arabic']
