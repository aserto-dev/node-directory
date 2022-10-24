// package: aserto.directory.reader.v2
// file: aserto/directory/reader/v2/reader.proto

import * as jspb from "google-protobuf";
import * as aserto_directory_common_v2_common_pb from "../../../../aserto/directory/common/v2/common_pb";

export class GetObjectTypeRequest extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_common_v2_common_pb.ObjectTypeIdentifier | undefined;
  setParam(value?: aserto_directory_common_v2_common_pb.ObjectTypeIdentifier): void;

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
    param?: aserto_directory_common_v2_common_pb.ObjectTypeIdentifier.AsObject,
  }
}

export class GetObjectTypeResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): aserto_directory_common_v2_common_pb.ObjectType | undefined;
  setResult(value?: aserto_directory_common_v2_common_pb.ObjectType): void;

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
    result?: aserto_directory_common_v2_common_pb.ObjectType.AsObject,
  }
}

export class GetObjectTypesRequest extends jspb.Message {
  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_directory_common_v2_common_pb.PaginationRequest | undefined;
  setPage(value?: aserto_directory_common_v2_common_pb.PaginationRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectTypesRequest): GetObjectTypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectTypesRequest;
  static deserializeBinaryFromReader(message: GetObjectTypesRequest, reader: jspb.BinaryReader): GetObjectTypesRequest;
}

export namespace GetObjectTypesRequest {
  export type AsObject = {
    page?: aserto_directory_common_v2_common_pb.PaginationRequest.AsObject,
  }
}

export class GetObjectTypesResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_common_v2_common_pb.ObjectType>;
  setResultsList(value: Array<aserto_directory_common_v2_common_pb.ObjectType>): void;
  addResults(value?: aserto_directory_common_v2_common_pb.ObjectType, index?: number): aserto_directory_common_v2_common_pb.ObjectType;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_directory_common_v2_common_pb.PaginationResponse | undefined;
  setPage(value?: aserto_directory_common_v2_common_pb.PaginationResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectTypesResponse): GetObjectTypesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectTypesResponse;
  static deserializeBinaryFromReader(message: GetObjectTypesResponse, reader: jspb.BinaryReader): GetObjectTypesResponse;
}

export namespace GetObjectTypesResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_common_v2_common_pb.ObjectType.AsObject>,
    page?: aserto_directory_common_v2_common_pb.PaginationResponse.AsObject,
  }
}

export class GetRelationTypeRequest extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_common_v2_common_pb.RelationTypeIdentifier | undefined;
  setParam(value?: aserto_directory_common_v2_common_pb.RelationTypeIdentifier): void;

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
    param?: aserto_directory_common_v2_common_pb.RelationTypeIdentifier.AsObject,
  }
}

export class GetRelationTypeResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): aserto_directory_common_v2_common_pb.RelationType | undefined;
  setResult(value?: aserto_directory_common_v2_common_pb.RelationType): void;

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
    result?: aserto_directory_common_v2_common_pb.RelationType.AsObject,
  }
}

export class GetRelationTypesRequest extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_common_v2_common_pb.ObjectTypeIdentifier | undefined;
  setParam(value?: aserto_directory_common_v2_common_pb.ObjectTypeIdentifier): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_directory_common_v2_common_pb.PaginationRequest | undefined;
  setPage(value?: aserto_directory_common_v2_common_pb.PaginationRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRelationTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRelationTypesRequest): GetRelationTypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRelationTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRelationTypesRequest;
  static deserializeBinaryFromReader(message: GetRelationTypesRequest, reader: jspb.BinaryReader): GetRelationTypesRequest;
}

export namespace GetRelationTypesRequest {
  export type AsObject = {
    param?: aserto_directory_common_v2_common_pb.ObjectTypeIdentifier.AsObject,
    page?: aserto_directory_common_v2_common_pb.PaginationRequest.AsObject,
  }
}

export class GetRelationTypesResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_common_v2_common_pb.RelationType>;
  setResultsList(value: Array<aserto_directory_common_v2_common_pb.RelationType>): void;
  addResults(value?: aserto_directory_common_v2_common_pb.RelationType, index?: number): aserto_directory_common_v2_common_pb.RelationType;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_directory_common_v2_common_pb.PaginationResponse | undefined;
  setPage(value?: aserto_directory_common_v2_common_pb.PaginationResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRelationTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRelationTypesResponse): GetRelationTypesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRelationTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRelationTypesResponse;
  static deserializeBinaryFromReader(message: GetRelationTypesResponse, reader: jspb.BinaryReader): GetRelationTypesResponse;
}

