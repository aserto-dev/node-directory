// package: aserto.directory.importer.v2
// file: aserto/directory/importer/v2/importer.proto

import * as jspb from "google-protobuf";
import * as aserto_directory_v2_object_pb from "../../../../aserto/directory/v2/object_pb";
import * as aserto_directory_v2_permission_pb from "../../../../aserto/directory/v2/permission_pb";
import * as aserto_directory_v2_relation_pb from "../../../../aserto/directory/v2/relation_pb";

export class ImportRequest extends jspb.Message {
  getOpCode(): OpcodeMap[keyof OpcodeMap];
  setOpCode(value: OpcodeMap[keyof OpcodeMap]): void;

  hasObjectType(): boolean;
  clearObjectType(): void;
  getObjectType(): aserto_directory_v2_object_pb.ObjectType | undefined;
  setObjectType(value?: aserto_directory_v2_object_pb.ObjectType): void;

  hasPermission(): boolean;
  clearPermission(): void;
  getPermission(): aserto_directory_v2_permission_pb.Permission | undefined;
  setPermission(value?: aserto_directory_v2_permission_pb.Permission): void;

  hasRelationType(): boolean;
  clearRelationType(): void;
  getRelationType(): aserto_directory_v2_relation_pb.RelationType | undefined;
  setRelationType(value?: aserto_directory_v2_relation_pb.RelationType): void;

  hasObject(): boolean;
  clearObject(): void;
  getObject(): aserto_directory_v2_object_pb.Object | undefined;
  setObject(value?: aserto_directory_v2_object_pb.Object): void;

  hasRelation(): boolean;
  clearRelation(): void;
  getRelation(): aserto_directory_v2_relation_pb.Relation | undefined;
  setRelation(value?: aserto_directory_v2_relation_pb.Relation): void;

  getMsgCase(): ImportRequest.MsgCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportRequest): ImportRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportRequest;
  static deserializeBinaryFromReader(message: ImportRequest, reader: jspb.BinaryReader): ImportRequest;
}

export namespace ImportRequest {
  export type AsObject = {
    opCode: OpcodeMap[keyof OpcodeMap],
    objectType?: aserto_directory_v2_object_pb.ObjectType.AsObject,
    permission?: aserto_directory_v2_permission_pb.Permission.AsObject,
    relationType?: aserto_directory_v2_relation_pb.RelationType.AsObject,
    object?: aserto_directory_v2_object_pb.Object.AsObject,
    relation?: aserto_directory_v2_relation_pb.Relation.AsObject,
  }

  export enum MsgCase {
    MSG_NOT_SET = 0,
    OBJECT_TYPE = 2,
    PERMISSION = 3,
    RELATION_TYPE = 4,
    OBJECT = 5,
    RELATION = 6,
  }
}

export class ImportResponse extends jspb.Message {
  hasObjectType(): boolean;
  clearObjectType(): void;
  getObjectType(): ImportCounter | undefined;
  setObjectType(value?: ImportCounter): void;

  hasPermission(): boolean;
  clearPermission(): void;
  getPermission(): ImportCounter | undefined;
  setPermission(value?: ImportCounter): void;

  hasRelationType(): boolean;
  clearRelationType(): void;
  getRelationType(): ImportCounter | undefined;
  setRelationType(value?: ImportCounter): void;

  hasObject(): boolean;
  clearObject(): void;
  getObject(): ImportCounter | undefined;
  setObject(value?: ImportCounter): void;

  hasRelation(): boolean;
  clearRelation(): void;
  getRelation(): ImportCounter | undefined;
  setRelation(value?: ImportCounter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ImportResponse): ImportResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportResponse;
  static deserializeBinaryFromReader(message: ImportResponse, reader: jspb.BinaryReader): ImportResponse;
}

export namespace ImportResponse {
  export type AsObject = {
    objectType?: ImportCounter.AsObject,
    permission?: ImportCounter.AsObject,
    relationType?: ImportCounter.AsObject,
    object?: ImportCounter.AsObject,
    relation?: ImportCounter.AsObject,
  }
}

export class ImportCounter extends jspb.Message {
  getRecv(): number;
  setRecv(value: number): void;

  getSet(): number;
  setSet(value: number): void;

  getDelete(): number;
  setDelete(value: number): void;

  getError(): number;
  setError(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportCounter.AsObject;
  static toObject(includeInstance: boolean, msg: ImportCounter): ImportCounter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportCounter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportCounter;
  static deserializeBinaryFromReader(message: ImportCounter, reader: jspb.BinaryReader): ImportCounter;
}

export namespace ImportCounter {
  export type AsObject = {
    recv: number,
    set: number,
    pb_delete: number,
    error: number,
  }
}

export interface OpcodeMap {
  OPCODE_UNKNOWN: 0;
  OPCODE_SET: 1;
  OPCODE_DELETE: 2;
}

export const Opcode: OpcodeMap;

