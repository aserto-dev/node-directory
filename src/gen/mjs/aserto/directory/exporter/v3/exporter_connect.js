// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=js"
// @generated from file aserto/directory/exporter/v3/exporter.proto (package aserto.directory.exporter.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ExportRequest, ExportResponse } from "./exporter_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service aserto.directory.exporter.v3.Exporter
 */
export const Exporter = {
  typeName: "aserto.directory.exporter.v3.Exporter",
  methods: {
    /**
     * @generated from rpc aserto.directory.exporter.v3.Exporter.Export
     */
    export: {
      name: "Export",
      I: ExportRequest,
      O: ExportResponse,
      kind: MethodKind.ServerStreaming,
    },
  }
};

