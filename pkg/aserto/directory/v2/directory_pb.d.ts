// package: aserto.directory.v2
// file: aserto/directory/v2/directory.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../../protoc-gen-openapiv2/options/annotations_pb";
import * as aserto_common_info_v1_info_pb from "../../../aserto/common/info/v1/info_pb";
import * as aserto_api_v1_pagination_pb from "../../../aserto/api/v1/pagination_pb";
import * as aserto_directory_v2_object_pb from "../../../aserto/directory/v2/object_pb";
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
  hasBuild(): boolean;
  clearBuild(): void;
  getBuild(): aserto_common_info_v1_info_pb.BuildInfo | undefined;
  setBuild(value?: aserto_common_info_v1_info_pb.BuildInfo): void;

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
    build?: aserto_common_info_v1_info_pb.BuildInfo.AsObject,
  }
}

export class GetObjectTypeRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number;
  setId(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  getParamCase(): GetObjectTypeRequest.ParamCase;
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
    id: number,
    name: string,
  }

  export enum ParamCase {
    PARAM_NOT_SET = 0,
    ID = 1,
    NAME = 2,
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

export class SetObjectTypeRequest extends jspb.Message {
  hasObjectType(): boolean;
  clearObjectType(): void;
  getObjectType(): aserto_directory_v2_object_pb.ObjectType | undefined;
  setObjectType(value?: aserto_directory_v2_object_pb.ObjectType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetObjectTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetObjectTypeRequest): SetObjectTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetObjectTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetObjectTypeRequest;
  static deserializeBinaryFromReader(message: SetObjectTypeRequest, reader: jspb.BinaryReader): SetObjectTypeRequest;
}

export namespace SetObjectTypeRequest {
  export type AsObject = {
    objectType?: aserto_directory_v2_object_pb.ObjectType.AsObject,
  }
}

export class SetObjectTypeResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_object_pb.ObjectType>;
  setResultsList(value: Array<aserto_directory_v2_object_pb.ObjectType>): void;
  addResults(value?: aserto_directory_v2_object_pb.ObjectType, index?: number): aserto_directory_v2_object_pb.ObjectType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetObjectTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetObjectTypeResponse): SetObjectTypeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetObjectTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetObjectTypeResponse;
  static deserializeBinaryFromReader(message: SetObjectTypeResponse, reader: jspb.BinaryReader): SetObjectTypeResponse;
}

export namespace SetObjectTypeResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_object_pb.ObjectType.AsObject>,
  }
}

export class DeleteObjectTypeRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number;
  setId(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  getParamCase(): DeleteObjectTypeRequest.ParamCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteObjectTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteObjectTypeRequest): DeleteObjectTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteObjectTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteObjectTypeRequest;
  static deserializeBinaryFromReader(message: DeleteObjectTypeRequest, reader: jspb.BinaryReader): DeleteObjectTypeRequest;
}

export namespace DeleteObjectTypeRequest {
  export type AsObject = {
    id: number,
    name: string,
  }

  export enum ParamCase {
    PARAM_NOT_SET = 0,
    ID = 1,
    NAME = 2,
  }
}

export class DeleteObjectTypeResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): google_protobuf_empty_pb.Empty | undefined;
  setResult(value?: google_protobuf_empty_pb.Empty): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteObjectTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteObjectTypeResponse): DeleteObjectTypeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteObjectTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteObjectTypeResponse;
  static deserializeBinaryFromReader(message: DeleteObjectTypeResponse, reader: jspb.BinaryReader): DeleteObjectTypeResponse;
}

export namespace DeleteObjectTypeResponse {
  export type AsObject = {
    result?: google_protobuf_empty_pb.Empty.AsObject,
  }
}

export class ListObjectTypesRequest extends jspb.Message {
  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v1_pagination_pb.PaginationRequest | undefined;
  setPage(value?: aserto_api_v1_pagination_pb.PaginationRequest): void;

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
    page?: aserto_api_v1_pagination_pb.PaginationRequest.AsObject,
  }
}

