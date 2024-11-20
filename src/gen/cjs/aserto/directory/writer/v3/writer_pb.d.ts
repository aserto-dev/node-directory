import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Empty } from "@bufbuild/protobuf/wkt";
import type { Object$, Relation } from "../../common/v3/common_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/writer/v3/writer.proto.
 */
export declare const file_aserto_directory_writer_v3_writer: GenFile;
/**
 * @generated from message aserto.directory.writer.v3.SetObjectRequest
 */
export type SetObjectRequest = Message<"aserto.directory.writer.v3.SetObjectRequest"> & {
    /**
     * object instance
     *
     * @generated from field: aserto.directory.common.v3.Object object = 1;
     */
    object?: Object$;
};
/**
 * Describes the message aserto.directory.writer.v3.SetObjectRequest.
 * Use `create(SetObjectRequestSchema)` to create a new message.
 */
export declare const SetObjectRequestSchema: GenMessage<SetObjectRequest>;
/**
 * @generated from message aserto.directory.writer.v3.SetObjectResponse
 */
export type SetObjectResponse = Message<"aserto.directory.writer.v3.SetObjectResponse"> & {
    /**
     * object instance
     *
     * @generated from field: aserto.directory.common.v3.Object result = 1;
     */
    result?: Object$;
};
/**
 * Describes the message aserto.directory.writer.v3.SetObjectResponse.
 * Use `create(SetObjectResponseSchema)` to create a new message.
 */
export declare const SetObjectResponseSchema: GenMessage<SetObjectResponse>;
/**
 * @generated from message aserto.directory.writer.v3.DeleteObjectRequest
 */
export type DeleteObjectRequest = Message<"aserto.directory.writer.v3.DeleteObjectRequest"> & {
    /**
     * object type
     *
     * @generated from field: string object_type = 1;
     */
    objectType: string;
    /**
     * object identifier
     *
     * @generated from field: string object_id = 2;
     */
    objectId: string;
    /**
     * delete object relations, both object and subject relations.
     *
     * @generated from field: bool with_relations = 3;
     */
    withRelations: boolean;
};
/**
 * Describes the message aserto.directory.writer.v3.DeleteObjectRequest.
 * Use `create(DeleteObjectRequestSchema)` to create a new message.
 */
export declare const DeleteObjectRequestSchema: GenMessage<DeleteObjectRequest>;
/**
 * @generated from message aserto.directory.writer.v3.DeleteObjectResponse
 */
export type DeleteObjectResponse = Message<"aserto.directory.writer.v3.DeleteObjectResponse"> & {
    /**
     * empty result
     *
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
};
/**
 * Describes the message aserto.directory.writer.v3.DeleteObjectResponse.
 * Use `create(DeleteObjectResponseSchema)` to create a new message.
 */
export declare const DeleteObjectResponseSchema: GenMessage<DeleteObjectResponse>;
/**
 * @generated from message aserto.directory.writer.v3.SetRelationRequest
 */
export type SetRelationRequest = Message<"aserto.directory.writer.v3.SetRelationRequest"> & {
    /**
     * relation instance
     *
     * @generated from field: aserto.directory.common.v3.Relation relation = 1;
     */
    relation?: Relation;
};
/**
 * Describes the message aserto.directory.writer.v3.SetRelationRequest.
 * Use `create(SetRelationRequestSchema)` to create a new message.
 */
export declare const SetRelationRequestSchema: GenMessage<SetRelationRequest>;
/**
 * @generated from message aserto.directory.writer.v3.SetRelationResponse
 */
export type SetRelationResponse = Message<"aserto.directory.writer.v3.SetRelationResponse"> & {
    /**
     * relation instance
     *
     * @generated from field: aserto.directory.common.v3.Relation result = 1;
     */
    result?: Relation;
};
/**
 * Describes the message aserto.directory.writer.v3.SetRelationResponse.
 * Use `create(SetRelationResponseSchema)` to create a new message.
 */
export declare const SetRelationResponseSchema: GenMessage<SetRelationResponse>;
/**
 * @generated from message aserto.directory.writer.v3.DeleteRelationRequest
 */
export type DeleteRelationRequest = Message<"aserto.directory.writer.v3.DeleteRelationRequest"> & {
    /**
     * object type
     *
     * @generated from field: string object_type = 1;
     */
    objectType: string;
    /**
     * object identifier
     *
     * @generated from field: string object_id = 2;
     */
    objectId: string;
    /**
     * object relation name
     *
     * @generated from field: string relation = 3;
     */
    relation: string;
    /**
     * subject type
     *
     * @generated from field: string subject_type = 4;
     */
    subjectType: string;
    /**
     * subject identifier
     *
     * @generated from field: string subject_id = 5;
     */
    subjectId: string;
    /**
     * optional subject relation name
     *
     * @generated from field: string subject_relation = 6;
     */
    subjectRelation: string;
};
/**
 * Describes the message aserto.directory.writer.v3.DeleteRelationRequest.
 * Use `create(DeleteRelationRequestSchema)` to create a new message.
 */
export declare const DeleteRelationRequestSchema: GenMessage<DeleteRelationRequest>;
/**
 * @generated from message aserto.directory.writer.v3.DeleteRelationResponse
 */
export type DeleteRelationResponse = Message<"aserto.directory.writer.v3.DeleteRelationResponse"> & {
    /**
     * empty result
     *
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
};
/**
 * Describes the message aserto.directory.writer.v3.DeleteRelationResponse.
 * Use `create(DeleteRelationResponseSchema)` to create a new message.
 */
export declare const DeleteRelationResponseSchema: GenMessage<DeleteRelationResponse>;
/**
 * @generated from service aserto.directory.writer.v3.Writer
 */
export declare const Writer: GenService<{
    /**
     * set object instance
     *
     * @generated from rpc aserto.directory.writer.v3.Writer.SetObject
     */
    setObject: {
        methodKind: "unary";
        input: typeof SetObjectRequestSchema;
        output: typeof SetObjectResponseSchema;
    };
    /**
     * delete object instance
     *
     * @generated from rpc aserto.directory.writer.v3.Writer.DeleteObject
     */
    deleteObject: {
        methodKind: "unary";
        input: typeof DeleteObjectRequestSchema;
        output: typeof DeleteObjectResponseSchema;
    };
    /**
     * set relation instance
     *
     * @generated from rpc aserto.directory.writer.v3.Writer.SetRelation
     */
    setRelation: {
        methodKind: "unary";
        input: typeof SetRelationRequestSchema;
        output: typeof SetRelationResponseSchema;
    };
    /**
     * delete relation instance
     *
     * @generated from rpc aserto.directory.writer.v3.Writer.DeleteRelation
     */
    deleteRelation: {
        methodKind: "unary";
        input: typeof DeleteRelationRequestSchema;
        output: typeof DeleteRelationResponseSchema;
    };
}>;