export namespace GetRelationTypesResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_common_v2_common_pb.RelationType.AsObject>,
    page?: aserto_directory_common_v2_common_pb.PaginationResponse.AsObject,
  }
}

export class GetObjectRequest extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_common_v2_common_pb.ObjectIdentifier | undefined;
  setParam(value?: aserto_directory_common_v2_common_pb.ObjectIdentifier): void;

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
    param?: aserto_directory_common_v2_common_pb.ObjectIdentifier.AsObject,
  }
}

export class GetObjectResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): aserto_directory_common_v2_common_pb.Object | undefined;
  setResult(value?: aserto_directory_common_v2_common_pb.Object): void;

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
    result?: aserto_directory_common_v2_common_pb.Object.AsObject,
  }
}

export class GetObjectManyRequest extends jspb.Message {
  clearParamList(): void;
  getParamList(): Array<aserto_directory_common_v2_common_pb.ObjectIdentifier>;
  setParamList(value: Array<aserto_directory_common_v2_common_pb.ObjectIdentifier>): void;
  addParam(value?: aserto_directory_common_v2_common_pb.ObjectIdentifier, index?: number): aserto_directory_common_v2_common_pb.ObjectIdentifier;

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
    paramList: Array<aserto_directory_common_v2_common_pb.ObjectIdentifier.AsObject>,
  }
}

export class GetObjectManyResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_common_v2_common_pb.Object>;
  setResultsList(value: Array<aserto_directory_common_v2_common_pb.Object>): void;
  addResults(value?: aserto_directory_common_v2_common_pb.Object, index?: number): aserto_directory_common_v2_common_pb.Object;

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
    resultsList: Array<aserto_directory_common_v2_common_pb.Object.AsObject>,
  }
}

export class GetObjectsRequest extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_common_v2_common_pb.ObjectTypeIdentifier | undefined;
  setParam(value?: aserto_directory_common_v2_common_pb.ObjectTypeIdentifier): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_directory_common_v2_common_pb.PaginationRequest | undefined;
  setPage(value?: aserto_directory_common_v2_common_pb.PaginationRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectsRequest): GetObjectsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectsRequest;
  static deserializeBinaryFromReader(message: GetObjectsRequest, reader: jspb.BinaryReader): GetObjectsRequest;
}

export namespace GetObjectsRequest {
  export type AsObject = {
    param?: aserto_directory_common_v2_common_pb.ObjectTypeIdentifier.AsObject,
    page?: aserto_directory_common_v2_common_pb.PaginationRequest.AsObject,
  }
}

export class GetObjectsResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_common_v2_common_pb.Object>;
  setResultsList(value: Array<aserto_directory_common_v2_common_pb.Object>): void;
  addResults(value?: aserto_directory_common_v2_common_pb.Object, index?: number): aserto_directory_common_v2_common_pb.Object;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_directory_common_v2_common_pb.PaginationResponse | undefined;
  setPage(value?: aserto_directory_common_v2_common_pb.PaginationResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectsResponse): GetObjectsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjectsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectsResponse;
  static deserializeBinaryFromReader(message: GetObjectsResponse, reader: jspb.BinaryReader): GetObjectsResponse;
}

export namespace GetObjectsResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_common_v2_common_pb.Object.AsObject>,
    page?: aserto_directory_common_v2_common_pb.PaginationResponse.AsObject,
  }
}

export class GetRelationRequest extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_common_v2_common_pb.RelationIdentifier | undefined;
  setParam(value?: aserto_directory_common_v2_common_pb.RelationIdentifier): void;

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
    param?: aserto_directory_common_v2_common_pb.RelationIdentifier.AsObject,
  }
}

export class GetRelationResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_common_v2_common_pb.Relation>;
  setResultsList(value: Array<aserto_directory_common_v2_common_pb.Relation>): void;
  addResults(value?: aserto_directory_common_v2_common_pb.Relation, index?: number): aserto_directory_common_v2_common_pb.Relation;

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
    resultsList: Array<aserto_directory_common_v2_common_pb.Relation.AsObject>,
  }
}

export class GetRelationsRequest extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_common_v2_common_pb.RelationIdentifier | undefined;
  setParam(value?: aserto_directory_common_v2_common_pb.RelationIdentifier): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_directory_common_v2_common_pb.PaginationRequest | undefined;
  setPage(value?: aserto_directory_common_v2_common_pb.PaginationRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRelationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRelationsRequest): GetRelationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRelationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRelationsRequest;
  static deserializeBinaryFromReader(message: GetRelationsRequest, reader: jspb.BinaryReader): GetRelationsRequest;
}

