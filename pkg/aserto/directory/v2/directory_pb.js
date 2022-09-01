// source: aserto/directory/v2/directory.proto
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
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var protoc$gen$openapiv2_options_annotations_pb = require('../../../protoc-gen-openapiv2/options/annotations_pb.js');
goog.object.extend(proto, protoc$gen$openapiv2_options_annotations_pb);
var aserto_common_info_v1_info_pb = require('../../../aserto/common/info/v1/info_pb.js');
goog.object.extend(proto, aserto_common_info_v1_info_pb);
var aserto_api_v1_pagination_pb = require('../../../aserto/api/v1/pagination_pb.js');
goog.object.extend(proto, aserto_api_v1_pagination_pb);
var aserto_directory_v2_object_pb = require('../../../aserto/directory/v2/object_pb.js');
goog.object.extend(proto, aserto_directory_v2_object_pb);
var aserto_directory_v2_relation_pb = require('../../../aserto/directory/v2/relation_pb.js');
goog.object.extend(proto, aserto_directory_v2_relation_pb);
goog.exportSymbol('proto.aserto.directory.v2.CheckPermissionRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.CheckPermissionResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.CheckRelationRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.CheckRelationResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.CheckRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.CheckRequest.CheckCase', null, global);
goog.exportSymbol('proto.aserto.directory.v2.CheckResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.DeleteObjectRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.DeleteObjectRequest.ParamCase', null, global);
goog.exportSymbol('proto.aserto.directory.v2.DeleteObjectResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.DeleteObjectTypeRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.DeleteObjectTypeRequest.ParamCase', null, global);
goog.exportSymbol('proto.aserto.directory.v2.DeleteObjectTypeResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.DeletePermissionRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.DeletePermissionRequest.ParamCase', null, global);
goog.exportSymbol('proto.aserto.directory.v2.DeletePermissionResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.DeleteRelationRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.DeleteRelationResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.DeleteRelationTypePermissionRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.DeleteRelationTypePermissionResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.DeleteRelationTypeRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.DeleteRelationTypeRequest.ParamCase', null, global);
goog.exportSymbol('proto.aserto.directory.v2.DeleteRelationTypeResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetGraphRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetGraphResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetObjRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetObjResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetObjTypeRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetObjTypeResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetObjectRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetObjectRequest.ParamCase', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetObjectResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetObjectTypeRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetObjectTypeRequest.ParamCase', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetObjectTypeResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetPermRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetPermResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetPermissionRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetPermissionRequest.ParamCase', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetPermissionResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetRelRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetRelResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetRelTypeRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetRelTypeResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetRelationRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetRelationResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetRelationTypePermissionRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetRelationTypePermissionResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetRelationTypeRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetRelationTypeRequest.ParamCase', null, global);
goog.exportSymbol('proto.aserto.directory.v2.GetRelationTypeResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.InfoRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.InfoResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.ListObjectGraphRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.ListObjectGraphResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.ListObjectTypesRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.ListObjectTypesResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.ListObjectsRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.ListObjectsResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.ListPermissionsRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.ListPermissionsResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.ListRelationTypePermissionsRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.ListRelationTypePermissionsResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.ListRelationTypesRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.ListRelationTypesResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.ListRelationsRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.ListRelationsResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.Opcode', null, global);
goog.exportSymbol('proto.aserto.directory.v2.SetObjectRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.SetObjectResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.SetObjectTypeRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.SetObjectTypeResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.SetPermissionRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.SetPermissionResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.SetRelationRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.SetRelationResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.SetRelationTypePermissionRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.SetRelationTypePermissionResponse', null, global);
goog.exportSymbol('proto.aserto.directory.v2.SetRelationTypeRequest', null, global);
goog.exportSymbol('proto.aserto.directory.v2.SetRelationTypeResponse', null, global);
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
proto.aserto.directory.v2.InfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.InfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.InfoRequest.displayName = 'proto.aserto.directory.v2.InfoRequest';
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
proto.aserto.directory.v2.InfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.InfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.InfoResponse.displayName = 'proto.aserto.directory.v2.InfoResponse';
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
proto.aserto.directory.v2.GetObjectTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.aserto.directory.v2.GetObjectTypeRequest.oneofGroups_);
};
goog.inherits(proto.aserto.directory.v2.GetObjectTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetObjectTypeRequest.displayName = 'proto.aserto.directory.v2.GetObjectTypeRequest';
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
proto.aserto.directory.v2.GetObjectTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.GetObjectTypeResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.GetObjectTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetObjectTypeResponse.displayName = 'proto.aserto.directory.v2.GetObjectTypeResponse';
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
proto.aserto.directory.v2.SetObjectTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.SetObjectTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.SetObjectTypeRequest.displayName = 'proto.aserto.directory.v2.SetObjectTypeRequest';
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
proto.aserto.directory.v2.SetObjectTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.SetObjectTypeResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.SetObjectTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.SetObjectTypeResponse.displayName = 'proto.aserto.directory.v2.SetObjectTypeResponse';
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
proto.aserto.directory.v2.DeleteObjectTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.aserto.directory.v2.DeleteObjectTypeRequest.oneofGroups_);
};
goog.inherits(proto.aserto.directory.v2.DeleteObjectTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.DeleteObjectTypeRequest.displayName = 'proto.aserto.directory.v2.DeleteObjectTypeRequest';
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
proto.aserto.directory.v2.DeleteObjectTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.DeleteObjectTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.DeleteObjectTypeResponse.displayName = 'proto.aserto.directory.v2.DeleteObjectTypeResponse';
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
proto.aserto.directory.v2.ListObjectTypesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.ListObjectTypesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.ListObjectTypesRequest.displayName = 'proto.aserto.directory.v2.ListObjectTypesRequest';
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
proto.aserto.directory.v2.ListObjectTypesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.ListObjectTypesResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.ListObjectTypesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.ListObjectTypesResponse.displayName = 'proto.aserto.directory.v2.ListObjectTypesResponse';
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
proto.aserto.directory.v2.GetObjTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.GetObjTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetObjTypeRequest.displayName = 'proto.aserto.directory.v2.GetObjTypeRequest';
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
proto.aserto.directory.v2.GetObjTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.GetObjTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetObjTypeResponse.displayName = 'proto.aserto.directory.v2.GetObjTypeResponse';
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
proto.aserto.directory.v2.GetRelationTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.aserto.directory.v2.GetRelationTypeRequest.oneofGroups_);
};
goog.inherits(proto.aserto.directory.v2.GetRelationTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetRelationTypeRequest.displayName = 'proto.aserto.directory.v2.GetRelationTypeRequest';
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
proto.aserto.directory.v2.GetRelationTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.GetRelationTypeResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.GetRelationTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetRelationTypeResponse.displayName = 'proto.aserto.directory.v2.GetRelationTypeResponse';
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
proto.aserto.directory.v2.SetRelationTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.SetRelationTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.SetRelationTypeRequest.displayName = 'proto.aserto.directory.v2.SetRelationTypeRequest';
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
proto.aserto.directory.v2.SetRelationTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.SetRelationTypeResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.SetRelationTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.SetRelationTypeResponse.displayName = 'proto.aserto.directory.v2.SetRelationTypeResponse';
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
proto.aserto.directory.v2.DeleteRelationTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.aserto.directory.v2.DeleteRelationTypeRequest.oneofGroups_);
};
goog.inherits(proto.aserto.directory.v2.DeleteRelationTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.DeleteRelationTypeRequest.displayName = 'proto.aserto.directory.v2.DeleteRelationTypeRequest';
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
proto.aserto.directory.v2.DeleteRelationTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.DeleteRelationTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.DeleteRelationTypeResponse.displayName = 'proto.aserto.directory.v2.DeleteRelationTypeResponse';
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
proto.aserto.directory.v2.ListRelationTypesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.ListRelationTypesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.ListRelationTypesRequest.displayName = 'proto.aserto.directory.v2.ListRelationTypesRequest';
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
proto.aserto.directory.v2.ListRelationTypesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.ListRelationTypesResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.ListRelationTypesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.ListRelationTypesResponse.displayName = 'proto.aserto.directory.v2.ListRelationTypesResponse';
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
proto.aserto.directory.v2.GetRelTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.GetRelTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetRelTypeRequest.displayName = 'proto.aserto.directory.v2.GetRelTypeRequest';
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
proto.aserto.directory.v2.GetRelTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.GetRelTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetRelTypeResponse.displayName = 'proto.aserto.directory.v2.GetRelTypeResponse';
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
proto.aserto.directory.v2.GetObjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.aserto.directory.v2.GetObjectRequest.oneofGroups_);
};
goog.inherits(proto.aserto.directory.v2.GetObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetObjectRequest.displayName = 'proto.aserto.directory.v2.GetObjectRequest';
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
proto.aserto.directory.v2.GetObjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.GetObjectResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.GetObjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetObjectResponse.displayName = 'proto.aserto.directory.v2.GetObjectResponse';
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
proto.aserto.directory.v2.SetObjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.SetObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.SetObjectRequest.displayName = 'proto.aserto.directory.v2.SetObjectRequest';
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
proto.aserto.directory.v2.SetObjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.SetObjectResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.SetObjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.SetObjectResponse.displayName = 'proto.aserto.directory.v2.SetObjectResponse';
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
proto.aserto.directory.v2.DeleteObjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.aserto.directory.v2.DeleteObjectRequest.oneofGroups_);
};
goog.inherits(proto.aserto.directory.v2.DeleteObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.DeleteObjectRequest.displayName = 'proto.aserto.directory.v2.DeleteObjectRequest';
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
proto.aserto.directory.v2.DeleteObjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.DeleteObjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.DeleteObjectResponse.displayName = 'proto.aserto.directory.v2.DeleteObjectResponse';
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
proto.aserto.directory.v2.ListObjectsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.ListObjectsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.ListObjectsRequest.displayName = 'proto.aserto.directory.v2.ListObjectsRequest';
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
proto.aserto.directory.v2.ListObjectsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.ListObjectsResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.ListObjectsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.ListObjectsResponse.displayName = 'proto.aserto.directory.v2.ListObjectsResponse';
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
proto.aserto.directory.v2.GetObjRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.GetObjRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetObjRequest.displayName = 'proto.aserto.directory.v2.GetObjRequest';
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
proto.aserto.directory.v2.GetObjResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.GetObjResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.GetObjResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetObjResponse.displayName = 'proto.aserto.directory.v2.GetObjResponse';
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
proto.aserto.directory.v2.GetRelationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.GetRelationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetRelationRequest.displayName = 'proto.aserto.directory.v2.GetRelationRequest';
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
proto.aserto.directory.v2.GetRelationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.GetRelationResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.GetRelationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetRelationResponse.displayName = 'proto.aserto.directory.v2.GetRelationResponse';
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
proto.aserto.directory.v2.SetRelationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.SetRelationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.SetRelationRequest.displayName = 'proto.aserto.directory.v2.SetRelationRequest';
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
proto.aserto.directory.v2.SetRelationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.SetRelationResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.SetRelationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.SetRelationResponse.displayName = 'proto.aserto.directory.v2.SetRelationResponse';
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
proto.aserto.directory.v2.DeleteRelationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.DeleteRelationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.DeleteRelationRequest.displayName = 'proto.aserto.directory.v2.DeleteRelationRequest';
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
proto.aserto.directory.v2.DeleteRelationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.DeleteRelationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.DeleteRelationResponse.displayName = 'proto.aserto.directory.v2.DeleteRelationResponse';
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
proto.aserto.directory.v2.ListRelationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.ListRelationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.ListRelationsRequest.displayName = 'proto.aserto.directory.v2.ListRelationsRequest';
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
proto.aserto.directory.v2.ListRelationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.ListRelationsResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.ListRelationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.ListRelationsResponse.displayName = 'proto.aserto.directory.v2.ListRelationsResponse';
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
proto.aserto.directory.v2.GetRelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.GetRelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetRelRequest.displayName = 'proto.aserto.directory.v2.GetRelRequest';
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
proto.aserto.directory.v2.GetRelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.GetRelResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.GetRelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetRelResponse.displayName = 'proto.aserto.directory.v2.GetRelResponse';
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
proto.aserto.directory.v2.GetPermissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.aserto.directory.v2.GetPermissionRequest.oneofGroups_);
};
goog.inherits(proto.aserto.directory.v2.GetPermissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetPermissionRequest.displayName = 'proto.aserto.directory.v2.GetPermissionRequest';
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
proto.aserto.directory.v2.GetPermissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.GetPermissionResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.GetPermissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetPermissionResponse.displayName = 'proto.aserto.directory.v2.GetPermissionResponse';
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
proto.aserto.directory.v2.SetPermissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.SetPermissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.SetPermissionRequest.displayName = 'proto.aserto.directory.v2.SetPermissionRequest';
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
proto.aserto.directory.v2.SetPermissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.SetPermissionResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.SetPermissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.SetPermissionResponse.displayName = 'proto.aserto.directory.v2.SetPermissionResponse';
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
proto.aserto.directory.v2.DeletePermissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.aserto.directory.v2.DeletePermissionRequest.oneofGroups_);
};
goog.inherits(proto.aserto.directory.v2.DeletePermissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.DeletePermissionRequest.displayName = 'proto.aserto.directory.v2.DeletePermissionRequest';
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
proto.aserto.directory.v2.DeletePermissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.DeletePermissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.DeletePermissionResponse.displayName = 'proto.aserto.directory.v2.DeletePermissionResponse';
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
proto.aserto.directory.v2.ListPermissionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.ListPermissionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.ListPermissionsRequest.displayName = 'proto.aserto.directory.v2.ListPermissionsRequest';
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
proto.aserto.directory.v2.ListPermissionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.ListPermissionsResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.ListPermissionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.ListPermissionsResponse.displayName = 'proto.aserto.directory.v2.ListPermissionsResponse';
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
proto.aserto.directory.v2.GetPermRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.GetPermRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetPermRequest.displayName = 'proto.aserto.directory.v2.GetPermRequest';
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
proto.aserto.directory.v2.GetPermResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.GetPermResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetPermResponse.displayName = 'proto.aserto.directory.v2.GetPermResponse';
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
proto.aserto.directory.v2.GetRelationTypePermissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.GetRelationTypePermissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetRelationTypePermissionRequest.displayName = 'proto.aserto.directory.v2.GetRelationTypePermissionRequest';
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
proto.aserto.directory.v2.GetRelationTypePermissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.GetRelationTypePermissionResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.GetRelationTypePermissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetRelationTypePermissionResponse.displayName = 'proto.aserto.directory.v2.GetRelationTypePermissionResponse';
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
proto.aserto.directory.v2.SetRelationTypePermissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.SetRelationTypePermissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.SetRelationTypePermissionRequest.displayName = 'proto.aserto.directory.v2.SetRelationTypePermissionRequest';
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
proto.aserto.directory.v2.SetRelationTypePermissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.SetRelationTypePermissionResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.SetRelationTypePermissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.SetRelationTypePermissionResponse.displayName = 'proto.aserto.directory.v2.SetRelationTypePermissionResponse';
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
proto.aserto.directory.v2.DeleteRelationTypePermissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.DeleteRelationTypePermissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.DeleteRelationTypePermissionRequest.displayName = 'proto.aserto.directory.v2.DeleteRelationTypePermissionRequest';
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
proto.aserto.directory.v2.DeleteRelationTypePermissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.DeleteRelationTypePermissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.DeleteRelationTypePermissionResponse.displayName = 'proto.aserto.directory.v2.DeleteRelationTypePermissionResponse';
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
proto.aserto.directory.v2.ListRelationTypePermissionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.ListRelationTypePermissionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.ListRelationTypePermissionsRequest.displayName = 'proto.aserto.directory.v2.ListRelationTypePermissionsRequest';
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
proto.aserto.directory.v2.ListRelationTypePermissionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.ListRelationTypePermissionsResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.ListRelationTypePermissionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.ListRelationTypePermissionsResponse.displayName = 'proto.aserto.directory.v2.ListRelationTypePermissionsResponse';
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
proto.aserto.directory.v2.CheckRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.aserto.directory.v2.CheckRequest.oneofGroups_);
};
goog.inherits(proto.aserto.directory.v2.CheckRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.CheckRequest.displayName = 'proto.aserto.directory.v2.CheckRequest';
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
proto.aserto.directory.v2.CheckResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.CheckResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.CheckResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.CheckResponse.displayName = 'proto.aserto.directory.v2.CheckResponse';
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
proto.aserto.directory.v2.CheckRelationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.CheckRelationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.CheckRelationRequest.displayName = 'proto.aserto.directory.v2.CheckRelationRequest';
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
proto.aserto.directory.v2.CheckRelationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.CheckRelationResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.CheckRelationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.CheckRelationResponse.displayName = 'proto.aserto.directory.v2.CheckRelationResponse';
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
proto.aserto.directory.v2.CheckPermissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.CheckPermissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.CheckPermissionRequest.displayName = 'proto.aserto.directory.v2.CheckPermissionRequest';
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
proto.aserto.directory.v2.CheckPermissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.CheckPermissionResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.CheckPermissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.CheckPermissionResponse.displayName = 'proto.aserto.directory.v2.CheckPermissionResponse';
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
proto.aserto.directory.v2.ListObjectGraphRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.ListObjectGraphRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.ListObjectGraphRequest.displayName = 'proto.aserto.directory.v2.ListObjectGraphRequest';
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
proto.aserto.directory.v2.ListObjectGraphResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.ListObjectGraphResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.ListObjectGraphResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.ListObjectGraphResponse.displayName = 'proto.aserto.directory.v2.ListObjectGraphResponse';
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
proto.aserto.directory.v2.GetGraphRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aserto.directory.v2.GetGraphRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetGraphRequest.displayName = 'proto.aserto.directory.v2.GetGraphRequest';
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
proto.aserto.directory.v2.GetGraphResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aserto.directory.v2.GetGraphResponse.repeatedFields_, null);
};
goog.inherits(proto.aserto.directory.v2.GetGraphResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aserto.directory.v2.GetGraphResponse.displayName = 'proto.aserto.directory.v2.GetGraphResponse';
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
proto.aserto.directory.v2.InfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.InfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.InfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.InfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.aserto.directory.v2.InfoRequest}
 */
