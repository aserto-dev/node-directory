// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file aserto/directory/model/v3/model.proto (package aserto.directory.model.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Empty, Message, proto3, Struct, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message aserto.directory.model.v3.GetManifestRequest
 */
export class GetManifestRequest extends Message<GetManifestRequest> {
  /**
   * empty request
   *
   * @generated from field: google.protobuf.Empty empty = 1;
   */
  empty?: Empty;

  constructor(data?: PartialMessage<GetManifestRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.model.v3.GetManifestRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "empty", kind: "message", T: Empty },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetManifestRequest {
    return new GetManifestRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetManifestRequest {
    return new GetManifestRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetManifestRequest {
    return new GetManifestRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetManifestRequest | PlainMessage<GetManifestRequest> | undefined, b: GetManifestRequest | PlainMessage<GetManifestRequest> | undefined): boolean {
    return proto3.util.equals(GetManifestRequest, a, b);
  }
}

/**
 * @generated from message aserto.directory.model.v3.GetManifestResponse
 */
export class GetManifestResponse extends Message<GetManifestResponse> {
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
    value: Struct;
    case: "model";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<GetManifestResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.model.v3.GetManifestResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: Metadata, oneof: "msg" },
    { no: 2, name: "body", kind: "message", T: Body, oneof: "msg" },
    { no: 3, name: "model", kind: "message", T: Struct, oneof: "msg" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetManifestResponse {
    return new GetManifestResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetManifestResponse {
    return new GetManifestResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetManifestResponse {
    return new GetManifestResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetManifestResponse | PlainMessage<GetManifestResponse> | undefined, b: GetManifestResponse | PlainMessage<GetManifestResponse> | undefined): boolean {
    return proto3.util.equals(GetManifestResponse, a, b);
  }
}

/**
 * @generated from message aserto.directory.model.v3.SetManifestRequest
 */
export class SetManifestRequest extends Message<SetManifestRequest> {
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
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<SetManifestRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.model.v3.SetManifestRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "body", kind: "message", T: Body, oneof: "msg" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetManifestRequest {
    return new SetManifestRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetManifestRequest {
    return new SetManifestRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetManifestRequest {
    return new SetManifestRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SetManifestRequest | PlainMessage<SetManifestRequest> | undefined, b: SetManifestRequest | PlainMessage<SetManifestRequest> | undefined): boolean {
    return proto3.util.equals(SetManifestRequest, a, b);
  }
}

/**
 * @generated from message aserto.directory.model.v3.SetManifestResponse
 */
export class SetManifestResponse extends Message<SetManifestResponse> {
  /**
   * empty result
   *
   * @generated from field: google.protobuf.Empty result = 1;
   */
  result?: Empty;

  constructor(data?: PartialMessage<SetManifestResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.model.v3.SetManifestResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: Empty },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetManifestResponse {
    return new SetManifestResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetManifestResponse {
    return new SetManifestResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetManifestResponse {
    return new SetManifestResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SetManifestResponse | PlainMessage<SetManifestResponse> | undefined, b: SetManifestResponse | PlainMessage<SetManifestResponse> | undefined): boolean {
    return proto3.util.equals(SetManifestResponse, a, b);
  }
}

/**
 * @generated from message aserto.directory.model.v3.DeleteManifestRequest
 */
export class DeleteManifestRequest extends Message<DeleteManifestRequest> {
  /**
   * empty request
   *
   * @generated from field: google.protobuf.Empty empty = 1;
   */
  empty?: Empty;

  constructor(data?: PartialMessage<DeleteManifestRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.model.v3.DeleteManifestRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "empty", kind: "message", T: Empty },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteManifestRequest {
    return new DeleteManifestRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteManifestRequest {
    return new DeleteManifestRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteManifestRequest {
    return new DeleteManifestRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteManifestRequest | PlainMessage<DeleteManifestRequest> | undefined, b: DeleteManifestRequest | PlainMessage<DeleteManifestRequest> | undefined): boolean {
    return proto3.util.equals(DeleteManifestRequest, a, b);
  }
}

/**
 * @generated from message aserto.directory.model.v3.DeleteManifestResponse
 */
export class DeleteManifestResponse extends Message<DeleteManifestResponse> {
  /**
   * empty result
   *
   * @generated from field: google.protobuf.Empty result = 1;
   */
  result?: Empty;

  constructor(data?: PartialMessage<DeleteManifestResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.model.v3.DeleteManifestResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: Empty },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteManifestResponse {
    return new DeleteManifestResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteManifestResponse {
    return new DeleteManifestResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteManifestResponse {
    return new DeleteManifestResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteManifestResponse | PlainMessage<DeleteManifestResponse> | undefined, b: DeleteManifestResponse | PlainMessage<DeleteManifestResponse> | undefined): boolean {
    return proto3.util.equals(DeleteManifestResponse, a, b);
  }
}

/**
 * @generated from message aserto.directory.model.v3.Metadata
 */
export class Metadata extends Message<Metadata> {
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
  etag = "";

  constructor(data?: PartialMessage<Metadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.model.v3.Metadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 21, name: "updated_at", kind: "message", T: Timestamp },
    { no: 23, name: "etag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Metadata {
    return new Metadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Metadata {
    return new Metadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Metadata {
    return new Metadata().fromJsonString(jsonString, options);
  }

  static equals(a: Metadata | PlainMessage<Metadata> | undefined, b: Metadata | PlainMessage<Metadata> | undefined): boolean {
    return proto3.util.equals(Metadata, a, b);
  }
}

/**
 * @generated from message aserto.directory.model.v3.Body
 */
export class Body extends Message<Body> {
  /**
   * manifest content
   *
   * @generated from field: bytes data = 2;
   */
  data = new Uint8Array(0);

  constructor(data?: PartialMessage<Body>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.model.v3.Body";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Body {
    return new Body().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Body {
    return new Body().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Body {
    return new Body().fromJsonString(jsonString, options);
  }

  static equals(a: Body | PlainMessage<Body> | undefined, b: Body | PlainMessage<Body> | undefined): boolean {
    return proto3.util.equals(Body, a, b);
  }
}

