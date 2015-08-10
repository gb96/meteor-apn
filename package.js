/**
 * Copyright Greg Bowering <gerg.bowering@gmail.com> 2015 All Rights Reserved
 */
Package.describe({
  name: 'gb96:apn',
  summary: 'Apple Push Notification library node-apn wrapped for Meteor.',
  version: '1.7.4_10',
  git: 'https://github.com/gb96/meteor-apn.git'
});

Npm.depends({
  apn: '1.7.4'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.addFiles('server.js', 'server');

  // Export apn module api from node-apn:
  api.export('Connection', 'server');
  api.export('Device', 'server');
  api.export('Errors', 'server');
  api.export('Feedback', 'server');
  api.export('Notification', 'server');
});

// Unit tests:
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('gb96:apn', 'server');
  api.addFiles('server-tests.js', 'server');
});
