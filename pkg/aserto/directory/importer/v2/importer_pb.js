// source: aserto/directory/importer/v2/importer.proto
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
goog.exportSymbol('proto.aserto.directory.importer.v2.ImportCounter', null, global);
goog.exportSymbol('proto.aserto.directory.importer.v2.ImportRequest', null, global);
goog.exportSymbol('proto.aserto.directory.importer.v2.ImportRequest.MsgCase', null, global);
goog.exportSymbol('proto.aserto.directory.importer.v2.ImportResponse', null, global);
goog.exportSymbol('proto.aserto.directory.importer.v2.Opcode', null, global);
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
proto.aserto.directory.importer.v2.ImportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.aserto.directory.importer.v2.ImportRequest.oneofGroups_);
};
goog.inherits(proto.aserto.directory.importer.v2.ImportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.importer.v2.ImportRequest.displayName = 'proto.aserto.directory.importer.v2.ImportRequest';
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
proto.aserto.directory.importer.v2.ImportResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.importer.v2.ImportResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.importer.v2.ImportResponse.displayName = 'proto.aserto.directory.importer.v2.ImportResponse';
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
proto.aserto.directory.importer.v2.ImportCounter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.importer.v2.ImportCounter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.importer.v2.ImportCounter.displayName = 'proto.aserto.directory.importer.v2.ImportCounter';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.aserto.directory.importer.v2.ImportRequest.oneofGroups_ = [[2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.aserto.directory.importer.v2.ImportRequest.MsgCase = {
  MSG_NOT_SET: 0,
  OBJECT_TYPE: 2,
  PERMISSION: 3,
  RELATION_TYPE: 4,
  OBJECT: 5,
  RELATION: 6
};

/**
 * @return {proto.aserto.directory.importer.v2.ImportRequest.MsgCase}
 */
proto.aserto.directory.importer.v2.ImportRequest.prototype.getMsgCase = function() {
  return /** @type {proto.aserto.directory.importer.v2.ImportRequest.MsgCase} */(jspb.Message.computeOneofCase(this, proto.aserto.directory.importer.v2.ImportRequest.oneofGroups_[0]));
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
proto.aserto.directory.importer.v2.ImportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.importer.v2.ImportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.importer.v2.ImportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.importer.v2.ImportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opCode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    objectType: (f = msg.getObjectType()) && aserto_directory_common_v2_common_pb.ObjectType.toObject(includeInstance, f),
    permission: (f = msg.getPermission()) && aserto_directory_common_v2_common_pb.Permission.toObject(includeInstance, f),
    relationType: (f = msg.getRelationType()) && aserto_directory_common_v2_common_pb.RelationType.toObject(includeInstance, f),
    object: (f = msg.getObject()) && aserto_directory_common_v2_common_pb.Object.toObject(includeInstance, f),
    relation: (f = msg.getRelation()) && aserto_directory_common_v2_common_pb.Relation.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.importer.v2.ImportRequest}
 */
proto.aserto.directory.importer.v2.ImportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.importer.v2.ImportRequest;
  return proto.aserto.directory.importer.v2.ImportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.importer.v2.ImportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.importer.v2.ImportRequest}
 */
proto.aserto.directory.importer.v2.ImportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aserto.directory.importer.v2.Opcode} */ (reader.readEnum());
      msg.setOpCode(value);
      break;
    case 2:
      var value = new aserto_directory_common_v2_common_pb.ObjectType;
      reader.readMessage(value,aserto_directory_common_v2_common_pb.ObjectType.deserializeBinaryFromReader);
      msg.setObjectType(value);
      break;
    case 3:
      var value = new aserto_directory_common_v2_common_pb.Permission;
      reader.readMessage(value,aserto_directory_common_v2_common_pb.Permission.deserializeBinaryFromReader);
      msg.setPermission(value);
      break;
    case 4:
      var value = new aserto_directory_common_v2_common_pb.RelationType;
      reader.readMessage(value,aserto_directory_common_v2_common_pb.RelationType.deserializeBinaryFromReader);
      msg.setRelationType(value);
      break;
    case 5:
      var value = new aserto_directory_common_v2_common_pb.Object;
      reader.readMessage(value,aserto_directory_common_v2_common_pb.Object.deserializeBinaryFromReader);
      msg.setObject(value);
      break;
    case 6:
      var value = new aserto_directory_common_v2_common_pb.Relation;
      reader.readMessage(value,aserto_directory_common_v2_common_pb.Relation.deserializeBinaryFromReader);
      msg.setRelation(value);
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
proto.aserto.directory.importer.v2.ImportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.importer.v2.ImportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.importer.v2.ImportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.importer.v2.ImportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObjectType();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      aserto_directory_common_v2_common_pb.ObjectType.serializeBinaryToWriter
    );
  }
  f = message.getPermission();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      aserto_directory_common_v2_common_pb.Permission.serializeBinaryToWriter
    );
  }
  f = message.getRelationType();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      aserto_directory_common_v2_common_pb.RelationType.serializeBinaryToWriter
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      aserto_directory_common_v2_common_pb.Object.serializeBinaryToWriter
    );
  }
  f = message.getRelation();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      aserto_directory_common_v2_common_pb.Relation.serializeBinaryToWriter
    );
  }
};


