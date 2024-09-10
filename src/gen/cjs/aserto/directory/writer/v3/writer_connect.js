"use strict";
// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file aserto/directory/writer/v3/writer.proto (package aserto.directory.writer.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.Writer = void 0;
const writer_pb_js_1 = require("./writer_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from service aserto.directory.writer.v3.Writer
 */
exports.Writer = {
    typeName: "aserto.directory.writer.v3.Writer",
    methods: {
        /**
         * set object instance
         *
         * @generated from rpc aserto.directory.writer.v3.Writer.SetObject
         */
        setObject: {
            name: "SetObject",
            I: writer_pb_js_1.SetObjectRequest,
            O: writer_pb_js_1.SetObjectResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * delete object instance
         *
         * @generated from rpc aserto.directory.writer.v3.Writer.DeleteObject
         */
        deleteObject: {
            name: "DeleteObject",
            I: writer_pb_js_1.DeleteObjectRequest,
            O: writer_pb_js_1.DeleteObjectResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * set relation instance
         *
         * @generated from rpc aserto.directory.writer.v3.Writer.SetRelation
         */
        setRelation: {
            name: "SetRelation",
            I: writer_pb_js_1.SetRelationRequest,
            O: writer_pb_js_1.SetRelationResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * delete relation instance
         *
         * @generated from rpc aserto.directory.writer.v3.Writer.DeleteRelation
         */
        deleteRelation: {
            name: "DeleteRelation",
            I: writer_pb_js_1.DeleteRelationRequest,
            O: writer_pb_js_1.DeleteRelationResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