export namespace GetRelationsRequest {
  export type AsObject = {
    param?: aserto_directory_common_v2_common_pb.RelationIdentifier.AsObject,
    page?: aserto_directory_common_v2_common_pb.PaginationRequest.AsObject,
  }
}

export class GetRelationsResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_common_v2_common_pb.Relation>;
  setResultsList(value: Array<aserto_directory_common_v2_common_pb.Relation>): void;
  addResults(value?: aserto_directory_common_v2_common_pb.Relation, index?: number): aserto_directory_common_v2_common_pb.Relation;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_directory_common_v2_common_pb.PaginationResponse | undefined;
  setPage(value?: aserto_directory_common_v2_common_pb.PaginationResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRelationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRelationsResponse): GetRelationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRelationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRelationsResponse;
  static deserializeBinaryFromReader(message: GetRelationsResponse, reader: jspb.BinaryReader): GetRelationsResponse;
}

export namespace GetRelationsResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_common_v2_common_pb.Relation.AsObject>,
    page?: aserto_directory_common_v2_common_pb.PaginationResponse.AsObject,
  }
}

export class GetPermissionRequest extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_common_v2_common_pb.PermissionIdentifier | undefined;
  setParam(value?: aserto_directory_common_v2_common_pb.PermissionIdentifier): void;

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
    param?: aserto_directory_common_v2_common_pb.PermissionIdentifier.AsObject,
  }
}

export class GetPermissionResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): aserto_directory_common_v2_common_pb.Permission | undefined;
  setResult(value?: aserto_directory_common_v2_common_pb.Permission): void;

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
    result?: aserto_directory_common_v2_common_pb.Permission.AsObject,
  }
}

export class GetPermissionsRequest extends jspb.Message {
  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_directory_common_v2_common_pb.PaginationRequest | undefined;
  setPage(value?: aserto_directory_common_v2_common_pb.PaginationRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPermissionsRequest): GetPermissionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPermissionsRequest;
  static deserializeBinaryFromReader(message: GetPermissionsRequest, reader: jspb.BinaryReader): GetPermissionsRequest;
}

export namespace GetPermissionsRequest {
  export type AsObject = {
    page?: aserto_directory_common_v2_common_pb.PaginationRequest.AsObject,
  }
}

export class GetPermissionsResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_common_v2_common_pb.Permission>;
  setResultsList(value: Array<aserto_directory_common_v2_common_pb.Permission>): void;
  addResults(value?: aserto_directory_common_v2_common_pb.Permission, index?: number): aserto_directory_common_v2_common_pb.Permission;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_directory_common_v2_common_pb.PaginationResponse | undefined;
  setPage(value?: aserto_directory_common_v2_common_pb.PaginationResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPermissionsResponse): GetPermissionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPermissionsResponse;
  static deserializeBinaryFromReader(message: GetPermissionsResponse, reader: jspb.BinaryReader): GetPermissionsResponse;
}

export namespace GetPermissionsResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_common_v2_common_pb.Permission.AsObject>,
    page?: aserto_directory_common_v2_common_pb.PaginationResponse.AsObject,
  }
}

export class CheckPermissionRequest extends jspb.Message {
  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): aserto_directory_common_v2_common_pb.ObjectIdentifier | undefined;
  setSubject(value?: aserto_directory_common_v2_common_pb.ObjectIdentifier): void;

  hasPermission(): boolean;
  clearPermission(): void;
  getPermission(): aserto_directory_common_v2_common_pb.PermissionIdentifier | undefined;
  setPermission(value?: aserto_directory_common_v2_common_pb.PermissionIdentifier): void;

  hasObject(): boolean;
  clearObject(): void;
  getObject(): aserto_directory_common_v2_common_pb.ObjectIdentifier | undefined;
  setObject(value?: aserto_directory_common_v2_common_pb.ObjectIdentifier): void;

  getTrace(): boolean;
  setTrace(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckPermissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckPermissionRequest): CheckPermissionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckPermissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckPermissionRequest;
  static deserializeBinaryFromReader(message: CheckPermissionRequest, reader: jspb.BinaryReader): CheckPermissionRequest;
}

export namespace CheckPermissionRequest {
  export type AsObject = {
    subject?: aserto_directory_common_v2_common_pb.ObjectIdentifier.AsObject,
    permission?: aserto_directory_common_v2_common_pb.PermissionIdentifier.AsObject,
    object?: aserto_directory_common_v2_common_pb.ObjectIdentifier.AsObject,
    trace: boolean,
  }
}

