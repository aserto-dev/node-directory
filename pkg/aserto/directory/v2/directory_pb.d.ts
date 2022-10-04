// package: aserto.directory.v2
// file: aserto/directory/v2/directory.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../../protoc-gen-openapiv2/options/annotations_pb";
import * as aserto_api_v2_pagination_pb from "../../../aserto/api/v2/pagination_pb";
import * as aserto_directory_v2_object_pb from "../../../aserto/directory/v2/object_pb";
import * as aserto_directory_v2_permission_pb from "../../../aserto/directory/v2/permission_pb";
import * as aserto_directory_v2_relation_pb from "../../../aserto/directory/v2/relation_pb";

export class InfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InfoRequest): InfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoRequest;
  static deserializeBinaryFromReader(message: InfoRequest, reader: jspb.BinaryReader): InfoRequest;
}

export namespace InfoRequest {
  export type AsObject = {
  }
}

export class InfoResponse extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): google_protobuf_struct_pb.Struct | undefined;
  setInfo(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InfoResponse): InfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoResponse;
  static deserializeBinaryFromReader(message: InfoResponse, reader: jspb.BinaryReader): InfoResponse;
}

export namespace InfoResponse {
  export type AsObject = {
    info?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetObjectTypeRequest extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_v2_object_pb.ObjectTypeParam | undefined;
  setParam(value?: aserto_directory_v2_object_pb.ObjectTypeParam): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectTypeRequest): GetObjectTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectTypeRequest;
  static deserializeBinaryFromReader(message: GetObjectTypeRequest, reader: jspb.BinaryReader): GetObjectTypeRequest;
}

export namespace GetObjectTypeRequest {
  export type AsObject = {
    param?: aserto_directory_v2_object_pb.ObjectTypeParam.AsObject,
  }
}

export class GetObjectTypeResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_object_pb.ObjectType>;
  setResultsList(value: Array<aserto_directory_v2_object_pb.ObjectType>): void;
  addResults(value?: aserto_directory_v2_object_pb.ObjectType, index?: number): aserto_directory_v2_object_pb.ObjectType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectTypeResponse): GetObjectTypeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectTypeResponse;
  static deserializeBinaryFromReader(message: GetObjectTypeResponse, reader: jspb.BinaryReader): GetObjectTypeResponse;
}

export namespace GetObjectTypeResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_object_pb.ObjectType.AsObject>,
  }
}

export class ListObjectTypesRequest extends jspb.Message {
  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v2_pagination_pb.PaginationRequest | undefined;
  setPage(value?: aserto_api_v2_pagination_pb.PaginationRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListObjectTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListObjectTypesRequest): ListObjectTypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListObjectTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListObjectTypesRequest;
  static deserializeBinaryFromReader(message: ListObjectTypesRequest, reader: jspb.BinaryReader): ListObjectTypesRequest;
}

export namespace ListObjectTypesRequest {
  export type AsObject = {
    page?: aserto_api_v2_pagination_pb.PaginationRequest.AsObject,
  }
}

export class ListObjectTypesResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_object_pb.ObjectType>;
  setResultsList(value: Array<aserto_directory_v2_object_pb.ObjectType>): void;
  addResults(value?: aserto_directory_v2_object_pb.ObjectType, index?: number): aserto_directory_v2_object_pb.ObjectType;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v2_pagination_pb.PaginationResponse | undefined;
  setPage(value?: aserto_api_v2_pagination_pb.PaginationResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListObjectTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListObjectTypesResponse): ListObjectTypesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListObjectTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListObjectTypesResponse;
  static deserializeBinaryFromReader(message: ListObjectTypesResponse, reader: jspb.BinaryReader): ListObjectTypesResponse;
}

export namespace ListObjectTypesResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_object_pb.ObjectType.AsObject>,
    page?: aserto_api_v2_pagination_pb.PaginationResponse.AsObject,
  }
}

export class GetRelationTypeRequest extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_v2_relation_pb.RelationTypeParam | undefined;
  setParam(value?: aserto_directory_v2_relation_pb.RelationTypeParam): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRelationTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRelationTypeRequest): GetRelationTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRelationTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRelationTypeRequest;
  static deserializeBinaryFromReader(message: GetRelationTypeRequest, reader: jspb.BinaryReader): GetRelationTypeRequest;
}

export namespace GetRelationTypeRequest {
  export type AsObject = {
    param?: aserto_directory_v2_relation_pb.RelationTypeParam.AsObject,
  }
}

export class GetRelationTypeResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_relation_pb.RelationType>;
  setResultsList(value: Array<aserto_directory_v2_relation_pb.RelationType>): void;
  addResults(value?: aserto_directory_v2_relation_pb.RelationType, index?: number): aserto_directory_v2_relation_pb.RelationType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRelationTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRelationTypeResponse): GetRelationTypeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRelationTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRelationTypeResponse;
  static deserializeBinaryFromReader(message: GetRelationTypeResponse, reader: jspb.BinaryReader): GetRelationTypeResponse;
}

