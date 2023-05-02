import { ImportRequest, ImportResponse } from "./importer_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service aserto.directory.importer.v2.Importer
 */
export declare const Importer: {
    readonly typeName: "aserto.directory.importer.v2.Importer";
    readonly methods: {
        /**
         * @generated from rpc aserto.directory.importer.v2.Importer.Import
         */
        readonly import: {
            readonly name: "Import";
            readonly I: typeof ImportRequest;
            readonly O: typeof ImportResponse;
            readonly kind: MethodKind.BiDiStreaming;
        };
    };
};
