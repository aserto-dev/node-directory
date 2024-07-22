import { ImportRequest, ImportResponse } from "./importer_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service aserto.directory.importer.v3.Importer
 */
export declare const Importer: {
    readonly typeName: "aserto.directory.importer.v3.Importer";
    readonly methods: {
        /**
         * import stream of objects and relations
         *
         * @generated from rpc aserto.directory.importer.v3.Importer.Import
         */
        readonly import: {
            readonly name: "Import";
            readonly I: typeof ImportRequest;
            readonly O: typeof ImportResponse;
            readonly kind: MethodKind.BiDiStreaming;
        };
    };
};
