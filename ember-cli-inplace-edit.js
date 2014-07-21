'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLIInlineEdit(project) {
  this.project = project;
  this.name    = 'Ember Inplace Edit';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLIInlineEdit.prototype.treeFor = function treeFor(name) {
  var treePath =  path.join('node_modules', 'ember-cli-inplace-edit', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLIInlineEdit.prototype.included = function included(app) {
  this.app = app;
  
};

module.exports = EmberCLIInlineEdit;