export class ListObjectTypesResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_object_pb.ObjectType>;
  setResultsList(value: Array<aserto_directory_v2_object_pb.ObjectType>): void;
  addResults(value?: aserto_directory_v2_object_pb.ObjectType, index?: number): aserto_directory_v2_object_pb.ObjectType;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v1_pagination_pb.PaginationResponse | undefined;
  setPage(value?: aserto_api_v1_pagination_pb.PaginationResponse): void;

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
    page?: aserto_api_v1_pagination_pb.PaginationResponse.AsObject,
  }
}

export class GetObjTypeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjTypeRequest): GetObjTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjTypeRequest;
  static deserializeBinaryFromReader(message: GetObjTypeRequest, reader: jspb.BinaryReader): GetObjTypeRequest;
}

export namespace GetObjTypeRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetObjTypeResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjTypeResponse): GetObjTypeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjTypeResponse;
  static deserializeBinaryFromReader(message: GetObjTypeResponse, reader: jspb.BinaryReader): GetObjTypeResponse;
}

export namespace GetObjTypeResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetRelationTypeRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number;
  setId(value: number): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): aserto_directory_v2_relation_pb.RelationTypeKey | undefined;
  setKey(value?: aserto_directory_v2_relation_pb.RelationTypeKey): void;

  getParamCase(): GetRelationTypeRequest.ParamCase;
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
    id: number,
    key?: aserto_directory_v2_relation_pb.RelationTypeKey.AsObject,
  }

  export enum ParamCase {
    PARAM_NOT_SET = 0,
    ID = 1,
    KEY = 3,
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

export class SetRelationTypeRequest extends jspb.Message {
  hasRelationType(): boolean;
  clearRelationType(): void;
  getRelationType(): aserto_directory_v2_relation_pb.RelationType | undefined;
  setRelationType(value?: aserto_directory_v2_relation_pb.RelationType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetRelationTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetRelationTypeRequest): SetRelationTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetRelationTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetRelationTypeRequest;
  static deserializeBinaryFromReader(message: SetRelationTypeRequest, reader: jspb.BinaryReader): SetRelationTypeRequest;
}

export namespace SetRelationTypeRequest {
  export type AsObject = {
    relationType?: aserto_directory_v2_relation_pb.RelationType.AsObject,
  }
}

export class SetRelationTypeResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_relation_pb.RelationType>;
  setResultsList(value: Array<aserto_directory_v2_relation_pb.RelationType>): void;
  addResults(value?: aserto_directory_v2_relation_pb.RelationType, index?: number): aserto_directory_v2_relation_pb.RelationType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetRelationTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetRelationTypeResponse): SetRelationTypeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetRelationTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetRelationTypeResponse;
  static deserializeBinaryFromReader(message: SetRelationTypeResponse, reader: jspb.BinaryReader): SetRelationTypeResponse;
}

export namespace SetRelationTypeResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_relation_pb.RelationType.AsObject>,
  }
}

export class DeleteRelationTypeRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number;
  setId(value: number): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): aserto_directory_v2_relation_pb.RelationTypeKey | undefined;
  setKey(value?: aserto_directory_v2_relation_pb.RelationTypeKey): void;

  getParamCase(): DeleteRelationTypeRequest.ParamCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRelationTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRelationTypeRequest): DeleteRelationTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRelationTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRelationTypeRequest;
  static deserializeBinaryFromReader(message: DeleteRelationTypeRequest, reader: jspb.BinaryReader): DeleteRelationTypeRequest;
}

export namespace DeleteRelationTypeRequest {
  export type AsObject = {
    id: number,
    key?: aserto_directory_v2_relation_pb.RelationTypeKey.AsObject,
  }

  export enum ParamCase {
    PARAM_NOT_SET = 0,
    ID = 1,
    KEY = 2,
  }
}

export class DeleteRelationTypeResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): google_protobuf_empty_pb.Empty | undefined;
  setResult(value?: google_protobuf_empty_pb.Empty): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRelationTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRelationTypeResponse): DeleteRelationTypeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRelationTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRelationTypeResponse;
  static deserializeBinaryFromReader(message: DeleteRelationTypeResponse, reader: jspb.BinaryReader): DeleteRelationTypeResponse;
}

