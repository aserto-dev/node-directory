import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Empty } from "@bufbuild/protobuf/wkt";
import type { Object$, ObjectIdentifier, ObjectType, ObjectTypeIdentifier, Permission, PermissionIdentifier, Relation, RelationIdentifier, RelationType, RelationTypeIdentifier } from "../../common/v2/common_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/writer/v2/writer.proto.
 */
export declare const file_aserto_directory_writer_v2_writer: GenFile;
/**
 * @generated from message aserto.directory.writer.v2.SetObjectTypeRequest
 * @deprecated
 */
export type SetObjectTypeRequest = Message<"aserto.directory.writer.v2.SetObjectTypeRequest"> & {
    /**
     * object type instance
     *
     * @generated from field: aserto.directory.common.v2.ObjectType object_type = 1;
     */
    objectType?: ObjectType;
};
/**
 * Describes the message aserto.directory.writer.v2.SetObjectTypeRequest.
 * Use `create(SetObjectTypeRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const SetObjectTypeRequestSchema: GenMessage<SetObjectTypeRequest>;
/**
 * @generated from message aserto.directory.writer.v2.SetObjectTypeResponse
 * @deprecated
 */
export type SetObjectTypeResponse = Message<"aserto.directory.writer.v2.SetObjectTypeResponse"> & {
    /**
     * object type instance
     *
     * @generated from field: aserto.directory.common.v2.ObjectType result = 1;
     */
    result?: ObjectType;
};
/**
 * Describes the message aserto.directory.writer.v2.SetObjectTypeResponse.
 * Use `create(SetObjectTypeResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const SetObjectTypeResponseSchema: GenMessage<SetObjectTypeResponse>;
/**
 * @generated from message aserto.directory.writer.v2.DeleteObjectTypeRequest
 * @deprecated
 */
export type DeleteObjectTypeRequest = Message<"aserto.directory.writer.v2.DeleteObjectTypeRequest"> & {
    /**
     * object type identifier
     *
     * @generated from field: aserto.directory.common.v2.ObjectTypeIdentifier param = 1;
     */
    param?: ObjectTypeIdentifier;
};
/**
 * Describes the message aserto.directory.writer.v2.DeleteObjectTypeRequest.
 * Use `create(DeleteObjectTypeRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const DeleteObjectTypeRequestSchema: GenMessage<DeleteObjectTypeRequest>;
/**
 * @generated from message aserto.directory.writer.v2.DeleteObjectTypeResponse
 * @deprecated
 */
