var swig = require('swig');
var _ = require('lodash');

var plugin = function() {
  'use strict';

  var init = function(options) {
    swig.init(options);
  };

  var compile = function(src, options, callback) {
     var tmpl;
    try {
      tmpl = swig.compile(src, options);
    } catch(ex) {
      callback(ex, null);
    }
    callback(null, tmpl);
  };

  var render = function(tmpl, options, callback) {
    var content;
    try {
      if(typeof tmpl === 'string') {
        tmpl = swig.compile(tmpl, options);
      }
      content = tmpl(options);
    } catch (ex) {
      callback(ex, null);
    }
    callback(null, content);
  };

  var registerFunctions = function(helperFunctions) {
    // if(helperFunctions) {
    //   _.forOwn(helperFunctions, function(fn, key) {
    //     handlebars.registerHelper(key, fn);
    //   });
    // }
  };

  var registerPartial = function(filename, content) {
    // var tmpl;
    // try {
    //   if(typeof content === 'string') {
    //     tmpl = handlebars.compile(content);
    //   } else {
    //     tmpl = content;
    //   }
    //   handlebars.registerPartial(filename, tmpl);
    // } catch (ex) {}
  };

  return {
    init: init,
    compile: compile,
    render: render,
    registerFunctions: registerFunctions,
    registerPartial: registerPartial,
    swig: swig
  };

};

module.exports = exports = plugin();
