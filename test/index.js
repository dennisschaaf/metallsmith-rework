
var assertDir = require('assert-dir-equal')
var reworkPlugin = require('rework-plugin-url')
var plugin = require('../')
var Metalsmith = require('metalsmith')
var path = require('path')

const PREFIX = 'http://example.com'

describe('metalsmith-rework', function() {
  it('should add some prefixes', function(done){
    Metalsmith('test/fixtures/basic')
      .use(plugin({
        configure: (rework, filePath) => { 
          var directory =  path.dirname(filePath)
          if(directory === ".") {
            directory = ""
          }
          return rework.use(reworkPlugin(function(url) {
            var isRootURL = /^(http:|https:)?\/\//
            var isAbsolute = /^\//

            if(url.match(isRootURL)) {
              return url
            } else if (url.match(isAbsolute)) {
              return PREFIX + url;
            } else {
              return PREFIX + "/" + path.join(directory, url);
            }
          }))
        }
      }))
      .build(function(err) {
        if (err) return done(err)
        assertDir('test/fixtures/basic/expected', 'test/fixtures/basic/build')
        return done(null)
      })
  })
})
