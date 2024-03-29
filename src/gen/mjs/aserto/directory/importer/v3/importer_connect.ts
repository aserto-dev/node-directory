// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file aserto/directory/importer/v3/importer.proto (package aserto.directory.importer.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ImportRequest, ImportResponse } from "./importer_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service aserto.directory.importer.v3.Importer
 */
export const Importer = {
  typeName: "aserto.directory.importer.v3.Importer",
  methods: {
    /**
     * @generated from rpc aserto.directory.importer.v3.Importer.Import
     */
    import: {
      name: "Import",
      I: ImportRequest,
      O: ImportResponse,
      kind: MethodKind.BiDiStreaming,
    },
  }
} as const;

