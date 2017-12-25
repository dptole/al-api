require('should')

const assert = require('assert')
    , al_api = require('../index.js')

describe('getRegionTypeBySubtag', function() {
  const arg = '419'
      , json_arg = JSON.stringify(arg)

  it('#getRegionTypeBySubtag is a function', function() {
    al_api['getRegionTypeBySubtag'].should.be.a.Function()
  })

  it('#getRegionTypeBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionTypeBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionTypeByDescription', function() {
  const arg = 'Latin America and the Caribbean'
      , json_arg = JSON.stringify(arg)

  it('#getRegionTypeByDescription is a function', function() {
    al_api['getRegionTypeByDescription'].should.be.a.Function()
  })

  it('#getRegionTypeByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionTypeByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionTypeByAdded', function() {
  const arg = '2005-10-16'
      , json_arg = JSON.stringify(arg)

  it('#getRegionTypeByAdded is a function', function() {
    al_api['getRegionTypeByAdded'].should.be.a.Function()
  })

  it('#getRegionTypeByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionTypeByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionTypeByDeprecated', function() {
  const arg = '1997-07-14'
      , json_arg = JSON.stringify(arg)

  it('#getRegionTypeByDeprecated is a function', function() {
    al_api['getRegionTypeByDeprecated'].should.be.a.Function()
  })

  it('#getRegionTypeByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionTypeByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionTypeByComments', function() {
  const arg = 'Does not include Caribbean (029) or Central America (013); see also 003'
      , json_arg = JSON.stringify(arg)

  it('#getRegionTypeByComments is a function', function() {
    al_api['getRegionTypeByComments'].should.be.a.Function()
  })

  it('#getRegionTypeByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionTypeByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionTypeByPreferred-Value', function() {
  const arg = 'CD'
      , json_arg = JSON.stringify(arg)

  it('#getRegionTypeByPreferred-Value is a function', function() {
    al_api['getRegionTypeByPreferred-Value'].should.be.a.Function()
  })

  it('#getRegionTypeByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionTypeByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionSubtagByType', function() {
  const arg = 'region'
      , json_arg = JSON.stringify(arg)

  it('#getRegionSubtagByType is a function', function() {
    al_api['getRegionSubtagByType'].should.be.a.Function()
  })

  it('#getRegionSubtagByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionSubtagByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionSubtagByDescription', function() {
  const arg = 'Latin America and the Caribbean'
      , json_arg = JSON.stringify(arg)

  it('#getRegionSubtagByDescription is a function', function() {
    al_api['getRegionSubtagByDescription'].should.be.a.Function()
  })

  it('#getRegionSubtagByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionSubtagByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionSubtagByAdded', function() {
  const arg = '2005-10-16'
      , json_arg = JSON.stringify(arg)

  it('#getRegionSubtagByAdded is a function', function() {
    al_api['getRegionSubtagByAdded'].should.be.a.Function()
  })

  it('#getRegionSubtagByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionSubtagByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionSubtagByDeprecated', function() {
  const arg = '1997-07-14'
      , json_arg = JSON.stringify(arg)

  it('#getRegionSubtagByDeprecated is a function', function() {
    al_api['getRegionSubtagByDeprecated'].should.be.a.Function()
  })

  it('#getRegionSubtagByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionSubtagByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionSubtagByComments', function() {
  const arg = 'Does not include Caribbean (029) or Central America (013); see also 003'
      , json_arg = JSON.stringify(arg)

  it('#getRegionSubtagByComments is a function', function() {
    al_api['getRegionSubtagByComments'].should.be.a.Function()
  })

  it('#getRegionSubtagByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionSubtagByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionSubtagByPreferred-Value', function() {
  const arg = 'CD'
      , json_arg = JSON.stringify(arg)

  it('#getRegionSubtagByPreferred-Value is a function', function() {
    al_api['getRegionSubtagByPreferred-Value'].should.be.a.Function()
  })

  it('#getRegionSubtagByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionSubtagByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionDescriptionByType', function() {
  const arg = 'region'
      , json_arg = JSON.stringify(arg)

  it('#getRegionDescriptionByType is a function', function() {
    al_api['getRegionDescriptionByType'].should.be.a.Function()
  })

  it('#getRegionDescriptionByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionDescriptionByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionDescriptionBySubtag', function() {
  const arg = '419'
      , json_arg = JSON.stringify(arg)

  it('#getRegionDescriptionBySubtag is a function', function() {
    al_api['getRegionDescriptionBySubtag'].should.be.a.Function()
  })

  it('#getRegionDescriptionBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionDescriptionBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionDescriptionByAdded', function() {
  const arg = '2005-10-16'
      , json_arg = JSON.stringify(arg)

  it('#getRegionDescriptionByAdded is a function', function() {
    al_api['getRegionDescriptionByAdded'].should.be.a.Function()
  })

  it('#getRegionDescriptionByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionDescriptionByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionDescriptionByDeprecated', function() {
  const arg = '1997-07-14'
      , json_arg = JSON.stringify(arg)

  it('#getRegionDescriptionByDeprecated is a function', function() {
    al_api['getRegionDescriptionByDeprecated'].should.be.a.Function()
  })

  it('#getRegionDescriptionByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionDescriptionByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionDescriptionByComments', function() {
  const arg = 'Does not include Caribbean (029) or Central America (013); see also 003'
      , json_arg = JSON.stringify(arg)

  it('#getRegionDescriptionByComments is a function', function() {
    al_api['getRegionDescriptionByComments'].should.be.a.Function()
  })

  it('#getRegionDescriptionByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionDescriptionByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionDescriptionByPreferred-Value', function() {
  const arg = 'CD'
      , json_arg = JSON.stringify(arg)

  it('#getRegionDescriptionByPreferred-Value is a function', function() {
    al_api['getRegionDescriptionByPreferred-Value'].should.be.a.Function()
  })

  it('#getRegionDescriptionByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionDescriptionByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionAddedByType', function() {
  const arg = 'region'
      , json_arg = JSON.stringify(arg)

  it('#getRegionAddedByType is a function', function() {
    al_api['getRegionAddedByType'].should.be.a.Function()
  })

  it('#getRegionAddedByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionAddedByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionAddedBySubtag', function() {
  const arg = '419'
      , json_arg = JSON.stringify(arg)

  it('#getRegionAddedBySubtag is a function', function() {
    al_api['getRegionAddedBySubtag'].should.be.a.Function()
  })

  it('#getRegionAddedBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionAddedBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionAddedByDescription', function() {
  const arg = 'Latin America and the Caribbean'
      , json_arg = JSON.stringify(arg)

  it('#getRegionAddedByDescription is a function', function() {
    al_api['getRegionAddedByDescription'].should.be.a.Function()
  })

  it('#getRegionAddedByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionAddedByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionAddedByDeprecated', function() {
  const arg = '1997-07-14'
      , json_arg = JSON.stringify(arg)

  it('#getRegionAddedByDeprecated is a function', function() {
    al_api['getRegionAddedByDeprecated'].should.be.a.Function()
  })

  it('#getRegionAddedByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionAddedByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionAddedByComments', function() {
  const arg = 'Does not include Caribbean (029) or Central America (013); see also 003'
      , json_arg = JSON.stringify(arg)

  it('#getRegionAddedByComments is a function', function() {
    al_api['getRegionAddedByComments'].should.be.a.Function()
  })

  it('#getRegionAddedByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionAddedByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionAddedByPreferred-Value', function() {
  const arg = 'CD'
      , json_arg = JSON.stringify(arg)

  it('#getRegionAddedByPreferred-Value is a function', function() {
    al_api['getRegionAddedByPreferred-Value'].should.be.a.Function()
  })

  it('#getRegionAddedByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionAddedByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionDeprecatedByType', function() {
  const arg = 'region'
      , json_arg = JSON.stringify(arg)

  it('#getRegionDeprecatedByType is a function', function() {
    al_api['getRegionDeprecatedByType'].should.be.a.Function()
  })

  it('#getRegionDeprecatedByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionDeprecatedByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionDeprecatedBySubtag', function() {
  const arg = 'ZR'
      , json_arg = JSON.stringify(arg)

  it('#getRegionDeprecatedBySubtag is a function', function() {
    al_api['getRegionDeprecatedBySubtag'].should.be.a.Function()
  })

  it('#getRegionDeprecatedBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionDeprecatedBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionDeprecatedByDescription', function() {
  const arg = 'Zaire'
      , json_arg = JSON.stringify(arg)

  it('#getRegionDeprecatedByDescription is a function', function() {
    al_api['getRegionDeprecatedByDescription'].should.be.a.Function()
  })

  it('#getRegionDeprecatedByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionDeprecatedByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionDeprecatedByAdded', function() {
  const arg = '2005-10-16'
      , json_arg = JSON.stringify(arg)

  it('#getRegionDeprecatedByAdded is a function', function() {
    al_api['getRegionDeprecatedByAdded'].should.be.a.Function()
  })

  it('#getRegionDeprecatedByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionDeprecatedByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionDeprecatedByComments', function() {
  const arg = 'see BA, HR, ME, MK, RS, or SI'
      , json_arg = JSON.stringify(arg)

  it('#getRegionDeprecatedByComments is a function', function() {
    al_api['getRegionDeprecatedByComments'].should.be.a.Function()
  })

  it('#getRegionDeprecatedByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionDeprecatedByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionDeprecatedByPreferred-Value', function() {
  const arg = 'CD'
      , json_arg = JSON.stringify(arg)

  it('#getRegionDeprecatedByPreferred-Value is a function', function() {
    al_api['getRegionDeprecatedByPreferred-Value'].should.be.a.Function()
  })

  it('#getRegionDeprecatedByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionDeprecatedByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionCommentsByType', function() {
  const arg = 'region'
      , json_arg = JSON.stringify(arg)

  it('#getRegionCommentsByType is a function', function() {
    al_api['getRegionCommentsByType'].should.be.a.Function()
  })

  it('#getRegionCommentsByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionCommentsByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionCommentsBySubtag', function() {
  const arg = '021'
      , json_arg = JSON.stringify(arg)

  it('#getRegionCommentsBySubtag is a function', function() {
    al_api['getRegionCommentsBySubtag'].should.be.a.Function()
  })

  it('#getRegionCommentsBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionCommentsBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionCommentsByDescription', function() {
  const arg = 'Northern America'
      , json_arg = JSON.stringify(arg)

  it('#getRegionCommentsByDescription is a function', function() {
    al_api['getRegionCommentsByDescription'].should.be.a.Function()
  })

  it('#getRegionCommentsByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionCommentsByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionCommentsByAdded', function() {
  const arg = '2005-10-16'
      , json_arg = JSON.stringify(arg)

  it('#getRegionCommentsByAdded is a function', function() {
    al_api['getRegionCommentsByAdded'].should.be.a.Function()
  })

  it('#getRegionCommentsByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionCommentsByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionCommentsByDeprecated', function() {
  const arg = '2003-07-23'
      , json_arg = JSON.stringify(arg)

  it('#getRegionCommentsByDeprecated is a function', function() {
    al_api['getRegionCommentsByDeprecated'].should.be.a.Function()
  })

  it('#getRegionCommentsByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionCommentsByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionPreferred-ValueByType', function() {
  const arg = 'region'
      , json_arg = JSON.stringify(arg)

  it('#getRegionPreferred-ValueByType is a function', function() {
    al_api['getRegionPreferred-ValueByType'].should.be.a.Function()
  })

  it('#getRegionPreferred-ValueByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionPreferred-ValueByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionPreferred-ValueBySubtag', function() {
  const arg = 'ZR'
      , json_arg = JSON.stringify(arg)

  it('#getRegionPreferred-ValueBySubtag is a function', function() {
    al_api['getRegionPreferred-ValueBySubtag'].should.be.a.Function()
  })

  it('#getRegionPreferred-ValueBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionPreferred-ValueBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionPreferred-ValueByDescription', function() {
  const arg = 'Zaire'
      , json_arg = JSON.stringify(arg)

  it('#getRegionPreferred-ValueByDescription is a function', function() {
    al_api['getRegionPreferred-ValueByDescription'].should.be.a.Function()
  })

  it('#getRegionPreferred-ValueByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionPreferred-ValueByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionPreferred-ValueByAdded', function() {
  const arg = '2005-10-16'
      , json_arg = JSON.stringify(arg)

  it('#getRegionPreferred-ValueByAdded is a function', function() {
    al_api['getRegionPreferred-ValueByAdded'].should.be.a.Function()
  })

  it('#getRegionPreferred-ValueByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionPreferred-ValueByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getRegionPreferred-ValueByDeprecated', function() {
  const arg = '1997-07-14'
      , json_arg = JSON.stringify(arg)

  it('#getRegionPreferred-ValueByDeprecated is a function', function() {
    al_api['getRegionPreferred-ValueByDeprecated'].should.be.a.Function()
  })

  it('#getRegionPreferred-ValueByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getRegionPreferred-ValueByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

