import { ExportRequest, ExportResponse } from "./exporter_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service aserto.directory.exporter.v2.Exporter
 */
export declare const Exporter: {
    readonly typeName: "aserto.directory.exporter.v2.Exporter";
    readonly methods: {
        /**
         * @generated from rpc aserto.directory.exporter.v2.Exporter.Export
         * @deprecated
         */
        readonly export: {
            readonly name: "Export";
            readonly I: typeof ExportRequest;
            readonly O: typeof ExportResponse;
            readonly kind: MethodKind.ServerStreaming;
        };
    };
};