export namespace GetRelationTypeResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_relation_pb.RelationType.AsObject>,
  }
}

export class ListRelationTypesRequest extends jspb.Message {
  hasObjectType(): boolean;
  clearObjectType(): void;
  getObjectType(): string;
  setObjectType(value: string): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v2_pagination_pb.PaginationRequest | undefined;
  setPage(value?: aserto_api_v2_pagination_pb.PaginationRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRelationTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRelationTypesRequest): ListRelationTypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRelationTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRelationTypesRequest;
  static deserializeBinaryFromReader(message: ListRelationTypesRequest, reader: jspb.BinaryReader): ListRelationTypesRequest;
}

export namespace ListRelationTypesRequest {
  export type AsObject = {
    objectType: string,
    page?: aserto_api_v2_pagination_pb.PaginationRequest.AsObject,
  }
}

export class ListRelationTypesResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_relation_pb.RelationType>;
  setResultsList(value: Array<aserto_directory_v2_relation_pb.RelationType>): void;
  addResults(value?: aserto_directory_v2_relation_pb.RelationType, index?: number): aserto_directory_v2_relation_pb.RelationType;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v2_pagination_pb.PaginationResponse | undefined;
  setPage(value?: aserto_api_v2_pagination_pb.PaginationResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRelationTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRelationTypesResponse): ListRelationTypesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRelationTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRelationTypesResponse;
  static deserializeBinaryFromReader(message: ListRelationTypesResponse, reader: jspb.BinaryReader): ListRelationTypesResponse;
}

export namespace ListRelationTypesResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_relation_pb.RelationType.AsObject>,
    page?: aserto_api_v2_pagination_pb.PaginationResponse.AsObject,
  }
}

export class GetObjectRequest extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_v2_object_pb.ObjectParam | undefined;
  setParam(value?: aserto_directory_v2_object_pb.ObjectParam): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectRequest): GetObjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectRequest;
  static deserializeBinaryFromReader(message: GetObjectRequest, reader: jspb.BinaryReader): GetObjectRequest;
}

export namespace GetObjectRequest {
  export type AsObject = {
    param?: aserto_directory_v2_object_pb.ObjectParam.AsObject,
  }
}

export class GetObjectResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_object_pb.Object>;
  setResultsList(value: Array<aserto_directory_v2_object_pb.Object>): void;
  addResults(value?: aserto_directory_v2_object_pb.Object, index?: number): aserto_directory_v2_object_pb.Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectResponse): GetObjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectResponse;
  static deserializeBinaryFromReader(message: GetObjectResponse, reader: jspb.BinaryReader): GetObjectResponse;
}

export namespace GetObjectResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_object_pb.Object.AsObject>,
  }
}

export class GetObjectManyRequest extends jspb.Message {
  clearParamList(): void;
  getParamList(): Array<aserto_directory_v2_object_pb.ObjectParam>;
  setParamList(value: Array<aserto_directory_v2_object_pb.ObjectParam>): void;
  addParam(value?: aserto_directory_v2_object_pb.ObjectParam, index?: number): aserto_directory_v2_object_pb.ObjectParam;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectManyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectManyRequest): GetObjectManyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectManyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectManyRequest;
  static deserializeBinaryFromReader(message: GetObjectManyRequest, reader: jspb.BinaryReader): GetObjectManyRequest;
}

export namespace GetObjectManyRequest {
  export type AsObject = {
    paramList: Array<aserto_directory_v2_object_pb.ObjectParam.AsObject>,
  }
}

export class GetObjectManyResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_object_pb.Object>;
  setResultsList(value: Array<aserto_directory_v2_object_pb.Object>): void;
  addResults(value?: aserto_directory_v2_object_pb.Object, index?: number): aserto_directory_v2_object_pb.Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectManyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectManyResponse): GetObjectManyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectManyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectManyResponse;
  static deserializeBinaryFromReader(message: GetObjectManyResponse, reader: jspb.BinaryReader): GetObjectManyResponse;
}

export namespace GetObjectManyResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_object_pb.Object.AsObject>,
  }
}

export class ListObjectsRequest extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): string;
  setType(value: string): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v2_pagination_pb.PaginationRequest | undefined;
  setPage(value?: aserto_api_v2_pagination_pb.PaginationRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListObjectsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListObjectsRequest): ListObjectsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListObjectsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListObjectsRequest;
  static deserializeBinaryFromReader(message: ListObjectsRequest, reader: jspb.BinaryReader): ListObjectsRequest;
}

