// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=js"
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
     * object type metadata methods
     *
     * @generated from rpc aserto.directory.writer.v2.Writer.SetObjectType
     */
    setObjectType: {
      name: "SetObjectType",
      I: SetObjectTypeRequest,
      O: SetObjectTypeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc aserto.directory.writer.v2.Writer.DeleteObjectType
     */
    deleteObjectType: {
      name: "DeleteObjectType",
      I: DeleteObjectTypeRequest,
      O: DeleteObjectTypeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * relation type metadata methods
     *
     * @generated from rpc aserto.directory.writer.v2.Writer.SetRelationType
     */
    setRelationType: {
      name: "SetRelationType",
      I: SetRelationTypeRequest,
      O: SetRelationTypeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc aserto.directory.writer.v2.Writer.DeleteRelationType
     */
    deleteRelationType: {
      name: "DeleteRelationType",
      I: DeleteRelationTypeRequest,
      O: DeleteRelationTypeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * permission metadata methods
     *
     * @generated from rpc aserto.directory.writer.v2.Writer.SetPermission
     */
    setPermission: {
      name: "SetPermission",
      I: SetPermissionRequest,
      O: SetPermissionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc aserto.directory.writer.v2.Writer.DeletePermission
     */
    deletePermission: {
      name: "DeletePermission",
      I: DeletePermissionRequest,
      O: DeletePermissionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * object methods
     *
     * @generated from rpc aserto.directory.writer.v2.Writer.SetObject
     */
    setObject: {
      name: "SetObject",
      I: SetObjectRequest,
      O: SetObjectResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc aserto.directory.writer.v2.Writer.DeleteObject
     */
    deleteObject: {
      name: "DeleteObject",
      I: DeleteObjectRequest,
      O: DeleteObjectResponse,
      kind: MethodKind.Unary,
    },
    /**
     * relation methods
     *
     * @generated from rpc aserto.directory.writer.v2.Writer.SetRelation
     */
    setRelation: {
      name: "SetRelation",
      I: SetRelationRequest,
      O: SetRelationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc aserto.directory.writer.v2.Writer.DeleteRelation
     */
    deleteRelation: {
      name: "DeleteRelation",
      I: DeleteRelationRequest,
      O: DeleteRelationResponse,
      kind: MethodKind.Unary,
    },
  }
};