export type DeleteObjectTypeResponse = Message<"aserto.directory.writer.v2.DeleteObjectTypeResponse"> & {
    /**
     * empty result
     *
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
};
/**
 * Describes the message aserto.directory.writer.v2.DeleteObjectTypeResponse.
 * Use `create(DeleteObjectTypeResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const DeleteObjectTypeResponseSchema: GenMessage<DeleteObjectTypeResponse>;
/**
 * @generated from message aserto.directory.writer.v2.SetRelationTypeRequest
 * @deprecated
 */
export type SetRelationTypeRequest = Message<"aserto.directory.writer.v2.SetRelationTypeRequest"> & {
    /**
     * relation type instance
     *
     * @generated from field: aserto.directory.common.v2.RelationType relation_type = 1;
     */
    relationType?: RelationType;
};
/**
 * Describes the message aserto.directory.writer.v2.SetRelationTypeRequest.
 * Use `create(SetRelationTypeRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const SetRelationTypeRequestSchema: GenMessage<SetRelationTypeRequest>;
/**
 * @generated from message aserto.directory.writer.v2.SetRelationTypeResponse
 * @deprecated
 */
export type SetRelationTypeResponse = Message<"aserto.directory.writer.v2.SetRelationTypeResponse"> & {
    /**
     * relation types instance
     *
     * @generated from field: aserto.directory.common.v2.RelationType result = 1;
     */
    result?: RelationType;
};
/**
 * Describes the message aserto.directory.writer.v2.SetRelationTypeResponse.
 * Use `create(SetRelationTypeResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const SetRelationTypeResponseSchema: GenMessage<SetRelationTypeResponse>;
/**
 * @generated from message aserto.directory.writer.v2.DeleteRelationTypeRequest
 * @deprecated
 */
export type DeleteRelationTypeRequest = Message<"aserto.directory.writer.v2.DeleteRelationTypeRequest"> & {
    /**
     * relation type identifier
     *
     * @generated from field: aserto.directory.common.v2.RelationTypeIdentifier param = 1;
     */
    param?: RelationTypeIdentifier;
};
/**
 * Describes the message aserto.directory.writer.v2.DeleteRelationTypeRequest.
 * Use `create(DeleteRelationTypeRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const DeleteRelationTypeRequestSchema: GenMessage<DeleteRelationTypeRequest>;
/**
 * @generated from message aserto.directory.writer.v2.DeleteRelationTypeResponse
 * @deprecated
 */
export type DeleteRelationTypeResponse = Message<"aserto.directory.writer.v2.DeleteRelationTypeResponse"> & {
    /**
     * empty result
     *
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
};
/**
 * Describes the message aserto.directory.writer.v2.DeleteRelationTypeResponse.
 * Use `create(DeleteRelationTypeResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const DeleteRelationTypeResponseSchema: GenMessage<DeleteRelationTypeResponse>;
/**
 * @generated from message aserto.directory.writer.v2.SetPermissionRequest
 * @deprecated
 */
export type SetPermissionRequest = Message<"aserto.directory.writer.v2.SetPermissionRequest"> & {
    /**
     * permission instance
     *
     * @generated from field: aserto.directory.common.v2.Permission permission = 1;
     */
    permission?: Permission;
};
/**
 * Describes the message aserto.directory.writer.v2.SetPermissionRequest.
 * Use `create(SetPermissionRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const SetPermissionRequestSchema: GenMessage<SetPermissionRequest>;
/**
 * @generated from message aserto.directory.writer.v2.SetPermissionResponse
 * @deprecated
 */
export type SetPermissionResponse = Message<"aserto.directory.writer.v2.SetPermissionResponse"> & {
    /**
     * permission instance
     *
     * @generated from field: aserto.directory.common.v2.Permission result = 1;
     */
    result?: Permission;
};
/**
 * Describes the message aserto.directory.writer.v2.SetPermissionResponse.
 * Use `create(SetPermissionResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const SetPermissionResponseSchema: GenMessage<SetPermissionResponse>;
/**
 * @generated from message aserto.directory.writer.v2.DeletePermissionRequest
 * @deprecated
 */
export type DeletePermissionRequest = Message<"aserto.directory.writer.v2.DeletePermissionRequest"> & {
    /**
     * permission identifier
     *
     * @generated from field: aserto.directory.common.v2.PermissionIdentifier param = 1;
     */
    param?: PermissionIdentifier;
};
/**
 * Describes the message aserto.directory.writer.v2.DeletePermissionRequest.
 * Use `create(DeletePermissionRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const DeletePermissionRequestSchema: GenMessage<DeletePermissionRequest>;
/**
 * @generated from message aserto.directory.writer.v2.DeletePermissionResponse
 * @deprecated
 */
export type DeletePermissionResponse = Message<"aserto.directory.writer.v2.DeletePermissionResponse"> & {
    /**
     * empty result
     *
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
};
/**
 * Describes the message aserto.directory.writer.v2.DeletePermissionResponse.
 * Use `create(DeletePermissionResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const DeletePermissionResponseSchema: GenMessage<DeletePermissionResponse>;
/**
 * @generated from message aserto.directory.writer.v2.SetObjectRequest
 * @deprecated
 */
export type SetObjectRequest = Message<"aserto.directory.writer.v2.SetObjectRequest"> & {
    /**
     * object instance
     *
     * @generated from field: aserto.directory.common.v2.Object object = 1;
     */
    object?: Object$;
};
/**
 * Describes the message aserto.directory.writer.v2.SetObjectRequest.
 * Use `create(SetObjectRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const SetObjectRequestSchema: GenMessage<SetObjectRequest>;
/**
 * @generated from message aserto.directory.writer.v2.SetObjectResponse
 * @deprecated
 */
export type SetObjectResponse = Message<"aserto.directory.writer.v2.SetObjectResponse"> & {
    /**
     * object instance
     *
     * @generated from field: aserto.directory.common.v2.Object result = 1;
     */
    result?: Object$;
};
/**
 * Describes the message aserto.directory.writer.v2.SetObjectResponse.
 * Use `create(SetObjectResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const SetObjectResponseSchema: GenMessage<SetObjectResponse>;
/**
 * @generated from message aserto.directory.writer.v2.DeleteObjectRequest
 * @deprecated
 */
export type DeleteObjectRequest = Message<"aserto.directory.writer.v2.DeleteObjectRequest"> & {
    /**
     * object identifier
     *
     * @generated from field: aserto.directory.common.v2.ObjectIdentifier param = 1;
     */
    param?: ObjectIdentifier;
    /**
     * delete object relations, both object and subject relations.
     *
     * @generated from field: optional bool with_relations = 2;
     */
    withRelations?: boolean;
};
/**
 * Describes the message aserto.directory.writer.v2.DeleteObjectRequest.
 * Use `create(DeleteObjectRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const DeleteObjectRequestSchema: GenMessage<DeleteObjectRequest>;
/**
 * @generated from message aserto.directory.writer.v2.DeleteObjectResponse
 * @deprecated
 */
export type DeleteObjectResponse = Message<"aserto.directory.writer.v2.DeleteObjectResponse"> & {
    /**
     * empty result
     *
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
};
/**
 * Describes the message aserto.directory.writer.v2.DeleteObjectResponse.
 * Use `create(DeleteObjectResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const DeleteObjectResponseSchema: GenMessage<DeleteObjectResponse>;
/**
 * @generated from message aserto.directory.writer.v2.SetRelationRequest
 * @deprecated
 */
export type SetRelationRequest = Message<"aserto.directory.writer.v2.SetRelationRequest"> & {
    /**
     * relation instance
     *
     * @generated from field: aserto.directory.common.v2.Relation relation = 1;
     */
    relation?: Relation;
};
/**
 * Describes the message aserto.directory.writer.v2.SetRelationRequest.
 * Use `create(SetRelationRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const SetRelationRequestSchema: GenMessage<SetRelationRequest>;
/**
 * @generated from message aserto.directory.writer.v2.SetRelationResponse
 * @deprecated
 */
export type SetRelationResponse = Message<"aserto.directory.writer.v2.SetRelationResponse"> & {
    /**
     * relation instance
     *
     * @generated from field: aserto.directory.common.v2.Relation result = 1;
     */
    result?: Relation;
};
/**
 * Describes the message aserto.directory.writer.v2.SetRelationResponse.
 * Use `create(SetRelationResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const SetRelationResponseSchema: GenMessage<SetRelationResponse>;
/**
 * @generated from message aserto.directory.writer.v2.DeleteRelationRequest
 * @deprecated
 */
export type DeleteRelationRequest = Message<"aserto.directory.writer.v2.DeleteRelationRequest"> & {
    /**
     * relation identifier
     *
     * @generated from field: aserto.directory.common.v2.RelationIdentifier param = 1;
     */
    param?: RelationIdentifier;
};
/**
 * Describes the message aserto.directory.writer.v2.DeleteRelationRequest.
 * Use `create(DeleteRelationRequestSchema)` to create a new message.
 * @deprecated
 */
export declare const DeleteRelationRequestSchema: GenMessage<DeleteRelationRequest>;
/**
 * @generated from message aserto.directory.writer.v2.DeleteRelationResponse
 * @deprecated
 */
export type DeleteRelationResponse = Message<"aserto.directory.writer.v2.DeleteRelationResponse"> & {
    /**
     * empty result
     *
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
};
/**
 * Describes the message aserto.directory.writer.v2.DeleteRelationResponse.
 * Use `create(DeleteRelationResponseSchema)` to create a new message.
 * @deprecated
 */
export declare const DeleteRelationResponseSchema: GenMessage<DeleteRelationResponse>;
/**
 * @generated from service aserto.directory.writer.v2.Writer
 */
export declare const Writer: GenService<{
    /**
     * @generated from rpc aserto.directory.writer.v2.Writer.SetObjectType
     * @deprecated
     */
    setObjectType: {
        methodKind: "unary";
        input: typeof SetObjectTypeRequestSchema;
        output: typeof SetObjectTypeResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.writer.v2.Writer.DeleteObjectType
     * @deprecated
     */
    deleteObjectType: {
        methodKind: "unary";
        input: typeof DeleteObjectTypeRequestSchema;
        output: typeof DeleteObjectTypeResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.writer.v2.Writer.SetRelationType
     * @deprecated
     */
    setRelationType: {
        methodKind: "unary";
        input: typeof SetRelationTypeRequestSchema;
        output: typeof SetRelationTypeResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.writer.v2.Writer.DeleteRelationType
     * @deprecated
     */
    deleteRelationType: {
        methodKind: "unary";
        input: typeof DeleteRelationTypeRequestSchema;
        output: typeof DeleteRelationTypeResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.writer.v2.Writer.SetPermission
     * @deprecated
     */
    setPermission: {
        methodKind: "unary";
        input: typeof SetPermissionRequestSchema;
        output: typeof SetPermissionResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.writer.v2.Writer.DeletePermission
     * @deprecated
     */
    deletePermission: {
        methodKind: "unary";
        input: typeof DeletePermissionRequestSchema;
        output: typeof DeletePermissionResponseSchema;
    };
    /**
     * set object instance
     * Deprecated: directory.v2.SetObject is deprecated, use directory.v3.SetObject.
     *
     * @generated from rpc aserto.directory.writer.v2.Writer.SetObject
     * @deprecated
     */
    setObject: {
        methodKind: "unary";
        input: typeof SetObjectRequestSchema;
        output: typeof SetObjectResponseSchema;
    };
    /**
     * delete object instance
     * Deprecated: directory.v2.DeleteObject is deprecated, use directory.v3.DeleteObject.
     *
     * @generated from rpc aserto.directory.writer.v2.Writer.DeleteObject
     * @deprecated
     */
    deleteObject: {
        methodKind: "unary";
        input: typeof DeleteObjectRequestSchema;
        output: typeof DeleteObjectResponseSchema;
    };
    /**
     * set relation instance
     * Deprecated: directory.v2.SetRelation is deprecated, use directory.v3.SetRelation.
     *
     * @generated from rpc aserto.directory.writer.v2.Writer.SetRelation
     * @deprecated
     */
    setRelation: {
        methodKind: "unary";
        input: typeof SetRelationRequestSchema;
        output: typeof SetRelationResponseSchema;
    };
    /**
     * delete relation instance
     * Deprecated: directory.v2.DeleteRelation is deprecated, use directory.v3.DeleteRelation.
     *
     * @generated from rpc aserto.directory.writer.v2.Writer.DeleteRelation
     * @deprecated
     */
    deleteRelation: {
        methodKind: "unary";
        input: typeof DeleteRelationRequestSchema;
        output: typeof DeleteRelationResponseSchema;
    };
}>;