proto.aserto.directory.v2.InfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.InfoRequest;
  return proto.aserto.directory.v2.InfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.InfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.InfoRequest}
 */
proto.aserto.directory.v2.InfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.aserto.directory.v2.InfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.InfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.InfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.InfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.aserto.directory.v2.InfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.InfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.InfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.InfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    build: (f = msg.getBuild()) && aserto_common_info_v1_info_pb.BuildInfo.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.InfoResponse}
 */
proto.aserto.directory.v2.InfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.InfoResponse;
  return proto.aserto.directory.v2.InfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.InfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.InfoResponse}
 */
proto.aserto.directory.v2.InfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new aserto_common_info_v1_info_pb.BuildInfo;
      reader.readMessage(value,aserto_common_info_v1_info_pb.BuildInfo.deserializeBinaryFromReader);
      msg.setBuild(value);
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
proto.aserto.directory.v2.InfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.InfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.InfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.InfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuild();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      aserto_common_info_v1_info_pb.BuildInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional aserto.common.info.v1.BuildInfo build = 3;
 * @return {?proto.aserto.common.info.v1.BuildInfo}
 */
proto.aserto.directory.v2.InfoResponse.prototype.getBuild = function() {
  return /** @type{?proto.aserto.common.info.v1.BuildInfo} */ (
    jspb.Message.getWrapperField(this, aserto_common_info_v1_info_pb.BuildInfo, 3));
};


/**
 * @param {?proto.aserto.common.info.v1.BuildInfo|undefined} value
 * @return {!proto.aserto.directory.v2.InfoResponse} returns this
*/
proto.aserto.directory.v2.InfoResponse.prototype.setBuild = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.InfoResponse} returns this
 */
proto.aserto.directory.v2.InfoResponse.prototype.clearBuild = function() {
  return this.setBuild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.InfoResponse.prototype.hasBuild = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.aserto.directory.v2.GetObjectTypeRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.aserto.directory.v2.GetObjectTypeRequest.ParamCase = {
  PARAM_NOT_SET: 0,
  ID: 1,
  NAME: 2
};

/**
 * @return {proto.aserto.directory.v2.GetObjectTypeRequest.ParamCase}
 */
proto.aserto.directory.v2.GetObjectTypeRequest.prototype.getParamCase = function() {
  return /** @type {proto.aserto.directory.v2.GetObjectTypeRequest.ParamCase} */(jspb.Message.computeOneofCase(this, proto.aserto.directory.v2.GetObjectTypeRequest.oneofGroups_[0]));
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
proto.aserto.directory.v2.GetObjectTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetObjectTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetObjectTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetObjectTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.aserto.directory.v2.GetObjectTypeRequest}
 */
proto.aserto.directory.v2.GetObjectTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetObjectTypeRequest;
  return proto.aserto.directory.v2.GetObjectTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetObjectTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetObjectTypeRequest}
 */
proto.aserto.directory.v2.GetObjectTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.aserto.directory.v2.GetObjectTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetObjectTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetObjectTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetObjectTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.aserto.directory.v2.GetObjectTypeRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.GetObjectTypeRequest} returns this
 */
proto.aserto.directory.v2.GetObjectTypeRequest.prototype.setId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.aserto.directory.v2.GetObjectTypeRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aserto.directory.v2.GetObjectTypeRequest} returns this
 */
proto.aserto.directory.v2.GetObjectTypeRequest.prototype.clearId = function() {
  return jspb.Message.setOneofField(this, 1, proto.aserto.directory.v2.GetObjectTypeRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.GetObjectTypeRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.aserto.directory.v2.GetObjectTypeRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetObjectTypeRequest} returns this
 */
proto.aserto.directory.v2.GetObjectTypeRequest.prototype.setName = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.aserto.directory.v2.GetObjectTypeRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aserto.directory.v2.GetObjectTypeRequest} returns this
 */
proto.aserto.directory.v2.GetObjectTypeRequest.prototype.clearName = function() {
  return jspb.Message.setOneofField(this, 2, proto.aserto.directory.v2.GetObjectTypeRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.GetObjectTypeRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.GetObjectTypeResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.GetObjectTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetObjectTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetObjectTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetObjectTypeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_object_pb.ObjectType.toObject, includeInstance)
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
 * @return {!proto.aserto.directory.v2.GetObjectTypeResponse}
 */
proto.aserto.directory.v2.GetObjectTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetObjectTypeResponse;
  return proto.aserto.directory.v2.GetObjectTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetObjectTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetObjectTypeResponse}
 */
proto.aserto.directory.v2.GetObjectTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_object_pb.ObjectType;
      reader.readMessage(value,aserto_directory_v2_object_pb.ObjectType.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.aserto.directory.v2.GetObjectTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetObjectTypeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetObjectTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetObjectTypeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_object_pb.ObjectType.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ObjectType results = 1;
 * @return {!Array<!proto.aserto.directory.v2.ObjectType>}
 */
proto.aserto.directory.v2.GetObjectTypeResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.ObjectType>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_object_pb.ObjectType, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.ObjectType>} value
 * @return {!proto.aserto.directory.v2.GetObjectTypeResponse} returns this
*/
proto.aserto.directory.v2.GetObjectTypeResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.ObjectType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.ObjectType}
 */
proto.aserto.directory.v2.GetObjectTypeResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.ObjectType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.GetObjectTypeResponse} returns this
 */
proto.aserto.directory.v2.GetObjectTypeResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
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
proto.aserto.directory.v2.SetObjectTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.SetObjectTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.SetObjectTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetObjectTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectType: (f = msg.getObjectType()) && aserto_directory_v2_object_pb.ObjectType.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.SetObjectTypeRequest}
 */
proto.aserto.directory.v2.SetObjectTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.SetObjectTypeRequest;
  return proto.aserto.directory.v2.SetObjectTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.SetObjectTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.SetObjectTypeRequest}
 */
proto.aserto.directory.v2.SetObjectTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_object_pb.ObjectType;
      reader.readMessage(value,aserto_directory_v2_object_pb.ObjectType.deserializeBinaryFromReader);
      msg.setObjectType(value);
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
proto.aserto.directory.v2.SetObjectTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.SetObjectTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.SetObjectTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetObjectTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectType();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      aserto_directory_v2_object_pb.ObjectType.serializeBinaryToWriter
    );
  }
};


/**
 * optional ObjectType object_type = 1;
 * @return {?proto.aserto.directory.v2.ObjectType}
 */
proto.aserto.directory.v2.SetObjectTypeRequest.prototype.getObjectType = function() {
  return /** @type{?proto.aserto.directory.v2.ObjectType} */ (
    jspb.Message.getWrapperField(this, aserto_directory_v2_object_pb.ObjectType, 1));
};


/**
 * @param {?proto.aserto.directory.v2.ObjectType|undefined} value
 * @return {!proto.aserto.directory.v2.SetObjectTypeRequest} returns this
*/
proto.aserto.directory.v2.SetObjectTypeRequest.prototype.setObjectType = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.SetObjectTypeRequest} returns this
 */
proto.aserto.directory.v2.SetObjectTypeRequest.prototype.clearObjectType = function() {
  return this.setObjectType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.SetObjectTypeRequest.prototype.hasObjectType = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.SetObjectTypeResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.SetObjectTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.SetObjectTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.SetObjectTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetObjectTypeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_object_pb.ObjectType.toObject, includeInstance)
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
 * @return {!proto.aserto.directory.v2.SetObjectTypeResponse}
 */
proto.aserto.directory.v2.SetObjectTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.SetObjectTypeResponse;
  return proto.aserto.directory.v2.SetObjectTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.SetObjectTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.SetObjectTypeResponse}
 */
proto.aserto.directory.v2.SetObjectTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_object_pb.ObjectType;
      reader.readMessage(value,aserto_directory_v2_object_pb.ObjectType.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.aserto.directory.v2.SetObjectTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.SetObjectTypeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.SetObjectTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetObjectTypeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_object_pb.ObjectType.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ObjectType results = 1;
 * @return {!Array<!proto.aserto.directory.v2.ObjectType>}
 */
proto.aserto.directory.v2.SetObjectTypeResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.ObjectType>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_object_pb.ObjectType, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.ObjectType>} value
 * @return {!proto.aserto.directory.v2.SetObjectTypeResponse} returns this
*/
proto.aserto.directory.v2.SetObjectTypeResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.ObjectType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.ObjectType}
 */
proto.aserto.directory.v2.SetObjectTypeResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.ObjectType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.SetObjectTypeResponse} returns this
 */
proto.aserto.directory.v2.SetObjectTypeResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.aserto.directory.v2.DeleteObjectTypeRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.aserto.directory.v2.DeleteObjectTypeRequest.ParamCase = {
  PARAM_NOT_SET: 0,
  ID: 1,
  NAME: 2
};

/**
 * @return {proto.aserto.directory.v2.DeleteObjectTypeRequest.ParamCase}
 */
proto.aserto.directory.v2.DeleteObjectTypeRequest.prototype.getParamCase = function() {
  return /** @type {proto.aserto.directory.v2.DeleteObjectTypeRequest.ParamCase} */(jspb.Message.computeOneofCase(this, proto.aserto.directory.v2.DeleteObjectTypeRequest.oneofGroups_[0]));
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
proto.aserto.directory.v2.DeleteObjectTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.DeleteObjectTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.DeleteObjectTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteObjectTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.aserto.directory.v2.DeleteObjectTypeRequest}
 */
proto.aserto.directory.v2.DeleteObjectTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.DeleteObjectTypeRequest;
  return proto.aserto.directory.v2.DeleteObjectTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.DeleteObjectTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.DeleteObjectTypeRequest}
 */
proto.aserto.directory.v2.DeleteObjectTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.aserto.directory.v2.DeleteObjectTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.DeleteObjectTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.DeleteObjectTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteObjectTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.aserto.directory.v2.DeleteObjectTypeRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.DeleteObjectTypeRequest} returns this
 */
proto.aserto.directory.v2.DeleteObjectTypeRequest.prototype.setId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.aserto.directory.v2.DeleteObjectTypeRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aserto.directory.v2.DeleteObjectTypeRequest} returns this
 */
proto.aserto.directory.v2.DeleteObjectTypeRequest.prototype.clearId = function() {
  return jspb.Message.setOneofField(this, 1, proto.aserto.directory.v2.DeleteObjectTypeRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.DeleteObjectTypeRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.aserto.directory.v2.DeleteObjectTypeRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.DeleteObjectTypeRequest} returns this
 */
proto.aserto.directory.v2.DeleteObjectTypeRequest.prototype.setName = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.aserto.directory.v2.DeleteObjectTypeRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aserto.directory.v2.DeleteObjectTypeRequest} returns this
 */
proto.aserto.directory.v2.DeleteObjectTypeRequest.prototype.clearName = function() {
  return jspb.Message.setOneofField(this, 2, proto.aserto.directory.v2.DeleteObjectTypeRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.DeleteObjectTypeRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.aserto.directory.v2.DeleteObjectTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.DeleteObjectTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.DeleteObjectTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteObjectTypeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && google_protobuf_empty_pb.Empty.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.DeleteObjectTypeResponse}
 */
proto.aserto.directory.v2.DeleteObjectTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.DeleteObjectTypeResponse;
  return proto.aserto.directory.v2.DeleteObjectTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.DeleteObjectTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.DeleteObjectTypeResponse}
 */
proto.aserto.directory.v2.DeleteObjectTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_empty_pb.Empty;
      reader.readMessage(value,google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
      msg.setResult(value);
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
proto.aserto.directory.v2.DeleteObjectTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.DeleteObjectTypeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.DeleteObjectTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteObjectTypeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_empty_pb.Empty.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Empty result = 1;
 * @return {?proto.google.protobuf.Empty}
 */
proto.aserto.directory.v2.DeleteObjectTypeResponse.prototype.getResult = function() {
  return /** @type{?proto.google.protobuf.Empty} */ (
    jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 1));
};


/**
 * @param {?proto.google.protobuf.Empty|undefined} value
 * @return {!proto.aserto.directory.v2.DeleteObjectTypeResponse} returns this
*/
proto.aserto.directory.v2.DeleteObjectTypeResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.DeleteObjectTypeResponse} returns this
 */
proto.aserto.directory.v2.DeleteObjectTypeResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.DeleteObjectTypeResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.aserto.directory.v2.ListObjectTypesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.ListObjectTypesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.ListObjectTypesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListObjectTypesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    page: (f = msg.getPage()) && aserto_api_v1_pagination_pb.PaginationRequest.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.ListObjectTypesRequest}
 */
proto.aserto.directory.v2.ListObjectTypesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.ListObjectTypesRequest;
  return proto.aserto.directory.v2.ListObjectTypesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.ListObjectTypesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.ListObjectTypesRequest}
 */
proto.aserto.directory.v2.ListObjectTypesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new aserto_api_v1_pagination_pb.PaginationRequest;
      reader.readMessage(value,aserto_api_v1_pagination_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPage(value);
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
proto.aserto.directory.v2.ListObjectTypesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.ListObjectTypesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.ListObjectTypesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListObjectTypesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      aserto_api_v1_pagination_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional aserto.api.v1.PaginationRequest page = 9;
 * @return {?proto.aserto.api.v1.PaginationRequest}
 */
proto.aserto.directory.v2.ListObjectTypesRequest.prototype.getPage = function() {
  return /** @type{?proto.aserto.api.v1.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, aserto_api_v1_pagination_pb.PaginationRequest, 9));
};


/**
 * @param {?proto.aserto.api.v1.PaginationRequest|undefined} value
 * @return {!proto.aserto.directory.v2.ListObjectTypesRequest} returns this
*/
proto.aserto.directory.v2.ListObjectTypesRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.ListObjectTypesRequest} returns this
 */
proto.aserto.directory.v2.ListObjectTypesRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.ListObjectTypesRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.ListObjectTypesResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.ListObjectTypesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.ListObjectTypesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.ListObjectTypesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListObjectTypesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_object_pb.ObjectType.toObject, includeInstance),
    page: (f = msg.getPage()) && aserto_api_v1_pagination_pb.PaginationResponse.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.ListObjectTypesResponse}
 */
proto.aserto.directory.v2.ListObjectTypesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.ListObjectTypesResponse;
  return proto.aserto.directory.v2.ListObjectTypesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.ListObjectTypesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.ListObjectTypesResponse}
 */
proto.aserto.directory.v2.ListObjectTypesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_object_pb.ObjectType;
      reader.readMessage(value,aserto_directory_v2_object_pb.ObjectType.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    case 9:
      var value = new aserto_api_v1_pagination_pb.PaginationResponse;
      reader.readMessage(value,aserto_api_v1_pagination_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPage(value);
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
proto.aserto.directory.v2.ListObjectTypesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.ListObjectTypesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.ListObjectTypesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListObjectTypesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_object_pb.ObjectType.serializeBinaryToWriter
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      aserto_api_v1_pagination_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ObjectType results = 1;
 * @return {!Array<!proto.aserto.directory.v2.ObjectType>}
 */
proto.aserto.directory.v2.ListObjectTypesResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.ObjectType>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_object_pb.ObjectType, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.ObjectType>} value
 * @return {!proto.aserto.directory.v2.ListObjectTypesResponse} returns this
*/
proto.aserto.directory.v2.ListObjectTypesResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.ObjectType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.ObjectType}
 */
proto.aserto.directory.v2.ListObjectTypesResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.ObjectType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.ListObjectTypesResponse} returns this
 */
proto.aserto.directory.v2.ListObjectTypesResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};


/**
 * optional aserto.api.v1.PaginationResponse page = 9;
 * @return {?proto.aserto.api.v1.PaginationResponse}
 */
