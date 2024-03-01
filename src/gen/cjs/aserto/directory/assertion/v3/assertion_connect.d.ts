import { DeleteAssertionRequest, DeleteAssertionResponse, GetAssertionRequest, GetAssertionResponse, ListAssertionsRequest, ListAssertionsResponse, SetAssertionRequest, SetAssertionResponse } from "./assertion_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service aserto.directory.assertion.v3.Assertion
 */
export declare const Assertion: {
    readonly typeName: "aserto.directory.assertion.v3.Assertion";
    readonly methods: {
        /**
         * @generated from rpc aserto.directory.assertion.v3.Assertion.GetAssertion
         */
        readonly getAssertion: {
            readonly name: "GetAssertion";
            readonly I: typeof GetAssertionRequest;
            readonly O: typeof GetAssertionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.assertion.v3.Assertion.ListAssertions
         */
        readonly listAssertions: {
            readonly name: "ListAssertions";
            readonly I: typeof ListAssertionsRequest;
            readonly O: typeof ListAssertionsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.assertion.v3.Assertion.SetAssertion
         */
        readonly setAssertion: {
            readonly name: "SetAssertion";
            readonly I: typeof SetAssertionRequest;
            readonly O: typeof SetAssertionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.assertion.v3.Assertion.DeleteAssertion
         */
        readonly deleteAssertion: {
            readonly name: "DeleteAssertion";
            readonly I: typeof DeleteAssertionRequest;
            readonly O: typeof DeleteAssertionResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
