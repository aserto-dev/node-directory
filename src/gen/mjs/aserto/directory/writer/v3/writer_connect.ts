// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file aserto/directory/writer/v3/writer.proto (package aserto.directory.writer.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteObjectRequest, DeleteObjectResponse, DeleteRelationRequest, DeleteRelationResponse, SetObjectRequest, SetObjectResponse, SetRelationRequest, SetRelationResponse } from "./writer_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service aserto.directory.writer.v3.Writer
 */
export const Writer = {
  typeName: "aserto.directory.writer.v3.Writer",
  methods: {
    /**
     * set object instance
     *
     * @generated from rpc aserto.directory.writer.v3.Writer.SetObject
     */
    setObject: {
      name: "SetObject",
      I: SetObjectRequest,
      O: SetObjectResponse,
      kind: MethodKind.Unary,
    },
    /**
     * delete object instance
     *
     * @generated from rpc aserto.directory.writer.v3.Writer.DeleteObject
     */
    deleteObject: {
      name: "DeleteObject",
      I: DeleteObjectRequest,
      O: DeleteObjectResponse,
      kind: MethodKind.Unary,
    },
    /**
     * set relation instance
     *
     * @generated from rpc aserto.directory.writer.v3.Writer.SetRelation
     */
    setRelation: {
      name: "SetRelation",
      I: SetRelationRequest,
      O: SetRelationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * delete relation instance
     *
     * @generated from rpc aserto.directory.writer.v3.Writer.DeleteRelation
     */
    deleteRelation: {
      name: "DeleteRelation",
      I: DeleteRelationRequest,
      O: DeleteRelationResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