/**
 * optional Opcode op_code = 1;
 * @return {!proto.aserto.directory.importer.v2.Opcode}
 */
proto.aserto.directory.importer.v2.ImportRequest.prototype.getOpCode = function() {
  return /** @type {!proto.aserto.directory.importer.v2.Opcode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aserto.directory.importer.v2.Opcode} value
 * @return {!proto.aserto.directory.importer.v2.ImportRequest} returns this
 */
proto.aserto.directory.importer.v2.ImportRequest.prototype.setOpCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional aserto.directory.common.v2.ObjectType object_type = 2;
 * @return {?proto.aserto.directory.common.v2.ObjectType}
 */
proto.aserto.directory.importer.v2.ImportRequest.prototype.getObjectType = function() {
  return /** @type{?proto.aserto.directory.common.v2.ObjectType} */ (
    jspb.Message.getWrapperField(this, aserto_directory_common_v2_common_pb.ObjectType, 2));
};


/**
 * @param {?proto.aserto.directory.common.v2.ObjectType|undefined} value
 * @return {!proto.aserto.directory.importer.v2.ImportRequest} returns this
*/
proto.aserto.directory.importer.v2.ImportRequest.prototype.setObjectType = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.aserto.directory.importer.v2.ImportRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.importer.v2.ImportRequest} returns this
 */
proto.aserto.directory.importer.v2.ImportRequest.prototype.clearObjectType = function() {
  return this.setObjectType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.importer.v2.ImportRequest.prototype.hasObjectType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional aserto.directory.common.v2.Permission permission = 3;
 * @return {?proto.aserto.directory.common.v2.Permission}
 */
proto.aserto.directory.importer.v2.ImportRequest.prototype.getPermission = function() {
  return /** @type{?proto.aserto.directory.common.v2.Permission} */ (
    jspb.Message.getWrapperField(this, aserto_directory_common_v2_common_pb.Permission, 3));
};


/**
 * @param {?proto.aserto.directory.common.v2.Permission|undefined} value
 * @return {!proto.aserto.directory.importer.v2.ImportRequest} returns this
*/
proto.aserto.directory.importer.v2.ImportRequest.prototype.setPermission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.aserto.directory.importer.v2.ImportRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.importer.v2.ImportRequest} returns this
 */
proto.aserto.directory.importer.v2.ImportRequest.prototype.clearPermission = function() {
  return this.setPermission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.importer.v2.ImportRequest.prototype.hasPermission = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional aserto.directory.common.v2.RelationType relation_type = 4;
 * @return {?proto.aserto.directory.common.v2.RelationType}
 */
proto.aserto.directory.importer.v2.ImportRequest.prototype.getRelationType = function() {
  return /** @type{?proto.aserto.directory.common.v2.RelationType} */ (
    jspb.Message.getWrapperField(this, aserto_directory_common_v2_common_pb.RelationType, 4));
};


/**
 * @param {?proto.aserto.directory.common.v2.RelationType|undefined} value
 * @return {!proto.aserto.directory.importer.v2.ImportRequest} returns this
*/
proto.aserto.directory.importer.v2.ImportRequest.prototype.setRelationType = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.aserto.directory.importer.v2.ImportRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.importer.v2.ImportRequest} returns this
 */
