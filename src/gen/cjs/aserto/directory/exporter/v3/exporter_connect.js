"use strict";
// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file aserto/directory/exporter/v3/exporter.proto (package aserto.directory.exporter.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exporter = void 0;
const exporter_pb_js_1 = require("./exporter_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from service aserto.directory.exporter.v3.Exporter
 */
exports.Exporter = {
    typeName: "aserto.directory.exporter.v3.Exporter",
    methods: {
        /**
         * @generated from rpc aserto.directory.exporter.v3.Exporter.Export
         */
        export: {
            name: "Export",
            I: exporter_pb_js_1.ExportRequest,
            O: exporter_pb_js_1.ExportResponse,
            kind: protobuf_1.MethodKind.ServerStreaming,
        },
    }
};
