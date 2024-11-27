import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Empty, Timestamp } from "@bufbuild/protobuf/wkt";
import type { JsonObject, Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/model/v3/model.proto.
 */
export declare const file_aserto_directory_model_v3_model: GenFile;
/**
 * @generated from message aserto.directory.model.v3.GetManifestRequest
 */
export type GetManifestRequest = Message<"aserto.directory.model.v3.GetManifestRequest"> & {
    /**
     * empty request
     *
     * @generated from field: google.protobuf.Empty empty = 1;
     */
    empty?: Empty;
};
/**
 * Describes the message aserto.directory.model.v3.GetManifestRequest.
 * Use `create(GetManifestRequestSchema)` to create a new message.
 */
export declare const GetManifestRequestSchema: GenMessage<GetManifestRequest>;
/**
 * @generated from message aserto.directory.model.v3.GetManifestResponse
 */
export type GetManifestResponse = Message<"aserto.directory.model.v3.GetManifestResponse"> & {
    /**
     * @generated from oneof aserto.directory.model.v3.GetManifestResponse.msg
     */
    msg: {
        /**
         * Manifest metadata
         *
         * @generated from field: aserto.directory.model.v3.Metadata metadata = 1;
         */
        value: Metadata;
        case: "metadata";
    } | {
        /**
         * Manifest content
         *
         * @generated from field: aserto.directory.model.v3.Body body = 2;
         */
        value: Body;
        case: "body";
    } | {
        /**
         * Model
         *
         * @generated from field: google.protobuf.Struct model = 3;
         */
        value: JsonObject;
        case: "model";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message aserto.directory.model.v3.GetManifestResponse.
 * Use `create(GetManifestResponseSchema)` to create a new message.
 */
export declare const GetManifestResponseSchema: GenMessage<GetManifestResponse>;
/**
 * @generated from message aserto.directory.model.v3.SetManifestRequest
 */
export type SetManifestRequest = Message<"aserto.directory.model.v3.SetManifestRequest"> & {
    /**
     * manifest instance
     *
     * @generated from oneof aserto.directory.model.v3.SetManifestRequest.msg
     */
    msg: {
        /**
         * Manifest content
         *
         * @generated from field: aserto.directory.model.v3.Body body = 1;
         */
        value: Body;
        case: "body";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message aserto.directory.model.v3.SetManifestRequest.
 * Use `create(SetManifestRequestSchema)` to create a new message.
 */
export declare const SetManifestRequestSchema: GenMessage<SetManifestRequest>;
/**
 * @generated from message aserto.directory.model.v3.SetManifestResponse
 */
export type SetManifestResponse = Message<"aserto.directory.model.v3.SetManifestResponse"> & {
    /**
     * empty result
     *
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
};
/**
 * Describes the message aserto.directory.model.v3.SetManifestResponse.
 * Use `create(SetManifestResponseSchema)` to create a new message.
 */
export declare const SetManifestResponseSchema: GenMessage<SetManifestResponse>;
/**
 * @generated from message aserto.directory.model.v3.DeleteManifestRequest
 */
export type DeleteManifestRequest = Message<"aserto.directory.model.v3.DeleteManifestRequest"> & {
    /**
     * empty request
     *
     * @generated from field: google.protobuf.Empty empty = 1;
     */
    empty?: Empty;
};
/**
 * Describes the message aserto.directory.model.v3.DeleteManifestRequest.
 * Use `create(DeleteManifestRequestSchema)` to create a new message.
 */
export declare const DeleteManifestRequestSchema: GenMessage<DeleteManifestRequest>;
/**
 * @generated from message aserto.directory.model.v3.DeleteManifestResponse
 */
export type DeleteManifestResponse = Message<"aserto.directory.model.v3.DeleteManifestResponse"> & {
    /**
     * empty result
     *
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
};
/**
 * Describes the message aserto.directory.model.v3.DeleteManifestResponse.
 * Use `create(DeleteManifestResponseSchema)` to create a new message.
 */
export declare const DeleteManifestResponseSchema: GenMessage<DeleteManifestResponse>;
/**
 * @generated from message aserto.directory.model.v3.Metadata
 */
export type Metadata = Message<"aserto.directory.model.v3.Metadata"> & {
    /**
     * last updated timestamp (UTC)
     *
     * @generated from field: google.protobuf.Timestamp updated_at = 21;
     */
    updatedAt?: Timestamp;
    /**
     * object instance etag
     *
     * @generated from field: string etag = 23;
     */
    etag: string;
};
/**
 * Describes the message aserto.directory.model.v3.Metadata.
 * Use `create(MetadataSchema)` to create a new message.
 */
export declare const MetadataSchema: GenMessage<Metadata>;
/**
 * @generated from message aserto.directory.model.v3.Body
 */
export type Body = Message<"aserto.directory.model.v3.Body"> & {
    /**
     * manifest content
     *
     * @generated from field: bytes data = 2;
     */
    data: Uint8Array;
};
/**
 * Describes the message aserto.directory.model.v3.Body.
 * Use `create(BodySchema)` to create a new message.
 */
export declare const BodySchema: GenMessage<Body>;
/**
 * @generated from service aserto.directory.model.v3.Model
 */
export declare const Model: GenService<{
    /**
     * get manifest instance
     *
     * @generated from rpc aserto.directory.model.v3.Model.GetManifest
     */
    getManifest: {
        methodKind: "server_streaming";
        input: typeof GetManifestRequestSchema;
        output: typeof GetManifestResponseSchema;
    };
    /**
     * set manifest instance
     *
     * @generated from rpc aserto.directory.model.v3.Model.SetManifest
     */
    setManifest: {
        methodKind: "client_streaming";
        input: typeof SetManifestRequestSchema;
        output: typeof SetManifestResponseSchema;
    };
    /**
     * delete manifest instance
     *
     * @generated from rpc aserto.directory.model.v3.Model.DeleteManifest
     */
    deleteManifest: {
        methodKind: "unary";
        input: typeof DeleteManifestRequestSchema;
        output: typeof DeleteManifestResponseSchema;
    };
}>;
