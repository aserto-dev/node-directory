// package: aserto.directory.common.v2
// file: aserto/directory/common/v2/common.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ObjectType extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getIsSubject(): boolean;
  setIsSubject(value: boolean): void;

  getOrdinal(): number;
  setOrdinal(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  hasSchema(): boolean;
  clearSchema(): void;
  getSchema(): google_protobuf_struct_pb.Struct | undefined;
  setSchema(value?: google_protobuf_struct_pb.Struct): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeletedAt(): boolean;
  clearDeletedAt(): void;
  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectType.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectType): ObjectType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectType;
  static deserializeBinaryFromReader(message: ObjectType, reader: jspb.BinaryReader): ObjectType;
}

export namespace ObjectType {
  export type AsObject = {
    id: number,
    name: string,
    displayName: string,
    isSubject: boolean,
    ordinal: number,
    status: number,
    schema?: google_protobuf_struct_pb.Struct.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    hash: string,
  }
}

export class Permission extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeletedAt(): boolean;
  clearDeletedAt(): void;
  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permission.AsObject;
  static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permission;
  static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
  export type AsObject = {
    id: string,
    name: string,
    displayName: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    hash: string,
  }
}

export class RelationType extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getObjectType(): string;
  setObjectType(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getOrdinal(): number;
  setOrdinal(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  clearUnionsList(): void;
  getUnionsList(): Array<string>;
  setUnionsList(value: Array<string>): void;
  addUnions(value: string, index?: number): string;

  clearPermissionsList(): void;
  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): void;
  addPermissions(value: string, index?: number): string;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeletedAt(): boolean;
  clearDeletedAt(): void;
  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelationType.AsObject;
  static toObject(includeInstance: boolean, msg: RelationType): RelationType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RelationType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelationType;
  static deserializeBinaryFromReader(message: RelationType, reader: jspb.BinaryReader): RelationType;
}

export namespace RelationType {
  export type AsObject = {
    id: number,
    name: string,
    objectType: string,
    displayName: string,
    ordinal: number,
    status: number,
    unionsList: Array<string>,
    permissionsList: Array<string>,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    hash: string,
  }
}

export class Object extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getType(): string;
  setType(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  hasProperties(): boolean;
  clearProperties(): void;
  getProperties(): google_protobuf_struct_pb.Struct | undefined;
  setProperties(value?: google_protobuf_struct_pb.Struct): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeletedAt(): boolean;
  clearDeletedAt(): void;
  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Object.AsObject;
  static toObject(includeInstance: boolean, msg: Object): Object.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Object, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Object;
  static deserializeBinaryFromReader(message: Object, reader: jspb.BinaryReader): Object;
}

export namespace Object {
  export type AsObject = {
    id: string,
    key: string,
    type: string,
    displayName: string,
    properties?: google_protobuf_struct_pb.Struct.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    hash: string,
  }
}

export class Relation extends jspb.Message {
  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): ObjectIdentifier | undefined;
  setSubject(value?: ObjectIdentifier): void;

  getRelation(): string;
  setRelation(value: string): void;

  hasObject(): boolean;
  clearObject(): void;
  getObject(): ObjectIdentifier | undefined;
  setObject(value?: ObjectIdentifier): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeletedAt(): boolean;
  clearDeletedAt(): void;
  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Relation.AsObject;
  static toObject(includeInstance: boolean, msg: Relation): Relation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Relation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Relation;
  static deserializeBinaryFromReader(message: Relation, reader: jspb.BinaryReader): Relation;
}

export namespace Relation {
  export type AsObject = {
    subject?: ObjectIdentifier.AsObject,
    relation: string,
    object?: ObjectIdentifier.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    hash: string,
  }
}

export class ObjectDependency extends jspb.Message {
  getObjectType(): string;
  setObjectType(value: string): void;

  getObjectId(): string;
  setObjectId(value: string): void;

  getObjectKey(): string;
  setObjectKey(value: string): void;

  getRelation(): string;
  setRelation(value: string): void;

  getSubjectType(): string;
  setSubjectType(value: string): void;

  getSubjectId(): string;
  setSubjectId(value: string): void;

  getSubjectKey(): string;
  setSubjectKey(value: string): void;

  getDepth(): number;
  setDepth(value: number): void;

  getIsCycle(): boolean;
  setIsCycle(value: boolean): void;

