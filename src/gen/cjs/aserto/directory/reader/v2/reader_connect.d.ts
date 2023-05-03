import { CheckPermissionRequest, CheckPermissionResponse, CheckRelationRequest, CheckRelationResponse, GetGraphRequest, GetGraphResponse, GetObjectManyRequest, GetObjectManyResponse, GetObjectRequest, GetObjectResponse, GetObjectsRequest, GetObjectsResponse, GetObjectTypeRequest, GetObjectTypeResponse, GetObjectTypesRequest, GetObjectTypesResponse, GetPermissionRequest, GetPermissionResponse, GetPermissionsRequest, GetPermissionsResponse, GetRelationRequest, GetRelationResponse, GetRelationsRequest, GetRelationsResponse, GetRelationTypeRequest, GetRelationTypeResponse, GetRelationTypesRequest, GetRelationTypesResponse } from "./reader_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service aserto.directory.reader.v2.Reader
 */
export declare const Reader: {
    readonly typeName: "aserto.directory.reader.v2.Reader";
    readonly methods: {
        /**
         * object type metadata methods
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.GetObjectType
         */
        readonly getObjectType: {
            readonly name: "GetObjectType";
            readonly I: typeof GetObjectTypeRequest;
            readonly O: typeof GetObjectTypeResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.reader.v2.Reader.GetObjectTypes
         */
        readonly getObjectTypes: {
            readonly name: "GetObjectTypes";
            readonly I: typeof GetObjectTypesRequest;
            readonly O: typeof GetObjectTypesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * relation type metadata methods
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.GetRelationType
         */
        readonly getRelationType: {
            readonly name: "GetRelationType";
            readonly I: typeof GetRelationTypeRequest;
            readonly O: typeof GetRelationTypeResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.reader.v2.Reader.GetRelationTypes
         */
        readonly getRelationTypes: {
            readonly name: "GetRelationTypes";
            readonly I: typeof GetRelationTypesRequest;
            readonly O: typeof GetRelationTypesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * permission metadata methods
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.GetPermission
         */
        readonly getPermission: {
            readonly name: "GetPermission";
            readonly I: typeof GetPermissionRequest;
            readonly O: typeof GetPermissionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.reader.v2.Reader.GetPermissions
         */
        readonly getPermissions: {
            readonly name: "GetPermissions";
            readonly I: typeof GetPermissionsRequest;
            readonly O: typeof GetPermissionsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * object methods
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.GetObject
         */
        readonly getObject: {
            readonly name: "GetObject";
            readonly I: typeof GetObjectRequest;
            readonly O: typeof GetObjectResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.reader.v2.Reader.GetObjectMany
         */
        readonly getObjectMany: {
            readonly name: "GetObjectMany";
            readonly I: typeof GetObjectManyRequest;
            readonly O: typeof GetObjectManyResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.reader.v2.Reader.GetObjects
         */
        readonly getObjects: {
            readonly name: "GetObjects";
            readonly I: typeof GetObjectsRequest;
            readonly O: typeof GetObjectsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * relation methods
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.GetRelation
         */
        readonly getRelation: {
            readonly name: "GetRelation";
            readonly I: typeof GetRelationRequest;
            readonly O: typeof GetRelationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.reader.v2.Reader.GetRelations
         */
        readonly getRelations: {
            readonly name: "GetRelations";
            readonly I: typeof GetRelationsRequest;
            readonly O: typeof GetRelationsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * check methods
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.CheckPermission
         */
        readonly checkPermission: {
            readonly name: "CheckPermission";
            readonly I: typeof CheckPermissionRequest;
            readonly O: typeof CheckPermissionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.reader.v2.Reader.CheckRelation
         */
        readonly checkRelation: {
            readonly name: "CheckRelation";
            readonly I: typeof CheckRelationRequest;
            readonly O: typeof CheckRelationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * graph methods
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.GetGraph
         */
        readonly getGraph: {
            readonly name: "GetGraph";
            readonly I: typeof GetGraphRequest;
            readonly O: typeof GetGraphResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