proto.aserto.directory.v2.ListObjectTypesResponse.prototype.getPage = function() {
  return /** @type{?proto.aserto.api.v1.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, aserto_api_v1_pagination_pb.PaginationResponse, 9));
};


/**
 * @param {?proto.aserto.api.v1.PaginationResponse|undefined} value
 * @return {!proto.aserto.directory.v2.ListObjectTypesResponse} returns this
*/
proto.aserto.directory.v2.ListObjectTypesResponse.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.ListObjectTypesResponse} returns this
 */
proto.aserto.directory.v2.ListObjectTypesResponse.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.ListObjectTypesResponse.prototype.hasPage = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.aserto.directory.v2.GetObjTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetObjTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetObjTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetObjTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.aserto.directory.v2.GetObjTypeRequest}
 */
proto.aserto.directory.v2.GetObjTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetObjTypeRequest;
  return proto.aserto.directory.v2.GetObjTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetObjTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetObjTypeRequest}
 */
proto.aserto.directory.v2.GetObjTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.aserto.directory.v2.GetObjTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetObjTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetObjTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetObjTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.aserto.directory.v2.GetObjTypeRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetObjTypeRequest} returns this
 */
proto.aserto.directory.v2.GetObjTypeRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.aserto.directory.v2.GetObjTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetObjTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetObjTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetObjTypeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.aserto.directory.v2.GetObjTypeResponse}
 */
proto.aserto.directory.v2.GetObjTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetObjTypeResponse;
  return proto.aserto.directory.v2.GetObjTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetObjTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetObjTypeResponse}
 */
proto.aserto.directory.v2.GetObjTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
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
proto.aserto.directory.v2.GetObjTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetObjTypeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetObjTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetObjTypeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.aserto.directory.v2.GetObjTypeResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.GetObjTypeResponse} returns this
 */
proto.aserto.directory.v2.GetObjTypeResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.aserto.directory.v2.GetRelationTypeRequest.oneofGroups_ = [[1,3]];

/**
 * @enum {number}
 */
proto.aserto.directory.v2.GetRelationTypeRequest.ParamCase = {
  PARAM_NOT_SET: 0,
  ID: 1,
  KEY: 3
};

/**
 * @return {proto.aserto.directory.v2.GetRelationTypeRequest.ParamCase}
 */
proto.aserto.directory.v2.GetRelationTypeRequest.prototype.getParamCase = function() {
  return /** @type {proto.aserto.directory.v2.GetRelationTypeRequest.ParamCase} */(jspb.Message.computeOneofCase(this, proto.aserto.directory.v2.GetRelationTypeRequest.oneofGroups_[0]));
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
proto.aserto.directory.v2.GetRelationTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetRelationTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetRelationTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelationTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    key: (f = msg.getKey()) && aserto_directory_v2_relation_pb.RelationTypeKey.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.GetRelationTypeRequest}
 */
proto.aserto.directory.v2.GetRelationTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetRelationTypeRequest;
  return proto.aserto.directory.v2.GetRelationTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetRelationTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetRelationTypeRequest}
 */
proto.aserto.directory.v2.GetRelationTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = new aserto_directory_v2_relation_pb.RelationTypeKey;
      reader.readMessage(value,aserto_directory_v2_relation_pb.RelationTypeKey.deserializeBinaryFromReader);
      msg.setKey(value);
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
proto.aserto.directory.v2.GetRelationTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetRelationTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetRelationTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelationTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      aserto_directory_v2_relation_pb.RelationTypeKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.aserto.directory.v2.GetRelationTypeRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.GetRelationTypeRequest} returns this
 */
proto.aserto.directory.v2.GetRelationTypeRequest.prototype.setId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.aserto.directory.v2.GetRelationTypeRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aserto.directory.v2.GetRelationTypeRequest} returns this
 */
proto.aserto.directory.v2.GetRelationTypeRequest.prototype.clearId = function() {
  return jspb.Message.setOneofField(this, 1, proto.aserto.directory.v2.GetRelationTypeRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.GetRelationTypeRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RelationTypeKey key = 3;
 * @return {?proto.aserto.directory.v2.RelationTypeKey}
 */
proto.aserto.directory.v2.GetRelationTypeRequest.prototype.getKey = function() {
  return /** @type{?proto.aserto.directory.v2.RelationTypeKey} */ (
    jspb.Message.getWrapperField(this, aserto_directory_v2_relation_pb.RelationTypeKey, 3));
};


/**
 * @param {?proto.aserto.directory.v2.RelationTypeKey|undefined} value
 * @return {!proto.aserto.directory.v2.GetRelationTypeRequest} returns this
*/
proto.aserto.directory.v2.GetRelationTypeRequest.prototype.setKey = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.aserto.directory.v2.GetRelationTypeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.GetRelationTypeRequest} returns this
 */
proto.aserto.directory.v2.GetRelationTypeRequest.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.GetRelationTypeRequest.prototype.hasKey = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.GetRelationTypeResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.GetRelationTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetRelationTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetRelationTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelationTypeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_relation_pb.RelationType.toObject, includeInstance)
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
 * @return {!proto.aserto.directory.v2.GetRelationTypeResponse}
 */
proto.aserto.directory.v2.GetRelationTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetRelationTypeResponse;
  return proto.aserto.directory.v2.GetRelationTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetRelationTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetRelationTypeResponse}
 */
proto.aserto.directory.v2.GetRelationTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_relation_pb.RelationType;
      reader.readMessage(value,aserto_directory_v2_relation_pb.RelationType.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.aserto.directory.v2.GetRelationTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetRelationTypeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetRelationTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelationTypeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_relation_pb.RelationType.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RelationType results = 1;
 * @return {!Array<!proto.aserto.directory.v2.RelationType>}
 */
proto.aserto.directory.v2.GetRelationTypeResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.RelationType>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_relation_pb.RelationType, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.RelationType>} value
 * @return {!proto.aserto.directory.v2.GetRelationTypeResponse} returns this
*/
proto.aserto.directory.v2.GetRelationTypeResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.RelationType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.RelationType}
 */
proto.aserto.directory.v2.GetRelationTypeResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.RelationType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.GetRelationTypeResponse} returns this
 */
proto.aserto.directory.v2.GetRelationTypeResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
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
proto.aserto.directory.v2.SetRelationTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.SetRelationTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.SetRelationTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetRelationTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    relationType: (f = msg.getRelationType()) && aserto_directory_v2_relation_pb.RelationType.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.SetRelationTypeRequest}
 */
proto.aserto.directory.v2.SetRelationTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.SetRelationTypeRequest;
  return proto.aserto.directory.v2.SetRelationTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.SetRelationTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.SetRelationTypeRequest}
 */
proto.aserto.directory.v2.SetRelationTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_relation_pb.RelationType;
      reader.readMessage(value,aserto_directory_v2_relation_pb.RelationType.deserializeBinaryFromReader);
      msg.setRelationType(value);
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
proto.aserto.directory.v2.SetRelationTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.SetRelationTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.SetRelationTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetRelationTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRelationType();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      aserto_directory_v2_relation_pb.RelationType.serializeBinaryToWriter
    );
  }
};


/**
 * optional RelationType relation_type = 1;
 * @return {?proto.aserto.directory.v2.RelationType}
 */
proto.aserto.directory.v2.SetRelationTypeRequest.prototype.getRelationType = function() {
  return /** @type{?proto.aserto.directory.v2.RelationType} */ (
    jspb.Message.getWrapperField(this, aserto_directory_v2_relation_pb.RelationType, 1));
};


/**
 * @param {?proto.aserto.directory.v2.RelationType|undefined} value
 * @return {!proto.aserto.directory.v2.SetRelationTypeRequest} returns this
*/
proto.aserto.directory.v2.SetRelationTypeRequest.prototype.setRelationType = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.SetRelationTypeRequest} returns this
 */
proto.aserto.directory.v2.SetRelationTypeRequest.prototype.clearRelationType = function() {
  return this.setRelationType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.SetRelationTypeRequest.prototype.hasRelationType = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.SetRelationTypeResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.SetRelationTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.SetRelationTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.SetRelationTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetRelationTypeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_relation_pb.RelationType.toObject, includeInstance)
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
 * @return {!proto.aserto.directory.v2.SetRelationTypeResponse}
 */
proto.aserto.directory.v2.SetRelationTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.SetRelationTypeResponse;
  return proto.aserto.directory.v2.SetRelationTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.SetRelationTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.SetRelationTypeResponse}
 */
proto.aserto.directory.v2.SetRelationTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_relation_pb.RelationType;
      reader.readMessage(value,aserto_directory_v2_relation_pb.RelationType.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.aserto.directory.v2.SetRelationTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.SetRelationTypeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.SetRelationTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetRelationTypeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_relation_pb.RelationType.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RelationType results = 1;
 * @return {!Array<!proto.aserto.directory.v2.RelationType>}
 */
proto.aserto.directory.v2.SetRelationTypeResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.RelationType>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_relation_pb.RelationType, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.RelationType>} value
 * @return {!proto.aserto.directory.v2.SetRelationTypeResponse} returns this
*/
proto.aserto.directory.v2.SetRelationTypeResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.RelationType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.RelationType}
 */
proto.aserto.directory.v2.SetRelationTypeResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.RelationType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.SetRelationTypeResponse} returns this
 */
proto.aserto.directory.v2.SetRelationTypeResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.aserto.directory.v2.DeleteRelationTypeRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.aserto.directory.v2.DeleteRelationTypeRequest.ParamCase = {
  PARAM_NOT_SET: 0,
  ID: 1,
  KEY: 2
};

/**
 * @return {proto.aserto.directory.v2.DeleteRelationTypeRequest.ParamCase}
 */
proto.aserto.directory.v2.DeleteRelationTypeRequest.prototype.getParamCase = function() {
  return /** @type {proto.aserto.directory.v2.DeleteRelationTypeRequest.ParamCase} */(jspb.Message.computeOneofCase(this, proto.aserto.directory.v2.DeleteRelationTypeRequest.oneofGroups_[0]));
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
proto.aserto.directory.v2.DeleteRelationTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.DeleteRelationTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.DeleteRelationTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteRelationTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    key: (f = msg.getKey()) && aserto_directory_v2_relation_pb.RelationTypeKey.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.DeleteRelationTypeRequest}
 */
proto.aserto.directory.v2.DeleteRelationTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.DeleteRelationTypeRequest;
  return proto.aserto.directory.v2.DeleteRelationTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.DeleteRelationTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.DeleteRelationTypeRequest}
 */
proto.aserto.directory.v2.DeleteRelationTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = new aserto_directory_v2_relation_pb.RelationTypeKey;
      reader.readMessage(value,aserto_directory_v2_relation_pb.RelationTypeKey.deserializeBinaryFromReader);
      msg.setKey(value);
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
proto.aserto.directory.v2.DeleteRelationTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.DeleteRelationTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.DeleteRelationTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteRelationTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      aserto_directory_v2_relation_pb.RelationTypeKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.aserto.directory.v2.DeleteRelationTypeRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.DeleteRelationTypeRequest} returns this
 */
proto.aserto.directory.v2.DeleteRelationTypeRequest.prototype.setId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.aserto.directory.v2.DeleteRelationTypeRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aserto.directory.v2.DeleteRelationTypeRequest} returns this
 */
proto.aserto.directory.v2.DeleteRelationTypeRequest.prototype.clearId = function() {
  return jspb.Message.setOneofField(this, 1, proto.aserto.directory.v2.DeleteRelationTypeRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.DeleteRelationTypeRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RelationTypeKey key = 2;
 * @return {?proto.aserto.directory.v2.RelationTypeKey}
 */
proto.aserto.directory.v2.DeleteRelationTypeRequest.prototype.getKey = function() {
  return /** @type{?proto.aserto.directory.v2.RelationTypeKey} */ (
    jspb.Message.getWrapperField(this, aserto_directory_v2_relation_pb.RelationTypeKey, 2));
};


/**
 * @param {?proto.aserto.directory.v2.RelationTypeKey|undefined} value
 * @return {!proto.aserto.directory.v2.DeleteRelationTypeRequest} returns this
*/
proto.aserto.directory.v2.DeleteRelationTypeRequest.prototype.setKey = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.aserto.directory.v2.DeleteRelationTypeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.DeleteRelationTypeRequest} returns this
 */
proto.aserto.directory.v2.DeleteRelationTypeRequest.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.DeleteRelationTypeRequest.prototype.hasKey = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.aserto.directory.v2.DeleteRelationTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.DeleteRelationTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.DeleteRelationTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteRelationTypeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && google_protobuf_empty_pb.Empty.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.DeleteRelationTypeResponse}
 */
proto.aserto.directory.v2.DeleteRelationTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.DeleteRelationTypeResponse;
  return proto.aserto.directory.v2.DeleteRelationTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.DeleteRelationTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.DeleteRelationTypeResponse}
 */
proto.aserto.directory.v2.DeleteRelationTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_empty_pb.Empty;
      reader.readMessage(value,google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
      msg.setResult(value);
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
proto.aserto.directory.v2.DeleteRelationTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.DeleteRelationTypeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.DeleteRelationTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteRelationTypeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_empty_pb.Empty.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Empty result = 1;
 * @return {?proto.google.protobuf.Empty}
 */
proto.aserto.directory.v2.DeleteRelationTypeResponse.prototype.getResult = function() {
  return /** @type{?proto.google.protobuf.Empty} */ (
    jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 1));
};


/**
 * @param {?proto.google.protobuf.Empty|undefined} value
 * @return {!proto.aserto.directory.v2.DeleteRelationTypeResponse} returns this
*/
proto.aserto.directory.v2.DeleteRelationTypeResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.DeleteRelationTypeResponse} returns this
 */
proto.aserto.directory.v2.DeleteRelationTypeResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.DeleteRelationTypeResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.aserto.directory.v2.ListRelationTypesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.ListRelationTypesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.ListRelationTypesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListRelationTypesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    page: (f = msg.getPage()) && aserto_api_v1_pagination_pb.PaginationRequest.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.ListRelationTypesRequest}
 */
proto.aserto.directory.v2.ListRelationTypesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.ListRelationTypesRequest;
  return proto.aserto.directory.v2.ListRelationTypesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.ListRelationTypesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.ListRelationTypesRequest}
 */
proto.aserto.directory.v2.ListRelationTypesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setObjectType(value);
      break;
    case 9:
      var value = new aserto_api_v1_pagination_pb.PaginationRequest;
      reader.readMessage(value,aserto_api_v1_pagination_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPage(value);
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
proto.aserto.directory.v2.ListRelationTypesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.ListRelationTypesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.ListRelationTypesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListRelationTypesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      aserto_api_v1_pagination_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 object_type = 1;
 * @return {number}
 */
proto.aserto.directory.v2.ListRelationTypesRequest.prototype.getObjectType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.ListRelationTypesRequest} returns this
 */
proto.aserto.directory.v2.ListRelationTypesRequest.prototype.setObjectType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aserto.directory.v2.ListRelationTypesRequest} returns this
 */
proto.aserto.directory.v2.ListRelationTypesRequest.prototype.clearObjectType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.ListRelationTypesRequest.prototype.hasObjectType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional aserto.api.v1.PaginationRequest page = 9;
 * @return {?proto.aserto.api.v1.PaginationRequest}
 */
proto.aserto.directory.v2.ListRelationTypesRequest.prototype.getPage = function() {
  return /** @type{?proto.aserto.api.v1.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, aserto_api_v1_pagination_pb.PaginationRequest, 9));
};


/**
 * @param {?proto.aserto.api.v1.PaginationRequest|undefined} value
 * @return {!proto.aserto.directory.v2.ListRelationTypesRequest} returns this
*/
proto.aserto.directory.v2.ListRelationTypesRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.ListRelationTypesRequest} returns this
 */
proto.aserto.directory.v2.ListRelationTypesRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.ListRelationTypesRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.ListRelationTypesResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.ListRelationTypesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.ListRelationTypesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.ListRelationTypesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListRelationTypesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_relation_pb.RelationType.toObject, includeInstance),
    page: (f = msg.getPage()) && aserto_api_v1_pagination_pb.PaginationResponse.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.ListRelationTypesResponse}
 */
proto.aserto.directory.v2.ListRelationTypesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.ListRelationTypesResponse;
  return proto.aserto.directory.v2.ListRelationTypesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.ListRelationTypesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.ListRelationTypesResponse}
 */
proto.aserto.directory.v2.ListRelationTypesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_relation_pb.RelationType;
      reader.readMessage(value,aserto_directory_v2_relation_pb.RelationType.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    case 9:
      var value = new aserto_api_v1_pagination_pb.PaginationResponse;
      reader.readMessage(value,aserto_api_v1_pagination_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPage(value);
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
proto.aserto.directory.v2.ListRelationTypesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.ListRelationTypesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.ListRelationTypesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListRelationTypesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_relation_pb.RelationType.serializeBinaryToWriter
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      aserto_api_v1_pagination_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RelationType results = 1;
 * @return {!Array<!proto.aserto.directory.v2.RelationType>}
 */
proto.aserto.directory.v2.ListRelationTypesResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.RelationType>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_relation_pb.RelationType, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.RelationType>} value
 * @return {!proto.aserto.directory.v2.ListRelationTypesResponse} returns this
*/
proto.aserto.directory.v2.ListRelationTypesResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.RelationType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.RelationType}
 */
