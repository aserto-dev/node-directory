import { CheckPermissionRequest, CheckPermissionResponse, CheckRelationRequest, CheckRelationResponse, CheckRequest, CheckResponse, GetGraphRequest, GetGraphResponse, GetObjectManyRequest, GetObjectManyResponse, GetObjectRequest, GetObjectResponse, GetObjectsRequest, GetObjectsResponse, GetRelationRequest, GetRelationResponse, GetRelationsRequest, GetRelationsResponse } from "./reader_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service aserto.directory.reader.v3.Reader
 */
export declare const Reader: {
    readonly typeName: "aserto.directory.reader.v3.Reader";
    readonly methods: {
        /**
         * object methods
         *
         * @generated from rpc aserto.directory.reader.v3.Reader.GetObject
         */
        readonly getObject: {
            readonly name: "GetObject";
            readonly I: typeof GetObjectRequest;
            readonly O: typeof GetObjectResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.reader.v3.Reader.GetObjectMany
         */
        readonly getObjectMany: {
            readonly name: "GetObjectMany";
            readonly I: typeof GetObjectManyRequest;
            readonly O: typeof GetObjectManyResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.reader.v3.Reader.GetObjects
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
         * @generated from rpc aserto.directory.reader.v3.Reader.GetRelation
         */
        readonly getRelation: {
            readonly name: "GetRelation";
            readonly I: typeof GetRelationRequest;
            readonly O: typeof GetRelationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.reader.v3.Reader.GetRelations
         */
        readonly getRelations: {
            readonly name: "GetRelations";
            readonly I: typeof GetRelationsRequest;
            readonly O: typeof GetRelationsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * check method
         *
         * @generated from rpc aserto.directory.reader.v3.Reader.Check
         */
        readonly check: {
            readonly name: "Check";
            readonly I: typeof CheckRequest;
            readonly O: typeof CheckResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * check permission method
         *
         * @generated from rpc aserto.directory.reader.v3.Reader.CheckPermission
         */
        readonly checkPermission: {
            readonly name: "CheckPermission";
            readonly I: typeof CheckPermissionRequest;
            readonly O: typeof CheckPermissionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * check relation method
         *
         * @generated from rpc aserto.directory.reader.v3.Reader.CheckRelation
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
         * @generated from rpc aserto.directory.reader.v3.Reader.GetGraph
         */
        readonly getGraph: {
            readonly name: "GetGraph";
            readonly I: typeof GetGraphRequest;
            readonly O: typeof GetGraphResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
