// package: aserto.directory.v2
// file: aserto/directory/v2/relation.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Relation extends jspb.Message {
  getObjectType(): string;
  setObjectType(value: string): void;

  getObjectId(): string;
  setObjectId(value: string): void;

  getRelation(): string;
  setRelation(value: string): void;

  getSubjectType(): string;
  setSubjectType(value: string): void;

  getSubjectId(): string;
  setSubjectId(value: string): void;

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
    objectType: string,
    objectId: string,
    relation: string,
    subjectType: string,
    subjectId: string,
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

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getObjectType(): string;
  setObjectType(value: string): void;

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
    displayName: string,
    objectType: string,
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

export class RelationParam extends jspb.Message {
  getObjectType(): string;
  setObjectType(value: string): void;

  getObjectId(): string;
  setObjectId(value: string): void;

  getRelation(): string;
  setRelation(value: string): void;

  getSubjectType(): string;
  setSubjectType(value: string): void;

  getSubjectId(): string;
  setSubjectId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelationParam.AsObject;
  static toObject(includeInstance: boolean, msg: RelationParam): RelationParam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RelationParam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelationParam;
  static deserializeBinaryFromReader(message: RelationParam, reader: jspb.BinaryReader): RelationParam;
}

export namespace RelationParam {
  export type AsObject = {
    objectType: string,
    objectId: string,
    relation: string,
    subjectType: string,
    subjectId: string,
  }
}

export class RelationTypeKey extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getObjectType(): string;
  setObjectType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelationTypeKey.AsObject;
  static toObject(includeInstance: boolean, msg: RelationTypeKey): RelationTypeKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RelationTypeKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelationTypeKey;
  static deserializeBinaryFromReader(message: RelationTypeKey, reader: jspb.BinaryReader): RelationTypeKey;
}

export namespace RelationTypeKey {
  export type AsObject = {
    name: string,
    objectType: string,
  }
}

export class RelationTypeParam extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number;
  setId(value: number): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): RelationTypeKey | undefined;
  setKey(value?: RelationTypeKey): void;

  getOptCase(): RelationTypeParam.OptCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelationTypeParam.AsObject;
  static toObject(includeInstance: boolean, msg: RelationTypeParam): RelationTypeParam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RelationTypeParam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelationTypeParam;
  static deserializeBinaryFromReader(message: RelationTypeParam, reader: jspb.BinaryReader): RelationTypeParam;
}

export namespace RelationTypeParam {
  export type AsObject = {
    id: number,
    key?: RelationTypeKey.AsObject,
  }

  export enum OptCase {
    OPT_NOT_SET = 0,
    ID = 1,
    KEY = 2,
  }
}

