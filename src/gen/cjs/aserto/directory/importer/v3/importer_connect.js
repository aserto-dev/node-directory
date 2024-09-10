"use strict";
// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file aserto/directory/importer/v3/importer.proto (package aserto.directory.importer.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.Importer = void 0;
const importer_pb_js_1 = require("./importer_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from service aserto.directory.importer.v3.Importer
 */
exports.Importer = {
    typeName: "aserto.directory.importer.v3.Importer",
    methods: {
        /**
         * import stream of objects and relations
         *
         * @generated from rpc aserto.directory.importer.v3.Importer.Import
         */
        import: {
            name: "Import",
            I: importer_pb_js_1.ImportRequest,
            O: importer_pb_js_1.ImportResponse,
            kind: protobuf_1.MethodKind.BiDiStreaming,
        },
    }
};