export namespace DeleteRelationTypeResponse {
  export type AsObject = {
    result?: google_protobuf_empty_pb.Empty.AsObject,
  }
}

export class ListRelationTypesRequest extends jspb.Message {
  hasObjectType(): boolean;
  clearObjectType(): void;
  getObjectType(): string;
  setObjectType(value: string): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v1_pagination_pb.PaginationRequest | undefined;
  setPage(value?: aserto_api_v1_pagination_pb.PaginationRequest): void;

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
    page?: aserto_api_v1_pagination_pb.PaginationRequest.AsObject,
  }
}

export class ListRelationTypesResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_relation_pb.RelationType>;
  setResultsList(value: Array<aserto_directory_v2_relation_pb.RelationType>): void;
  addResults(value?: aserto_directory_v2_relation_pb.RelationType, index?: number): aserto_directory_v2_relation_pb.RelationType;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v1_pagination_pb.PaginationResponse | undefined;
  setPage(value?: aserto_api_v1_pagination_pb.PaginationResponse): void;

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
    page?: aserto_api_v1_pagination_pb.PaginationResponse.AsObject,
  }
}

export class GetRelTypeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getObjectType(): string;
  setObjectType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRelTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRelTypeRequest): GetRelTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRelTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRelTypeRequest;
  static deserializeBinaryFromReader(message: GetRelTypeRequest, reader: jspb.BinaryReader): GetRelTypeRequest;
}

export namespace GetRelTypeRequest {
  export type AsObject = {
    name: string,
    objectType: string,
  }
}

export class GetRelTypeResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRelTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRelTypeResponse): GetRelTypeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRelTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRelTypeResponse;
  static deserializeBinaryFromReader(message: GetRelTypeResponse, reader: jspb.BinaryReader): GetRelTypeResponse;
}

export namespace GetRelTypeResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetObjectRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string;
  setId(value: string): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): aserto_directory_v2_object_pb.ObjectKey | undefined;
  setKey(value?: aserto_directory_v2_object_pb.ObjectKey): void;

  getParamCase(): GetObjectRequest.ParamCase;
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
    id: string,
    key?: aserto_directory_v2_object_pb.ObjectKey.AsObject,
  }

  export enum ParamCase {
    PARAM_NOT_SET = 0,
    ID = 1,
    KEY = 4,
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

export class SetObjectRequest extends jspb.Message {
  hasObject(): boolean;
  clearObject(): void;
  getObject(): aserto_directory_v2_object_pb.Object | undefined;
  setObject(value?: aserto_directory_v2_object_pb.Object): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetObjectRequest): SetObjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetObjectRequest;
  static deserializeBinaryFromReader(message: SetObjectRequest, reader: jspb.BinaryReader): SetObjectRequest;
}

export namespace SetObjectRequest {
  export type AsObject = {
    object?: aserto_directory_v2_object_pb.Object.AsObject,
  }
}

export class SetObjectResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_object_pb.Object>;
  setResultsList(value: Array<aserto_directory_v2_object_pb.Object>): void;
  addResults(value?: aserto_directory_v2_object_pb.Object, index?: number): aserto_directory_v2_object_pb.Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetObjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetObjectResponse): SetObjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetObjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetObjectResponse;
  static deserializeBinaryFromReader(message: SetObjectResponse, reader: jspb.BinaryReader): SetObjectResponse;
}

export namespace SetObjectResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_object_pb.Object.AsObject>,
  }
}

export class DeleteObjectRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string;
  setId(value: string): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): aserto_directory_v2_object_pb.ObjectKey | undefined;
  setKey(value?: aserto_directory_v2_object_pb.ObjectKey): void;

  getParamCase(): DeleteObjectRequest.ParamCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteObjectRequest): DeleteObjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteObjectRequest;
  static deserializeBinaryFromReader(message: DeleteObjectRequest, reader: jspb.BinaryReader): DeleteObjectRequest;
}

export namespace DeleteObjectRequest {
  export type AsObject = {
    id: string,
    key?: aserto_directory_v2_object_pb.ObjectKey.AsObject,
  }

  export enum ParamCase {
    PARAM_NOT_SET = 0,
    ID = 1,
    KEY = 4,
  }
}

