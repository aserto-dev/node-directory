// package: aserto.directory.v2
// file: aserto/directory/v2/relation.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Relation extends jspb.Message {
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
    sourceType: number,
    sourceId: string,
    relation: number,
    targetType: number,
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

  getObjectType(): number;
  setObjectType(value: number): void;

  getOrdinal(): number;
  setOrdinal(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  clearUnionsList(): void;
  getUnionsList(): Array<number>;
  setUnionsList(value: Array<number>): void;
  addUnions(value: number, index?: number): number;

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
    objectType: number,
    ordinal: number,
    status: number,
    unionsList: Array<number>,
    permissionsList: Array<string>,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
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
  }
}

export class RelationTypePermission extends jspb.Message {
  getRelationId(): number;
  setRelationId(value: number): void;

  getPermissionId(): string;
  setPermissionId(value: string): void;

  getAllowed(): boolean;
  setAllowed(value: boolean): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelationTypePermission.AsObject;
  static toObject(includeInstance: boolean, msg: RelationTypePermission): RelationTypePermission.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RelationTypePermission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelationTypePermission;
  static deserializeBinaryFromReader(message: RelationTypePermission, reader: jspb.BinaryReader): RelationTypePermission;
}

export namespace RelationTypePermission {
  export type AsObject = {
    relationId: number,
    permissionId: string,
    allowed: boolean,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RelationTypeKey extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getObjectType(): number;
  setObjectType(value: number): void;

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
    objectType: number,
  }
}