proto.aserto.directory.v2.ListRelationTypesResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.RelationType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.ListRelationTypesResponse} returns this
 */
proto.aserto.directory.v2.ListRelationTypesResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};


/**
 * optional aserto.api.v1.PaginationResponse page = 9;
 * @return {?proto.aserto.api.v1.PaginationResponse}
 */
proto.aserto.directory.v2.ListRelationTypesResponse.prototype.getPage = function() {
  return /** @type{?proto.aserto.api.v1.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, aserto_api_v1_pagination_pb.PaginationResponse, 9));
};


/**
 * @param {?proto.aserto.api.v1.PaginationResponse|undefined} value
 * @return {!proto.aserto.directory.v2.ListRelationTypesResponse} returns this
*/
proto.aserto.directory.v2.ListRelationTypesResponse.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.ListRelationTypesResponse} returns this
 */
proto.aserto.directory.v2.ListRelationTypesResponse.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.ListRelationTypesResponse.prototype.hasPage = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.aserto.directory.v2.GetRelTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetRelTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetRelTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    objectType: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.aserto.directory.v2.GetRelTypeRequest}
 */
proto.aserto.directory.v2.GetRelTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetRelTypeRequest;
  return proto.aserto.directory.v2.GetRelTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetRelTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetRelTypeRequest}
 */
proto.aserto.directory.v2.GetRelTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectType(value);
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
proto.aserto.directory.v2.GetRelTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetRelTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetRelTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getObjectType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.aserto.directory.v2.GetRelTypeRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetRelTypeRequest} returns this
 */
proto.aserto.directory.v2.GetRelTypeRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string object_type = 2;
 * @return {string}
 */
proto.aserto.directory.v2.GetRelTypeRequest.prototype.getObjectType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetRelTypeRequest} returns this
 */
proto.aserto.directory.v2.GetRelTypeRequest.prototype.setObjectType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.aserto.directory.v2.GetRelTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetRelTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetRelTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelTypeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.aserto.directory.v2.GetRelTypeResponse}
 */
proto.aserto.directory.v2.GetRelTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetRelTypeResponse;
  return proto.aserto.directory.v2.GetRelTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetRelTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetRelTypeResponse}
 */
proto.aserto.directory.v2.GetRelTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
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
proto.aserto.directory.v2.GetRelTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetRelTypeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetRelTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelTypeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.aserto.directory.v2.GetRelTypeResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.GetRelTypeResponse} returns this
 */
proto.aserto.directory.v2.GetRelTypeResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.aserto.directory.v2.GetObjectRequest.oneofGroups_ = [[1,4]];

/**
 * @enum {number}
 */
proto.aserto.directory.v2.GetObjectRequest.ParamCase = {
  PARAM_NOT_SET: 0,
  ID: 1,
  KEY: 4
};

/**
 * @return {proto.aserto.directory.v2.GetObjectRequest.ParamCase}
 */
proto.aserto.directory.v2.GetObjectRequest.prototype.getParamCase = function() {
  return /** @type {proto.aserto.directory.v2.GetObjectRequest.ParamCase} */(jspb.Message.computeOneofCase(this, proto.aserto.directory.v2.GetObjectRequest.oneofGroups_[0]));
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
proto.aserto.directory.v2.GetObjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetObjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetObjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetObjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: (f = msg.getKey()) && aserto_directory_v2_object_pb.ObjectKey.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.GetObjectRequest}
 */
proto.aserto.directory.v2.GetObjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetObjectRequest;
  return proto.aserto.directory.v2.GetObjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetObjectRequest}
 */
proto.aserto.directory.v2.GetObjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = new aserto_directory_v2_object_pb.ObjectKey;
      reader.readMessage(value,aserto_directory_v2_object_pb.ObjectKey.deserializeBinaryFromReader);
      msg.setKey(value);
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
proto.aserto.directory.v2.GetObjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetObjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      aserto_directory_v2_object_pb.ObjectKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.aserto.directory.v2.GetObjectRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetObjectRequest} returns this
 */
proto.aserto.directory.v2.GetObjectRequest.prototype.setId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.aserto.directory.v2.GetObjectRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aserto.directory.v2.GetObjectRequest} returns this
 */
proto.aserto.directory.v2.GetObjectRequest.prototype.clearId = function() {
  return jspb.Message.setOneofField(this, 1, proto.aserto.directory.v2.GetObjectRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.GetObjectRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ObjectKey key = 4;
 * @return {?proto.aserto.directory.v2.ObjectKey}
 */
proto.aserto.directory.v2.GetObjectRequest.prototype.getKey = function() {
  return /** @type{?proto.aserto.directory.v2.ObjectKey} */ (
    jspb.Message.getWrapperField(this, aserto_directory_v2_object_pb.ObjectKey, 4));
};


/**
 * @param {?proto.aserto.directory.v2.ObjectKey|undefined} value
 * @return {!proto.aserto.directory.v2.GetObjectRequest} returns this
*/
proto.aserto.directory.v2.GetObjectRequest.prototype.setKey = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.aserto.directory.v2.GetObjectRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.GetObjectRequest} returns this
 */
proto.aserto.directory.v2.GetObjectRequest.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.GetObjectRequest.prototype.hasKey = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.GetObjectResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.GetObjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetObjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetObjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetObjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_object_pb.Object.toObject, includeInstance)
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
 * @return {!proto.aserto.directory.v2.GetObjectResponse}
 */
proto.aserto.directory.v2.GetObjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetObjectResponse;
  return proto.aserto.directory.v2.GetObjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetObjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetObjectResponse}
 */
proto.aserto.directory.v2.GetObjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_object_pb.Object;
      reader.readMessage(value,aserto_directory_v2_object_pb.Object.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.aserto.directory.v2.GetObjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetObjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetObjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetObjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_object_pb.Object.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Object results = 1;
 * @return {!Array<!proto.aserto.directory.v2.Object>}
 */
proto.aserto.directory.v2.GetObjectResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.Object>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_object_pb.Object, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.Object>} value
 * @return {!proto.aserto.directory.v2.GetObjectResponse} returns this
*/
proto.aserto.directory.v2.GetObjectResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.Object=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.Object}
 */
proto.aserto.directory.v2.GetObjectResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.Object, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.GetObjectResponse} returns this
 */
proto.aserto.directory.v2.GetObjectResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
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
proto.aserto.directory.v2.SetObjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.SetObjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.SetObjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetObjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    object: (f = msg.getObject()) && aserto_directory_v2_object_pb.Object.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.SetObjectRequest}
 */
proto.aserto.directory.v2.SetObjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.SetObjectRequest;
  return proto.aserto.directory.v2.SetObjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.SetObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.SetObjectRequest}
 */
proto.aserto.directory.v2.SetObjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_object_pb.Object;
      reader.readMessage(value,aserto_directory_v2_object_pb.Object.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.aserto.directory.v2.SetObjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.SetObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.SetObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetObjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      aserto_directory_v2_object_pb.Object.serializeBinaryToWriter
    );
  }
};


/**
 * optional Object object = 1;
 * @return {?proto.aserto.directory.v2.Object}
 */
proto.aserto.directory.v2.SetObjectRequest.prototype.getObject = function() {
  return /** @type{?proto.aserto.directory.v2.Object} */ (
    jspb.Message.getWrapperField(this, aserto_directory_v2_object_pb.Object, 1));
};


/**
 * @param {?proto.aserto.directory.v2.Object|undefined} value
 * @return {!proto.aserto.directory.v2.SetObjectRequest} returns this
*/
proto.aserto.directory.v2.SetObjectRequest.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.SetObjectRequest} returns this
 */
proto.aserto.directory.v2.SetObjectRequest.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.SetObjectRequest.prototype.hasObject = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.SetObjectResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.SetObjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.SetObjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.SetObjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetObjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_object_pb.Object.toObject, includeInstance)
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
 * @return {!proto.aserto.directory.v2.SetObjectResponse}
 */
proto.aserto.directory.v2.SetObjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.SetObjectResponse;
  return proto.aserto.directory.v2.SetObjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.SetObjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.SetObjectResponse}
 */
proto.aserto.directory.v2.SetObjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_object_pb.Object;
      reader.readMessage(value,aserto_directory_v2_object_pb.Object.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.aserto.directory.v2.SetObjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.SetObjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.SetObjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetObjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_object_pb.Object.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Object results = 1;
 * @return {!Array<!proto.aserto.directory.v2.Object>}
 */
proto.aserto.directory.v2.SetObjectResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.Object>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_object_pb.Object, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.Object>} value
 * @return {!proto.aserto.directory.v2.SetObjectResponse} returns this
*/
proto.aserto.directory.v2.SetObjectResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.Object=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.Object}
 */
proto.aserto.directory.v2.SetObjectResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.Object, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.SetObjectResponse} returns this
 */
proto.aserto.directory.v2.SetObjectResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.aserto.directory.v2.DeleteObjectRequest.oneofGroups_ = [[1,4]];

/**
 * @enum {number}
 */
proto.aserto.directory.v2.DeleteObjectRequest.ParamCase = {
  PARAM_NOT_SET: 0,
  ID: 1,
  KEY: 4
};

/**
 * @return {proto.aserto.directory.v2.DeleteObjectRequest.ParamCase}
 */
proto.aserto.directory.v2.DeleteObjectRequest.prototype.getParamCase = function() {
  return /** @type {proto.aserto.directory.v2.DeleteObjectRequest.ParamCase} */(jspb.Message.computeOneofCase(this, proto.aserto.directory.v2.DeleteObjectRequest.oneofGroups_[0]));
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
proto.aserto.directory.v2.DeleteObjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.DeleteObjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.DeleteObjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteObjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: (f = msg.getKey()) && aserto_directory_v2_object_pb.ObjectKey.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.DeleteObjectRequest}
 */
proto.aserto.directory.v2.DeleteObjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.DeleteObjectRequest;
  return proto.aserto.directory.v2.DeleteObjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.DeleteObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.DeleteObjectRequest}
 */
proto.aserto.directory.v2.DeleteObjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = new aserto_directory_v2_object_pb.ObjectKey;
      reader.readMessage(value,aserto_directory_v2_object_pb.ObjectKey.deserializeBinaryFromReader);
      msg.setKey(value);
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
proto.aserto.directory.v2.DeleteObjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.DeleteObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.DeleteObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteObjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      aserto_directory_v2_object_pb.ObjectKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.aserto.directory.v2.DeleteObjectRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.DeleteObjectRequest} returns this
 */
proto.aserto.directory.v2.DeleteObjectRequest.prototype.setId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.aserto.directory.v2.DeleteObjectRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aserto.directory.v2.DeleteObjectRequest} returns this
 */
proto.aserto.directory.v2.DeleteObjectRequest.prototype.clearId = function() {
  return jspb.Message.setOneofField(this, 1, proto.aserto.directory.v2.DeleteObjectRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.DeleteObjectRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ObjectKey key = 4;
 * @return {?proto.aserto.directory.v2.ObjectKey}
 */
proto.aserto.directory.v2.DeleteObjectRequest.prototype.getKey = function() {
  return /** @type{?proto.aserto.directory.v2.ObjectKey} */ (
    jspb.Message.getWrapperField(this, aserto_directory_v2_object_pb.ObjectKey, 4));
};


/**
 * @param {?proto.aserto.directory.v2.ObjectKey|undefined} value
 * @return {!proto.aserto.directory.v2.DeleteObjectRequest} returns this
*/
proto.aserto.directory.v2.DeleteObjectRequest.prototype.setKey = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.aserto.directory.v2.DeleteObjectRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.DeleteObjectRequest} returns this
 */
proto.aserto.directory.v2.DeleteObjectRequest.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.DeleteObjectRequest.prototype.hasKey = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.aserto.directory.v2.DeleteObjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.DeleteObjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.DeleteObjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteObjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && google_protobuf_empty_pb.Empty.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.DeleteObjectResponse}
 */
proto.aserto.directory.v2.DeleteObjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.DeleteObjectResponse;
  return proto.aserto.directory.v2.DeleteObjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.DeleteObjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.DeleteObjectResponse}
 */
proto.aserto.directory.v2.DeleteObjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_empty_pb.Empty;
      reader.readMessage(value,google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
      msg.setResult(value);
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
proto.aserto.directory.v2.DeleteObjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.DeleteObjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.DeleteObjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteObjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_empty_pb.Empty.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Empty result = 1;
 * @return {?proto.google.protobuf.Empty}
 */
proto.aserto.directory.v2.DeleteObjectResponse.prototype.getResult = function() {
  return /** @type{?proto.google.protobuf.Empty} */ (
    jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 1));
};


/**
 * @param {?proto.google.protobuf.Empty|undefined} value
 * @return {!proto.aserto.directory.v2.DeleteObjectResponse} returns this
*/
proto.aserto.directory.v2.DeleteObjectResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.DeleteObjectResponse} returns this
 */
proto.aserto.directory.v2.DeleteObjectResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.DeleteObjectResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.aserto.directory.v2.ListObjectsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.ListObjectsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.ListObjectsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListObjectsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    page: (f = msg.getPage()) && aserto_api_v1_pagination_pb.PaginationRequest.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.ListObjectsRequest}
 */
proto.aserto.directory.v2.ListObjectsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.ListObjectsRequest;
  return proto.aserto.directory.v2.ListObjectsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.ListObjectsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.ListObjectsRequest}
 */
proto.aserto.directory.v2.ListObjectsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 9:
      var value = new aserto_api_v1_pagination_pb.PaginationRequest;
      reader.readMessage(value,aserto_api_v1_pagination_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPage(value);
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
proto.aserto.directory.v2.ListObjectsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.ListObjectsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.ListObjectsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListObjectsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      aserto_api_v1_pagination_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 type = 1;
 * @return {number}
 */
proto.aserto.directory.v2.ListObjectsRequest.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.ListObjectsRequest} returns this
 */
proto.aserto.directory.v2.ListObjectsRequest.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aserto.directory.v2.ListObjectsRequest} returns this
 */
proto.aserto.directory.v2.ListObjectsRequest.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.ListObjectsRequest.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional aserto.api.v1.PaginationRequest page = 9;
 * @return {?proto.aserto.api.v1.PaginationRequest}
 */
proto.aserto.directory.v2.ListObjectsRequest.prototype.getPage = function() {
  return /** @type{?proto.aserto.api.v1.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, aserto_api_v1_pagination_pb.PaginationRequest, 9));
};


/**
 * @param {?proto.aserto.api.v1.PaginationRequest|undefined} value
 * @return {!proto.aserto.directory.v2.ListObjectsRequest} returns this
*/
proto.aserto.directory.v2.ListObjectsRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.ListObjectsRequest} returns this
 */
proto.aserto.directory.v2.ListObjectsRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.ListObjectsRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.ListObjectsResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.ListObjectsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.ListObjectsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.ListObjectsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListObjectsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_object_pb.Object.toObject, includeInstance),
    page: (f = msg.getPage()) && aserto_api_v1_pagination_pb.PaginationResponse.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.ListObjectsResponse}
 */
proto.aserto.directory.v2.ListObjectsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.ListObjectsResponse;
  return proto.aserto.directory.v2.ListObjectsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.ListObjectsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.ListObjectsResponse}
 */
proto.aserto.directory.v2.ListObjectsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_object_pb.Object;
      reader.readMessage(value,aserto_directory_v2_object_pb.Object.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    case 9:
      var value = new aserto_api_v1_pagination_pb.PaginationResponse;
      reader.readMessage(value,aserto_api_v1_pagination_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPage(value);
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
proto.aserto.directory.v2.ListObjectsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.ListObjectsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.ListObjectsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListObjectsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_object_pb.Object.serializeBinaryToWriter
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      aserto_api_v1_pagination_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Object results = 1;
 * @return {!Array<!proto.aserto.directory.v2.Object>}
 */
proto.aserto.directory.v2.ListObjectsResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.Object>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_object_pb.Object, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.Object>} value
 * @return {!proto.aserto.directory.v2.ListObjectsResponse} returns this
*/
proto.aserto.directory.v2.ListObjectsResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.Object=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.Object}
 */
proto.aserto.directory.v2.ListObjectsResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.Object, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.ListObjectsResponse} returns this
 */
proto.aserto.directory.v2.ListObjectsResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};


/**
 * optional aserto.api.v1.PaginationResponse page = 9;
 * @return {?proto.aserto.api.v1.PaginationResponse}
 */
proto.aserto.directory.v2.ListObjectsResponse.prototype.getPage = function() {
  return /** @type{?proto.aserto.api.v1.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, aserto_api_v1_pagination_pb.PaginationResponse, 9));
};


/**
 * @param {?proto.aserto.api.v1.PaginationResponse|undefined} value
 * @return {!proto.aserto.directory.v2.ListObjectsResponse} returns this
*/
proto.aserto.directory.v2.ListObjectsResponse.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.ListObjectsResponse} returns this
 */
proto.aserto.directory.v2.ListObjectsResponse.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.ListObjectsResponse.prototype.hasPage = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.aserto.directory.v2.GetObjRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetObjRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetObjRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetObjRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    typeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.aserto.directory.v2.GetObjRequest}
 */
