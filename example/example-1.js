
const al_api = require('../index.js')
    , log = console.log

log(al_api.getLanguageBySubtag('aa')) // Afar

log(al_api.getLanguageBySubtag('en')) // English

log(al_api.getRegionBySubtag('US')) // United States

log(al_api.getRegionBySubtag('VE')) // Venezuela

log(al_api.getRegionBySubtag('419')) // Latin America and the Caribbean

log(al_api.getRegionBySubtag('FR')) // France

log(al_api.getRegionBySubtag('SE')) // Sweden

log(al_api.getRegionBySubtag('ES')) // Spain

log(al_api.getRegionBySubtag('DE')) // Germany

log(al_api.getRegionBySubtag('CN')) // China

log(al_api.getLanguageBySubtag('zh')) // Chinese

log(al_api.getLanguageBySubtag('ar')) // Arabic