export class DeleteObjectResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): google_protobuf_empty_pb.Empty | undefined;
  setResult(value?: google_protobuf_empty_pb.Empty): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteObjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteObjectResponse): DeleteObjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteObjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteObjectResponse;
  static deserializeBinaryFromReader(message: DeleteObjectResponse, reader: jspb.BinaryReader): DeleteObjectResponse;
}

export namespace DeleteObjectResponse {
  export type AsObject = {
    result?: google_protobuf_empty_pb.Empty.AsObject,
  }
}

export class ListObjectsRequest extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): string;
  setType(value: string): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v1_pagination_pb.PaginationRequest | undefined;
  setPage(value?: aserto_api_v1_pagination_pb.PaginationRequest): void;

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
    page?: aserto_api_v1_pagination_pb.PaginationRequest.AsObject,
  }
}

export class ListObjectsResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_object_pb.Object>;
  setResultsList(value: Array<aserto_directory_v2_object_pb.Object>): void;
  addResults(value?: aserto_directory_v2_object_pb.Object, index?: number): aserto_directory_v2_object_pb.Object;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v1_pagination_pb.PaginationResponse | undefined;
  setPage(value?: aserto_api_v1_pagination_pb.PaginationResponse): void;

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
    page?: aserto_api_v1_pagination_pb.PaginationResponse.AsObject,
  }
}

export class GetObjRequest extends jspb.Message {
  getTypeName(): string;
  setTypeName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjRequest): GetObjRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjRequest;
  static deserializeBinaryFromReader(message: GetObjRequest, reader: jspb.BinaryReader): GetObjRequest;
}

export namespace GetObjRequest {
  export type AsObject = {
    typeName: string,
    value: string,
  }
}

export class GetObjResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_object_pb.Object>;
  setResultsList(value: Array<aserto_directory_v2_object_pb.Object>): void;
  addResults(value?: aserto_directory_v2_object_pb.Object, index?: number): aserto_directory_v2_object_pb.Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjResponse): GetObjResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetObjResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjResponse;
  static deserializeBinaryFromReader(message: GetObjResponse, reader: jspb.BinaryReader): GetObjResponse;
}

export namespace GetObjResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_object_pb.Object.AsObject>,
  }
}

export class GetRelationRequest extends jspb.Message {
  getSourceType(): string;
  setSourceType(value: string): void;

  getSourceId(): string;
  setSourceId(value: string): void;

  getRelation(): string;
  setRelation(value: string): void;

  getTargetType(): string;
  setTargetType(value: string): void;

  getTargetId(): string;
  setTargetId(value: string): void;

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
    sourceType: string,
    sourceId: string,
    relation: string,
    targetType: string,
    targetId: string,
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

export class SetRelationRequest extends jspb.Message {
  hasRelation(): boolean;
  clearRelation(): void;
  getRelation(): aserto_directory_v2_relation_pb.Relation | undefined;
  setRelation(value?: aserto_directory_v2_relation_pb.Relation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetRelationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetRelationRequest): SetRelationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetRelationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetRelationRequest;
  static deserializeBinaryFromReader(message: SetRelationRequest, reader: jspb.BinaryReader): SetRelationRequest;
}

export namespace SetRelationRequest {
  export type AsObject = {
    relation?: aserto_directory_v2_relation_pb.Relation.AsObject,
  }
}

export class SetRelationResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_relation_pb.Relation>;
  setResultsList(value: Array<aserto_directory_v2_relation_pb.Relation>): void;
  addResults(value?: aserto_directory_v2_relation_pb.Relation, index?: number): aserto_directory_v2_relation_pb.Relation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetRelationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetRelationResponse): SetRelationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetRelationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetRelationResponse;
  static deserializeBinaryFromReader(message: SetRelationResponse, reader: jspb.BinaryReader): SetRelationResponse;
}

export namespace SetRelationResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_relation_pb.Relation.AsObject>,
  }
}

export class DeleteRelationRequest extends jspb.Message {
  getSourceType(): string;
  setSourceType(value: string): void;