proto.aserto.directory.v2.GetObjRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetObjRequest;
  return proto.aserto.directory.v2.GetObjRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetObjRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetObjRequest}
 */
proto.aserto.directory.v2.GetObjRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.aserto.directory.v2.GetObjRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetObjRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetObjRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetObjRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string type_name = 2;
 * @return {string}
 */
proto.aserto.directory.v2.GetObjRequest.prototype.getTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetObjRequest} returns this
 */
proto.aserto.directory.v2.GetObjRequest.prototype.setTypeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.aserto.directory.v2.GetObjRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetObjRequest} returns this
 */
proto.aserto.directory.v2.GetObjRequest.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.GetObjResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.GetObjResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetObjResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetObjResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetObjResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_object_pb.Object.toObject, includeInstance)
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
 * @return {!proto.aserto.directory.v2.GetObjResponse}
 */
proto.aserto.directory.v2.GetObjResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetObjResponse;
  return proto.aserto.directory.v2.GetObjResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetObjResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetObjResponse}
 */
proto.aserto.directory.v2.GetObjResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_object_pb.Object;
      reader.readMessage(value,aserto_directory_v2_object_pb.Object.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.aserto.directory.v2.GetObjResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetObjResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetObjResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetObjResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_object_pb.Object.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Object results = 1;
 * @return {!Array<!proto.aserto.directory.v2.Object>}
 */
proto.aserto.directory.v2.GetObjResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.Object>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_object_pb.Object, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.Object>} value
 * @return {!proto.aserto.directory.v2.GetObjResponse} returns this
*/
proto.aserto.directory.v2.GetObjResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.Object=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.Object}
 */
proto.aserto.directory.v2.GetObjResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.Object, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.GetObjResponse} returns this
 */
proto.aserto.directory.v2.GetObjResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
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
proto.aserto.directory.v2.GetRelationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetRelationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetRelationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourceType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sourceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    relation: jspb.Message.getFieldWithDefault(msg, 3, 0),
    targetType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    targetId: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.aserto.directory.v2.GetRelationRequest}
 */
proto.aserto.directory.v2.GetRelationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetRelationRequest;
  return proto.aserto.directory.v2.GetRelationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetRelationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetRelationRequest}
 */
proto.aserto.directory.v2.GetRelationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSourceType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRelation(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTargetType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetId(value);
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
proto.aserto.directory.v2.GetRelationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetRelationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetRelationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourceType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSourceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRelation();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTargetType();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTargetId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int32 source_type = 1;
 * @return {number}
 */
proto.aserto.directory.v2.GetRelationRequest.prototype.getSourceType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.GetRelationRequest} returns this
 */
proto.aserto.directory.v2.GetRelationRequest.prototype.setSourceType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string source_id = 2;
 * @return {string}
 */
proto.aserto.directory.v2.GetRelationRequest.prototype.getSourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetRelationRequest} returns this
 */
proto.aserto.directory.v2.GetRelationRequest.prototype.setSourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 relation = 3;
 * @return {number}
 */
proto.aserto.directory.v2.GetRelationRequest.prototype.getRelation = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.GetRelationRequest} returns this
 */
proto.aserto.directory.v2.GetRelationRequest.prototype.setRelation = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 target_type = 4;
 * @return {number}
 */
proto.aserto.directory.v2.GetRelationRequest.prototype.getTargetType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.GetRelationRequest} returns this
 */
proto.aserto.directory.v2.GetRelationRequest.prototype.setTargetType = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string target_id = 5;
 * @return {string}
 */
proto.aserto.directory.v2.GetRelationRequest.prototype.getTargetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetRelationRequest} returns this
 */
proto.aserto.directory.v2.GetRelationRequest.prototype.setTargetId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.GetRelationResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.GetRelationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetRelationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetRelationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_relation_pb.Relation.toObject, includeInstance)
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
 * @return {!proto.aserto.directory.v2.GetRelationResponse}
 */
proto.aserto.directory.v2.GetRelationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetRelationResponse;
  return proto.aserto.directory.v2.GetRelationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetRelationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetRelationResponse}
 */
proto.aserto.directory.v2.GetRelationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_relation_pb.Relation;
      reader.readMessage(value,aserto_directory_v2_relation_pb.Relation.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.aserto.directory.v2.GetRelationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetRelationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetRelationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_relation_pb.Relation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Relation results = 1;
 * @return {!Array<!proto.aserto.directory.v2.Relation>}
 */
proto.aserto.directory.v2.GetRelationResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.Relation>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_relation_pb.Relation, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.Relation>} value
 * @return {!proto.aserto.directory.v2.GetRelationResponse} returns this
*/
proto.aserto.directory.v2.GetRelationResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.Relation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.Relation}
 */
proto.aserto.directory.v2.GetRelationResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.Relation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.GetRelationResponse} returns this
 */
proto.aserto.directory.v2.GetRelationResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
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
proto.aserto.directory.v2.SetRelationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.SetRelationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.SetRelationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetRelationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    relation: (f = msg.getRelation()) && aserto_directory_v2_relation_pb.Relation.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.SetRelationRequest}
 */
proto.aserto.directory.v2.SetRelationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.SetRelationRequest;
  return proto.aserto.directory.v2.SetRelationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.SetRelationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.SetRelationRequest}
 */
proto.aserto.directory.v2.SetRelationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_relation_pb.Relation;
      reader.readMessage(value,aserto_directory_v2_relation_pb.Relation.deserializeBinaryFromReader);
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
proto.aserto.directory.v2.SetRelationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.SetRelationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.SetRelationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetRelationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRelation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      aserto_directory_v2_relation_pb.Relation.serializeBinaryToWriter
    );
  }
};


/**
 * optional Relation relation = 1;
 * @return {?proto.aserto.directory.v2.Relation}
 */
proto.aserto.directory.v2.SetRelationRequest.prototype.getRelation = function() {
  return /** @type{?proto.aserto.directory.v2.Relation} */ (
    jspb.Message.getWrapperField(this, aserto_directory_v2_relation_pb.Relation, 1));
};


/**
 * @param {?proto.aserto.directory.v2.Relation|undefined} value
 * @return {!proto.aserto.directory.v2.SetRelationRequest} returns this
*/
proto.aserto.directory.v2.SetRelationRequest.prototype.setRelation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.SetRelationRequest} returns this
 */
proto.aserto.directory.v2.SetRelationRequest.prototype.clearRelation = function() {
  return this.setRelation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.SetRelationRequest.prototype.hasRelation = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.SetRelationResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.SetRelationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.SetRelationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.SetRelationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetRelationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_relation_pb.Relation.toObject, includeInstance)
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
 * @return {!proto.aserto.directory.v2.SetRelationResponse}
 */
proto.aserto.directory.v2.SetRelationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.SetRelationResponse;
  return proto.aserto.directory.v2.SetRelationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.SetRelationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.SetRelationResponse}
 */
proto.aserto.directory.v2.SetRelationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_relation_pb.Relation;
      reader.readMessage(value,aserto_directory_v2_relation_pb.Relation.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.aserto.directory.v2.SetRelationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.SetRelationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.SetRelationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetRelationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_relation_pb.Relation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Relation results = 1;
 * @return {!Array<!proto.aserto.directory.v2.Relation>}
 */
proto.aserto.directory.v2.SetRelationResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.Relation>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_relation_pb.Relation, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.Relation>} value
 * @return {!proto.aserto.directory.v2.SetRelationResponse} returns this
*/
proto.aserto.directory.v2.SetRelationResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.Relation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.Relation}
 */
proto.aserto.directory.v2.SetRelationResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.Relation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.SetRelationResponse} returns this
 */
proto.aserto.directory.v2.SetRelationResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
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
proto.aserto.directory.v2.DeleteRelationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.DeleteRelationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.DeleteRelationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteRelationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourceType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sourceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    relation: jspb.Message.getFieldWithDefault(msg, 3, 0),
    targetType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    targetId: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.aserto.directory.v2.DeleteRelationRequest}
 */
proto.aserto.directory.v2.DeleteRelationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.DeleteRelationRequest;
  return proto.aserto.directory.v2.DeleteRelationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.DeleteRelationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.DeleteRelationRequest}
 */
proto.aserto.directory.v2.DeleteRelationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSourceType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRelation(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTargetType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetId(value);
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
proto.aserto.directory.v2.DeleteRelationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.DeleteRelationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.DeleteRelationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteRelationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourceType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSourceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRelation();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTargetType();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTargetId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int32 source_type = 1;
 * @return {number}
 */
proto.aserto.directory.v2.DeleteRelationRequest.prototype.getSourceType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.DeleteRelationRequest} returns this
 */
proto.aserto.directory.v2.DeleteRelationRequest.prototype.setSourceType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string source_id = 2;
 * @return {string}
 */
proto.aserto.directory.v2.DeleteRelationRequest.prototype.getSourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.DeleteRelationRequest} returns this
 */
proto.aserto.directory.v2.DeleteRelationRequest.prototype.setSourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 relation = 3;
 * @return {number}
 */
proto.aserto.directory.v2.DeleteRelationRequest.prototype.getRelation = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.DeleteRelationRequest} returns this
 */
proto.aserto.directory.v2.DeleteRelationRequest.prototype.setRelation = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 target_type = 4;
 * @return {number}
 */
proto.aserto.directory.v2.DeleteRelationRequest.prototype.getTargetType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.DeleteRelationRequest} returns this
 */
proto.aserto.directory.v2.DeleteRelationRequest.prototype.setTargetType = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string target_id = 5;
 * @return {string}
 */
proto.aserto.directory.v2.DeleteRelationRequest.prototype.getTargetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.DeleteRelationRequest} returns this
 */
proto.aserto.directory.v2.DeleteRelationRequest.prototype.setTargetId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.aserto.directory.v2.DeleteRelationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.DeleteRelationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.DeleteRelationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteRelationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && google_protobuf_empty_pb.Empty.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.DeleteRelationResponse}
 */
proto.aserto.directory.v2.DeleteRelationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.DeleteRelationResponse;
  return proto.aserto.directory.v2.DeleteRelationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.DeleteRelationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.DeleteRelationResponse}
 */
proto.aserto.directory.v2.DeleteRelationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_empty_pb.Empty;
      reader.readMessage(value,google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
      msg.setResult(value);
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
proto.aserto.directory.v2.DeleteRelationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.DeleteRelationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.DeleteRelationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteRelationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_empty_pb.Empty.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Empty result = 1;
 * @return {?proto.google.protobuf.Empty}
 */
proto.aserto.directory.v2.DeleteRelationResponse.prototype.getResult = function() {
  return /** @type{?proto.google.protobuf.Empty} */ (
    jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 1));
};


/**
 * @param {?proto.google.protobuf.Empty|undefined} value
 * @return {!proto.aserto.directory.v2.DeleteRelationResponse} returns this
*/
proto.aserto.directory.v2.DeleteRelationResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.DeleteRelationResponse} returns this
 */
proto.aserto.directory.v2.DeleteRelationResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.DeleteRelationResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.aserto.directory.v2.ListRelationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.ListRelationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.ListRelationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListRelationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourceType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sourceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    relation: jspb.Message.getFieldWithDefault(msg, 3, 0),
    targetType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    targetId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    page: (f = msg.getPage()) && aserto_api_v1_pagination_pb.PaginationRequest.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.ListRelationsRequest}
 */
proto.aserto.directory.v2.ListRelationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.ListRelationsRequest;
  return proto.aserto.directory.v2.ListRelationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.ListRelationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.ListRelationsRequest}
 */
proto.aserto.directory.v2.ListRelationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSourceType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRelation(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTargetType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetId(value);
      break;
    case 9:
      var value = new aserto_api_v1_pagination_pb.PaginationRequest;
      reader.readMessage(value,aserto_api_v1_pagination_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPage(value);
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
proto.aserto.directory.v2.ListRelationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.ListRelationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.ListRelationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListRelationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourceType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSourceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRelation();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTargetType();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTargetId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      aserto_api_v1_pagination_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 source_type = 1;
 * @return {number}
 */
proto.aserto.directory.v2.ListRelationsRequest.prototype.getSourceType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.ListRelationsRequest} returns this
 */
proto.aserto.directory.v2.ListRelationsRequest.prototype.setSourceType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string source_id = 2;
 * @return {string}
 */
proto.aserto.directory.v2.ListRelationsRequest.prototype.getSourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.ListRelationsRequest} returns this
 */
proto.aserto.directory.v2.ListRelationsRequest.prototype.setSourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 relation = 3;
 * @return {number}
 */
proto.aserto.directory.v2.ListRelationsRequest.prototype.getRelation = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.ListRelationsRequest} returns this
 */
proto.aserto.directory.v2.ListRelationsRequest.prototype.setRelation = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 target_type = 4;
 * @return {number}
 */
proto.aserto.directory.v2.ListRelationsRequest.prototype.getTargetType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.ListRelationsRequest} returns this
 */
proto.aserto.directory.v2.ListRelationsRequest.prototype.setTargetType = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string target_id = 5;
 * @return {string}
 */
proto.aserto.directory.v2.ListRelationsRequest.prototype.getTargetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.ListRelationsRequest} returns this
 */
proto.aserto.directory.v2.ListRelationsRequest.prototype.setTargetId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional aserto.api.v1.PaginationRequest page = 9;
 * @return {?proto.aserto.api.v1.PaginationRequest}
 */
proto.aserto.directory.v2.ListRelationsRequest.prototype.getPage = function() {
  return /** @type{?proto.aserto.api.v1.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, aserto_api_v1_pagination_pb.PaginationRequest, 9));
};


/**
 * @param {?proto.aserto.api.v1.PaginationRequest|undefined} value
 * @return {!proto.aserto.directory.v2.ListRelationsRequest} returns this
*/
proto.aserto.directory.v2.ListRelationsRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.ListRelationsRequest} returns this
 */
proto.aserto.directory.v2.ListRelationsRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.ListRelationsRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.ListRelationsResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.ListRelationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.ListRelationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.ListRelationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListRelationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_relation_pb.Relation.toObject, includeInstance),
    page: (f = msg.getPage()) && aserto_api_v1_pagination_pb.PaginationResponse.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.ListRelationsResponse}
 */
proto.aserto.directory.v2.ListRelationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.ListRelationsResponse;
  return proto.aserto.directory.v2.ListRelationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.ListRelationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.ListRelationsResponse}
 */
proto.aserto.directory.v2.ListRelationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_relation_pb.Relation;
      reader.readMessage(value,aserto_directory_v2_relation_pb.Relation.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    case 2:
      var value = new aserto_api_v1_pagination_pb.PaginationResponse;
      reader.readMessage(value,aserto_api_v1_pagination_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPage(value);
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
proto.aserto.directory.v2.ListRelationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.ListRelationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.ListRelationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListRelationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_relation_pb.Relation.serializeBinaryToWriter
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      aserto_api_v1_pagination_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Relation results = 1;
 * @return {!Array<!proto.aserto.directory.v2.Relation>}
 */
proto.aserto.directory.v2.ListRelationsResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.Relation>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_relation_pb.Relation, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.Relation>} value
 * @return {!proto.aserto.directory.v2.ListRelationsResponse} returns this
*/
proto.aserto.directory.v2.ListRelationsResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.Relation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.Relation}
 */
proto.aserto.directory.v2.ListRelationsResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.Relation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.ListRelationsResponse} returns this
 */
proto.aserto.directory.v2.ListRelationsResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};


/**
 * optional aserto.api.v1.PaginationResponse page = 2;
 * @return {?proto.aserto.api.v1.PaginationResponse}
 */
proto.aserto.directory.v2.ListRelationsResponse.prototype.getPage = function() {
  return /** @type{?proto.aserto.api.v1.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, aserto_api_v1_pagination_pb.PaginationResponse, 2));
};


/**
 * @param {?proto.aserto.api.v1.PaginationResponse|undefined} value
 * @return {!proto.aserto.directory.v2.ListRelationsResponse} returns this
*/
proto.aserto.directory.v2.ListRelationsResponse.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.ListRelationsResponse} returns this
 */
proto.aserto.directory.v2.ListRelationsResponse.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.ListRelationsResponse.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.aserto.directory.v2.GetRelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetRelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetRelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourceType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    relation: jspb.Message.getFieldWithDefault(msg, 3, ""),
    targetType: jspb.Message.getFieldWithDefault(msg, 4, ""),
    targetId: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.aserto.directory.v2.GetRelRequest}
 */
proto.aserto.directory.v2.GetRelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetRelRequest;
  return proto.aserto.directory.v2.GetRelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetRelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetRelRequest}
 */
proto.aserto.directory.v2.GetRelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelation(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetId(value);
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
proto.aserto.directory.v2.GetRelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetRelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetRelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourceType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRelation();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTargetType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTargetId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string source_type = 1;
 * @return {string}
 */
proto.aserto.directory.v2.GetRelRequest.prototype.getSourceType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetRelRequest} returns this
 */
proto.aserto.directory.v2.GetRelRequest.prototype.setSourceType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string source_id = 2;
 * @return {string}
 */
