require('should')

const assert = require('assert')
    , al_api = require('../index.js')

describe('getLanguageTypeBySubtag', function() {
  const arg = 'zzj'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageTypeBySubtag is a function', function() {
    al_api['getLanguageTypeBySubtag'].should.be.a.Function()
  })

  it('#getLanguageTypeBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageTypeBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageTypeByDescription', function() {
  const arg = 'Zuojiang Zhuang'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageTypeByDescription is a function', function() {
    al_api['getLanguageTypeByDescription'].should.be.a.Function()
  })

  it('#getLanguageTypeByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageTypeByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageTypeByAdded', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageTypeByAdded is a function', function() {
    al_api['getLanguageTypeByAdded'].should.be.a.Function()
  })

  it('#getLanguageTypeByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageTypeByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageTypeBySuppress-Script', function() {
  const arg = 'Blis'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageTypeBySuppress-Script is a function', function() {
    al_api['getLanguageTypeBySuppress-Script'].should.be.a.Function()
  })

  it('#getLanguageTypeBySuppress-Script(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageTypeBySuppress-Script'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageTypeByScope', function() {
  const arg = 'macrolanguage'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageTypeByScope is a function', function() {
    al_api['getLanguageTypeByScope'].should.be.a.Function()
  })

  it('#getLanguageTypeByScope(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageTypeByScope'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageTypeByMacrolanguage', function() {
  const arg = 'za'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageTypeByMacrolanguage is a function', function() {
    al_api['getLanguageTypeByMacrolanguage'].should.be.a.Function()
  })

  it('#getLanguageTypeByMacrolanguage(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageTypeByMacrolanguage'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageTypeByDeprecated', function() {
  const arg = '2014-02-28'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageTypeByDeprecated is a function', function() {
    al_api['getLanguageTypeByDeprecated'].should.be.a.Function()
  })

  it('#getLanguageTypeByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageTypeByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageTypeByPreferred-Value', function() {
  const arg = 'yug'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageTypeByPreferred-Value is a function', function() {
    al_api['getLanguageTypeByPreferred-Value'].should.be.a.Function()
  })

  it('#getLanguageTypeByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageTypeByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageTypeByComments', function() {
  const arg = 'see yrm, yyr'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageTypeByComments is a function', function() {
    al_api['getLanguageTypeByComments'].should.be.a.Function()
  })

  it('#getLanguageTypeByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageTypeByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageSubtagByType', function() {
  const arg = 'language'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageSubtagByType is a function', function() {
    al_api['getLanguageSubtagByType'].should.be.a.Function()
  })

  it('#getLanguageSubtagByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageSubtagByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageSubtagByDescription', function() {
  const arg = 'Zuojiang Zhuang'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageSubtagByDescription is a function', function() {
    al_api['getLanguageSubtagByDescription'].should.be.a.Function()
  })

  it('#getLanguageSubtagByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageSubtagByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageSubtagByAdded', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageSubtagByAdded is a function', function() {
    al_api['getLanguageSubtagByAdded'].should.be.a.Function()
  })

  it('#getLanguageSubtagByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageSubtagByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageSubtagBySuppress-Script', function() {
  const arg = 'Blis'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageSubtagBySuppress-Script is a function', function() {
    al_api['getLanguageSubtagBySuppress-Script'].should.be.a.Function()
  })

  it('#getLanguageSubtagBySuppress-Script(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageSubtagBySuppress-Script'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageSubtagByScope', function() {
  const arg = 'macrolanguage'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageSubtagByScope is a function', function() {
    al_api['getLanguageSubtagByScope'].should.be.a.Function()
  })

  it('#getLanguageSubtagByScope(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageSubtagByScope'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageSubtagByMacrolanguage', function() {
  const arg = 'za'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageSubtagByMacrolanguage is a function', function() {
    al_api['getLanguageSubtagByMacrolanguage'].should.be.a.Function()
  })

  it('#getLanguageSubtagByMacrolanguage(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageSubtagByMacrolanguage'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageSubtagByDeprecated', function() {
  const arg = '2014-02-28'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageSubtagByDeprecated is a function', function() {
    al_api['getLanguageSubtagByDeprecated'].should.be.a.Function()
  })

  it('#getLanguageSubtagByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageSubtagByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageSubtagByPreferred-Value', function() {
  const arg = 'yug'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageSubtagByPreferred-Value is a function', function() {
    al_api['getLanguageSubtagByPreferred-Value'].should.be.a.Function()
  })

  it('#getLanguageSubtagByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageSubtagByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageSubtagByComments', function() {
  const arg = 'see yrm, yyr'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageSubtagByComments is a function', function() {
    al_api['getLanguageSubtagByComments'].should.be.a.Function()
  })

  it('#getLanguageSubtagByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageSubtagByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageDescriptionByType', function() {
  const arg = 'language'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageDescriptionByType is a function', function() {
    al_api['getLanguageDescriptionByType'].should.be.a.Function()
  })

  it('#getLanguageDescriptionByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageDescriptionByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageDescriptionBySubtag', function() {
  const arg = 'zzj'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageDescriptionBySubtag is a function', function() {
    al_api['getLanguageDescriptionBySubtag'].should.be.a.Function()
  })

  it('#getLanguageDescriptionBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageDescriptionBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageDescriptionByAdded', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageDescriptionByAdded is a function', function() {
    al_api['getLanguageDescriptionByAdded'].should.be.a.Function()
  })

  it('#getLanguageDescriptionByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageDescriptionByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageDescriptionBySuppress-Script', function() {
  const arg = 'Blis'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageDescriptionBySuppress-Script is a function', function() {
    al_api['getLanguageDescriptionBySuppress-Script'].should.be.a.Function()
  })

  it('#getLanguageDescriptionBySuppress-Script(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageDescriptionBySuppress-Script'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageDescriptionByScope', function() {
  const arg = 'macrolanguage'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageDescriptionByScope is a function', function() {
    al_api['getLanguageDescriptionByScope'].should.be.a.Function()
  })

  it('#getLanguageDescriptionByScope(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageDescriptionByScope'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageDescriptionByMacrolanguage', function() {
  const arg = 'za'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageDescriptionByMacrolanguage is a function', function() {
    al_api['getLanguageDescriptionByMacrolanguage'].should.be.a.Function()
  })

  it('#getLanguageDescriptionByMacrolanguage(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageDescriptionByMacrolanguage'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageDescriptionByDeprecated', function() {
  const arg = '2014-02-28'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageDescriptionByDeprecated is a function', function() {
    al_api['getLanguageDescriptionByDeprecated'].should.be.a.Function()
  })

  it('#getLanguageDescriptionByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageDescriptionByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageDescriptionByPreferred-Value', function() {
  const arg = 'yug'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageDescriptionByPreferred-Value is a function', function() {
    al_api['getLanguageDescriptionByPreferred-Value'].should.be.a.Function()
  })

  it('#getLanguageDescriptionByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageDescriptionByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageDescriptionByComments', function() {
  const arg = 'see yrm, yyr'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageDescriptionByComments is a function', function() {
    al_api['getLanguageDescriptionByComments'].should.be.a.Function()
  })

  it('#getLanguageDescriptionByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageDescriptionByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageAddedByType', function() {
  const arg = 'language'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageAddedByType is a function', function() {
    al_api['getLanguageAddedByType'].should.be.a.Function()
  })

  it('#getLanguageAddedByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageAddedByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageAddedBySubtag', function() {
  const arg = 'zzj'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageAddedBySubtag is a function', function() {
    al_api['getLanguageAddedBySubtag'].should.be.a.Function()
  })

  it('#getLanguageAddedBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageAddedBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageAddedByDescription', function() {
  const arg = 'Zuojiang Zhuang'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageAddedByDescription is a function', function() {
    al_api['getLanguageAddedByDescription'].should.be.a.Function()
  })

  it('#getLanguageAddedByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageAddedByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageAddedBySuppress-Script', function() {
  const arg = 'Blis'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageAddedBySuppress-Script is a function', function() {
    al_api['getLanguageAddedBySuppress-Script'].should.be.a.Function()
  })

  it('#getLanguageAddedBySuppress-Script(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageAddedBySuppress-Script'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageAddedByScope', function() {
  const arg = 'macrolanguage'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageAddedByScope is a function', function() {
    al_api['getLanguageAddedByScope'].should.be.a.Function()
  })

  it('#getLanguageAddedByScope(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageAddedByScope'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageAddedByMacrolanguage', function() {
  const arg = 'za'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageAddedByMacrolanguage is a function', function() {
    al_api['getLanguageAddedByMacrolanguage'].should.be.a.Function()
  })

  it('#getLanguageAddedByMacrolanguage(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageAddedByMacrolanguage'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageAddedByDeprecated', function() {
  const arg = '2014-02-28'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageAddedByDeprecated is a function', function() {
    al_api['getLanguageAddedByDeprecated'].should.be.a.Function()
  })

  it('#getLanguageAddedByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageAddedByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageAddedByPreferred-Value', function() {
  const arg = 'yug'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageAddedByPreferred-Value is a function', function() {
    al_api['getLanguageAddedByPreferred-Value'].should.be.a.Function()
  })

  it('#getLanguageAddedByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageAddedByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageAddedByComments', function() {
  const arg = 'see yrm, yyr'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageAddedByComments is a function', function() {
    al_api['getLanguageAddedByComments'].should.be.a.Function()
  })

  it('#getLanguageAddedByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageAddedByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageSuppress-ScriptByType', function() {
  const arg = 'language'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageSuppress-ScriptByType is a function', function() {
    al_api['getLanguageSuppress-ScriptByType'].should.be.a.Function()
  })

  it('#getLanguageSuppress-ScriptByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageSuppress-ScriptByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageSuppress-ScriptBySubtag', function() {
  const arg = 'zbl'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageSuppress-ScriptBySubtag is a function', function() {
    al_api['getLanguageSuppress-ScriptBySubtag'].should.be.a.Function()
  })

  it('#getLanguageSuppress-ScriptBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageSuppress-ScriptBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageSuppress-ScriptByDescription', function() {
  const arg = 'Blissymbolics'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageSuppress-ScriptByDescription is a function', function() {
    al_api['getLanguageSuppress-ScriptByDescription'].should.be.a.Function()
  })

  it('#getLanguageSuppress-ScriptByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageSuppress-ScriptByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageSuppress-ScriptByAdded', function() {
  const arg = '2007-08-21'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageSuppress-ScriptByAdded is a function', function() {
    al_api['getLanguageSuppress-ScriptByAdded'].should.be.a.Function()
  })

  it('#getLanguageSuppress-ScriptByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageSuppress-ScriptByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageSuppress-ScriptByScope', function() {
  const arg = 'macrolanguage'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageSuppress-ScriptByScope is a function', function() {
    al_api['getLanguageSuppress-ScriptByScope'].should.be.a.Function()
  })

  it('#getLanguageSuppress-ScriptByScope(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageSuppress-ScriptByScope'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageSuppress-ScriptByMacrolanguage', function() {
  const arg = 'no'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageSuppress-ScriptByMacrolanguage is a function', function() {
    al_api['getLanguageSuppress-ScriptByMacrolanguage'].should.be.a.Function()
  })

  it('#getLanguageSuppress-ScriptByMacrolanguage(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageSuppress-ScriptByMacrolanguage'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageSuppress-ScriptByDeprecated', function() {
  const arg = '2008-11-22'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageSuppress-ScriptByDeprecated is a function', function() {
    al_api['getLanguageSuppress-ScriptByDeprecated'].should.be.a.Function()
  })

  it('#getLanguageSuppress-ScriptByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageSuppress-ScriptByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageSuppress-ScriptByPreferred-Value', function() {
  const arg = 'ro'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageSuppress-ScriptByPreferred-Value is a function', function() {
    al_api['getLanguageSuppress-ScriptByPreferred-Value'].should.be.a.Function()
  })

  it('#getLanguageSuppress-ScriptByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageSuppress-ScriptByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageScopeByType', function() {
  const arg = 'language'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageScopeByType is a function', function() {
    al_api['getLanguageScopeByType'].should.be.a.Function()
  })

  it('#getLanguageScopeByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageScopeByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageScopeBySubtag', function() {
  const arg = 'zza'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageScopeBySubtag is a function', function() {
    al_api['getLanguageScopeBySubtag'].should.be.a.Function()
  })

  it('#getLanguageScopeBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageScopeBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageScopeByDescription', function() {
  const arg = 'Zazaki'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageScopeByDescription is a function', function() {
    al_api['getLanguageScopeByDescription'].should.be.a.Function()
  })

  it('#getLanguageScopeByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageScopeByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageScopeByAdded', function() {
  const arg = '2006-08-24'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageScopeByAdded is a function', function() {
    al_api['getLanguageScopeByAdded'].should.be.a.Function()
  })

  it('#getLanguageScopeByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageScopeByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageScopeBySuppress-Script', function() {
  const arg = 'Latn'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageScopeBySuppress-Script is a function', function() {
    al_api['getLanguageScopeBySuppress-Script'].should.be.a.Function()
  })

  it('#getLanguageScopeBySuppress-Script(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageScopeBySuppress-Script'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageScopeByComments', function() {
  const arg = 'sr, hr, bs are preferred for most modern uses'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageScopeByComments is a function', function() {
    al_api['getLanguageScopeByComments'].should.be.a.Function()
  })

  it('#getLanguageScopeByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageScopeByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageMacrolanguageByType', function() {
  const arg = 'language'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageMacrolanguageByType is a function', function() {
    al_api['getLanguageMacrolanguageByType'].should.be.a.Function()
  })

  it('#getLanguageMacrolanguageByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageMacrolanguageByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageMacrolanguageBySubtag', function() {
  const arg = 'zzj'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageMacrolanguageBySubtag is a function', function() {
    al_api['getLanguageMacrolanguageBySubtag'].should.be.a.Function()
  })

  it('#getLanguageMacrolanguageBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageMacrolanguageBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageMacrolanguageByDescription', function() {
  const arg = 'Zuojiang Zhuang'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageMacrolanguageByDescription is a function', function() {
    al_api['getLanguageMacrolanguageByDescription'].should.be.a.Function()
  })

  it('#getLanguageMacrolanguageByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageMacrolanguageByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageMacrolanguageByAdded', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageMacrolanguageByAdded is a function', function() {
    al_api['getLanguageMacrolanguageByAdded'].should.be.a.Function()
  })

  it('#getLanguageMacrolanguageByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageMacrolanguageByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageMacrolanguageBySuppress-Script', function() {
  const arg = 'Latn'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageMacrolanguageBySuppress-Script is a function', function() {
    al_api['getLanguageMacrolanguageBySuppress-Script'].should.be.a.Function()
  })

  it('#getLanguageMacrolanguageBySuppress-Script(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageMacrolanguageBySuppress-Script'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageMacrolanguageByDeprecated', function() {
  const arg = '2015-02-12'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageMacrolanguageByDeprecated is a function', function() {
    al_api['getLanguageMacrolanguageByDeprecated'].should.be.a.Function()
  })

  it('#getLanguageMacrolanguageByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageMacrolanguageByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageMacrolanguageByPreferred-Value', function() {
  const arg = 'phr'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageMacrolanguageByPreferred-Value is a function', function() {
    al_api['getLanguageMacrolanguageByPreferred-Value'].should.be.a.Function()
  })

  it('#getLanguageMacrolanguageByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageMacrolanguageByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageMacrolanguageByComments', function() {
  const arg = 'see bzc, tkg'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageMacrolanguageByComments is a function', function() {
    al_api['getLanguageMacrolanguageByComments'].should.be.a.Function()
  })

  it('#getLanguageMacrolanguageByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageMacrolanguageByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageDeprecatedByType', function() {
  const arg = 'language'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageDeprecatedByType is a function', function() {
    al_api['getLanguageDeprecatedByType'].should.be.a.Function()
  })

  it('#getLanguageDeprecatedByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageDeprecatedByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageDeprecatedBySubtag', function() {
  const arg = 'yuu'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageDeprecatedBySubtag is a function', function() {
    al_api['getLanguageDeprecatedBySubtag'].should.be.a.Function()
  })

  it('#getLanguageDeprecatedBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageDeprecatedBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageDeprecatedByDescription', function() {
  const arg = 'Yugh'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageDeprecatedByDescription is a function', function() {
    al_api['getLanguageDeprecatedByDescription'].should.be.a.Function()
  })

  it('#getLanguageDeprecatedByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageDeprecatedByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageDeprecatedByAdded', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageDeprecatedByAdded is a function', function() {
    al_api['getLanguageDeprecatedByAdded'].should.be.a.Function()
  })

  it('#getLanguageDeprecatedByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageDeprecatedByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageDeprecatedBySuppress-Script', function() {
  const arg = 'Latn'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageDeprecatedBySuppress-Script is a function', function() {
    al_api['getLanguageDeprecatedBySuppress-Script'].should.be.a.Function()
  })

  it('#getLanguageDeprecatedBySuppress-Script(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageDeprecatedBySuppress-Script'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageDeprecatedByMacrolanguage', function() {
  const arg = 'lah'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageDeprecatedByMacrolanguage is a function', function() {
    al_api['getLanguageDeprecatedByMacrolanguage'].should.be.a.Function()
  })

  it('#getLanguageDeprecatedByMacrolanguage(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageDeprecatedByMacrolanguage'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageDeprecatedByPreferred-Value', function() {
  const arg = 'yug'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageDeprecatedByPreferred-Value is a function', function() {
    al_api['getLanguageDeprecatedByPreferred-Value'].should.be.a.Function()
  })

  it('#getLanguageDeprecatedByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageDeprecatedByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageDeprecatedByComments', function() {
  const arg = 'see yrm, yyr'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageDeprecatedByComments is a function', function() {
    al_api['getLanguageDeprecatedByComments'].should.be.a.Function()
  })

  it('#getLanguageDeprecatedByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageDeprecatedByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguagePreferred-ValueByType', function() {
  const arg = 'language'
      , json_arg = JSON.stringify(arg)

  it('#getLanguagePreferred-ValueByType is a function', function() {
    al_api['getLanguagePreferred-ValueByType'].should.be.a.Function()
  })

  it('#getLanguagePreferred-ValueByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguagePreferred-ValueByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguagePreferred-ValueBySubtag', function() {
  const arg = 'yuu'
      , json_arg = JSON.stringify(arg)

  it('#getLanguagePreferred-ValueBySubtag is a function', function() {
    al_api['getLanguagePreferred-ValueBySubtag'].should.be.a.Function()
  })

  it('#getLanguagePreferred-ValueBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguagePreferred-ValueBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguagePreferred-ValueByDescription', function() {
  const arg = 'Yugh'
      , json_arg = JSON.stringify(arg)

  it('#getLanguagePreferred-ValueByDescription is a function', function() {
    al_api['getLanguagePreferred-ValueByDescription'].should.be.a.Function()
  })

  it('#getLanguagePreferred-ValueByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguagePreferred-ValueByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguagePreferred-ValueByAdded', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getLanguagePreferred-ValueByAdded is a function', function() {
    al_api['getLanguagePreferred-ValueByAdded'].should.be.a.Function()
  })

  it('#getLanguagePreferred-ValueByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguagePreferred-ValueByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguagePreferred-ValueBySuppress-Script', function() {
  const arg = 'Latn'
      , json_arg = JSON.stringify(arg)

  it('#getLanguagePreferred-ValueBySuppress-Script is a function', function() {
    al_api['getLanguagePreferred-ValueBySuppress-Script'].should.be.a.Function()
  })

  it('#getLanguagePreferred-ValueBySuppress-Script(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguagePreferred-ValueBySuppress-Script'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguagePreferred-ValueByMacrolanguage', function() {
  const arg = 'lah'
      , json_arg = JSON.stringify(arg)

  it('#getLanguagePreferred-ValueByMacrolanguage is a function', function() {
    al_api['getLanguagePreferred-ValueByMacrolanguage'].should.be.a.Function()
  })

  it('#getLanguagePreferred-ValueByMacrolanguage(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguagePreferred-ValueByMacrolanguage'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguagePreferred-ValueByDeprecated', function() {
  const arg = '2014-02-28'
      , json_arg = JSON.stringify(arg)

  it('#getLanguagePreferred-ValueByDeprecated is a function', function() {
    al_api['getLanguagePreferred-ValueByDeprecated'].should.be.a.Function()
  })

  it('#getLanguagePreferred-ValueByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguagePreferred-ValueByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguagePreferred-ValueByComments', function() {
  const arg = 'published by error in Table 1 of ISO 639:1988'
      , json_arg = JSON.stringify(arg)

  it('#getLanguagePreferred-ValueByComments is a function', function() {
    al_api['getLanguagePreferred-ValueByComments'].should.be.a.Function()
  })

  it('#getLanguagePreferred-ValueByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguagePreferred-ValueByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageCommentsByType', function() {
  const arg = 'language'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageCommentsByType is a function', function() {
    al_api['getLanguageCommentsByType'].should.be.a.Function()
  })

  it('#getLanguageCommentsByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageCommentsByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageCommentsBySubtag', function() {
  const arg = 'yiy'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageCommentsBySubtag is a function', function() {
    al_api['getLanguageCommentsBySubtag'].should.be.a.Function()
  })

  it('#getLanguageCommentsBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageCommentsBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageCommentsByDescription', function() {
  const arg = 'Yir Yoront'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageCommentsByDescription is a function', function() {
    al_api['getLanguageCommentsByDescription'].should.be.a.Function()
  })

  it('#getLanguageCommentsByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageCommentsByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageCommentsByAdded', function() {
  const arg = '2009-07-29'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageCommentsByAdded is a function', function() {
    al_api['getLanguageCommentsByAdded'].should.be.a.Function()
  })

  it('#getLanguageCommentsByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageCommentsByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageCommentsByScope', function() {
  const arg = 'macrolanguage'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageCommentsByScope is a function', function() {
    al_api['getLanguageCommentsByScope'].should.be.a.Function()
  })

  it('#getLanguageCommentsByScope(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageCommentsByScope'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageCommentsByMacrolanguage', function() {
  const arg = 'mg'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageCommentsByMacrolanguage is a function', function() {
    al_api['getLanguageCommentsByMacrolanguage'].should.be.a.Function()
  })

  it('#getLanguageCommentsByMacrolanguage(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageCommentsByMacrolanguage'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageCommentsByDeprecated', function() {
  const arg = '2013-09-10'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageCommentsByDeprecated is a function', function() {
    al_api['getLanguageCommentsByDeprecated'].should.be.a.Function()
  })

  it('#getLanguageCommentsByDeprecated(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageCommentsByDeprecated'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getLanguageCommentsByPreferred-Value', function() {
  const arg = 'jv'
      , json_arg = JSON.stringify(arg)

  it('#getLanguageCommentsByPreferred-Value is a function', function() {
    al_api['getLanguageCommentsByPreferred-Value'].should.be.a.Function()
  })

  it('#getLanguageCommentsByPreferred-Value(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getLanguageCommentsByPreferred-Value'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

