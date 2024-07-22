import { CheckPermissionRequest, CheckPermissionResponse, CheckRelationRequest, CheckRelationResponse, GetGraphRequest, GetGraphResponse, GetObjectManyRequest, GetObjectManyResponse, GetObjectRequest, GetObjectResponse, GetObjectsRequest, GetObjectsResponse, GetObjectTypeRequest, GetObjectTypeResponse, GetObjectTypesRequest, GetObjectTypesResponse, GetPermissionRequest, GetPermissionResponse, GetPermissionsRequest, GetPermissionsResponse, GetRelationRequest, GetRelationResponse, GetRelationsRequest, GetRelationsResponse, GetRelationTypeRequest, GetRelationTypeResponse, GetRelationTypesRequest, GetRelationTypesResponse } from "./reader_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service aserto.directory.reader.v2.Reader
 */
export declare const Reader: {
    readonly typeName: "aserto.directory.reader.v2.Reader";
    readonly methods: {
        /**
         * get object type metadata
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.GetObjectType
         * @deprecated
         */
        readonly getObjectType: {
            readonly name: "GetObjectType";
            readonly I: typeof GetObjectTypeRequest;
            readonly O: typeof GetObjectTypeResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * list object type metadata
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.GetObjectTypes
         * @deprecated
         */
        readonly getObjectTypes: {
            readonly name: "GetObjectTypes";
            readonly I: typeof GetObjectTypesRequest;
            readonly O: typeof GetObjectTypesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * get relation type metadata
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.GetRelationType
         * @deprecated
         */
        readonly getRelationType: {
            readonly name: "GetRelationType";
            readonly I: typeof GetRelationTypeRequest;
            readonly O: typeof GetRelationTypeResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * list relation type metadata
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.GetRelationTypes
         * @deprecated
         */
        readonly getRelationTypes: {
            readonly name: "GetRelationTypes";
            readonly I: typeof GetRelationTypesRequest;
            readonly O: typeof GetRelationTypesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * get permission metadata
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.GetPermission
         * @deprecated
         */
        readonly getPermission: {
            readonly name: "GetPermission";
            readonly I: typeof GetPermissionRequest;
            readonly O: typeof GetPermissionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * list permission metadata
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.GetPermissions
         * @deprecated
         */
        readonly getPermissions: {
            readonly name: "GetPermissions";
            readonly I: typeof GetPermissionsRequest;
            readonly O: typeof GetPermissionsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * get object
         * Deprecated: directory.v2.GetObject is deprecated, use directory.v3.GetObject.
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.GetObject
         * @deprecated
         */
        readonly getObject: {
            readonly name: "GetObject";
            readonly I: typeof GetObjectRequest;
            readonly O: typeof GetObjectResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * get multiple objects
         * Deprecated: directory.v2.GetObjectMany is deprecated, update to use directory.v3.GetObjectMany.
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.GetObjectMany
         * @deprecated
         */
        readonly getObjectMany: {
            readonly name: "GetObjectMany";
            readonly I: typeof GetObjectManyRequest;
            readonly O: typeof GetObjectManyResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * list objects
         * Deprecated: directory.v2.GetObjects is deprecated, update to use directory.v3.GetObjects.
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.GetObjects
         * @deprecated
         */
        readonly getObjects: {
            readonly name: "GetObjects";
            readonly I: typeof GetObjectsRequest;
            readonly O: typeof GetObjectsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * get relation
         * Deprecated: directory.v2.GetRelation is deprecated, update to use directory.v3.GetRelation.
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.GetRelation
         * @deprecated
         */
        readonly getRelation: {
            readonly name: "GetRelation";
            readonly I: typeof GetRelationRequest;
            readonly O: typeof GetRelationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * list relations
         * Deprecated: directory.v2.GetRelations is deprecated, update to use directory.v3.GetRelations.
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.GetRelations
         * @deprecated
         */
        readonly getRelations: {
            readonly name: "GetRelations";
            readonly I: typeof GetRelationsRequest;
            readonly O: typeof GetRelationsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * check permission
         * Deprecated: directory.v2.CheckPermission is deprecated, update to use directory.v3.Check.
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.CheckPermission
         * @deprecated
         */
        readonly checkPermission: {
            readonly name: "CheckPermission";
            readonly I: typeof CheckPermissionRequest;
            readonly O: typeof CheckPermissionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * check relation
         * Deprecated: directory.v2.CheckRelation is deprecated, update to use directory.v3.Check.
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.CheckRelation
         * @deprecated
         */
        readonly checkRelation: {
            readonly name: "CheckRelation";
            readonly I: typeof CheckRelationRequest;
            readonly O: typeof CheckRelationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * get object relationship graph
         * Deprecated: directory.v2.GetGraph is deprecated, update to use directory.v3.GetGraph.
         *
         * @generated from rpc aserto.directory.reader.v2.Reader.GetGraph
         * @deprecated
         */
        readonly getGraph: {
            readonly name: "GetGraph";
            readonly I: typeof GetGraphRequest;
            readonly O: typeof GetGraphResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
