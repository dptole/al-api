
const assert = require('assert')
    , al_api = require('../index.js')
    , should = require('should')

describe('getAcceptLanguageInfo', function() {
  const expected = [{
    language: {
      subtag: 'en',
      info: ['English']
    },
    region: {
      subtag: 'US',
      info: ['United States']
    }
  }]

  const json_expected = JSON.stringify(expected)

  it('#getAcceptLanguageInfo is a function', function() {
    al_api.should.have.property('getAcceptLanguageInfo').which.is.a.Function()
  })

  it('#getAcceptLanguageInfo("en-US") return should match ' + json_expected, function() {
    should.deepEqual(
      al_api.getAcceptLanguageInfo('en-US'),
      expected
    )
  })
})