export namespace ListObjectsRequest {
  export type AsObject = {
    type: string,
    page?: aserto_api_v2_pagination_pb.PaginationRequest.AsObject,
  }
}

export class ListObjectsResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_object_pb.Object>;
  setResultsList(value: Array<aserto_directory_v2_object_pb.Object>): void;
  addResults(value?: aserto_directory_v2_object_pb.Object, index?: number): aserto_directory_v2_object_pb.Object;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v2_pagination_pb.PaginationResponse | undefined;
  setPage(value?: aserto_api_v2_pagination_pb.PaginationResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListObjectsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListObjectsResponse): ListObjectsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListObjectsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListObjectsResponse;
  static deserializeBinaryFromReader(message: ListObjectsResponse, reader: jspb.BinaryReader): ListObjectsResponse;
}

export namespace ListObjectsResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_object_pb.Object.AsObject>,
    page?: aserto_api_v2_pagination_pb.PaginationResponse.AsObject,
  }
}

export class GetRelationRequest extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_v2_relation_pb.RelationParam | undefined;
  setParam(value?: aserto_directory_v2_relation_pb.RelationParam): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRelationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRelationRequest): GetRelationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRelationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRelationRequest;
  static deserializeBinaryFromReader(message: GetRelationRequest, reader: jspb.BinaryReader): GetRelationRequest;
}

export namespace GetRelationRequest {
  export type AsObject = {
    param?: aserto_directory_v2_relation_pb.RelationParam.AsObject,
  }
}

export class GetRelationResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_relation_pb.Relation>;
  setResultsList(value: Array<aserto_directory_v2_relation_pb.Relation>): void;
  addResults(value?: aserto_directory_v2_relation_pb.Relation, index?: number): aserto_directory_v2_relation_pb.Relation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRelationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRelationResponse): GetRelationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRelationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRelationResponse;
  static deserializeBinaryFromReader(message: GetRelationResponse, reader: jspb.BinaryReader): GetRelationResponse;
}

export namespace GetRelationResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_relation_pb.Relation.AsObject>,
  }
}

export class ListRelationsRequest extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_v2_relation_pb.RelationParam | undefined;
  setParam(value?: aserto_directory_v2_relation_pb.RelationParam): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v2_pagination_pb.PaginationRequest | undefined;
  setPage(value?: aserto_api_v2_pagination_pb.PaginationRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRelationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRelationsRequest): ListRelationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRelationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRelationsRequest;
  static deserializeBinaryFromReader(message: ListRelationsRequest, reader: jspb.BinaryReader): ListRelationsRequest;
}

export namespace ListRelationsRequest {
  export type AsObject = {
    param?: aserto_directory_v2_relation_pb.RelationParam.AsObject,
    page?: aserto_api_v2_pagination_pb.PaginationRequest.AsObject,
  }
}

export class ListRelationsResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_relation_pb.Relation>;
  setResultsList(value: Array<aserto_directory_v2_relation_pb.Relation>): void;
  addResults(value?: aserto_directory_v2_relation_pb.Relation, index?: number): aserto_directory_v2_relation_pb.Relation;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v2_pagination_pb.PaginationResponse | undefined;
  setPage(value?: aserto_api_v2_pagination_pb.PaginationResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRelationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRelationsResponse): ListRelationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRelationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRelationsResponse;
  static deserializeBinaryFromReader(message: ListRelationsResponse, reader: jspb.BinaryReader): ListRelationsResponse;
}

export namespace ListRelationsResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_relation_pb.Relation.AsObject>,
    page?: aserto_api_v2_pagination_pb.PaginationResponse.AsObject,
  }
}

export class GetPermissionRequest extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_v2_permission_pb.PermissionParam | undefined;
  setParam(value?: aserto_directory_v2_permission_pb.PermissionParam): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPermissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPermissionRequest): GetPermissionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPermissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPermissionRequest;
  static deserializeBinaryFromReader(message: GetPermissionRequest, reader: jspb.BinaryReader): GetPermissionRequest;
}

export namespace GetPermissionRequest {
  export type AsObject = {
    param?: aserto_directory_v2_permission_pb.PermissionParam.AsObject,
  }
}

export class GetPermissionResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_permission_pb.Permission>;
  setResultsList(value: Array<aserto_directory_v2_permission_pb.Permission>): void;
  addResults(value?: aserto_directory_v2_permission_pb.Permission, index?: number): aserto_directory_v2_permission_pb.Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPermissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPermissionResponse): GetPermissionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPermissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPermissionResponse;
  static deserializeBinaryFromReader(message: GetPermissionResponse, reader: jspb.BinaryReader): GetPermissionResponse;
}

export namespace GetPermissionResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_permission_pb.Permission.AsObject>,
  }
}

