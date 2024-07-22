import { DeleteObjectRequest, DeleteObjectResponse, DeleteObjectTypeRequest, DeleteObjectTypeResponse, DeletePermissionRequest, DeletePermissionResponse, DeleteRelationRequest, DeleteRelationResponse, DeleteRelationTypeRequest, DeleteRelationTypeResponse, SetObjectRequest, SetObjectResponse, SetObjectTypeRequest, SetObjectTypeResponse, SetPermissionRequest, SetPermissionResponse, SetRelationRequest, SetRelationResponse, SetRelationTypeRequest, SetRelationTypeResponse } from "./writer_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service aserto.directory.writer.v2.Writer
 */
export declare const Writer: {
    readonly typeName: "aserto.directory.writer.v2.Writer";
    readonly methods: {
        /**
         * @generated from rpc aserto.directory.writer.v2.Writer.SetObjectType
         * @deprecated
         */
        readonly setObjectType: {
            readonly name: "SetObjectType";
            readonly I: typeof SetObjectTypeRequest;
            readonly O: typeof SetObjectTypeResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.writer.v2.Writer.DeleteObjectType
         * @deprecated
         */
        readonly deleteObjectType: {
            readonly name: "DeleteObjectType";
            readonly I: typeof DeleteObjectTypeRequest;
            readonly O: typeof DeleteObjectTypeResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.writer.v2.Writer.SetRelationType
         * @deprecated
         */
        readonly setRelationType: {
            readonly name: "SetRelationType";
            readonly I: typeof SetRelationTypeRequest;
            readonly O: typeof SetRelationTypeResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.writer.v2.Writer.DeleteRelationType
         * @deprecated
         */
        readonly deleteRelationType: {
            readonly name: "DeleteRelationType";
            readonly I: typeof DeleteRelationTypeRequest;
            readonly O: typeof DeleteRelationTypeResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.writer.v2.Writer.SetPermission
         * @deprecated
         */
        readonly setPermission: {
            readonly name: "SetPermission";
            readonly I: typeof SetPermissionRequest;
            readonly O: typeof SetPermissionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.writer.v2.Writer.DeletePermission
         * @deprecated
         */
        readonly deletePermission: {
            readonly name: "DeletePermission";
            readonly I: typeof DeletePermissionRequest;
            readonly O: typeof DeletePermissionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * set object instance
         * Deprecated: directory.v2.SetObject is deprecated, use directory.v3.SetObject.
         *
         * @generated from rpc aserto.directory.writer.v2.Writer.SetObject
         * @deprecated
         */
        readonly setObject: {
            readonly name: "SetObject";
            readonly I: typeof SetObjectRequest;
            readonly O: typeof SetObjectResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * delete object instance
         * Deprecated: directory.v2.DeleteObject is deprecated, use directory.v3.DeleteObject.
         *
         * @generated from rpc aserto.directory.writer.v2.Writer.DeleteObject
         * @deprecated
         */
        readonly deleteObject: {
            readonly name: "DeleteObject";
            readonly I: typeof DeleteObjectRequest;
            readonly O: typeof DeleteObjectResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * set relation instance
         * Deprecated: directory.v2.SetRelation is deprecated, use directory.v3.SetRelation.
         *
         * @generated from rpc aserto.directory.writer.v2.Writer.SetRelation
         * @deprecated
         */
        readonly setRelation: {
            readonly name: "SetRelation";
            readonly I: typeof SetRelationRequest;
            readonly O: typeof SetRelationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * delete relation instance
         * Deprecated: directory.v2.DeleteRelation is deprecated, use directory.v3.DeleteRelation.
         *
         * @generated from rpc aserto.directory.writer.v2.Writer.DeleteRelation
         * @deprecated
         */
        readonly deleteRelation: {
            readonly name: "DeleteRelation";
            readonly I: typeof DeleteRelationRequest;
            readonly O: typeof DeleteRelationResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
