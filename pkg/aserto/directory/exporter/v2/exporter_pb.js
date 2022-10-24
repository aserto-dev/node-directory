// source: aserto/directory/exporter/v2/exporter.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var aserto_directory_common_v2_common_pb = require('../../../../aserto/directory/common/v2/common_pb.js');
goog.object.extend(proto, aserto_directory_common_v2_common_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.aserto.directory.exporter.v2.ExportRequest', null, global);
goog.exportSymbol('proto.aserto.directory.exporter.v2.ExportResponse', null, global);
goog.exportSymbol('proto.aserto.directory.exporter.v2.ExportResponse.MsgCase', null, global);
goog.exportSymbol('proto.aserto.directory.exporter.v2.Option', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aserto.directory.exporter.v2.ExportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.exporter.v2.ExportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.exporter.v2.ExportRequest.displayName = 'proto.aserto.directory.exporter.v2.ExportRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aserto.directory.exporter.v2.ExportResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.aserto.directory.exporter.v2.ExportResponse.oneofGroups_);
};
goog.inherits(proto.aserto.directory.exporter.v2.ExportResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.exporter.v2.ExportResponse.displayName = 'proto.aserto.directory.exporter.v2.ExportResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aserto.directory.exporter.v2.ExportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.exporter.v2.ExportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.exporter.v2.ExportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.exporter.v2.ExportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    options: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startFrom: (f = msg.getStartFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aserto.directory.exporter.v2.ExportRequest}
 */
proto.aserto.directory.exporter.v2.ExportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.exporter.v2.ExportRequest;
  return proto.aserto.directory.exporter.v2.ExportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.exporter.v2.ExportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.exporter.v2.ExportRequest}
 */
proto.aserto.directory.exporter.v2.ExportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOptions(value);
      break;
    case 20:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartFrom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aserto.directory.exporter.v2.ExportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.exporter.v2.ExportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.exporter.v2.ExportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.exporter.v2.ExportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptions();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getStartFrom();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 options = 1;
 * @return {number}
 */
proto.aserto.directory.exporter.v2.ExportRequest.prototype.getOptions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.exporter.v2.ExportRequest} returns this
 */
proto.aserto.directory.exporter.v2.ExportRequest.prototype.setOptions = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp start_from = 20;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.aserto.directory.exporter.v2.ExportRequest.prototype.getStartFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 20));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.aserto.directory.exporter.v2.ExportRequest} returns this
*/
proto.aserto.directory.exporter.v2.ExportRequest.prototype.setStartFrom = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.exporter.v2.ExportRequest} returns this
 */