export class ListPermissionsRequest extends jspb.Message {
  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v2_pagination_pb.PaginationRequest | undefined;
  setPage(value?: aserto_api_v2_pagination_pb.PaginationRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPermissionsRequest): ListPermissionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPermissionsRequest;
  static deserializeBinaryFromReader(message: ListPermissionsRequest, reader: jspb.BinaryReader): ListPermissionsRequest;
}

export namespace ListPermissionsRequest {
  export type AsObject = {
    page?: aserto_api_v2_pagination_pb.PaginationRequest.AsObject,
  }
}

export class ListPermissionsResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_permission_pb.Permission>;
  setResultsList(value: Array<aserto_directory_v2_permission_pb.Permission>): void;
  addResults(value?: aserto_directory_v2_permission_pb.Permission, index?: number): aserto_directory_v2_permission_pb.Permission;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v2_pagination_pb.PaginationResponse | undefined;
  setPage(value?: aserto_api_v2_pagination_pb.PaginationResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPermissionsResponse): ListPermissionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPermissionsResponse;
  static deserializeBinaryFromReader(message: ListPermissionsResponse, reader: jspb.BinaryReader): ListPermissionsResponse;
}

export namespace ListPermissionsResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_permission_pb.Permission.AsObject>,
    page?: aserto_api_v2_pagination_pb.PaginationResponse.AsObject,
  }
}

export class CheckRequest extends jspb.Message {
  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): aserto_directory_v2_object_pb.ObjectParam | undefined;
  setSubject(value?: aserto_directory_v2_object_pb.ObjectParam): void;

  hasRelation(): boolean;
  clearRelation(): void;
  getRelation(): aserto_directory_v2_relation_pb.RelationTypeParam | undefined;
  setRelation(value?: aserto_directory_v2_relation_pb.RelationTypeParam): void;

  hasPermission(): boolean;
  clearPermission(): void;
  getPermission(): aserto_directory_v2_permission_pb.PermissionParam | undefined;
  setPermission(value?: aserto_directory_v2_permission_pb.PermissionParam): void;

  hasObject(): boolean;
  clearObject(): void;
  getObject(): aserto_directory_v2_object_pb.ObjectParam | undefined;
  setObject(value?: aserto_directory_v2_object_pb.ObjectParam): void;

  getTrace(): boolean;
  setTrace(value: boolean): void;

  getCheckCase(): CheckRequest.CheckCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckRequest): CheckRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckRequest;
  static deserializeBinaryFromReader(message: CheckRequest, reader: jspb.BinaryReader): CheckRequest;
}

export namespace CheckRequest {
  export type AsObject = {
    subject?: aserto_directory_v2_object_pb.ObjectParam.AsObject,
    relation?: aserto_directory_v2_relation_pb.RelationTypeParam.AsObject,
    permission?: aserto_directory_v2_permission_pb.PermissionParam.AsObject,
    object?: aserto_directory_v2_object_pb.ObjectParam.AsObject,
    trace: boolean,
  }

  export enum CheckCase {
    CHECK_NOT_SET = 0,
    RELATION = 2,
    PERMISSION = 3,
  }
}

export class CheckResponse extends jspb.Message {
  getCheck(): boolean;
  setCheck(value: boolean): void;

  clearTraceList(): void;
  getTraceList(): Array<string>;
  setTraceList(value: Array<string>): void;
  addTrace(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckResponse): CheckResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckResponse;
  static deserializeBinaryFromReader(message: CheckResponse, reader: jspb.BinaryReader): CheckResponse;
}

export namespace CheckResponse {
  export type AsObject = {
    check: boolean,
    traceList: Array<string>,
  }
}

export class GetGraphRequest extends jspb.Message {
  getAnchorId(): string;
  setAnchorId(value: string): void;

  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_v2_relation_pb.RelationParam | undefined;
  setParam(value?: aserto_directory_v2_relation_pb.RelationParam): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGraphRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGraphRequest): GetGraphRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGraphRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGraphRequest;
  static deserializeBinaryFromReader(message: GetGraphRequest, reader: jspb.BinaryReader): GetGraphRequest;
}

export namespace GetGraphRequest {
  export type AsObject = {
    anchorId: string,
    param?: aserto_directory_v2_relation_pb.RelationParam.AsObject,
  }
}

export class GetGraphResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_object_pb.ObjectDependency>;
  setResultsList(value: Array<aserto_directory_v2_object_pb.ObjectDependency>): void;
  addResults(value?: aserto_directory_v2_object_pb.ObjectDependency, index?: number): aserto_directory_v2_object_pb.ObjectDependency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGraphResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGraphResponse): GetGraphResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGraphResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGraphResponse;
  static deserializeBinaryFromReader(message: GetGraphResponse, reader: jspb.BinaryReader): GetGraphResponse;
}

export namespace GetGraphResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_object_pb.ObjectDependency.AsObject>,
  }
}

