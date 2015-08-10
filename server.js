/**
 * Copyright Greg Bowering <gerg.bowering@gmail.com> 2015 All Rights Reserved
 *
 * This simple Meteor library wrapper package was inspired by other similar
 * packages, including "AWS SDK smart package" by Peerlibrary:
 * https://github.com/peerlibrary/meteor-aws-sdk/tree/meteor0.9.0
 *
 * @author Greg Bowering <gerg.bowering@gmail.com>
 */
var npmApn = Npm.require('apn');


/*
 * XXX exports from apn below.
*/

/**
 * Create a new connection to the APN service.
 * @constructor
 * @param {Object} [options]
 * @config {Buffer|String} [cert="cert.pem"] The filename of the connection certificate to load from disk, or a Buffer/String containing the certificate data.
 * @config {Buffer|String} [key="key.pem"] The filename of the connection key to load from disk, or a Buffer/String containing the key data.
 * @config {Buffer[]|String[]} [ca] An array of trusted certificates. Each element should contain either a filename to load, or a Buffer/String to be used directly. If this is omitted several well known "root" CAs will be used. - You may need to use this as some environments don't include the CA used by Apple (entrust_2048).
 * @config {Buffer|String} [pfx] File path for private key, certificate and CA certs in PFX or PKCS12 format, or a Buffer/String containing the PFX data. If supplied will be used instead of certificate and key above.
 * @config {String} [passphrase] The passphrase for the connection key, if required
 * @config {Boolean} [production=(NODE_ENV=='production')] Specifies which environment to connect to: Production (if true) or Sandbox. (Defaults to false, unless NODE_ENV == "production")
 * @config {Number} [port=2195] Gateway port
 * @config {Boolean} [rejectUnauthorized=true] Reject Unauthorized property to be passed through to tls.connect()
 * @config {Function} [errorCallback] A callback which accepts 2 parameters (err, notification). Use `transmissionError` event instead.
 * @config {Number} [cacheLength=1000] Number of notifications to cache for error purposes (See doc/apn.markdown)
 * @config {Boolean} [autoAdjustCache=false] Whether the cache should grow in response to messages being lost after errors. (Will still emit a 'cacheTooSmall' event)
 * @config {Number} [maxConnections=1] The maximum number of connections to create for sending messages.
 * @config {Number} [minConnections=1] The minimum number of connections to create for sending messages.
 * @config {Number} [connectionTimeout=3600000] The duration the socket should stay alive with no activity in milliseconds. 0 = Disabled.
 * @config {Boolean} [buffersNotifications=true] Whether to buffer notifications and resend them after failure.
 * @config {Boolean} [fastMode=false] Whether to aggresively empty the notification buffer while connected.
 */
Connection = npmApn.Connection;


/**
 * Creates a Device.
 * @constructor
 * @param {String|Buffer} token Device token
 */
Device = npmApn.Device;


/**
 * Error codes used by Apple
 * @see <a href="https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CommunicatingWIthAPS/CommunicatingWIthAPS.html#//apple_ref/doc/uid/TP40008194-CH101-SW4">The Binary Interface and Notification Formats</a>
 */
Errors = npmApn.Errors;


/**
 * Create a new connection to the APN Feedback.
 * @constructor
 * @param {Object} [options]
 * @config {Buffer|String} [cert="cert.pem"] The filename of the connection certificate to load from disk, or a Buffer/String containing the certificate data.
 * @config {Buffer|String} [key="key.pem"] The filename of the connection key to load from disk, or a Buffer/String containing the key data.
 * @config {Buffer[]|String[]} [ca] An array of trusted certificates. Each element should contain either a filename to load, or a Buffer/String to be used directly. If this is omitted several well known "root" CAs will be used. - You may need to use this as some environments don't include the CA used by Apple (entrust_2048).
 * @config {Buffer|String} [pfx] File path for private key, certificate and CA certs in PFX or PKCS12 format, or a Buffer/String containing the PFX data. If supplied will be used instead of certificate and key above.
 * @config {String} [passphrase] The passphrase for the connection key, if required
 * @config {String} [address="feedback.push.apple.com"] The feedback server to connect to.
 * @config {Number} [port=2196] Feedback server port
 * @config {Function} [feedback] Deprecated ** A callback which accepts 2 parameters (timestamp, {@link Device}) or an array of (timestamp, {@link Device}) object tuples, depending on the value of batchFeedback option. See: {@link <a href="https://developer.apple.com/library/ios/#documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CommunicatingWIthAPS/CommunicatingWIthAPS.html#//apple_ref/doc/uid/TP40008194-CH101-SW3">Communicating with APS</a>.
 * @config {Boolean} [batchFeedback=true] If true, the feedback callback should only be called after all tokens are received, with an array of timestamp and device token tuples.
 * @config {Number} [batchSize=0] The maximum number of tokens to pass when emitting the event. After `batchSize` tokens are received the `feedback` event will be emitted.
 * @config {Function} [errorCallback] Deprecated ** Callback which will capture connection errors
 * @config {Number} [interval=3600] Interval to automatically connect to the Feedback service.
 */
Feedback = npmApn.Feedback;


/**
 * Create a notification
 * @constructor
 * @param {Object} [payload]
 */
Notification = npmApn.Notification;

/**
 * Socket API
 */
if (npmApn.apnSocket) {
	Meteor._debug("Using 0.12 socket API");
	apnSocket = npmApn.apnSocket;
}
else {
	Meteor._debug("Using legacy socket API");
	apnSocketLegacy = npmApn.apnSocketLegacy;
}


/**
 * Util
 */
extend = npmApn.extend;
setImmediate = npmApn.setImmediate;

