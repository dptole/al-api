require('should')

const assert = require('assert')
    , al_api = require('../index.js')

describe('getRedundantTypeByTag', function() {
  const arg = 'zh-yue'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantTypeByTag is a function', function() {
    al_api['getRedundantTypeByTag'].should.be.a.Function()
  })

  it('#getRedundantTypeByTag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantTypeByTag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantTypeByDescription', function() {
  const arg = 'Cantonese'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantTypeByDescription is a function', function() {
    al_api['getRedundantTypeByDescription'].should.be.a.Function()
  })

  it('#getRedundantTypeByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantTypeByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantTypeByAdded', function() {
  const arg = '1999-12-18'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantTypeByAdded is a function', function() {
    al_api['getRedundantTypeByAdded'].should.be.a.Function()
  })

  it('#getRedundantTypeByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantTypeByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantTypeByDeprecated', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantTypeByDeprecated is a function', function() {
    al_api['getRedundantTypeByDeprecated'].should.be.a.Function()
  })

  it('#getRedundantTypeByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantTypeByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantTypeByPreferred-Value', function() {
  const arg = 'yue'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantTypeByPreferred-Value is a function', function() {
    al_api['getRedundantTypeByPreferred-Value'].should.be.a.Function()
  })

  it('#getRedundantTypeByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantTypeByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantTagByType', function() {
  const arg = 'redundant'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantTagByType is a function', function() {
    al_api['getRedundantTagByType'].should.be.a.Function()
  })

  it('#getRedundantTagByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantTagByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantTagByDescription', function() {
  const arg = 'Cantonese'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantTagByDescription is a function', function() {
    al_api['getRedundantTagByDescription'].should.be.a.Function()
  })

  it('#getRedundantTagByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantTagByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantTagByAdded', function() {
  const arg = '1999-12-18'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantTagByAdded is a function', function() {
    al_api['getRedundantTagByAdded'].should.be.a.Function()
  })

  it('#getRedundantTagByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantTagByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantTagByDeprecated', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantTagByDeprecated is a function', function() {
    al_api['getRedundantTagByDeprecated'].should.be.a.Function()
  })

  it('#getRedundantTagByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantTagByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantTagByPreferred-Value', function() {
  const arg = 'yue'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantTagByPreferred-Value is a function', function() {
    al_api['getRedundantTagByPreferred-Value'].should.be.a.Function()
  })

  it('#getRedundantTagByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantTagByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantDescriptionByType', function() {
  const arg = 'redundant'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantDescriptionByType is a function', function() {
    al_api['getRedundantDescriptionByType'].should.be.a.Function()
  })

  it('#getRedundantDescriptionByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantDescriptionByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantDescriptionByTag', function() {
  const arg = 'zh-yue'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantDescriptionByTag is a function', function() {
    al_api['getRedundantDescriptionByTag'].should.be.a.Function()
  })

  it('#getRedundantDescriptionByTag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantDescriptionByTag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantDescriptionByAdded', function() {
  const arg = '1999-12-18'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantDescriptionByAdded is a function', function() {
    al_api['getRedundantDescriptionByAdded'].should.be.a.Function()
  })

  it('#getRedundantDescriptionByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantDescriptionByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantDescriptionByDeprecated', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantDescriptionByDeprecated is a function', function() {
    al_api['getRedundantDescriptionByDeprecated'].should.be.a.Function()
  })

  it('#getRedundantDescriptionByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantDescriptionByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantDescriptionByPreferred-Value', function() {
  const arg = 'yue'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantDescriptionByPreferred-Value is a function', function() {
    al_api['getRedundantDescriptionByPreferred-Value'].should.be.a.Function()
  })

  it('#getRedundantDescriptionByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantDescriptionByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantAddedByType', function() {
  const arg = 'redundant'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantAddedByType is a function', function() {
    al_api['getRedundantAddedByType'].should.be.a.Function()
  })

  it('#getRedundantAddedByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantAddedByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantAddedByTag', function() {
  const arg = 'zh-yue'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantAddedByTag is a function', function() {
    al_api['getRedundantAddedByTag'].should.be.a.Function()
  })

  it('#getRedundantAddedByTag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantAddedByTag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantAddedByDescription', function() {
  const arg = 'Cantonese'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantAddedByDescription is a function', function() {
    al_api['getRedundantAddedByDescription'].should.be.a.Function()
  })

  it('#getRedundantAddedByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantAddedByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantAddedByDeprecated', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantAddedByDeprecated is a function', function() {
    al_api['getRedundantAddedByDeprecated'].should.be.a.Function()
  })

  it('#getRedundantAddedByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantAddedByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantAddedByPreferred-Value', function() {
  const arg = 'yue'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantAddedByPreferred-Value is a function', function() {
    al_api['getRedundantAddedByPreferred-Value'].should.be.a.Function()
  })

  it('#getRedundantAddedByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantAddedByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantDeprecatedByType', function() {
  const arg = 'redundant'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantDeprecatedByType is a function', function() {
    al_api['getRedundantDeprecatedByType'].should.be.a.Function()
  })

  it('#getRedundantDeprecatedByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantDeprecatedByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantDeprecatedByTag', function() {
  const arg = 'zh-yue'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantDeprecatedByTag is a function', function() {
    al_api['getRedundantDeprecatedByTag'].should.be.a.Function()
  })

  it('#getRedundantDeprecatedByTag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantDeprecatedByTag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantDeprecatedByDescription', function() {
  const arg = 'Cantonese'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantDeprecatedByDescription is a function', function() {
    al_api['getRedundantDeprecatedByDescription'].should.be.a.Function()
  })

  it('#getRedundantDeprecatedByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantDeprecatedByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantDeprecatedByAdded', function() {
  const arg = '1999-12-18'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantDeprecatedByAdded is a function', function() {
    al_api['getRedundantDeprecatedByAdded'].should.be.a.Function()
  })

  it('#getRedundantDeprecatedByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantDeprecatedByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantDeprecatedByPreferred-Value', function() {
  const arg = 'yue'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantDeprecatedByPreferred-Value is a function', function() {
    al_api['getRedundantDeprecatedByPreferred-Value'].should.be.a.Function()
  })

  it('#getRedundantDeprecatedByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantDeprecatedByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantPreferred-ValueByType', function() {
  const arg = 'redundant'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantPreferred-ValueByType is a function', function() {
    al_api['getRedundantPreferred-ValueByType'].should.be.a.Function()
  })

  it('#getRedundantPreferred-ValueByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantPreferred-ValueByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantPreferred-ValueByTag', function() {
  const arg = 'zh-yue'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantPreferred-ValueByTag is a function', function() {
    al_api['getRedundantPreferred-ValueByTag'].should.be.a.Function()
  })

  it('#getRedundantPreferred-ValueByTag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantPreferred-ValueByTag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantPreferred-ValueByDescription', function() {
  const arg = 'Cantonese'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantPreferred-ValueByDescription is a function', function() {
    al_api['getRedundantPreferred-ValueByDescription'].should.be.a.Function()
  })

  it('#getRedundantPreferred-ValueByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantPreferred-ValueByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantPreferred-ValueByAdded', function() {
  const arg = '1999-12-18'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantPreferred-ValueByAdded is a function', function() {
    al_api['getRedundantPreferred-ValueByAdded'].should.be.a.Function()
  })

  it('#getRedundantPreferred-ValueByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantPreferred-ValueByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRedundantPreferred-ValueByDeprecated', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getRedundantPreferred-ValueByDeprecated is a function', function() {
    al_api['getRedundantPreferred-ValueByDeprecated'].should.be.a.Function()
  })

  it('#getRedundantPreferred-ValueByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRedundantPreferred-ValueByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

