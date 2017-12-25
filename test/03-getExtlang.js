require('should')

const assert = require('assert')
    , al_api = require('../index.js')

describe('getExtlangTypeBySubtag', function() {
  const arg = 'zsm'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangTypeBySubtag is a function', function() {
    al_api['getExtlangTypeBySubtag'].should.be.a.Function()
  })

  it('#getExtlangTypeBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangTypeBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangTypeByDescription', function() {
  const arg = 'Standard Malay'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangTypeByDescription is a function', function() {
    al_api['getExtlangTypeByDescription'].should.be.a.Function()
  })

  it('#getExtlangTypeByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangTypeByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangTypeByAdded', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangTypeByAdded is a function', function() {
    al_api['getExtlangTypeByAdded'].should.be.a.Function()
  })

  it('#getExtlangTypeByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangTypeByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangTypeByPreferred-Value', function() {
  const arg = 'zsm'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangTypeByPreferred-Value is a function', function() {
    al_api['getExtlangTypeByPreferred-Value'].should.be.a.Function()
  })

  it('#getExtlangTypeByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangTypeByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangTypeByPrefix', function() {
  const arg = 'ms'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangTypeByPrefix is a function', function() {
    al_api['getExtlangTypeByPrefix'].should.be.a.Function()
  })

  it('#getExtlangTypeByPrefix(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangTypeByPrefix'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangTypeByMacrolanguage', function() {
  const arg = 'ms'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangTypeByMacrolanguage is a function', function() {
    al_api['getExtlangTypeByMacrolanguage'].should.be.a.Function()
  })

  it('#getExtlangTypeByMacrolanguage(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangTypeByMacrolanguage'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangTypeByDeprecated', function() {
  const arg = '2015-02-12'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangTypeByDeprecated is a function', function() {
    al_api['getExtlangTypeByDeprecated'].should.be.a.Function()
  })

  it('#getExtlangTypeByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangTypeByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangSubtagByType', function() {
  const arg = 'extlang'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangSubtagByType is a function', function() {
    al_api['getExtlangSubtagByType'].should.be.a.Function()
  })

  it('#getExtlangSubtagByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangSubtagByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangSubtagByDescription', function() {
  const arg = 'Standard Malay'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangSubtagByDescription is a function', function() {
    al_api['getExtlangSubtagByDescription'].should.be.a.Function()
  })

  it('#getExtlangSubtagByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangSubtagByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangSubtagByAdded', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangSubtagByAdded is a function', function() {
    al_api['getExtlangSubtagByAdded'].should.be.a.Function()
  })

  it('#getExtlangSubtagByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangSubtagByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangSubtagByPreferred-Value', function() {
  const arg = 'zsm'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangSubtagByPreferred-Value is a function', function() {
    al_api['getExtlangSubtagByPreferred-Value'].should.be.a.Function()
  })

  it('#getExtlangSubtagByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangSubtagByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangSubtagByPrefix', function() {
  const arg = 'ms'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangSubtagByPrefix is a function', function() {
    al_api['getExtlangSubtagByPrefix'].should.be.a.Function()
  })

  it('#getExtlangSubtagByPrefix(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangSubtagByPrefix'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangSubtagByMacrolanguage', function() {
  const arg = 'ms'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangSubtagByMacrolanguage is a function', function() {
    al_api['getExtlangSubtagByMacrolanguage'].should.be.a.Function()
  })

  it('#getExtlangSubtagByMacrolanguage(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangSubtagByMacrolanguage'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangSubtagByDeprecated', function() {
  const arg = '2015-02-12'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangSubtagByDeprecated is a function', function() {
    al_api['getExtlangSubtagByDeprecated'].should.be.a.Function()
  })

  it('#getExtlangSubtagByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangSubtagByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangDescriptionByType', function() {
  const arg = 'extlang'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangDescriptionByType is a function', function() {
    al_api['getExtlangDescriptionByType'].should.be.a.Function()
  })

  it('#getExtlangDescriptionByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangDescriptionByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangDescriptionBySubtag', function() {
  const arg = 'zsm'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangDescriptionBySubtag is a function', function() {
    al_api['getExtlangDescriptionBySubtag'].should.be.a.Function()
  })

  it('#getExtlangDescriptionBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangDescriptionBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangDescriptionByAdded', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangDescriptionByAdded is a function', function() {
    al_api['getExtlangDescriptionByAdded'].should.be.a.Function()
  })

  it('#getExtlangDescriptionByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangDescriptionByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangDescriptionByPreferred-Value', function() {
  const arg = 'zsm'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangDescriptionByPreferred-Value is a function', function() {
    al_api['getExtlangDescriptionByPreferred-Value'].should.be.a.Function()
  })

  it('#getExtlangDescriptionByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangDescriptionByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangDescriptionByPrefix', function() {
  const arg = 'ms'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangDescriptionByPrefix is a function', function() {
    al_api['getExtlangDescriptionByPrefix'].should.be.a.Function()
  })

  it('#getExtlangDescriptionByPrefix(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangDescriptionByPrefix'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangDescriptionByMacrolanguage', function() {
  const arg = 'ms'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangDescriptionByMacrolanguage is a function', function() {
    al_api['getExtlangDescriptionByMacrolanguage'].should.be.a.Function()
  })

  it('#getExtlangDescriptionByMacrolanguage(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangDescriptionByMacrolanguage'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangDescriptionByDeprecated', function() {
  const arg = '2015-02-12'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangDescriptionByDeprecated is a function', function() {
    al_api['getExtlangDescriptionByDeprecated'].should.be.a.Function()
  })

  it('#getExtlangDescriptionByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangDescriptionByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangAddedByType', function() {
  const arg = 'extlang'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangAddedByType is a function', function() {
    al_api['getExtlangAddedByType'].should.be.a.Function()
  })

  it('#getExtlangAddedByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangAddedByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangAddedBySubtag', function() {
  const arg = 'zsm'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangAddedBySubtag is a function', function() {
    al_api['getExtlangAddedBySubtag'].should.be.a.Function()
  })

  it('#getExtlangAddedBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangAddedBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangAddedByDescription', function() {
  const arg = 'Standard Malay'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangAddedByDescription is a function', function() {
    al_api['getExtlangAddedByDescription'].should.be.a.Function()
  })

  it('#getExtlangAddedByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangAddedByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangAddedByPreferred-Value', function() {
  const arg = 'zsm'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangAddedByPreferred-Value is a function', function() {
    al_api['getExtlangAddedByPreferred-Value'].should.be.a.Function()
  })

  it('#getExtlangAddedByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangAddedByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangAddedByPrefix', function() {
  const arg = 'ms'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangAddedByPrefix is a function', function() {
    al_api['getExtlangAddedByPrefix'].should.be.a.Function()
  })

  it('#getExtlangAddedByPrefix(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangAddedByPrefix'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangAddedByMacrolanguage', function() {
  const arg = 'ms'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangAddedByMacrolanguage is a function', function() {
    al_api['getExtlangAddedByMacrolanguage'].should.be.a.Function()
  })

  it('#getExtlangAddedByMacrolanguage(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangAddedByMacrolanguage'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangAddedByDeprecated', function() {
  const arg = '2015-02-12'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangAddedByDeprecated is a function', function() {
    al_api['getExtlangAddedByDeprecated'].should.be.a.Function()
  })

  it('#getExtlangAddedByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangAddedByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangPreferred-ValueByType', function() {
  const arg = 'extlang'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangPreferred-ValueByType is a function', function() {
    al_api['getExtlangPreferred-ValueByType'].should.be.a.Function()
  })

  it('#getExtlangPreferred-ValueByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangPreferred-ValueByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangPreferred-ValueBySubtag', function() {
  const arg = 'zsm'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangPreferred-ValueBySubtag is a function', function() {
    al_api['getExtlangPreferred-ValueBySubtag'].should.be.a.Function()
  })

  it('#getExtlangPreferred-ValueBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangPreferred-ValueBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangPreferred-ValueByDescription', function() {
  const arg = 'Standard Malay'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangPreferred-ValueByDescription is a function', function() {
    al_api['getExtlangPreferred-ValueByDescription'].should.be.a.Function()
  })

  it('#getExtlangPreferred-ValueByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangPreferred-ValueByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangPreferred-ValueByAdded', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangPreferred-ValueByAdded is a function', function() {
    al_api['getExtlangPreferred-ValueByAdded'].should.be.a.Function()
  })

  it('#getExtlangPreferred-ValueByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangPreferred-ValueByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangPreferred-ValueByPrefix', function() {
  const arg = 'ms'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangPreferred-ValueByPrefix is a function', function() {
    al_api['getExtlangPreferred-ValueByPrefix'].should.be.a.Function()
  })

  it('#getExtlangPreferred-ValueByPrefix(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangPreferred-ValueByPrefix'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangPreferred-ValueByMacrolanguage', function() {
  const arg = 'ms'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangPreferred-ValueByMacrolanguage is a function', function() {
    al_api['getExtlangPreferred-ValueByMacrolanguage'].should.be.a.Function()
  })

  it('#getExtlangPreferred-ValueByMacrolanguage(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangPreferred-ValueByMacrolanguage'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangPrefixByType', function() {
  const arg = 'extlang'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangPrefixByType is a function', function() {
    al_api['getExtlangPrefixByType'].should.be.a.Function()
  })

  it('#getExtlangPrefixByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangPrefixByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangPrefixBySubtag', function() {
  const arg = 'zsm'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangPrefixBySubtag is a function', function() {
    al_api['getExtlangPrefixBySubtag'].should.be.a.Function()
  })

  it('#getExtlangPrefixBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangPrefixBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangPrefixByDescription', function() {
  const arg = 'Standard Malay'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangPrefixByDescription is a function', function() {
    al_api['getExtlangPrefixByDescription'].should.be.a.Function()
  })

  it('#getExtlangPrefixByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangPrefixByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangPrefixByAdded', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangPrefixByAdded is a function', function() {
    al_api['getExtlangPrefixByAdded'].should.be.a.Function()
  })

  it('#getExtlangPrefixByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangPrefixByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangPrefixByPreferred-Value', function() {
  const arg = 'zsm'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangPrefixByPreferred-Value is a function', function() {
    al_api['getExtlangPrefixByPreferred-Value'].should.be.a.Function()
  })

  it('#getExtlangPrefixByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangPrefixByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangPrefixByMacrolanguage', function() {
  const arg = 'ms'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangPrefixByMacrolanguage is a function', function() {
    al_api['getExtlangPrefixByMacrolanguage'].should.be.a.Function()
  })

  it('#getExtlangPrefixByMacrolanguage(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangPrefixByMacrolanguage'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangPrefixByDeprecated', function() {
  const arg = '2015-02-12'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangPrefixByDeprecated is a function', function() {
    al_api['getExtlangPrefixByDeprecated'].should.be.a.Function()
  })

  it('#getExtlangPrefixByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangPrefixByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangMacrolanguageByType', function() {
  const arg = 'extlang'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangMacrolanguageByType is a function', function() {
    al_api['getExtlangMacrolanguageByType'].should.be.a.Function()
  })

  it('#getExtlangMacrolanguageByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangMacrolanguageByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangMacrolanguageBySubtag', function() {
  const arg = 'zsm'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangMacrolanguageBySubtag is a function', function() {
    al_api['getExtlangMacrolanguageBySubtag'].should.be.a.Function()
  })

  it('#getExtlangMacrolanguageBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangMacrolanguageBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangMacrolanguageByDescription', function() {
  const arg = 'Standard Malay'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangMacrolanguageByDescription is a function', function() {
    al_api['getExtlangMacrolanguageByDescription'].should.be.a.Function()
  })

  it('#getExtlangMacrolanguageByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangMacrolanguageByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangMacrolanguageByAdded', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangMacrolanguageByAdded is a function', function() {
    al_api['getExtlangMacrolanguageByAdded'].should.be.a.Function()
  })

  it('#getExtlangMacrolanguageByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangMacrolanguageByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangMacrolanguageByPreferred-Value', function() {
  const arg = 'zsm'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangMacrolanguageByPreferred-Value is a function', function() {
    al_api['getExtlangMacrolanguageByPreferred-Value'].should.be.a.Function()
  })

  it('#getExtlangMacrolanguageByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangMacrolanguageByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangMacrolanguageByPrefix', function() {
  const arg = 'ms'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangMacrolanguageByPrefix is a function', function() {
    al_api['getExtlangMacrolanguageByPrefix'].should.be.a.Function()
  })

  it('#getExtlangMacrolanguageByPrefix(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangMacrolanguageByPrefix'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangDeprecatedByType', function() {
  const arg = 'extlang'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangDeprecatedByType is a function', function() {
    al_api['getExtlangDeprecatedByType'].should.be.a.Function()
  })

  it('#getExtlangDeprecatedByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangDeprecatedByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangDeprecatedBySubtag', function() {
  const arg = 'yds'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangDeprecatedBySubtag is a function', function() {
    al_api['getExtlangDeprecatedBySubtag'].should.be.a.Function()
  })

  it('#getExtlangDeprecatedBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangDeprecatedBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangDeprecatedByDescription', function() {
  const arg = 'Yiddish Sign Language'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangDeprecatedByDescription is a function', function() {
    al_api['getExtlangDeprecatedByDescription'].should.be.a.Function()
  })

  it('#getExtlangDeprecatedByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangDeprecatedByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangDeprecatedByAdded', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangDeprecatedByAdded is a function', function() {
    al_api['getExtlangDeprecatedByAdded'].should.be.a.Function()
  })

  it('#getExtlangDeprecatedByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangDeprecatedByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getExtlangDeprecatedByPrefix', function() {
  const arg = 'sgn'
      , json_arg = JSON.stringify(arg)

  it('#getExtlangDeprecatedByPrefix is a function', function() {
    al_api['getExtlangDeprecatedByPrefix'].should.be.a.Function()
  })

  it('#getExtlangDeprecatedByPrefix(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getExtlangDeprecatedByPrefix'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