proto.aserto.directory.exporter.v2.ExportRequest.prototype.clearStartFrom = function() {
  return this.setStartFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.exporter.v2.ExportRequest.prototype.hasStartFrom = function() {
  return jspb.Message.getField(this, 20) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.aserto.directory.exporter.v2.ExportResponse.oneofGroups_ = [[2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.aserto.directory.exporter.v2.ExportResponse.MsgCase = {
  MSG_NOT_SET: 0,
  OBJECT: 2,
  OBJECT_TYPE: 3,
  RELATION: 4,
  RELATION_TYPE: 5,
  PERMISSION: 6
};

/**
 * @return {proto.aserto.directory.exporter.v2.ExportResponse.MsgCase}
 */
proto.aserto.directory.exporter.v2.ExportResponse.prototype.getMsgCase = function() {
  return /** @type {proto.aserto.directory.exporter.v2.ExportResponse.MsgCase} */(jspb.Message.computeOneofCase(this, proto.aserto.directory.exporter.v2.ExportResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aserto.directory.exporter.v2.ExportResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.exporter.v2.ExportResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.exporter.v2.ExportResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.exporter.v2.ExportResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    object: (f = msg.getObject()) && aserto_directory_common_v2_common_pb.Object.toObject(includeInstance, f),
    objectType: (f = msg.getObjectType()) && aserto_directory_common_v2_common_pb.ObjectType.toObject(includeInstance, f),
    relation: (f = msg.getRelation()) && aserto_directory_common_v2_common_pb.Relation.toObject(includeInstance, f),
    relationType: (f = msg.getRelationType()) && aserto_directory_common_v2_common_pb.RelationType.toObject(includeInstance, f),
    permission: (f = msg.getPermission()) && aserto_directory_common_v2_common_pb.Permission.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aserto.directory.exporter.v2.ExportResponse}
 */
proto.aserto.directory.exporter.v2.ExportResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.exporter.v2.ExportResponse;
  return proto.aserto.directory.exporter.v2.ExportResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.exporter.v2.ExportResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.exporter.v2.ExportResponse}
 */
proto.aserto.directory.exporter.v2.ExportResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new aserto_directory_common_v2_common_pb.Object;
      reader.readMessage(value,aserto_directory_common_v2_common_pb.Object.deserializeBinaryFromReader);
      msg.setObject(value);
      break;
    case 3:
      var value = new aserto_directory_common_v2_common_pb.ObjectType;
      reader.readMessage(value,aserto_directory_common_v2_common_pb.ObjectType.deserializeBinaryFromReader);
      msg.setObjectType(value);
      break;
    case 4:
      var value = new aserto_directory_common_v2_common_pb.Relation;
      reader.readMessage(value,aserto_directory_common_v2_common_pb.Relation.deserializeBinaryFromReader);
      msg.setRelation(value);
      break;
    case 5:
      var value = new aserto_directory_common_v2_common_pb.RelationType;
      reader.readMessage(value,aserto_directory_common_v2_common_pb.RelationType.deserializeBinaryFromReader);
      msg.setRelationType(value);
      break;
    case 6:
      var value = new aserto_directory_common_v2_common_pb.Permission;
      reader.readMessage(value,aserto_directory_common_v2_common_pb.Permission.deserializeBinaryFromReader);
      msg.setPermission(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aserto.directory.exporter.v2.ExportResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.exporter.v2.ExportResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.exporter.v2.ExportResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.exporter.v2.ExportResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      aserto_directory_common_v2_common_pb.Object.serializeBinaryToWriter
    );
  }
  f = message.getObjectType();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      aserto_directory_common_v2_common_pb.ObjectType.serializeBinaryToWriter
    );
  }
  f = message.getRelation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      aserto_directory_common_v2_common_pb.Relation.serializeBinaryToWriter
    );
  }
  f = message.getRelationType();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      aserto_directory_common_v2_common_pb.RelationType.serializeBinaryToWriter
    );
  }
  f = message.getPermission();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      aserto_directory_common_v2_common_pb.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * optional aserto.directory.common.v2.Object object = 2;
 * @return {?proto.aserto.directory.common.v2.Object}
 */
proto.aserto.directory.exporter.v2.ExportResponse.prototype.getObject = function() {
  return /** @type{?proto.aserto.directory.common.v2.Object} */ (
    jspb.Message.getWrapperField(this, aserto_directory_common_v2_common_pb.Object, 2));
};


/**
 * @param {?proto.aserto.directory.common.v2.Object|undefined} value
 * @return {!proto.aserto.directory.exporter.v2.ExportResponse} returns this
*/
proto.aserto.directory.exporter.v2.ExportResponse.prototype.setObject = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.aserto.directory.exporter.v2.ExportResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.exporter.v2.ExportResponse} returns this
 */
proto.aserto.directory.exporter.v2.ExportResponse.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.exporter.v2.ExportResponse.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional aserto.directory.common.v2.ObjectType object_type = 3;
 * @return {?proto.aserto.directory.common.v2.ObjectType}
 */
proto.aserto.directory.exporter.v2.ExportResponse.prototype.getObjectType = function() {
  return /** @type{?proto.aserto.directory.common.v2.ObjectType} */ (
    jspb.Message.getWrapperField(this, aserto_directory_common_v2_common_pb.ObjectType, 3));
};


/**
 * @param {?proto.aserto.directory.common.v2.ObjectType|undefined} value
 * @return {!proto.aserto.directory.exporter.v2.ExportResponse} returns this
*/
proto.aserto.directory.exporter.v2.ExportResponse.prototype.setObjectType = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.aserto.directory.exporter.v2.ExportResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.exporter.v2.ExportResponse} returns this
 */