proto.aserto.directory.importer.v2.ImportRequest.prototype.clearRelationType = function() {
  return this.setRelationType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.importer.v2.ImportRequest.prototype.hasRelationType = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional aserto.directory.common.v2.Object object = 5;
 * @return {?proto.aserto.directory.common.v2.Object}
 */
proto.aserto.directory.importer.v2.ImportRequest.prototype.getObject = function() {
  return /** @type{?proto.aserto.directory.common.v2.Object} */ (
    jspb.Message.getWrapperField(this, aserto_directory_common_v2_common_pb.Object, 5));
};


/**
 * @param {?proto.aserto.directory.common.v2.Object|undefined} value
 * @return {!proto.aserto.directory.importer.v2.ImportRequest} returns this
*/
proto.aserto.directory.importer.v2.ImportRequest.prototype.setObject = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.aserto.directory.importer.v2.ImportRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.importer.v2.ImportRequest} returns this
 */
proto.aserto.directory.importer.v2.ImportRequest.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.importer.v2.ImportRequest.prototype.hasObject = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional aserto.directory.common.v2.Relation relation = 6;
 * @return {?proto.aserto.directory.common.v2.Relation}
 */
proto.aserto.directory.importer.v2.ImportRequest.prototype.getRelation = function() {
  return /** @type{?proto.aserto.directory.common.v2.Relation} */ (
    jspb.Message.getWrapperField(this, aserto_directory_common_v2_common_pb.Relation, 6));
};


/**
 * @param {?proto.aserto.directory.common.v2.Relation|undefined} value
 * @return {!proto.aserto.directory.importer.v2.ImportRequest} returns this
*/
proto.aserto.directory.importer.v2.ImportRequest.prototype.setRelation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.aserto.directory.importer.v2.ImportRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.importer.v2.ImportRequest} returns this
 */
proto.aserto.directory.importer.v2.ImportRequest.prototype.clearRelation = function() {
  return this.setRelation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.importer.v2.ImportRequest.prototype.hasRelation = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.aserto.directory.importer.v2.ImportResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.importer.v2.ImportResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.importer.v2.ImportResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.importer.v2.ImportResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectType: (f = msg.getObjectType()) && proto.aserto.directory.importer.v2.ImportCounter.toObject(includeInstance, f),
    permission: (f = msg.getPermission()) && proto.aserto.directory.importer.v2.ImportCounter.toObject(includeInstance, f),
    relationType: (f = msg.getRelationType()) && proto.aserto.directory.importer.v2.ImportCounter.toObject(includeInstance, f),
    object: (f = msg.getObject()) && proto.aserto.directory.importer.v2.ImportCounter.toObject(includeInstance, f),
    relation: (f = msg.getRelation()) && proto.aserto.directory.importer.v2.ImportCounter.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.importer.v2.ImportResponse}
 */
proto.aserto.directory.importer.v2.ImportResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.importer.v2.ImportResponse;
  return proto.aserto.directory.importer.v2.ImportResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.importer.v2.ImportResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.importer.v2.ImportResponse}
 */
