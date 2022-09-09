// package: aserto.directory.v2
// file: aserto/directory/v2/object.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Object extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): string;
  setType(value: string): void;

  getKey(): string;
  setKey(value: string): void;

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
    type: string,
    key: string,
    displayName: string,
    properties?: google_protobuf_struct_pb.Struct.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    hash: string,
  }
}

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

  getPath(): string;
  setPath(value: string): void;

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
    path: string,
  }
}

export class ObjectKey extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectKey.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectKey): ObjectKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectKey;
  static deserializeBinaryFromReader(message: ObjectKey, reader: jspb.BinaryReader): ObjectKey;
}

export namespace ObjectKey {
  export type AsObject = {
    type: string,
    key: string,
  }
}

export class ObjectParam extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string;
  setId(value: string): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): ObjectKey | undefined;
  setKey(value?: ObjectKey): void;

  getOptCase(): ObjectParam.OptCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectParam.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectParam): ObjectParam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectParam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectParam;
  static deserializeBinaryFromReader(message: ObjectParam, reader: jspb.BinaryReader): ObjectParam;
}

export namespace ObjectParam {
  export type AsObject = {
    id: string,
    key?: ObjectKey.AsObject,
  }

  export enum OptCase {
    OPT_NOT_SET = 0,
    ID = 1,
    KEY = 2,
  }
}

export class ObjectTypeParam extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number;
  setId(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  getOptCase(): ObjectTypeParam.OptCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectTypeParam.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectTypeParam): ObjectTypeParam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectTypeParam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectTypeParam;
  static deserializeBinaryFromReader(message: ObjectTypeParam, reader: jspb.BinaryReader): ObjectTypeParam;
}

export namespace ObjectTypeParam {
  export type AsObject = {
    id: number,
    name: string,
  }

  export enum OptCase {
    OPT_NOT_SET = 0,
    ID = 1,
    NAME = 2,
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