  clearPathList(): void;
  getPathList(): Array<string>;
  setPathList(value: Array<string>): void;
  addPath(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectDependency.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectDependency): ObjectDependency.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectDependency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectDependency;
  static deserializeBinaryFromReader(message: ObjectDependency, reader: jspb.BinaryReader): ObjectDependency;
}

export namespace ObjectDependency {
  export type AsObject = {
    objectType: string,
    objectId: string,
    objectKey: string,
    relation: string,
    subjectType: string,
    subjectId: string,
    subjectKey: string,
    depth: number,
    isCycle: boolean,
    pathList: Array<string>,
  }
}

export class ObjectTypeIdentifier extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number;
  setId(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectTypeIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectTypeIdentifier): ObjectTypeIdentifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectTypeIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectTypeIdentifier;
  static deserializeBinaryFromReader(message: ObjectTypeIdentifier, reader: jspb.BinaryReader): ObjectTypeIdentifier;
}

export namespace ObjectTypeIdentifier {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class PermissionIdentifier extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string;
  setId(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionIdentifier): PermissionIdentifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PermissionIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionIdentifier;
  static deserializeBinaryFromReader(message: PermissionIdentifier, reader: jspb.BinaryReader): PermissionIdentifier;
}

export namespace PermissionIdentifier {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class RelationTypeIdentifier extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number;
  setId(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasObjectType(): boolean;
  clearObjectType(): void;
  getObjectType(): string;
  setObjectType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelationTypeIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: RelationTypeIdentifier): RelationTypeIdentifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RelationTypeIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelationTypeIdentifier;
  static deserializeBinaryFromReader(message: RelationTypeIdentifier, reader: jspb.BinaryReader): RelationTypeIdentifier;
}

export namespace RelationTypeIdentifier {
  export type AsObject = {
    id: number,
    name: string,
    objectType: string,
  }
}

export class ObjectIdentifier extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): string;
  setType(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): string;
  setId(value: string): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectIdentifier): ObjectIdentifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectIdentifier;
  static deserializeBinaryFromReader(message: ObjectIdentifier, reader: jspb.BinaryReader): ObjectIdentifier;
}

export namespace ObjectIdentifier {
  export type AsObject = {
    type: string,
    id: string,
    key: string,
  }
}

export class RelationIdentifier extends jspb.Message {
  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): ObjectIdentifier | undefined;
  setSubject(value?: ObjectIdentifier): void;

  hasRelation(): boolean;
  clearRelation(): void;
  getRelation(): RelationTypeIdentifier | undefined;
  setRelation(value?: RelationTypeIdentifier): void;

  hasObject(): boolean;
  clearObject(): void;
  getObject(): ObjectIdentifier | undefined;
  setObject(value?: ObjectIdentifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelationIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: RelationIdentifier): RelationIdentifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RelationIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelationIdentifier;
  static deserializeBinaryFromReader(message: RelationIdentifier, reader: jspb.BinaryReader): RelationIdentifier;
}

export namespace RelationIdentifier {
  export type AsObject = {
    subject?: ObjectIdentifier.AsObject,
    relation?: RelationTypeIdentifier.AsObject,
    object?: ObjectIdentifier.AsObject,
  }
}

export class PaginationRequest extends jspb.Message {
  getSize(): number;
  setSize(value: number): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationRequest): PaginationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaginationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationRequest;
  static deserializeBinaryFromReader(message: PaginationRequest, reader: jspb.BinaryReader): PaginationRequest;
}

export namespace PaginationRequest {
  export type AsObject = {
    size: number,
    token: string,
  }
}

export class PaginationResponse extends jspb.Message {
  getNextToken(): string;
  setNextToken(value: string): void;

  getResultSize(): number;
  setResultSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationResponse): PaginationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaginationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationResponse;
  static deserializeBinaryFromReader(message: PaginationResponse, reader: jspb.BinaryReader): PaginationResponse;
}

export namespace PaginationResponse {
  export type AsObject = {
    nextToken: string,
    resultSize: number,
  }
}

export interface FlagMap {
  FLAG_UNKNOWN: 0;
  FLAG_HIDDEN: 1;
  FLAG_READONLY: 2;
  FLAG_SYSTEM: 4;
  FLAG_SHADOW: 8;
}

export const Flag: FlagMap;

