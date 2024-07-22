import { DeleteObjectRequest, DeleteObjectResponse, DeleteRelationRequest, DeleteRelationResponse, SetObjectRequest, SetObjectResponse, SetRelationRequest, SetRelationResponse } from "./writer_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service aserto.directory.writer.v3.Writer
 */
export declare const Writer: {
    readonly typeName: "aserto.directory.writer.v3.Writer";
    readonly methods: {
        /**
         * set object instance
         *
         * @generated from rpc aserto.directory.writer.v3.Writer.SetObject
         */
        readonly setObject: {
            readonly name: "SetObject";
            readonly I: typeof SetObjectRequest;
            readonly O: typeof SetObjectResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * delete object instance
         *
         * @generated from rpc aserto.directory.writer.v3.Writer.DeleteObject
         */
        readonly deleteObject: {
            readonly name: "DeleteObject";
            readonly I: typeof DeleteObjectRequest;
            readonly O: typeof DeleteObjectResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * set relation instance
         *
         * @generated from rpc aserto.directory.writer.v3.Writer.SetRelation
         */
        readonly setRelation: {
            readonly name: "SetRelation";
            readonly I: typeof SetRelationRequest;
            readonly O: typeof SetRelationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * delete relation instance
         *
         * @generated from rpc aserto.directory.writer.v3.Writer.DeleteRelation
         */
        readonly deleteRelation: {
            readonly name: "DeleteRelation";
            readonly I: typeof DeleteRelationRequest;
            readonly O: typeof DeleteRelationResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