proto.aserto.directory.v2.GetRelRequest.prototype.getSourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetRelRequest} returns this
 */
proto.aserto.directory.v2.GetRelRequest.prototype.setSourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string relation = 3;
 * @return {string}
 */
proto.aserto.directory.v2.GetRelRequest.prototype.getRelation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetRelRequest} returns this
 */
proto.aserto.directory.v2.GetRelRequest.prototype.setRelation = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string target_type = 4;
 * @return {string}
 */
proto.aserto.directory.v2.GetRelRequest.prototype.getTargetType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetRelRequest} returns this
 */
proto.aserto.directory.v2.GetRelRequest.prototype.setTargetType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string target_id = 5;
 * @return {string}
 */
proto.aserto.directory.v2.GetRelRequest.prototype.getTargetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetRelRequest} returns this
 */
proto.aserto.directory.v2.GetRelRequest.prototype.setTargetId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.GetRelResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.GetRelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetRelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetRelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_relation_pb.Relation.toObject, includeInstance)
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
 * @return {!proto.aserto.directory.v2.GetRelResponse}
 */
proto.aserto.directory.v2.GetRelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetRelResponse;
  return proto.aserto.directory.v2.GetRelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetRelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetRelResponse}
 */
proto.aserto.directory.v2.GetRelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_relation_pb.Relation;
      reader.readMessage(value,aserto_directory_v2_relation_pb.Relation.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.aserto.directory.v2.GetRelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetRelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetRelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_relation_pb.Relation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Relation results = 1;
 * @return {!Array<!proto.aserto.directory.v2.Relation>}
 */
proto.aserto.directory.v2.GetRelResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.Relation>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_relation_pb.Relation, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.Relation>} value
 * @return {!proto.aserto.directory.v2.GetRelResponse} returns this
*/
proto.aserto.directory.v2.GetRelResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.Relation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.Relation}
 */
proto.aserto.directory.v2.GetRelResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.Relation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.GetRelResponse} returns this
 */
proto.aserto.directory.v2.GetRelResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.aserto.directory.v2.GetPermissionRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.aserto.directory.v2.GetPermissionRequest.ParamCase = {
  PARAM_NOT_SET: 0,
  ID: 1,
  PERMISSION: 2
};

/**
 * @return {proto.aserto.directory.v2.GetPermissionRequest.ParamCase}
 */
proto.aserto.directory.v2.GetPermissionRequest.prototype.getParamCase = function() {
  return /** @type {proto.aserto.directory.v2.GetPermissionRequest.ParamCase} */(jspb.Message.computeOneofCase(this, proto.aserto.directory.v2.GetPermissionRequest.oneofGroups_[0]));
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
proto.aserto.directory.v2.GetPermissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetPermissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetPermissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetPermissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    permission: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.aserto.directory.v2.GetPermissionRequest}
 */
proto.aserto.directory.v2.GetPermissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetPermissionRequest;
  return proto.aserto.directory.v2.GetPermissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetPermissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetPermissionRequest}
 */
proto.aserto.directory.v2.GetPermissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
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
proto.aserto.directory.v2.GetPermissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetPermissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetPermissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetPermissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.aserto.directory.v2.GetPermissionRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetPermissionRequest} returns this
 */
proto.aserto.directory.v2.GetPermissionRequest.prototype.setId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.aserto.directory.v2.GetPermissionRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aserto.directory.v2.GetPermissionRequest} returns this
 */
proto.aserto.directory.v2.GetPermissionRequest.prototype.clearId = function() {
  return jspb.Message.setOneofField(this, 1, proto.aserto.directory.v2.GetPermissionRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.GetPermissionRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string permission = 2;
 * @return {string}
 */
proto.aserto.directory.v2.GetPermissionRequest.prototype.getPermission = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetPermissionRequest} returns this
 */
proto.aserto.directory.v2.GetPermissionRequest.prototype.setPermission = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.aserto.directory.v2.GetPermissionRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aserto.directory.v2.GetPermissionRequest} returns this
 */
proto.aserto.directory.v2.GetPermissionRequest.prototype.clearPermission = function() {
  return jspb.Message.setOneofField(this, 2, proto.aserto.directory.v2.GetPermissionRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.GetPermissionRequest.prototype.hasPermission = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.GetPermissionResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.GetPermissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetPermissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetPermissionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetPermissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_relation_pb.Permission.toObject, includeInstance)
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
 * @return {!proto.aserto.directory.v2.GetPermissionResponse}
 */
proto.aserto.directory.v2.GetPermissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetPermissionResponse;
  return proto.aserto.directory.v2.GetPermissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetPermissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetPermissionResponse}
 */
proto.aserto.directory.v2.GetPermissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_relation_pb.Permission;
      reader.readMessage(value,aserto_directory_v2_relation_pb.Permission.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.aserto.directory.v2.GetPermissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetPermissionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetPermissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetPermissionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_relation_pb.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Permission results = 1;
 * @return {!Array<!proto.aserto.directory.v2.Permission>}
 */
proto.aserto.directory.v2.GetPermissionResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_relation_pb.Permission, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.Permission>} value
 * @return {!proto.aserto.directory.v2.GetPermissionResponse} returns this
*/
proto.aserto.directory.v2.GetPermissionResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.Permission}
 */
proto.aserto.directory.v2.GetPermissionResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.GetPermissionResponse} returns this
 */
proto.aserto.directory.v2.GetPermissionResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
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
proto.aserto.directory.v2.SetPermissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.SetPermissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.SetPermissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetPermissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    permission: (f = msg.getPermission()) && aserto_directory_v2_relation_pb.Permission.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.SetPermissionRequest}
 */
proto.aserto.directory.v2.SetPermissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.SetPermissionRequest;
  return proto.aserto.directory.v2.SetPermissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.SetPermissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.SetPermissionRequest}
 */
proto.aserto.directory.v2.SetPermissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_relation_pb.Permission;
      reader.readMessage(value,aserto_directory_v2_relation_pb.Permission.deserializeBinaryFromReader);
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
proto.aserto.directory.v2.SetPermissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.SetPermissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.SetPermissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetPermissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermission();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      aserto_directory_v2_relation_pb.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * optional Permission permission = 1;
 * @return {?proto.aserto.directory.v2.Permission}
 */
proto.aserto.directory.v2.SetPermissionRequest.prototype.getPermission = function() {
  return /** @type{?proto.aserto.directory.v2.Permission} */ (
    jspb.Message.getWrapperField(this, aserto_directory_v2_relation_pb.Permission, 1));
};


/**
 * @param {?proto.aserto.directory.v2.Permission|undefined} value
 * @return {!proto.aserto.directory.v2.SetPermissionRequest} returns this
*/
proto.aserto.directory.v2.SetPermissionRequest.prototype.setPermission = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.SetPermissionRequest} returns this
 */
proto.aserto.directory.v2.SetPermissionRequest.prototype.clearPermission = function() {
  return this.setPermission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.SetPermissionRequest.prototype.hasPermission = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.SetPermissionResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.SetPermissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.SetPermissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.SetPermissionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetPermissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_relation_pb.Permission.toObject, includeInstance)
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
 * @return {!proto.aserto.directory.v2.SetPermissionResponse}
 */
proto.aserto.directory.v2.SetPermissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.SetPermissionResponse;
  return proto.aserto.directory.v2.SetPermissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.SetPermissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.SetPermissionResponse}
 */
proto.aserto.directory.v2.SetPermissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_relation_pb.Permission;
      reader.readMessage(value,aserto_directory_v2_relation_pb.Permission.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.aserto.directory.v2.SetPermissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.SetPermissionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.SetPermissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetPermissionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_relation_pb.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Permission results = 1;
 * @return {!Array<!proto.aserto.directory.v2.Permission>}
 */
proto.aserto.directory.v2.SetPermissionResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_relation_pb.Permission, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.Permission>} value
 * @return {!proto.aserto.directory.v2.SetPermissionResponse} returns this
*/
proto.aserto.directory.v2.SetPermissionResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.Permission}
 */
proto.aserto.directory.v2.SetPermissionResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.SetPermissionResponse} returns this
 */
proto.aserto.directory.v2.SetPermissionResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.aserto.directory.v2.DeletePermissionRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.aserto.directory.v2.DeletePermissionRequest.ParamCase = {
  PARAM_NOT_SET: 0,
  ID: 1,
  PERMISSION: 2
};

/**
 * @return {proto.aserto.directory.v2.DeletePermissionRequest.ParamCase}
 */
proto.aserto.directory.v2.DeletePermissionRequest.prototype.getParamCase = function() {
  return /** @type {proto.aserto.directory.v2.DeletePermissionRequest.ParamCase} */(jspb.Message.computeOneofCase(this, proto.aserto.directory.v2.DeletePermissionRequest.oneofGroups_[0]));
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
proto.aserto.directory.v2.DeletePermissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.DeletePermissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.DeletePermissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeletePermissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    permission: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.aserto.directory.v2.DeletePermissionRequest}
 */
proto.aserto.directory.v2.DeletePermissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.DeletePermissionRequest;
  return proto.aserto.directory.v2.DeletePermissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.DeletePermissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.DeletePermissionRequest}
 */
proto.aserto.directory.v2.DeletePermissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
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
proto.aserto.directory.v2.DeletePermissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.DeletePermissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.DeletePermissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeletePermissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.aserto.directory.v2.DeletePermissionRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.DeletePermissionRequest} returns this
 */
proto.aserto.directory.v2.DeletePermissionRequest.prototype.setId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.aserto.directory.v2.DeletePermissionRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aserto.directory.v2.DeletePermissionRequest} returns this
 */
proto.aserto.directory.v2.DeletePermissionRequest.prototype.clearId = function() {
  return jspb.Message.setOneofField(this, 1, proto.aserto.directory.v2.DeletePermissionRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.DeletePermissionRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string permission = 2;
 * @return {string}
 */
proto.aserto.directory.v2.DeletePermissionRequest.prototype.getPermission = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.DeletePermissionRequest} returns this
 */
proto.aserto.directory.v2.DeletePermissionRequest.prototype.setPermission = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.aserto.directory.v2.DeletePermissionRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aserto.directory.v2.DeletePermissionRequest} returns this
 */
proto.aserto.directory.v2.DeletePermissionRequest.prototype.clearPermission = function() {
  return jspb.Message.setOneofField(this, 2, proto.aserto.directory.v2.DeletePermissionRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.DeletePermissionRequest.prototype.hasPermission = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.aserto.directory.v2.DeletePermissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.DeletePermissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.DeletePermissionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeletePermissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && google_protobuf_empty_pb.Empty.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.DeletePermissionResponse}
 */
proto.aserto.directory.v2.DeletePermissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.DeletePermissionResponse;
  return proto.aserto.directory.v2.DeletePermissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.DeletePermissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.DeletePermissionResponse}
 */
proto.aserto.directory.v2.DeletePermissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_empty_pb.Empty;
      reader.readMessage(value,google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
      msg.setResult(value);
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
proto.aserto.directory.v2.DeletePermissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.DeletePermissionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.DeletePermissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeletePermissionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_empty_pb.Empty.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Empty result = 1;
 * @return {?proto.google.protobuf.Empty}
 */
proto.aserto.directory.v2.DeletePermissionResponse.prototype.getResult = function() {
  return /** @type{?proto.google.protobuf.Empty} */ (
    jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 1));
};


/**
 * @param {?proto.google.protobuf.Empty|undefined} value
 * @return {!proto.aserto.directory.v2.DeletePermissionResponse} returns this
*/
proto.aserto.directory.v2.DeletePermissionResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.DeletePermissionResponse} returns this
 */
proto.aserto.directory.v2.DeletePermissionResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.DeletePermissionResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.aserto.directory.v2.ListPermissionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.ListPermissionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.ListPermissionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListPermissionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    page: (f = msg.getPage()) && aserto_api_v1_pagination_pb.PaginationRequest.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.ListPermissionsRequest}
 */
proto.aserto.directory.v2.ListPermissionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.ListPermissionsRequest;
  return proto.aserto.directory.v2.ListPermissionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.ListPermissionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.ListPermissionsRequest}
 */
proto.aserto.directory.v2.ListPermissionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new aserto_api_v1_pagination_pb.PaginationRequest;
      reader.readMessage(value,aserto_api_v1_pagination_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPage(value);
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
proto.aserto.directory.v2.ListPermissionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.ListPermissionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.ListPermissionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListPermissionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      aserto_api_v1_pagination_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional aserto.api.v1.PaginationRequest page = 9;
 * @return {?proto.aserto.api.v1.PaginationRequest}
 */
proto.aserto.directory.v2.ListPermissionsRequest.prototype.getPage = function() {
  return /** @type{?proto.aserto.api.v1.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, aserto_api_v1_pagination_pb.PaginationRequest, 9));
};


/**
 * @param {?proto.aserto.api.v1.PaginationRequest|undefined} value
 * @return {!proto.aserto.directory.v2.ListPermissionsRequest} returns this
*/
proto.aserto.directory.v2.ListPermissionsRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.ListPermissionsRequest} returns this
 */
proto.aserto.directory.v2.ListPermissionsRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.ListPermissionsRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.ListPermissionsResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.ListPermissionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.ListPermissionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.ListPermissionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListPermissionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_relation_pb.Permission.toObject, includeInstance),
    page: (f = msg.getPage()) && aserto_api_v1_pagination_pb.PaginationResponse.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.ListPermissionsResponse}
 */
proto.aserto.directory.v2.ListPermissionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.ListPermissionsResponse;
  return proto.aserto.directory.v2.ListPermissionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.ListPermissionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.ListPermissionsResponse}
 */
proto.aserto.directory.v2.ListPermissionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_relation_pb.Permission;
      reader.readMessage(value,aserto_directory_v2_relation_pb.Permission.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    case 9:
      var value = new aserto_api_v1_pagination_pb.PaginationResponse;
      reader.readMessage(value,aserto_api_v1_pagination_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPage(value);
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
proto.aserto.directory.v2.ListPermissionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.ListPermissionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.ListPermissionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListPermissionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_relation_pb.Permission.serializeBinaryToWriter
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      aserto_api_v1_pagination_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Permission results = 1;
 * @return {!Array<!proto.aserto.directory.v2.Permission>}
 */
proto.aserto.directory.v2.ListPermissionsResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_relation_pb.Permission, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.Permission>} value
 * @return {!proto.aserto.directory.v2.ListPermissionsResponse} returns this
*/
proto.aserto.directory.v2.ListPermissionsResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.Permission}
 */
proto.aserto.directory.v2.ListPermissionsResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.ListPermissionsResponse} returns this
 */
proto.aserto.directory.v2.ListPermissionsResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};


/**
 * optional aserto.api.v1.PaginationResponse page = 9;
 * @return {?proto.aserto.api.v1.PaginationResponse}
 */
proto.aserto.directory.v2.ListPermissionsResponse.prototype.getPage = function() {
  return /** @type{?proto.aserto.api.v1.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, aserto_api_v1_pagination_pb.PaginationResponse, 9));
};


/**
 * @param {?proto.aserto.api.v1.PaginationResponse|undefined} value
 * @return {!proto.aserto.directory.v2.ListPermissionsResponse} returns this
*/
proto.aserto.directory.v2.ListPermissionsResponse.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.ListPermissionsResponse} returns this
 */
proto.aserto.directory.v2.ListPermissionsResponse.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.ListPermissionsResponse.prototype.hasPage = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.aserto.directory.v2.GetPermRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetPermRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetPermRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetPermRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.aserto.directory.v2.GetPermRequest}
 */
proto.aserto.directory.v2.GetPermRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetPermRequest;
  return proto.aserto.directory.v2.GetPermRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetPermRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetPermRequest}
 */
proto.aserto.directory.v2.GetPermRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.aserto.directory.v2.GetPermRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetPermRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetPermRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetPermRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.aserto.directory.v2.GetPermRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetPermRequest} returns this
 */
proto.aserto.directory.v2.GetPermRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.aserto.directory.v2.GetPermResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetPermResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetPermResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetPermResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.aserto.directory.v2.GetPermResponse}
 */
proto.aserto.directory.v2.GetPermResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetPermResponse;
  return proto.aserto.directory.v2.GetPermResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetPermResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetPermResponse}
 */
proto.aserto.directory.v2.GetPermResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.aserto.directory.v2.GetPermResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetPermResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetPermResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetPermResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.aserto.directory.v2.GetPermResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetPermResponse} returns this
 */
proto.aserto.directory.v2.GetPermResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.aserto.directory.v2.GetRelationTypePermissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetRelationTypePermissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetRelationTypePermissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelationTypePermissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    relationId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    permissionId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.aserto.directory.v2.GetRelationTypePermissionRequest}
 */
proto.aserto.directory.v2.GetRelationTypePermissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetRelationTypePermissionRequest;
  return proto.aserto.directory.v2.GetRelationTypePermissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetRelationTypePermissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetRelationTypePermissionRequest}
 */
