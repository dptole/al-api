require('should')

const assert = require('assert')
    , al_api = require('../index.js')

describe('getGrandfatheredTypeByTag', function() {
  const arg = 'zh-xiang'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredTypeByTag is a function', function() {
    al_api['getGrandfatheredTypeByTag'].should.be.a.Function()
  })

  it('#getGrandfatheredTypeByTag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredTypeByTag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredTypeByDescription', function() {
  const arg = 'Xiang or Hunanese'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredTypeByDescription is a function', function() {
    al_api['getGrandfatheredTypeByDescription'].should.be.a.Function()
  })

  it('#getGrandfatheredTypeByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredTypeByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredTypeByAdded', function() {
  const arg = '1999-12-18'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredTypeByAdded is a function', function() {
    al_api['getGrandfatheredTypeByAdded'].should.be.a.Function()
  })

  it('#getGrandfatheredTypeByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredTypeByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredTypeByDeprecated', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredTypeByDeprecated is a function', function() {
    al_api['getGrandfatheredTypeByDeprecated'].should.be.a.Function()
  })

  it('#getGrandfatheredTypeByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredTypeByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredTypeByPreferred-Value', function() {
  const arg = 'hsn'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredTypeByPreferred-Value is a function', function() {
    al_api['getGrandfatheredTypeByPreferred-Value'].should.be.a.Function()
  })

  it('#getGrandfatheredTypeByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredTypeByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredTypeByComments', function() {
  const arg = 'see cdo, cpx, czo, mnp, nan'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredTypeByComments is a function', function() {
    al_api['getGrandfatheredTypeByComments'].should.be.a.Function()
  })

  it('#getGrandfatheredTypeByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredTypeByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredTagByType', function() {
  const arg = 'grandfathered'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredTagByType is a function', function() {
    al_api['getGrandfatheredTagByType'].should.be.a.Function()
  })

  it('#getGrandfatheredTagByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredTagByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredTagByDescription', function() {
  const arg = 'Xiang or Hunanese'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredTagByDescription is a function', function() {
    al_api['getGrandfatheredTagByDescription'].should.be.a.Function()
  })

  it('#getGrandfatheredTagByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredTagByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredTagByAdded', function() {
  const arg = '1999-12-18'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredTagByAdded is a function', function() {
    al_api['getGrandfatheredTagByAdded'].should.be.a.Function()
  })

  it('#getGrandfatheredTagByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredTagByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredTagByDeprecated', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredTagByDeprecated is a function', function() {
    al_api['getGrandfatheredTagByDeprecated'].should.be.a.Function()
  })

  it('#getGrandfatheredTagByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredTagByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredTagByPreferred-Value', function() {
  const arg = 'hsn'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredTagByPreferred-Value is a function', function() {
    al_api['getGrandfatheredTagByPreferred-Value'].should.be.a.Function()
  })

  it('#getGrandfatheredTagByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredTagByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredTagByComments', function() {
  const arg = 'see cdo, cpx, czo, mnp, nan'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredTagByComments is a function', function() {
    al_api['getGrandfatheredTagByComments'].should.be.a.Function()
  })

  it('#getGrandfatheredTagByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredTagByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredDescriptionByType', function() {
  const arg = 'grandfathered'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredDescriptionByType is a function', function() {
    al_api['getGrandfatheredDescriptionByType'].should.be.a.Function()
  })

  it('#getGrandfatheredDescriptionByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredDescriptionByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredDescriptionByTag', function() {
  const arg = 'zh-xiang'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredDescriptionByTag is a function', function() {
    al_api['getGrandfatheredDescriptionByTag'].should.be.a.Function()
  })

  it('#getGrandfatheredDescriptionByTag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredDescriptionByTag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredDescriptionByAdded', function() {
  const arg = '1999-12-18'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredDescriptionByAdded is a function', function() {
    al_api['getGrandfatheredDescriptionByAdded'].should.be.a.Function()
  })

  it('#getGrandfatheredDescriptionByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredDescriptionByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredDescriptionByDeprecated', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredDescriptionByDeprecated is a function', function() {
    al_api['getGrandfatheredDescriptionByDeprecated'].should.be.a.Function()
  })

  it('#getGrandfatheredDescriptionByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredDescriptionByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredDescriptionByPreferred-Value', function() {
  const arg = 'hsn'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredDescriptionByPreferred-Value is a function', function() {
    al_api['getGrandfatheredDescriptionByPreferred-Value'].should.be.a.Function()
  })

  it('#getGrandfatheredDescriptionByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredDescriptionByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredDescriptionByComments', function() {
  const arg = 'see cdo, cpx, czo, mnp, nan'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredDescriptionByComments is a function', function() {
    al_api['getGrandfatheredDescriptionByComments'].should.be.a.Function()
  })

  it('#getGrandfatheredDescriptionByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredDescriptionByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredAddedByType', function() {
  const arg = 'grandfathered'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredAddedByType is a function', function() {
    al_api['getGrandfatheredAddedByType'].should.be.a.Function()
  })

  it('#getGrandfatheredAddedByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredAddedByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredAddedByTag', function() {
  const arg = 'zh-xiang'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredAddedByTag is a function', function() {
    al_api['getGrandfatheredAddedByTag'].should.be.a.Function()
  })

  it('#getGrandfatheredAddedByTag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredAddedByTag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredAddedByDescription', function() {
  const arg = 'Xiang or Hunanese'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredAddedByDescription is a function', function() {
    al_api['getGrandfatheredAddedByDescription'].should.be.a.Function()
  })

  it('#getGrandfatheredAddedByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredAddedByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredAddedByDeprecated', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredAddedByDeprecated is a function', function() {
    al_api['getGrandfatheredAddedByDeprecated'].should.be.a.Function()
  })

  it('#getGrandfatheredAddedByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredAddedByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredAddedByPreferred-Value', function() {
  const arg = 'hsn'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredAddedByPreferred-Value is a function', function() {
    al_api['getGrandfatheredAddedByPreferred-Value'].should.be.a.Function()
  })

  it('#getGrandfatheredAddedByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredAddedByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredAddedByComments', function() {
  const arg = 'see cdo, cpx, czo, mnp, nan'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredAddedByComments is a function', function() {
    al_api['getGrandfatheredAddedByComments'].should.be.a.Function()
  })

  it('#getGrandfatheredAddedByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredAddedByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredDeprecatedByType', function() {
  const arg = 'grandfathered'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredDeprecatedByType is a function', function() {
    al_api['getGrandfatheredDeprecatedByType'].should.be.a.Function()
  })

  it('#getGrandfatheredDeprecatedByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredDeprecatedByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredDeprecatedByTag', function() {
  const arg = 'zh-xiang'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredDeprecatedByTag is a function', function() {
    al_api['getGrandfatheredDeprecatedByTag'].should.be.a.Function()
  })

  it('#getGrandfatheredDeprecatedByTag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredDeprecatedByTag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredDeprecatedByDescription', function() {
  const arg = 'Xiang or Hunanese'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredDeprecatedByDescription is a function', function() {
    al_api['getGrandfatheredDeprecatedByDescription'].should.be.a.Function()
  })

  it('#getGrandfatheredDeprecatedByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredDeprecatedByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredDeprecatedByAdded', function() {
  const arg = '1999-12-18'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredDeprecatedByAdded is a function', function() {
    al_api['getGrandfatheredDeprecatedByAdded'].should.be.a.Function()
  })

  it('#getGrandfatheredDeprecatedByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredDeprecatedByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredDeprecatedByPreferred-Value', function() {
  const arg = 'hsn'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredDeprecatedByPreferred-Value is a function', function() {
    al_api['getGrandfatheredDeprecatedByPreferred-Value'].should.be.a.Function()
  })

  it('#getGrandfatheredDeprecatedByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredDeprecatedByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredDeprecatedByComments', function() {
  const arg = 'see cdo, cpx, czo, mnp, nan'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredDeprecatedByComments is a function', function() {
    al_api['getGrandfatheredDeprecatedByComments'].should.be.a.Function()
  })

  it('#getGrandfatheredDeprecatedByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredDeprecatedByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredPreferred-ValueByType', function() {
  const arg = 'grandfathered'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredPreferred-ValueByType is a function', function() {
    al_api['getGrandfatheredPreferred-ValueByType'].should.be.a.Function()
  })

  it('#getGrandfatheredPreferred-ValueByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredPreferred-ValueByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredPreferred-ValueByTag', function() {
  const arg = 'zh-xiang'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredPreferred-ValueByTag is a function', function() {
    al_api['getGrandfatheredPreferred-ValueByTag'].should.be.a.Function()
  })

  it('#getGrandfatheredPreferred-ValueByTag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredPreferred-ValueByTag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredPreferred-ValueByDescription', function() {
  const arg = 'Xiang or Hunanese'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredPreferred-ValueByDescription is a function', function() {
    al_api['getGrandfatheredPreferred-ValueByDescription'].should.be.a.Function()
  })

  it('#getGrandfatheredPreferred-ValueByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredPreferred-ValueByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredPreferred-ValueByAdded', function() {
  const arg = '1999-12-18'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredPreferred-ValueByAdded is a function', function() {
    al_api['getGrandfatheredPreferred-ValueByAdded'].should.be.a.Function()
  })

  it('#getGrandfatheredPreferred-ValueByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredPreferred-ValueByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredPreferred-ValueByDeprecated', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredPreferred-ValueByDeprecated is a function', function() {
    al_api['getGrandfatheredPreferred-ValueByDeprecated'].should.be.a.Function()
  })

  it('#getGrandfatheredPreferred-ValueByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredPreferred-ValueByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredCommentsByType', function() {
  const arg = 'grandfathered'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredCommentsByType is a function', function() {
    al_api['getGrandfatheredCommentsByType'].should.be.a.Function()
  })

  it('#getGrandfatheredCommentsByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredCommentsByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredCommentsByTag', function() {
  const arg = 'zh-min'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredCommentsByTag is a function', function() {
    al_api['getGrandfatheredCommentsByTag'].should.be.a.Function()
  })

  it('#getGrandfatheredCommentsByTag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredCommentsByTag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredCommentsByDescription', function() {
  const arg = 'Min, Fuzhou, Hokkien, Amoy, or Taiwanese'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredCommentsByDescription is a function', function() {
    al_api['getGrandfatheredCommentsByDescription'].should.be.a.Function()
  })

  it('#getGrandfatheredCommentsByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredCommentsByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredCommentsByAdded', function() {
  const arg = '1999-12-18'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredCommentsByAdded is a function', function() {
    al_api['getGrandfatheredCommentsByAdded'].should.be.a.Function()
  })

  it('#getGrandfatheredCommentsByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredCommentsByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getGrandfatheredCommentsByDeprecated', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getGrandfatheredCommentsByDeprecated is a function', function() {
    al_api['getGrandfatheredCommentsByDeprecated'].should.be.a.Function()
  })

  it('#getGrandfatheredCommentsByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getGrandfatheredCommentsByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