export class CheckPermissionResponse extends jspb.Message {
  getCheck(): boolean;
  setCheck(value: boolean): void;

  clearTraceList(): void;
  getTraceList(): Array<string>;
  setTraceList(value: Array<string>): void;
  addTrace(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckPermissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckPermissionResponse): CheckPermissionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckPermissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckPermissionResponse;
  static deserializeBinaryFromReader(message: CheckPermissionResponse, reader: jspb.BinaryReader): CheckPermissionResponse;
}

export namespace CheckPermissionResponse {
  export type AsObject = {
    check: boolean,
    traceList: Array<string>,
  }
}

export class CheckRelationRequest extends jspb.Message {
  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): aserto_directory_common_v2_common_pb.ObjectIdentifier | undefined;
  setSubject(value?: aserto_directory_common_v2_common_pb.ObjectIdentifier): void;

  hasRelation(): boolean;
  clearRelation(): void;
  getRelation(): aserto_directory_common_v2_common_pb.RelationTypeIdentifier | undefined;
  setRelation(value?: aserto_directory_common_v2_common_pb.RelationTypeIdentifier): void;

  hasObject(): boolean;
  clearObject(): void;
  getObject(): aserto_directory_common_v2_common_pb.ObjectIdentifier | undefined;
  setObject(value?: aserto_directory_common_v2_common_pb.ObjectIdentifier): void;

  getTrace(): boolean;
  setTrace(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckRelationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckRelationRequest): CheckRelationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckRelationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckRelationRequest;
  static deserializeBinaryFromReader(message: CheckRelationRequest, reader: jspb.BinaryReader): CheckRelationRequest;
}

export namespace CheckRelationRequest {
  export type AsObject = {
    subject?: aserto_directory_common_v2_common_pb.ObjectIdentifier.AsObject,
    relation?: aserto_directory_common_v2_common_pb.RelationTypeIdentifier.AsObject,
    object?: aserto_directory_common_v2_common_pb.ObjectIdentifier.AsObject,
    trace: boolean,
  }
}

export class CheckRelationResponse extends jspb.Message {
  getCheck(): boolean;
  setCheck(value: boolean): void;

  clearTraceList(): void;
  getTraceList(): Array<string>;
  setTraceList(value: Array<string>): void;
  addTrace(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckRelationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckRelationResponse): CheckRelationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckRelationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckRelationResponse;
  static deserializeBinaryFromReader(message: CheckRelationResponse, reader: jspb.BinaryReader): CheckRelationResponse;
}

export namespace CheckRelationResponse {
  export type AsObject = {
    check: boolean,
    traceList: Array<string>,
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
  hasAnchor(): boolean;
  clearAnchor(): void;
  getAnchor(): aserto_directory_common_v2_common_pb.ObjectIdentifier | undefined;
  setAnchor(value?: aserto_directory_common_v2_common_pb.ObjectIdentifier): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): aserto_directory_common_v2_common_pb.ObjectIdentifier | undefined;
  setSubject(value?: aserto_directory_common_v2_common_pb.ObjectIdentifier): void;

  hasRelation(): boolean;
  clearRelation(): void;
  getRelation(): aserto_directory_common_v2_common_pb.RelationTypeIdentifier | undefined;
  setRelation(value?: aserto_directory_common_v2_common_pb.RelationTypeIdentifier): void;

  hasObject(): boolean;
  clearObject(): void;
  getObject(): aserto_directory_common_v2_common_pb.ObjectIdentifier | undefined;
  setObject(value?: aserto_directory_common_v2_common_pb.ObjectIdentifier): void;

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
    anchor?: aserto_directory_common_v2_common_pb.ObjectIdentifier.AsObject,
    subject?: aserto_directory_common_v2_common_pb.ObjectIdentifier.AsObject,
    relation?: aserto_directory_common_v2_common_pb.RelationTypeIdentifier.AsObject,
    object?: aserto_directory_common_v2_common_pb.ObjectIdentifier.AsObject,
  }
}

export class GetGraphResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_common_v2_common_pb.ObjectDependency>;
  setResultsList(value: Array<aserto_directory_common_v2_common_pb.ObjectDependency>): void;
  addResults(value?: aserto_directory_common_v2_common_pb.ObjectDependency, index?: number): aserto_directory_common_v2_common_pb.ObjectDependency;

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
    resultsList: Array<aserto_directory_common_v2_common_pb.ObjectDependency.AsObject>,
  }
}

