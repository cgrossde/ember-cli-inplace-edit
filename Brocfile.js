module.exports = function(broccoli) {
  return require('broccoli-dist-es6-module')(broccoli.makeTree('lib'), {
    global: 'emie',
    packageName: 'ember-inplace-edit',
    main: 'main',
    shim: {
      'ember': 'Ember'
    }
  });
};

