// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file aserto/directory/writer/v2/writer.proto (package aserto.directory.writer.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteObjectRequest, DeleteObjectResponse, DeleteObjectTypeRequest, DeleteObjectTypeResponse, DeletePermissionRequest, DeletePermissionResponse, DeleteRelationRequest, DeleteRelationResponse, DeleteRelationTypeRequest, DeleteRelationTypeResponse, SetObjectRequest, SetObjectResponse, SetObjectTypeRequest, SetObjectTypeResponse, SetPermissionRequest, SetPermissionResponse, SetRelationRequest, SetRelationResponse, SetRelationTypeRequest, SetRelationTypeResponse } from "./writer_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service aserto.directory.writer.v2.Writer
 */
export const Writer = {
  typeName: "aserto.directory.writer.v2.Writer",
  methods: {
    /**
     * @generated from rpc aserto.directory.writer.v2.Writer.SetObjectType
     * @deprecated
     */
    setObjectType: {
      name: "SetObjectType",
      I: SetObjectTypeRequest,
      O: SetObjectTypeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc aserto.directory.writer.v2.Writer.DeleteObjectType
     * @deprecated
     */
    deleteObjectType: {
      name: "DeleteObjectType",
      I: DeleteObjectTypeRequest,
      O: DeleteObjectTypeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc aserto.directory.writer.v2.Writer.SetRelationType
     * @deprecated
     */
    setRelationType: {
      name: "SetRelationType",
      I: SetRelationTypeRequest,
      O: SetRelationTypeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc aserto.directory.writer.v2.Writer.DeleteRelationType
     * @deprecated
     */
    deleteRelationType: {
      name: "DeleteRelationType",
      I: DeleteRelationTypeRequest,
      O: DeleteRelationTypeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc aserto.directory.writer.v2.Writer.SetPermission
     * @deprecated
     */
    setPermission: {
      name: "SetPermission",
      I: SetPermissionRequest,
      O: SetPermissionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc aserto.directory.writer.v2.Writer.DeletePermission
     * @deprecated
     */
    deletePermission: {
      name: "DeletePermission",
      I: DeletePermissionRequest,
      O: DeletePermissionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * set object instance
     * Deprecated: directory.v2.SetObject is deprecated, use directory.v3.SetObject.
     *
     * @generated from rpc aserto.directory.writer.v2.Writer.SetObject
     * @deprecated
     */
    setObject: {
      name: "SetObject",
      I: SetObjectRequest,
      O: SetObjectResponse,
      kind: MethodKind.Unary,
    },
    /**
     * delete object instance
     * Deprecated: directory.v2.DeleteObject is deprecated, use directory.v3.DeleteObject.
     *
     * @generated from rpc aserto.directory.writer.v2.Writer.DeleteObject
     * @deprecated
     */
    deleteObject: {
      name: "DeleteObject",
      I: DeleteObjectRequest,
      O: DeleteObjectResponse,
      kind: MethodKind.Unary,
    },
    /**
     * set relation instance
     * Deprecated: directory.v2.SetRelation is deprecated, use directory.v3.SetRelation.
     *
     * @generated from rpc aserto.directory.writer.v2.Writer.SetRelation
     * @deprecated
     */
    setRelation: {
      name: "SetRelation",
      I: SetRelationRequest,
      O: SetRelationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * delete relation instance
     * Deprecated: directory.v2.DeleteRelation is deprecated, use directory.v3.DeleteRelation.
     *
     * @generated from rpc aserto.directory.writer.v2.Writer.DeleteRelation
     * @deprecated
     */
    deleteRelation: {
      name: "DeleteRelation",
      I: DeleteRelationRequest,
      O: DeleteRelationResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

