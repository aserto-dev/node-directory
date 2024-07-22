import { DeleteManifestRequest, DeleteManifestResponse, GetManifestRequest, GetManifestResponse, SetManifestRequest, SetManifestResponse } from "./model_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service aserto.directory.model.v3.Model
 */
export declare const Model: {
    readonly typeName: "aserto.directory.model.v3.Model";
    readonly methods: {
        /**
         * get manifest instance
         *
         * @generated from rpc aserto.directory.model.v3.Model.GetManifest
         */
        readonly getManifest: {
            readonly name: "GetManifest";
            readonly I: typeof GetManifestRequest;
            readonly O: typeof GetManifestResponse;
            readonly kind: MethodKind.ServerStreaming;
        };
        /**
         * set manifest instance
         *
         * @generated from rpc aserto.directory.model.v3.Model.SetManifest
         */
        readonly setManifest: {
            readonly name: "SetManifest";
            readonly I: typeof SetManifestRequest;
            readonly O: typeof SetManifestResponse;
            readonly kind: MethodKind.ClientStreaming;
        };
        /**
         * delete manifest instance
         *
         * @generated from rpc aserto.directory.model.v3.Model.DeleteManifest
         */
        readonly deleteManifest: {
            readonly name: "DeleteManifest";
            readonly I: typeof DeleteManifestRequest;
            readonly O: typeof DeleteManifestResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
