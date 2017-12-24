require('should')

const assert = require('assert')
    , al_api = require('../index.js')

describe('getAcceptLanguageInfo', function() {
  it('should make sure getAcceptLanguageInfo is a function', function() {
    al_api.should.have.property('getAcceptLanguageInfo').which.is.a.Function()
  })
})