  getSourceId(): string;
  setSourceId(value: string): void;

  getRelation(): string;
  setRelation(value: string): void;

  getTargetType(): string;
  setTargetType(value: string): void;

  getTargetId(): string;
  setTargetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRelationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRelationRequest): DeleteRelationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRelationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRelationRequest;
  static deserializeBinaryFromReader(message: DeleteRelationRequest, reader: jspb.BinaryReader): DeleteRelationRequest;
}

export namespace DeleteRelationRequest {
  export type AsObject = {
    sourceType: string,
    sourceId: string,
    relation: string,
    targetType: string,
    targetId: string,
  }
}

export class DeleteRelationResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): google_protobuf_empty_pb.Empty | undefined;
  setResult(value?: google_protobuf_empty_pb.Empty): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRelationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRelationResponse): DeleteRelationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRelationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRelationResponse;
  static deserializeBinaryFromReader(message: DeleteRelationResponse, reader: jspb.BinaryReader): DeleteRelationResponse;
}

export namespace DeleteRelationResponse {
  export type AsObject = {
    result?: google_protobuf_empty_pb.Empty.AsObject,
  }
}

export class ListRelationsRequest extends jspb.Message {
  getSourceType(): string;
  setSourceType(value: string): void;

  getSourceId(): string;
  setSourceId(value: string): void;

  getRelation(): string;
  setRelation(value: string): void;

  getTargetType(): string;
  setTargetType(value: string): void;

  getTargetId(): string;
  setTargetId(value: string): void;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v1_pagination_pb.PaginationRequest | undefined;
  setPage(value?: aserto_api_v1_pagination_pb.PaginationRequest): void;

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
    sourceType: string,
    sourceId: string,
    relation: string,
    targetType: string,
    targetId: string,
    page?: aserto_api_v1_pagination_pb.PaginationRequest.AsObject,
  }
}

export class ListRelationsResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_relation_pb.Relation>;
  setResultsList(value: Array<aserto_directory_v2_relation_pb.Relation>): void;
  addResults(value?: aserto_directory_v2_relation_pb.Relation, index?: number): aserto_directory_v2_relation_pb.Relation;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v1_pagination_pb.PaginationResponse | undefined;
  setPage(value?: aserto_api_v1_pagination_pb.PaginationResponse): void;

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
    page?: aserto_api_v1_pagination_pb.PaginationResponse.AsObject,
  }
}

export class GetRelRequest extends jspb.Message {
  getSourceType(): string;
  setSourceType(value: string): void;

  getSourceId(): string;
  setSourceId(value: string): void;

  getRelation(): string;
  setRelation(value: string): void;

  getTargetType(): string;
  setTargetType(value: string): void;

  getTargetId(): string;
  setTargetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRelRequest): GetRelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRelRequest;
  static deserializeBinaryFromReader(message: GetRelRequest, reader: jspb.BinaryReader): GetRelRequest;
}

export namespace GetRelRequest {
  export type AsObject = {
    sourceType: string,
    sourceId: string,
    relation: string,
    targetType: string,
    targetId: string,
  }
}

export class GetRelResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_relation_pb.Relation>;
  setResultsList(value: Array<aserto_directory_v2_relation_pb.Relation>): void;
  addResults(value?: aserto_directory_v2_relation_pb.Relation, index?: number): aserto_directory_v2_relation_pb.Relation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRelResponse): GetRelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRelResponse;
  static deserializeBinaryFromReader(message: GetRelResponse, reader: jspb.BinaryReader): GetRelResponse;
}

export namespace GetRelResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_relation_pb.Relation.AsObject>,
  }
}

export class GetPermissionRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string;
  setId(value: string): void;

  hasPermission(): boolean;
  clearPermission(): void;
  getPermission(): string;
  setPermission(value: string): void;

  getParamCase(): GetPermissionRequest.ParamCase;
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
    id: string,
    permission: string,
  }

  export enum ParamCase {
    PARAM_NOT_SET = 0,
    ID = 1,
    PERMISSION = 2,
  }
}

