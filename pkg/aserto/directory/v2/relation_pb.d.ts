// package: aserto.directory.v2
// file: aserto/directory/v2/relation.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Relation extends jspb.Message {
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
    sourceType: string,
    sourceId: string,
    relation: string,
    targetType: string,
    targetId: string,
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

export class Permission extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPermission(): string;
  setPermission(value: string): void;

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
    permission: string,
    displayName: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    hash: string,
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