proto.aserto.directory.importer.v2.ImportResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.aserto.directory.importer.v2.ImportCounter;
      reader.readMessage(value,proto.aserto.directory.importer.v2.ImportCounter.deserializeBinaryFromReader);
      msg.setObjectType(value);
      break;
    case 2:
      var value = new proto.aserto.directory.importer.v2.ImportCounter;
      reader.readMessage(value,proto.aserto.directory.importer.v2.ImportCounter.deserializeBinaryFromReader);
      msg.setPermission(value);
      break;
    case 3:
      var value = new proto.aserto.directory.importer.v2.ImportCounter;
      reader.readMessage(value,proto.aserto.directory.importer.v2.ImportCounter.deserializeBinaryFromReader);
      msg.setRelationType(value);
      break;
    case 4:
      var value = new proto.aserto.directory.importer.v2.ImportCounter;
      reader.readMessage(value,proto.aserto.directory.importer.v2.ImportCounter.deserializeBinaryFromReader);
      msg.setObject(value);
      break;
    case 5:
      var value = new proto.aserto.directory.importer.v2.ImportCounter;
      reader.readMessage(value,proto.aserto.directory.importer.v2.ImportCounter.deserializeBinaryFromReader);
      msg.setRelation(value);
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
proto.aserto.directory.importer.v2.ImportResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.importer.v2.ImportResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.importer.v2.ImportResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.importer.v2.ImportResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectType();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.aserto.directory.importer.v2.ImportCounter.serializeBinaryToWriter
    );
  }
  f = message.getPermission();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.aserto.directory.importer.v2.ImportCounter.serializeBinaryToWriter
    );
  }
  f = message.getRelationType();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.aserto.directory.importer.v2.ImportCounter.serializeBinaryToWriter
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.aserto.directory.importer.v2.ImportCounter.serializeBinaryToWriter
    );
  }
  f = message.getRelation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.aserto.directory.importer.v2.ImportCounter.serializeBinaryToWriter
    );
  }
};


/**
 * optional ImportCounter object_type = 1;
 * @return {?proto.aserto.directory.importer.v2.ImportCounter}
 */
proto.aserto.directory.importer.v2.ImportResponse.prototype.getObjectType = function() {
  return /** @type{?proto.aserto.directory.importer.v2.ImportCounter} */ (
    jspb.Message.getWrapperField(this, proto.aserto.directory.importer.v2.ImportCounter, 1));
};


/**
 * @param {?proto.aserto.directory.importer.v2.ImportCounter|undefined} value
 * @return {!proto.aserto.directory.importer.v2.ImportResponse} returns this
*/
proto.aserto.directory.importer.v2.ImportResponse.prototype.setObjectType = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.importer.v2.ImportResponse} returns this
 */
proto.aserto.directory.importer.v2.ImportResponse.prototype.clearObjectType = function() {
  return this.setObjectType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.importer.v2.ImportResponse.prototype.hasObjectType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ImportCounter permission = 2;
 * @return {?proto.aserto.directory.importer.v2.ImportCounter}
 */
proto.aserto.directory.importer.v2.ImportResponse.prototype.getPermission = function() {
  return /** @type{?proto.aserto.directory.importer.v2.ImportCounter} */ (
    jspb.Message.getWrapperField(this, proto.aserto.directory.importer.v2.ImportCounter, 2));
};


/**
 * @param {?proto.aserto.directory.importer.v2.ImportCounter|undefined} value
 * @return {!proto.aserto.directory.importer.v2.ImportResponse} returns this
*/
proto.aserto.directory.importer.v2.ImportResponse.prototype.setPermission = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.importer.v2.ImportResponse} returns this
 */
proto.aserto.directory.importer.v2.ImportResponse.prototype.clearPermission = function() {
  return this.setPermission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.importer.v2.ImportResponse.prototype.hasPermission = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ImportCounter relation_type = 3;
 * @return {?proto.aserto.directory.importer.v2.ImportCounter}
 */
proto.aserto.directory.importer.v2.ImportResponse.prototype.getRelationType = function() {
  return /** @type{?proto.aserto.directory.importer.v2.ImportCounter} */ (
    jspb.Message.getWrapperField(this, proto.aserto.directory.importer.v2.ImportCounter, 3));
};


/**
 * @param {?proto.aserto.directory.importer.v2.ImportCounter|undefined} value
 * @return {!proto.aserto.directory.importer.v2.ImportResponse} returns this
*/
proto.aserto.directory.importer.v2.ImportResponse.prototype.setRelationType = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.importer.v2.ImportResponse} returns this
 */