export class GetPermissionResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_relation_pb.Permission>;
  setResultsList(value: Array<aserto_directory_v2_relation_pb.Permission>): void;
  addResults(value?: aserto_directory_v2_relation_pb.Permission, index?: number): aserto_directory_v2_relation_pb.Permission;

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
    resultsList: Array<aserto_directory_v2_relation_pb.Permission.AsObject>,
  }
}

export class SetPermissionRequest extends jspb.Message {
  hasPermission(): boolean;
  clearPermission(): void;
  getPermission(): aserto_directory_v2_relation_pb.Permission | undefined;
  setPermission(value?: aserto_directory_v2_relation_pb.Permission): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPermissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetPermissionRequest): SetPermissionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPermissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPermissionRequest;
  static deserializeBinaryFromReader(message: SetPermissionRequest, reader: jspb.BinaryReader): SetPermissionRequest;
}

export namespace SetPermissionRequest {
  export type AsObject = {
    permission?: aserto_directory_v2_relation_pb.Permission.AsObject,
  }
}

export class SetPermissionResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_relation_pb.Permission>;
  setResultsList(value: Array<aserto_directory_v2_relation_pb.Permission>): void;
  addResults(value?: aserto_directory_v2_relation_pb.Permission, index?: number): aserto_directory_v2_relation_pb.Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPermissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetPermissionResponse): SetPermissionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPermissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPermissionResponse;
  static deserializeBinaryFromReader(message: SetPermissionResponse, reader: jspb.BinaryReader): SetPermissionResponse;
}

export namespace SetPermissionResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_relation_pb.Permission.AsObject>,
  }
}

export class DeletePermissionRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string;
  setId(value: string): void;

  hasPermission(): boolean;
  clearPermission(): void;
  getPermission(): string;
  setPermission(value: string): void;

  getParamCase(): DeletePermissionRequest.ParamCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePermissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePermissionRequest): DeletePermissionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePermissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePermissionRequest;
  static deserializeBinaryFromReader(message: DeletePermissionRequest, reader: jspb.BinaryReader): DeletePermissionRequest;
}

export namespace DeletePermissionRequest {
  export type AsObject = {
    id: string,
    permission: string,
  }

  export enum ParamCase {
    PARAM_NOT_SET = 0,
    ID = 1,
    PERMISSION = 2,
  }
}

export class DeletePermissionResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): google_protobuf_empty_pb.Empty | undefined;
  setResult(value?: google_protobuf_empty_pb.Empty): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePermissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePermissionResponse): DeletePermissionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePermissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePermissionResponse;
  static deserializeBinaryFromReader(message: DeletePermissionResponse, reader: jspb.BinaryReader): DeletePermissionResponse;
}

export namespace DeletePermissionResponse {
  export type AsObject = {
    result?: google_protobuf_empty_pb.Empty.AsObject,
  }
}

export class ListPermissionsRequest extends jspb.Message {
  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v1_pagination_pb.PaginationRequest | undefined;
  setPage(value?: aserto_api_v1_pagination_pb.PaginationRequest): void;

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
    page?: aserto_api_v1_pagination_pb.PaginationRequest.AsObject,
  }
}

export class ListPermissionsResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_relation_pb.Permission>;
  setResultsList(value: Array<aserto_directory_v2_relation_pb.Permission>): void;
  addResults(value?: aserto_directory_v2_relation_pb.Permission, index?: number): aserto_directory_v2_relation_pb.Permission;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): aserto_api_v1_pagination_pb.PaginationResponse | undefined;
  setPage(value?: aserto_api_v1_pagination_pb.PaginationResponse): void;

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
    resultsList: Array<aserto_directory_v2_relation_pb.Permission.AsObject>,
    page?: aserto_api_v1_pagination_pb.PaginationResponse.AsObject,
  }
}

export class GetPermRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPermRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPermRequest): GetPermRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPermRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPermRequest;
  static deserializeBinaryFromReader(message: GetPermRequest, reader: jspb.BinaryReader): GetPermRequest;
}

export namespace GetPermRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetPermResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPermResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPermResponse): GetPermResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPermResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPermResponse;
  static deserializeBinaryFromReader(message: GetPermResponse, reader: jspb.BinaryReader): GetPermResponse;
}