proto.aserto.directory.v2.GetRelationTypePermissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRelationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermissionId(value);
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
proto.aserto.directory.v2.GetRelationTypePermissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetRelationTypePermissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetRelationTypePermissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelationTypePermissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRelationId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPermissionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 relation_id = 1;
 * @return {number}
 */
proto.aserto.directory.v2.GetRelationTypePermissionRequest.prototype.getRelationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.GetRelationTypePermissionRequest} returns this
 */
proto.aserto.directory.v2.GetRelationTypePermissionRequest.prototype.setRelationId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string permission_id = 2;
 * @return {string}
 */
proto.aserto.directory.v2.GetRelationTypePermissionRequest.prototype.getPermissionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetRelationTypePermissionRequest} returns this
 */
proto.aserto.directory.v2.GetRelationTypePermissionRequest.prototype.setPermissionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.GetRelationTypePermissionResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.GetRelationTypePermissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetRelationTypePermissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetRelationTypePermissionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelationTypePermissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_relation_pb.RelationTypePermission.toObject, includeInstance)
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
 * @return {!proto.aserto.directory.v2.GetRelationTypePermissionResponse}
 */
proto.aserto.directory.v2.GetRelationTypePermissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetRelationTypePermissionResponse;
  return proto.aserto.directory.v2.GetRelationTypePermissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetRelationTypePermissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetRelationTypePermissionResponse}
 */
proto.aserto.directory.v2.GetRelationTypePermissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_relation_pb.RelationTypePermission;
      reader.readMessage(value,aserto_directory_v2_relation_pb.RelationTypePermission.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.aserto.directory.v2.GetRelationTypePermissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetRelationTypePermissionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetRelationTypePermissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetRelationTypePermissionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_relation_pb.RelationTypePermission.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RelationTypePermission results = 1;
 * @return {!Array<!proto.aserto.directory.v2.RelationTypePermission>}
 */
proto.aserto.directory.v2.GetRelationTypePermissionResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.RelationTypePermission>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_relation_pb.RelationTypePermission, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.RelationTypePermission>} value
 * @return {!proto.aserto.directory.v2.GetRelationTypePermissionResponse} returns this
*/
proto.aserto.directory.v2.GetRelationTypePermissionResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.RelationTypePermission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.RelationTypePermission}
 */
proto.aserto.directory.v2.GetRelationTypePermissionResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.RelationTypePermission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.GetRelationTypePermissionResponse} returns this
 */
proto.aserto.directory.v2.GetRelationTypePermissionResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
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
proto.aserto.directory.v2.SetRelationTypePermissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.SetRelationTypePermissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.SetRelationTypePermissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetRelationTypePermissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    relationTypePermission: (f = msg.getRelationTypePermission()) && aserto_directory_v2_relation_pb.RelationTypePermission.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.SetRelationTypePermissionRequest}
 */
proto.aserto.directory.v2.SetRelationTypePermissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.SetRelationTypePermissionRequest;
  return proto.aserto.directory.v2.SetRelationTypePermissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.SetRelationTypePermissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.SetRelationTypePermissionRequest}
 */
proto.aserto.directory.v2.SetRelationTypePermissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_relation_pb.RelationTypePermission;
      reader.readMessage(value,aserto_directory_v2_relation_pb.RelationTypePermission.deserializeBinaryFromReader);
      msg.setRelationTypePermission(value);
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
proto.aserto.directory.v2.SetRelationTypePermissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.SetRelationTypePermissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.SetRelationTypePermissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetRelationTypePermissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRelationTypePermission();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      aserto_directory_v2_relation_pb.RelationTypePermission.serializeBinaryToWriter
    );
  }
};


/**
 * optional RelationTypePermission relation_type_permission = 1;
 * @return {?proto.aserto.directory.v2.RelationTypePermission}
 */
proto.aserto.directory.v2.SetRelationTypePermissionRequest.prototype.getRelationTypePermission = function() {
  return /** @type{?proto.aserto.directory.v2.RelationTypePermission} */ (
    jspb.Message.getWrapperField(this, aserto_directory_v2_relation_pb.RelationTypePermission, 1));
};


/**
 * @param {?proto.aserto.directory.v2.RelationTypePermission|undefined} value
 * @return {!proto.aserto.directory.v2.SetRelationTypePermissionRequest} returns this
*/
proto.aserto.directory.v2.SetRelationTypePermissionRequest.prototype.setRelationTypePermission = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.SetRelationTypePermissionRequest} returns this
 */
proto.aserto.directory.v2.SetRelationTypePermissionRequest.prototype.clearRelationTypePermission = function() {
  return this.setRelationTypePermission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.SetRelationTypePermissionRequest.prototype.hasRelationTypePermission = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.SetRelationTypePermissionResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.SetRelationTypePermissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.SetRelationTypePermissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.SetRelationTypePermissionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetRelationTypePermissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_relation_pb.RelationTypePermission.toObject, includeInstance)
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
 * @return {!proto.aserto.directory.v2.SetRelationTypePermissionResponse}
 */
proto.aserto.directory.v2.SetRelationTypePermissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.SetRelationTypePermissionResponse;
  return proto.aserto.directory.v2.SetRelationTypePermissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.SetRelationTypePermissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.SetRelationTypePermissionResponse}
 */
proto.aserto.directory.v2.SetRelationTypePermissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_relation_pb.RelationTypePermission;
      reader.readMessage(value,aserto_directory_v2_relation_pb.RelationTypePermission.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.aserto.directory.v2.SetRelationTypePermissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.SetRelationTypePermissionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.SetRelationTypePermissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.SetRelationTypePermissionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_relation_pb.RelationTypePermission.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RelationTypePermission results = 1;
 * @return {!Array<!proto.aserto.directory.v2.RelationTypePermission>}
 */
proto.aserto.directory.v2.SetRelationTypePermissionResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.RelationTypePermission>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_relation_pb.RelationTypePermission, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.RelationTypePermission>} value
 * @return {!proto.aserto.directory.v2.SetRelationTypePermissionResponse} returns this
*/
proto.aserto.directory.v2.SetRelationTypePermissionResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.RelationTypePermission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.RelationTypePermission}
 */
proto.aserto.directory.v2.SetRelationTypePermissionResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.RelationTypePermission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.SetRelationTypePermissionResponse} returns this
 */
proto.aserto.directory.v2.SetRelationTypePermissionResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
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
proto.aserto.directory.v2.DeleteRelationTypePermissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.DeleteRelationTypePermissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.DeleteRelationTypePermissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteRelationTypePermissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    relationId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    permissionId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.aserto.directory.v2.DeleteRelationTypePermissionRequest}
 */
proto.aserto.directory.v2.DeleteRelationTypePermissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.DeleteRelationTypePermissionRequest;
  return proto.aserto.directory.v2.DeleteRelationTypePermissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.DeleteRelationTypePermissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.DeleteRelationTypePermissionRequest}
 */
proto.aserto.directory.v2.DeleteRelationTypePermissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRelationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermissionId(value);
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
proto.aserto.directory.v2.DeleteRelationTypePermissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.DeleteRelationTypePermissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.DeleteRelationTypePermissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteRelationTypePermissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRelationId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPermissionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 relation_id = 1;
 * @return {number}
 */
proto.aserto.directory.v2.DeleteRelationTypePermissionRequest.prototype.getRelationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.DeleteRelationTypePermissionRequest} returns this
 */
proto.aserto.directory.v2.DeleteRelationTypePermissionRequest.prototype.setRelationId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string permission_id = 2;
 * @return {string}
 */
proto.aserto.directory.v2.DeleteRelationTypePermissionRequest.prototype.getPermissionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.DeleteRelationTypePermissionRequest} returns this
 */
proto.aserto.directory.v2.DeleteRelationTypePermissionRequest.prototype.setPermissionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.aserto.directory.v2.DeleteRelationTypePermissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.DeleteRelationTypePermissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.DeleteRelationTypePermissionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteRelationTypePermissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && google_protobuf_empty_pb.Empty.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.DeleteRelationTypePermissionResponse}
 */
proto.aserto.directory.v2.DeleteRelationTypePermissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.DeleteRelationTypePermissionResponse;
  return proto.aserto.directory.v2.DeleteRelationTypePermissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.DeleteRelationTypePermissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.DeleteRelationTypePermissionResponse}
 */
proto.aserto.directory.v2.DeleteRelationTypePermissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_empty_pb.Empty;
      reader.readMessage(value,google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
      msg.setResult(value);
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
proto.aserto.directory.v2.DeleteRelationTypePermissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.DeleteRelationTypePermissionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.DeleteRelationTypePermissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.DeleteRelationTypePermissionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_empty_pb.Empty.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Empty result = 1;
 * @return {?proto.google.protobuf.Empty}
 */
proto.aserto.directory.v2.DeleteRelationTypePermissionResponse.prototype.getResult = function() {
  return /** @type{?proto.google.protobuf.Empty} */ (
    jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 1));
};


/**
 * @param {?proto.google.protobuf.Empty|undefined} value
 * @return {!proto.aserto.directory.v2.DeleteRelationTypePermissionResponse} returns this
*/
proto.aserto.directory.v2.DeleteRelationTypePermissionResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.DeleteRelationTypePermissionResponse} returns this
 */
proto.aserto.directory.v2.DeleteRelationTypePermissionResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.DeleteRelationTypePermissionResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.aserto.directory.v2.ListRelationTypePermissionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.ListRelationTypePermissionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.ListRelationTypePermissionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListRelationTypePermissionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    page: (f = msg.getPage()) && aserto_api_v1_pagination_pb.PaginationRequest.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.ListRelationTypePermissionsRequest}
 */
proto.aserto.directory.v2.ListRelationTypePermissionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.ListRelationTypePermissionsRequest;
  return proto.aserto.directory.v2.ListRelationTypePermissionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.ListRelationTypePermissionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.ListRelationTypePermissionsRequest}
 */
proto.aserto.directory.v2.ListRelationTypePermissionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = new aserto_api_v1_pagination_pb.PaginationRequest;
      reader.readMessage(value,aserto_api_v1_pagination_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPage(value);
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
proto.aserto.directory.v2.ListRelationTypePermissionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.ListRelationTypePermissionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.ListRelationTypePermissionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListRelationTypePermissionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      aserto_api_v1_pagination_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional aserto.api.v1.PaginationRequest page = 9;
 * @return {?proto.aserto.api.v1.PaginationRequest}
 */
proto.aserto.directory.v2.ListRelationTypePermissionsRequest.prototype.getPage = function() {
  return /** @type{?proto.aserto.api.v1.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, aserto_api_v1_pagination_pb.PaginationRequest, 9));
};


/**
 * @param {?proto.aserto.api.v1.PaginationRequest|undefined} value
 * @return {!proto.aserto.directory.v2.ListRelationTypePermissionsRequest} returns this
*/
proto.aserto.directory.v2.ListRelationTypePermissionsRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.ListRelationTypePermissionsRequest} returns this
 */
proto.aserto.directory.v2.ListRelationTypePermissionsRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.ListRelationTypePermissionsRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.ListRelationTypePermissionsResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.ListRelationTypePermissionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.ListRelationTypePermissionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.ListRelationTypePermissionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListRelationTypePermissionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_relation_pb.RelationTypePermission.toObject, includeInstance),
    page: (f = msg.getPage()) && aserto_api_v1_pagination_pb.PaginationResponse.toObject(includeInstance, f)
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
 * @return {!proto.aserto.directory.v2.ListRelationTypePermissionsResponse}
 */
proto.aserto.directory.v2.ListRelationTypePermissionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.ListRelationTypePermissionsResponse;
  return proto.aserto.directory.v2.ListRelationTypePermissionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.ListRelationTypePermissionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.ListRelationTypePermissionsResponse}
 */
proto.aserto.directory.v2.ListRelationTypePermissionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_relation_pb.RelationTypePermission;
      reader.readMessage(value,aserto_directory_v2_relation_pb.RelationTypePermission.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    case 9:
      var value = new aserto_api_v1_pagination_pb.PaginationResponse;
      reader.readMessage(value,aserto_api_v1_pagination_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPage(value);
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
proto.aserto.directory.v2.ListRelationTypePermissionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.ListRelationTypePermissionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.ListRelationTypePermissionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListRelationTypePermissionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_relation_pb.RelationTypePermission.serializeBinaryToWriter
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      aserto_api_v1_pagination_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RelationTypePermission results = 1;
 * @return {!Array<!proto.aserto.directory.v2.RelationTypePermission>}
 */
proto.aserto.directory.v2.ListRelationTypePermissionsResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.RelationTypePermission>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_relation_pb.RelationTypePermission, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.RelationTypePermission>} value
 * @return {!proto.aserto.directory.v2.ListRelationTypePermissionsResponse} returns this
*/
proto.aserto.directory.v2.ListRelationTypePermissionsResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.RelationTypePermission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.RelationTypePermission}
 */
proto.aserto.directory.v2.ListRelationTypePermissionsResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.RelationTypePermission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.ListRelationTypePermissionsResponse} returns this
 */
proto.aserto.directory.v2.ListRelationTypePermissionsResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};


/**
 * optional aserto.api.v1.PaginationResponse page = 9;
 * @return {?proto.aserto.api.v1.PaginationResponse}
 */
proto.aserto.directory.v2.ListRelationTypePermissionsResponse.prototype.getPage = function() {
  return /** @type{?proto.aserto.api.v1.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, aserto_api_v1_pagination_pb.PaginationResponse, 9));
};


/**
 * @param {?proto.aserto.api.v1.PaginationResponse|undefined} value
 * @return {!proto.aserto.directory.v2.ListRelationTypePermissionsResponse} returns this
*/
proto.aserto.directory.v2.ListRelationTypePermissionsResponse.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aserto.directory.v2.ListRelationTypePermissionsResponse} returns this
 */
proto.aserto.directory.v2.ListRelationTypePermissionsResponse.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.ListRelationTypePermissionsResponse.prototype.hasPage = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.aserto.directory.v2.CheckRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.aserto.directory.v2.CheckRequest.CheckCase = {
  CHECK_NOT_SET: 0,
  RELATION_ID: 2,
  PERMISSION_ID: 3
};

/**
 * @return {proto.aserto.directory.v2.CheckRequest.CheckCase}
 */
proto.aserto.directory.v2.CheckRequest.prototype.getCheckCase = function() {
  return /** @type {proto.aserto.directory.v2.CheckRequest.CheckCase} */(jspb.Message.computeOneofCase(this, proto.aserto.directory.v2.CheckRequest.oneofGroups_[0]));
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
proto.aserto.directory.v2.CheckRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.CheckRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.CheckRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.CheckRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    subjectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    relationId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    permissionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    objectId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    trace: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.aserto.directory.v2.CheckRequest}
 */
proto.aserto.directory.v2.CheckRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.CheckRequest;
  return proto.aserto.directory.v2.CheckRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.CheckRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.CheckRequest}
 */
proto.aserto.directory.v2.CheckRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRelationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermissionId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectId(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrace(value);
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
proto.aserto.directory.v2.CheckRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.CheckRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.CheckRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.CheckRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getObjectId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTrace();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string subject_id = 1;
 * @return {string}
 */
proto.aserto.directory.v2.CheckRequest.prototype.getSubjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.CheckRequest} returns this
 */
proto.aserto.directory.v2.CheckRequest.prototype.setSubjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 relation_id = 2;
 * @return {number}
 */
proto.aserto.directory.v2.CheckRequest.prototype.getRelationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.CheckRequest} returns this
 */
proto.aserto.directory.v2.CheckRequest.prototype.setRelationId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.aserto.directory.v2.CheckRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aserto.directory.v2.CheckRequest} returns this
 */
proto.aserto.directory.v2.CheckRequest.prototype.clearRelationId = function() {
  return jspb.Message.setOneofField(this, 2, proto.aserto.directory.v2.CheckRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.CheckRequest.prototype.hasRelationId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string permission_id = 3;
 * @return {string}
 */
proto.aserto.directory.v2.CheckRequest.prototype.getPermissionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.CheckRequest} returns this
 */
proto.aserto.directory.v2.CheckRequest.prototype.setPermissionId = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.aserto.directory.v2.CheckRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aserto.directory.v2.CheckRequest} returns this
 */
proto.aserto.directory.v2.CheckRequest.prototype.clearPermissionId = function() {
  return jspb.Message.setOneofField(this, 3, proto.aserto.directory.v2.CheckRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aserto.directory.v2.CheckRequest.prototype.hasPermissionId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string object_id = 4;
 * @return {string}
 */
proto.aserto.directory.v2.CheckRequest.prototype.getObjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.CheckRequest} returns this
 */
proto.aserto.directory.v2.CheckRequest.prototype.setObjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool trace = 5;
 * @return {boolean}
 */
proto.aserto.directory.v2.CheckRequest.prototype.getTrace = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aserto.directory.v2.CheckRequest} returns this
 */
proto.aserto.directory.v2.CheckRequest.prototype.setTrace = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.CheckResponse.repeatedFields_ = [2];



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
proto.aserto.directory.v2.CheckResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.CheckResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.CheckResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.CheckResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    check: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    traceList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.aserto.directory.v2.CheckResponse}
 */
