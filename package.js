/**
 * Copyright Greg Bowering <gerg.bowering@gmail.com> 2015 All Rights Reserved
 */
Package.describe({
  name: 'gb96:apn',
  summary: 'Apple Push Notification library node-apn wrapped for Meteor.',
  version: '1.7.4',
  git: 'https://github.com/gb96/meteor-apn.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.1.0');

  api.addFiles('gb96:apn.js', 'server');

  // Export apn module from node-apn:
  api.export('apn', 'server');
});

// Unit tests:
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('gb96:apn', 'server');
  api.addFiles('gb96:apn-tests.js', 'server');
});