proto.aserto.directory.exporter.v2.ExportResponse.prototype.clearObjectType = function() {
  return this.setObjectType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.exporter.v2.ExportResponse.prototype.hasObjectType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional aserto.directory.common.v2.Relation relation = 4;
 * @return {?proto.aserto.directory.common.v2.Relation}
 */
proto.aserto.directory.exporter.v2.ExportResponse.prototype.getRelation = function() {
  return /** @type{?proto.aserto.directory.common.v2.Relation} */ (
    jspb.Message.getWrapperField(this, aserto_directory_common_v2_common_pb.Relation, 4));
};


/**
 * @param {?proto.aserto.directory.common.v2.Relation|undefined} value
 * @return {!proto.aserto.directory.exporter.v2.ExportResponse} returns this
*/
proto.aserto.directory.exporter.v2.ExportResponse.prototype.setRelation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.aserto.directory.exporter.v2.ExportResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.exporter.v2.ExportResponse} returns this
 */
proto.aserto.directory.exporter.v2.ExportResponse.prototype.clearRelation = function() {
  return this.setRelation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.exporter.v2.ExportResponse.prototype.hasRelation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional aserto.directory.common.v2.RelationType relation_type = 5;
 * @return {?proto.aserto.directory.common.v2.RelationType}
 */
proto.aserto.directory.exporter.v2.ExportResponse.prototype.getRelationType = function() {
  return /** @type{?proto.aserto.directory.common.v2.RelationType} */ (
    jspb.Message.getWrapperField(this, aserto_directory_common_v2_common_pb.RelationType, 5));
};


/**
 * @param {?proto.aserto.directory.common.v2.RelationType|undefined} value
 * @return {!proto.aserto.directory.exporter.v2.ExportResponse} returns this
*/
proto.aserto.directory.exporter.v2.ExportResponse.prototype.setRelationType = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.aserto.directory.exporter.v2.ExportResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.exporter.v2.ExportResponse} returns this
 */
proto.aserto.directory.exporter.v2.ExportResponse.prototype.clearRelationType = function() {
  return this.setRelationType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.exporter.v2.ExportResponse.prototype.hasRelationType = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional aserto.directory.common.v2.Permission permission = 6;
 * @return {?proto.aserto.directory.common.v2.Permission}
 */
proto.aserto.directory.exporter.v2.ExportResponse.prototype.getPermission = function() {
  return /** @type{?proto.aserto.directory.common.v2.Permission} */ (
    jspb.Message.getWrapperField(this, aserto_directory_common_v2_common_pb.Permission, 6));
};


/**
 * @param {?proto.aserto.directory.common.v2.Permission|undefined} value
 * @return {!proto.aserto.directory.exporter.v2.ExportResponse} returns this
*/
proto.aserto.directory.exporter.v2.ExportResponse.prototype.setPermission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.aserto.directory.exporter.v2.ExportResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.exporter.v2.ExportResponse} returns this
 */
proto.aserto.directory.exporter.v2.ExportResponse.prototype.clearPermission = function() {
  return this.setPermission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.exporter.v2.ExportResponse.prototype.hasPermission = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * @enum {number}
 */
proto.aserto.directory.exporter.v2.Option = {
  OPTION_UNKNOWN: 0,
  OPTION_METADATA_OBJECT_TYPES: 1,
  OPTION_METADATA_RELATION_TYPES: 2,
  OPTION_METADATA_PERMISSIONS: 4,
  OPTION_METADATA: 7,
  OPTION_DATA_OBJECTS: 8,
  OPTION_DATA_RELATIONS: 16,
  OPTION_DATA_RELATIONS_WITH_KEYS: 32,
  OPTION_DATA: 24,
  OPTION_DATA_WITH_KEYS: 40,
  OPTION_ALL: 31,
  OPTION_ALL_WITH_KEYS: 47
};

goog.object.extend(exports, proto.aserto.directory.exporter.v2);