proto.aserto.directory.v2.CheckResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.CheckResponse;
  return proto.aserto.directory.v2.CheckResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.CheckResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.CheckResponse}
 */
proto.aserto.directory.v2.CheckResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCheck(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTrace(value);
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
proto.aserto.directory.v2.CheckResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.CheckResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.CheckResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.CheckResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCheck();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getTraceList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional bool check = 1;
 * @return {boolean}
 */
proto.aserto.directory.v2.CheckResponse.prototype.getCheck = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aserto.directory.v2.CheckResponse} returns this
 */
proto.aserto.directory.v2.CheckResponse.prototype.setCheck = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated string trace = 2;
 * @return {!Array<string>}
 */
proto.aserto.directory.v2.CheckResponse.prototype.getTraceList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.aserto.directory.v2.CheckResponse} returns this
 */
proto.aserto.directory.v2.CheckResponse.prototype.setTraceList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.CheckResponse} returns this
 */
proto.aserto.directory.v2.CheckResponse.prototype.addTrace = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.CheckResponse} returns this
 */
proto.aserto.directory.v2.CheckResponse.prototype.clearTraceList = function() {
  return this.setTraceList([]);
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
proto.aserto.directory.v2.CheckRelationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.CheckRelationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.CheckRelationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.CheckRelationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    objectType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    relation: jspb.Message.getFieldWithDefault(msg, 3, ""),
    subjectId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    trace: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.aserto.directory.v2.CheckRelationRequest}
 */
proto.aserto.directory.v2.CheckRelationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.CheckRelationRequest;
  return proto.aserto.directory.v2.CheckRelationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.CheckRelationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.CheckRelationRequest}
 */
proto.aserto.directory.v2.CheckRelationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelation(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubjectId(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrace(value);
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
proto.aserto.directory.v2.CheckRelationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.CheckRelationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.CheckRelationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.CheckRelationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getObjectType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRelation();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSubjectId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTrace();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string object_id = 1;
 * @return {string}
 */
proto.aserto.directory.v2.CheckRelationRequest.prototype.getObjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.CheckRelationRequest} returns this
 */
proto.aserto.directory.v2.CheckRelationRequest.prototype.setObjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string object_type = 2;
 * @return {string}
 */
proto.aserto.directory.v2.CheckRelationRequest.prototype.getObjectType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.CheckRelationRequest} returns this
 */
proto.aserto.directory.v2.CheckRelationRequest.prototype.setObjectType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string relation = 3;
 * @return {string}
 */
proto.aserto.directory.v2.CheckRelationRequest.prototype.getRelation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.CheckRelationRequest} returns this
 */
proto.aserto.directory.v2.CheckRelationRequest.prototype.setRelation = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string subject_id = 4;
 * @return {string}
 */
proto.aserto.directory.v2.CheckRelationRequest.prototype.getSubjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.CheckRelationRequest} returns this
 */
proto.aserto.directory.v2.CheckRelationRequest.prototype.setSubjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool trace = 5;
 * @return {boolean}
 */
proto.aserto.directory.v2.CheckRelationRequest.prototype.getTrace = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aserto.directory.v2.CheckRelationRequest} returns this
 */
proto.aserto.directory.v2.CheckRelationRequest.prototype.setTrace = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.CheckRelationResponse.repeatedFields_ = [2];



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
proto.aserto.directory.v2.CheckRelationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.CheckRelationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.CheckRelationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.CheckRelationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    check: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    traceList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.aserto.directory.v2.CheckRelationResponse}
 */
proto.aserto.directory.v2.CheckRelationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.CheckRelationResponse;
  return proto.aserto.directory.v2.CheckRelationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.CheckRelationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.CheckRelationResponse}
 */
proto.aserto.directory.v2.CheckRelationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCheck(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTrace(value);
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
proto.aserto.directory.v2.CheckRelationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.CheckRelationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.CheckRelationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.CheckRelationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCheck();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getTraceList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional bool check = 1;
 * @return {boolean}
 */
proto.aserto.directory.v2.CheckRelationResponse.prototype.getCheck = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aserto.directory.v2.CheckRelationResponse} returns this
 */
proto.aserto.directory.v2.CheckRelationResponse.prototype.setCheck = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated string trace = 2;
 * @return {!Array<string>}
 */
proto.aserto.directory.v2.CheckRelationResponse.prototype.getTraceList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.aserto.directory.v2.CheckRelationResponse} returns this
 */
proto.aserto.directory.v2.CheckRelationResponse.prototype.setTraceList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.CheckRelationResponse} returns this
 */
proto.aserto.directory.v2.CheckRelationResponse.prototype.addTrace = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.CheckRelationResponse} returns this
 */
proto.aserto.directory.v2.CheckRelationResponse.prototype.clearTraceList = function() {
  return this.setTraceList([]);
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
proto.aserto.directory.v2.CheckPermissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.CheckPermissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.CheckPermissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.CheckPermissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    objectType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    permission: jspb.Message.getFieldWithDefault(msg, 3, ""),
    subjectId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    trace: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.aserto.directory.v2.CheckPermissionRequest}
 */
proto.aserto.directory.v2.CheckPermissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.CheckPermissionRequest;
  return proto.aserto.directory.v2.CheckPermissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.CheckPermissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.CheckPermissionRequest}
 */
proto.aserto.directory.v2.CheckPermissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermission(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubjectId(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrace(value);
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
proto.aserto.directory.v2.CheckPermissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.CheckPermissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.CheckPermissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.CheckPermissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getObjectType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPermission();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSubjectId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTrace();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string object_id = 1;
 * @return {string}
 */
proto.aserto.directory.v2.CheckPermissionRequest.prototype.getObjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.CheckPermissionRequest} returns this
 */
proto.aserto.directory.v2.CheckPermissionRequest.prototype.setObjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string object_type = 2;
 * @return {string}
 */
proto.aserto.directory.v2.CheckPermissionRequest.prototype.getObjectType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.CheckPermissionRequest} returns this
 */
proto.aserto.directory.v2.CheckPermissionRequest.prototype.setObjectType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string permission = 3;
 * @return {string}
 */
proto.aserto.directory.v2.CheckPermissionRequest.prototype.getPermission = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.CheckPermissionRequest} returns this
 */
proto.aserto.directory.v2.CheckPermissionRequest.prototype.setPermission = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string subject_id = 4;
 * @return {string}
 */
proto.aserto.directory.v2.CheckPermissionRequest.prototype.getSubjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.CheckPermissionRequest} returns this
 */
proto.aserto.directory.v2.CheckPermissionRequest.prototype.setSubjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool trace = 5;
 * @return {boolean}
 */
proto.aserto.directory.v2.CheckPermissionRequest.prototype.getTrace = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aserto.directory.v2.CheckPermissionRequest} returns this
 */
proto.aserto.directory.v2.CheckPermissionRequest.prototype.setTrace = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.CheckPermissionResponse.repeatedFields_ = [2];



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
proto.aserto.directory.v2.CheckPermissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.CheckPermissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.CheckPermissionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.CheckPermissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    check: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    traceList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.aserto.directory.v2.CheckPermissionResponse}
 */
proto.aserto.directory.v2.CheckPermissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.CheckPermissionResponse;
  return proto.aserto.directory.v2.CheckPermissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.CheckPermissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.CheckPermissionResponse}
 */
proto.aserto.directory.v2.CheckPermissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCheck(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTrace(value);
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
proto.aserto.directory.v2.CheckPermissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.CheckPermissionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.CheckPermissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.CheckPermissionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCheck();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getTraceList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional bool check = 1;
 * @return {boolean}
 */
proto.aserto.directory.v2.CheckPermissionResponse.prototype.getCheck = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aserto.directory.v2.CheckPermissionResponse} returns this
 */
proto.aserto.directory.v2.CheckPermissionResponse.prototype.setCheck = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated string trace = 2;
 * @return {!Array<string>}
 */
proto.aserto.directory.v2.CheckPermissionResponse.prototype.getTraceList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.aserto.directory.v2.CheckPermissionResponse} returns this
 */
proto.aserto.directory.v2.CheckPermissionResponse.prototype.setTraceList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.CheckPermissionResponse} returns this
 */
proto.aserto.directory.v2.CheckPermissionResponse.prototype.addTrace = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.CheckPermissionResponse} returns this
 */
proto.aserto.directory.v2.CheckPermissionResponse.prototype.clearTraceList = function() {
  return this.setTraceList([]);
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
proto.aserto.directory.v2.ListObjectGraphRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.ListObjectGraphRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.ListObjectGraphRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListObjectGraphRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    anchorId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourceType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sourceId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    relation: jspb.Message.getFieldWithDefault(msg, 4, 0),
    targetType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    targetId: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.aserto.directory.v2.ListObjectGraphRequest}
 */
proto.aserto.directory.v2.ListObjectGraphRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.ListObjectGraphRequest;
  return proto.aserto.directory.v2.ListObjectGraphRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.ListObjectGraphRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.ListObjectGraphRequest}
 */
proto.aserto.directory.v2.ListObjectGraphRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnchorId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSourceType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRelation(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTargetType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetId(value);
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
proto.aserto.directory.v2.ListObjectGraphRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.ListObjectGraphRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.ListObjectGraphRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListObjectGraphRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnchorId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourceType();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSourceId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRelation();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTargetType();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getTargetId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string anchor_id = 1;
 * @return {string}
 */
proto.aserto.directory.v2.ListObjectGraphRequest.prototype.getAnchorId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.ListObjectGraphRequest} returns this
 */
proto.aserto.directory.v2.ListObjectGraphRequest.prototype.setAnchorId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 source_type = 2;
 * @return {number}
 */
proto.aserto.directory.v2.ListObjectGraphRequest.prototype.getSourceType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.ListObjectGraphRequest} returns this
 */
proto.aserto.directory.v2.ListObjectGraphRequest.prototype.setSourceType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string source_id = 3;
 * @return {string}
 */
proto.aserto.directory.v2.ListObjectGraphRequest.prototype.getSourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.ListObjectGraphRequest} returns this
 */
proto.aserto.directory.v2.ListObjectGraphRequest.prototype.setSourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 relation = 4;
 * @return {number}
 */
proto.aserto.directory.v2.ListObjectGraphRequest.prototype.getRelation = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.ListObjectGraphRequest} returns this
 */
proto.aserto.directory.v2.ListObjectGraphRequest.prototype.setRelation = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 target_type = 5;
 * @return {number}
 */
proto.aserto.directory.v2.ListObjectGraphRequest.prototype.getTargetType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.aserto.directory.v2.ListObjectGraphRequest} returns this
 */
proto.aserto.directory.v2.ListObjectGraphRequest.prototype.setTargetType = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string target_id = 6;
 * @return {string}
 */
proto.aserto.directory.v2.ListObjectGraphRequest.prototype.getTargetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.ListObjectGraphRequest} returns this
 */
proto.aserto.directory.v2.ListObjectGraphRequest.prototype.setTargetId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.ListObjectGraphResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.ListObjectGraphResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.ListObjectGraphResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.ListObjectGraphResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListObjectGraphResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_object_pb.ObjectDependency.toObject, includeInstance)
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
 * @return {!proto.aserto.directory.v2.ListObjectGraphResponse}
 */
proto.aserto.directory.v2.ListObjectGraphResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.ListObjectGraphResponse;
  return proto.aserto.directory.v2.ListObjectGraphResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.ListObjectGraphResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.ListObjectGraphResponse}
 */
proto.aserto.directory.v2.ListObjectGraphResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_object_pb.ObjectDependency;
      reader.readMessage(value,aserto_directory_v2_object_pb.ObjectDependency.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.aserto.directory.v2.ListObjectGraphResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.ListObjectGraphResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.ListObjectGraphResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.ListObjectGraphResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_object_pb.ObjectDependency.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ObjectDependency results = 1;
 * @return {!Array<!proto.aserto.directory.v2.ObjectDependency>}
 */
proto.aserto.directory.v2.ListObjectGraphResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.ObjectDependency>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_object_pb.ObjectDependency, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.ObjectDependency>} value
 * @return {!proto.aserto.directory.v2.ListObjectGraphResponse} returns this
*/
proto.aserto.directory.v2.ListObjectGraphResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.ObjectDependency=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.ObjectDependency}
 */
proto.aserto.directory.v2.ListObjectGraphResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.ObjectDependency, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.ListObjectGraphResponse} returns this
 */
proto.aserto.directory.v2.ListObjectGraphResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
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
proto.aserto.directory.v2.GetGraphRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetGraphRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetGraphRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetGraphRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    anchorId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourceType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sourceId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    relation: jspb.Message.getFieldWithDefault(msg, 4, ""),
    targetType: jspb.Message.getFieldWithDefault(msg, 5, ""),
    targetId: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.aserto.directory.v2.GetGraphRequest}
 */
proto.aserto.directory.v2.GetGraphRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetGraphRequest;
  return proto.aserto.directory.v2.GetGraphRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetGraphRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetGraphRequest}
 */
proto.aserto.directory.v2.GetGraphRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnchorId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelation(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetId(value);
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
proto.aserto.directory.v2.GetGraphRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetGraphRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetGraphRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetGraphRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnchorId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourceType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSourceId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRelation();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTargetType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTargetId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string anchor_id = 1;
 * @return {string}
 */
proto.aserto.directory.v2.GetGraphRequest.prototype.getAnchorId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetGraphRequest} returns this
 */
proto.aserto.directory.v2.GetGraphRequest.prototype.setAnchorId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string source_type = 2;
 * @return {string}
 */
proto.aserto.directory.v2.GetGraphRequest.prototype.getSourceType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetGraphRequest} returns this
 */
proto.aserto.directory.v2.GetGraphRequest.prototype.setSourceType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string source_id = 3;
 * @return {string}
 */
proto.aserto.directory.v2.GetGraphRequest.prototype.getSourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetGraphRequest} returns this
 */
proto.aserto.directory.v2.GetGraphRequest.prototype.setSourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string relation = 4;
 * @return {string}
 */
proto.aserto.directory.v2.GetGraphRequest.prototype.getRelation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetGraphRequest} returns this
 */
proto.aserto.directory.v2.GetGraphRequest.prototype.setRelation = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string target_type = 5;
 * @return {string}
 */
proto.aserto.directory.v2.GetGraphRequest.prototype.getTargetType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetGraphRequest} returns this
 */
proto.aserto.directory.v2.GetGraphRequest.prototype.setTargetType = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string target_id = 6;
 * @return {string}
 */
proto.aserto.directory.v2.GetGraphRequest.prototype.getTargetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.aserto.directory.v2.GetGraphRequest} returns this
 */
proto.aserto.directory.v2.GetGraphRequest.prototype.setTargetId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aserto.directory.v2.GetGraphResponse.repeatedFields_ = [1];



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
proto.aserto.directory.v2.GetGraphResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.aserto.directory.v2.GetGraphResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aserto.directory.v2.GetGraphResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetGraphResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    aserto_directory_v2_object_pb.ObjectDependency.toObject, includeInstance)
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
 * @return {!proto.aserto.directory.v2.GetGraphResponse}
 */
proto.aserto.directory.v2.GetGraphResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aserto.directory.v2.GetGraphResponse;
  return proto.aserto.directory.v2.GetGraphResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aserto.directory.v2.GetGraphResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aserto.directory.v2.GetGraphResponse}
 */
proto.aserto.directory.v2.GetGraphResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new aserto_directory_v2_object_pb.ObjectDependency;
      reader.readMessage(value,aserto_directory_v2_object_pb.ObjectDependency.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.aserto.directory.v2.GetGraphResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aserto.directory.v2.GetGraphResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aserto.directory.v2.GetGraphResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aserto.directory.v2.GetGraphResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      aserto_directory_v2_object_pb.ObjectDependency.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ObjectDependency results = 1;
 * @return {!Array<!proto.aserto.directory.v2.ObjectDependency>}
 */
proto.aserto.directory.v2.GetGraphResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.aserto.directory.v2.ObjectDependency>} */ (
    jspb.Message.getRepeatedWrapperField(this, aserto_directory_v2_object_pb.ObjectDependency, 1));
};


/**
 * @param {!Array<!proto.aserto.directory.v2.ObjectDependency>} value
 * @return {!proto.aserto.directory.v2.GetGraphResponse} returns this
*/
proto.aserto.directory.v2.GetGraphResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.aserto.directory.v2.ObjectDependency=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aserto.directory.v2.ObjectDependency}
 */
proto.aserto.directory.v2.GetGraphResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.aserto.directory.v2.ObjectDependency, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aserto.directory.v2.GetGraphResponse} returns this
 */
proto.aserto.directory.v2.GetGraphResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};


/**
 * @enum {number}
 */
proto.aserto.directory.v2.Opcode = {
  OPCODE_UNKNOWN: 0,
  OPCODE_SET: 1,
  OPCODE_DELETE: 2
};

goog.object.extend(exports, proto.aserto.directory.v2);