proto.aserto.directory.importer.v2.ImportResponse.prototype.clearRelationType = function() {
  return this.setRelationType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.importer.v2.ImportResponse.prototype.hasRelationType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ImportCounter object = 4;
 * @return {?proto.aserto.directory.importer.v2.ImportCounter}
 */
proto.aserto.directory.importer.v2.ImportResponse.prototype.getObject = function() {
  return /** @type{?proto.aserto.directory.importer.v2.ImportCounter} */ (
    jspb.Message.getWrapperField(this, proto.aserto.directory.importer.v2.ImportCounter, 4));
};


/**
 * @param {?proto.aserto.directory.importer.v2.ImportCounter|undefined} value
 * @return {!proto.aserto.directory.importer.v2.ImportResponse} returns this
*/
proto.aserto.directory.importer.v2.ImportResponse.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.importer.v2.ImportResponse} returns this
 */
proto.aserto.directory.importer.v2.ImportResponse.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.importer.v2.ImportResponse.prototype.hasObject = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ImportCounter relation = 5;
 * @return {?proto.aserto.directory.importer.v2.ImportCounter}
 */
proto.aserto.directory.importer.v2.ImportResponse.prototype.getRelation = function() {
  return /** @type{?proto.aserto.directory.importer.v2.ImportCounter} */ (
    jspb.Message.getWrapperField(this, proto.aserto.directory.importer.v2.ImportCounter, 5));
};


/**
 * @param {?proto.aserto.directory.importer.v2.ImportCounter|undefined} value
 * @return {!proto.aserto.directory.importer.v2.ImportResponse} returns this
*/
proto.aserto.directory.importer.v2.ImportResponse.prototype.setRelation = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.importer.v2.ImportResponse} returns this
 */
proto.aserto.directory.importer.v2.ImportResponse.prototype.clearRelation = function() {
  return this.setRelation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.importer.v2.ImportResponse.prototype.hasRelation = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.aserto.directory.importer.v2.ImportCounter.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.importer.v2.ImportCounter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.importer.v2.ImportCounter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.importer.v2.ImportCounter.toObject = function(includeInstance, msg) {
  var f, obj = {
    recv: jspb.Message.getFieldWithDefault(msg, 1, 0),
    set: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pb_delete: jspb.Message.getFieldWithDefault(msg, 3, 0),
    error: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.aserto.directory.importer.v2.ImportCounter}
 */
proto.aserto.directory.importer.v2.ImportCounter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.importer.v2.ImportCounter;
  return proto.aserto.directory.importer.v2.ImportCounter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.importer.v2.ImportCounter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.importer.v2.ImportCounter}
 */
proto.aserto.directory.importer.v2.ImportCounter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRecv(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSet(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDelete(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setError(value);
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
proto.aserto.directory.importer.v2.ImportCounter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.importer.v2.ImportCounter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.importer.v2.ImportCounter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.importer.v2.ImportCounter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecv();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getSet();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getDelete();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getError();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional uint64 recv = 1;
 * @return {number}
 */
proto.aserto.directory.importer.v2.ImportCounter.prototype.getRecv = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.importer.v2.ImportCounter} returns this
 */
proto.aserto.directory.importer.v2.ImportCounter.prototype.setRecv = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 set = 2;
 * @return {number}
 */
proto.aserto.directory.importer.v2.ImportCounter.prototype.getSet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.importer.v2.ImportCounter} returns this
 */
proto.aserto.directory.importer.v2.ImportCounter.prototype.setSet = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 delete = 3;
 * @return {number}
 */
proto.aserto.directory.importer.v2.ImportCounter.prototype.getDelete = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.importer.v2.ImportCounter} returns this
 */
proto.aserto.directory.importer.v2.ImportCounter.prototype.setDelete = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 error = 4;
 * @return {number}
 */
proto.aserto.directory.importer.v2.ImportCounter.prototype.getError = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.importer.v2.ImportCounter} returns this
 */
proto.aserto.directory.importer.v2.ImportCounter.prototype.setError = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.aserto.directory.importer.v2.Opcode = {
  OPCODE_UNKNOWN: 0,
  OPCODE_SET: 1,
  OPCODE_DELETE: 2
};

goog.object.extend(exports, proto.aserto.directory.importer.v2);
