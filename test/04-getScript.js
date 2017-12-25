require('should')

const assert = require('assert')
    , al_api = require('../index.js')

describe('getScriptTypeBySubtag', function() {
  const arg = 'Zzzz'
      , json_arg = JSON.stringify(arg)

  it('#getScriptTypeBySubtag is a function', function() {
    al_api['getScriptTypeBySubtag'].should.be.a.Function()
  })

  it('#getScriptTypeBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptTypeBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getScriptTypeByDescription', function() {
  const arg = 'Code for uncoded script'
      , json_arg = JSON.stringify(arg)

  it('#getScriptTypeByDescription is a function', function() {
    al_api['getScriptTypeByDescription'].should.be.a.Function()
  })

  it('#getScriptTypeByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptTypeByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getScriptTypeByAdded', function() {
  const arg = '2005-10-16'
      , json_arg = JSON.stringify(arg)

  it('#getScriptTypeByAdded is a function', function() {
    al_api['getScriptTypeByAdded'].should.be.a.Function()
  })

  it('#getScriptTypeByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptTypeByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getScriptTypeByComments', function() {
  const arg = 'Not intended for use as a language subtag'
      , json_arg = JSON.stringify(arg)

  it('#getScriptTypeByComments is a function', function() {
    al_api['getScriptTypeByComments'].should.be.a.Function()
  })

  it('#getScriptTypeByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptTypeByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getScriptSubtagByType', function() {
  const arg = 'script'
      , json_arg = JSON.stringify(arg)

  it('#getScriptSubtagByType is a function', function() {
    al_api['getScriptSubtagByType'].should.be.a.Function()
  })

  it('#getScriptSubtagByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptSubtagByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getScriptSubtagByDescription', function() {
  const arg = 'Code for uncoded script'
      , json_arg = JSON.stringify(arg)

  it('#getScriptSubtagByDescription is a function', function() {
    al_api['getScriptSubtagByDescription'].should.be.a.Function()
  })

  it('#getScriptSubtagByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptSubtagByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getScriptSubtagByAdded', function() {
  const arg = '2005-10-16'
      , json_arg = JSON.stringify(arg)

  it('#getScriptSubtagByAdded is a function', function() {
    al_api['getScriptSubtagByAdded'].should.be.a.Function()
  })

  it('#getScriptSubtagByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptSubtagByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getScriptSubtagByComments', function() {
  const arg = 'Not intended for use as a language subtag'
      , json_arg = JSON.stringify(arg)

  it('#getScriptSubtagByComments is a function', function() {
    al_api['getScriptSubtagByComments'].should.be.a.Function()
  })

  it('#getScriptSubtagByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptSubtagByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getScriptDescriptionByType', function() {
  const arg = 'script'
      , json_arg = JSON.stringify(arg)

  it('#getScriptDescriptionByType is a function', function() {
    al_api['getScriptDescriptionByType'].should.be.a.Function()
  })

  it('#getScriptDescriptionByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptDescriptionByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getScriptDescriptionBySubtag', function() {
  const arg = 'Zzzz'
      , json_arg = JSON.stringify(arg)

  it('#getScriptDescriptionBySubtag is a function', function() {
    al_api['getScriptDescriptionBySubtag'].should.be.a.Function()
  })

  it('#getScriptDescriptionBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptDescriptionBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getScriptDescriptionByAdded', function() {
  const arg = '2005-10-16'
      , json_arg = JSON.stringify(arg)

  it('#getScriptDescriptionByAdded is a function', function() {
    al_api['getScriptDescriptionByAdded'].should.be.a.Function()
  })

  it('#getScriptDescriptionByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptDescriptionByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getScriptDescriptionByComments', function() {
  const arg = 'Not intended for use as a language subtag'
      , json_arg = JSON.stringify(arg)

  it('#getScriptDescriptionByComments is a function', function() {
    al_api['getScriptDescriptionByComments'].should.be.a.Function()
  })

  it('#getScriptDescriptionByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptDescriptionByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getScriptAddedByType', function() {
  const arg = 'script'
      , json_arg = JSON.stringify(arg)

  it('#getScriptAddedByType is a function', function() {
    al_api['getScriptAddedByType'].should.be.a.Function()
  })

  it('#getScriptAddedByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptAddedByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getScriptAddedBySubtag', function() {
  const arg = 'Zzzz'
      , json_arg = JSON.stringify(arg)

  it('#getScriptAddedBySubtag is a function', function() {
    al_api['getScriptAddedBySubtag'].should.be.a.Function()
  })

  it('#getScriptAddedBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptAddedBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getScriptAddedByDescription', function() {
  const arg = 'Code for uncoded script'
      , json_arg = JSON.stringify(arg)

  it('#getScriptAddedByDescription is a function', function() {
    al_api['getScriptAddedByDescription'].should.be.a.Function()
  })

  it('#getScriptAddedByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptAddedByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getScriptAddedByComments', function() {
  const arg = 'Not intended for use as a language subtag'
      , json_arg = JSON.stringify(arg)

  it('#getScriptAddedByComments is a function', function() {
    al_api['getScriptAddedByComments'].should.be.a.Function()
  })

  it('#getScriptAddedByComments(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptAddedByComments'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getScriptCommentsByType', function() {
  const arg = 'script'
      , json_arg = JSON.stringify(arg)

  it('#getScriptCommentsByType is a function', function() {
    al_api['getScriptCommentsByType'].should.be.a.Function()
  })

  it('#getScriptCommentsByType(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptCommentsByType'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getScriptCommentsBySubtag', function() {
  const arg = 'Zinh'
      , json_arg = JSON.stringify(arg)

  it('#getScriptCommentsBySubtag is a function', function() {
    al_api['getScriptCommentsBySubtag'].should.be.a.Function()
  })

  it('#getScriptCommentsBySubtag(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptCommentsBySubtag'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getScriptCommentsByDescription', function() {
  const arg = 'Code for inherited script'
      , json_arg = JSON.stringify(arg)

  it('#getScriptCommentsByDescription is a function', function() {
    al_api['getScriptCommentsByDescription'].should.be.a.Function()
  })

  it('#getScriptCommentsByDescription(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptCommentsByDescription'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

describe('getScriptCommentsByAdded', function() {
  const arg = '2009-04-03'
      , json_arg = JSON.stringify(arg)

  it('#getScriptCommentsByAdded is a function', function() {
    al_api['getScriptCommentsByAdded'].should.be.a.Function()
  })

  it('#getScriptCommentsByAdded(' + json_arg + ') should be an Array of Strings', function() {
    const ret = al_api['getScriptCommentsByAdded'](arg)

    ret.should.be.an.Array()

    ret.should.matchEach(function(ret) {
      ret.should.be.a.String()
    })
  })
})

