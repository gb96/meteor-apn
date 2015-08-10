/**
 * Copyright Greg Bowering <gerg.bowering@gmail.com> 2015 All Rights Reserved
 *
 * Unit tests for gb96:apn
 */

Tinytest.add('create new apn Connection', function (test) {
  var isOk = false;
  try {
    var options = {};
    var apnConnection = new apn.Connection(options);
    isOk = true;
  }
  catch (e) {
  }
  test.isTrue(isOk, "could not create new apn connection");
});

// TODO test some more basic functionality of node-apn