export namespace GetPermResponse {
  export type AsObject = {
    id: string,
  }
}

export class CheckRequest extends jspb.Message {
  getSubjectId(): string;
  setSubjectId(value: string): void;

  hasRelationId(): boolean;
  clearRelationId(): void;
  getRelationId(): number;
  setRelationId(value: number): void;

  hasPermissionId(): boolean;
  clearPermissionId(): void;
  getPermissionId(): string;
  setPermissionId(value: string): void;

  getObjectId(): string;
  setObjectId(value: string): void;

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
    subjectId: string,
    relationId: number,
    permissionId: string,
    objectId: string,
    trace: boolean,
  }

  export enum CheckCase {
    CHECK_NOT_SET = 0,
    RELATION_ID = 2,
    PERMISSION_ID = 3,
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

export class CheckRelationRequest extends jspb.Message {
  getObjectId(): string;
  setObjectId(value: string): void;

  getObjectType(): string;
  setObjectType(value: string): void;

  getRelation(): string;
  setRelation(value: string): void;

  getSubjectId(): string;
  setSubjectId(value: string): void;

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
    objectId: string,
    objectType: string,
    relation: string,
    subjectId: string,
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

export class CheckPermissionRequest extends jspb.Message {
  getObjectId(): string;
  setObjectId(value: string): void;

  getObjectType(): string;
  setObjectType(value: string): void;

  getPermission(): string;
  setPermission(value: string): void;

  getSubjectId(): string;
  setSubjectId(value: string): void;

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
    objectId: string,
    objectType: string,
    permission: string,
    subjectId: string,
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

export class ListObjectGraphRequest extends jspb.Message {
  getAnchorId(): string;
  setAnchorId(value: string): void;

  getSourceType(): number;
  setSourceType(value: number): void;

  getSourceId(): string;
  setSourceId(value: string): void;

  getRelation(): number;
  setRelation(value: number): void;

  getTargetType(): number;
  setTargetType(value: number): void;

  getTargetId(): string;
  setTargetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListObjectGraphRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListObjectGraphRequest): ListObjectGraphRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListObjectGraphRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListObjectGraphRequest;
  static deserializeBinaryFromReader(message: ListObjectGraphRequest, reader: jspb.BinaryReader): ListObjectGraphRequest;
}

export namespace ListObjectGraphRequest {
  export type AsObject = {
    anchorId: string,
    sourceType: number,
    sourceId: string,
    relation: number,
    targetType: number,
    targetId: string,
  }
}

export class ListObjectGraphResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<aserto_directory_v2_object_pb.ObjectDependency>;
  setResultsList(value: Array<aserto_directory_v2_object_pb.ObjectDependency>): void;
  addResults(value?: aserto_directory_v2_object_pb.ObjectDependency, index?: number): aserto_directory_v2_object_pb.ObjectDependency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListObjectGraphResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListObjectGraphResponse): ListObjectGraphResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListObjectGraphResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListObjectGraphResponse;
  static deserializeBinaryFromReader(message: ListObjectGraphResponse, reader: jspb.BinaryReader): ListObjectGraphResponse;
}

export namespace ListObjectGraphResponse {
  export type AsObject = {
    resultsList: Array<aserto_directory_v2_object_pb.ObjectDependency.AsObject>,
  }
}

export class GetGraphRequest extends jspb.Message {
  getAnchorId(): string;
  setAnchorId(value: string): void;

  getSourceType(): string;
  setSourceType(value: string): void;

  getSourceId(): string;
  setSourceId(value: string): void;

  getRelation(): string;
  setRelation(value: string): void;

  getTargetType(): string;
  setTargetType(value: string): void;

  getTargetId(): string;
  setTargetId(value: string): void;

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
    sourceType: string,
    sourceId: string,
    relation: string,
    targetType: string,
    targetId: string,
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

export interface OpcodeMap {
  OPCODE_UNKNOWN: 0;
  OPCODE_SET: 1;
  OPCODE_DELETE: 2;
}

export const Opcode: OpcodeMap;

