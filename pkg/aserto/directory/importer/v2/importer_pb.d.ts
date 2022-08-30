// package: aserto.directory.importer.v2
// file: aserto/directory/importer/v2/importer.proto

import * as jspb from "google-protobuf";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";
import * as aserto_directory_v2_object_pb from "../../../../aserto/directory/v2/object_pb";
import * as aserto_directory_v2_relation_pb from "../../../../aserto/directory/v2/relation_pb";

export class ImportRequest extends jspb.Message {
  getOpCode(): OpcodeMap[keyof OpcodeMap];
  setOpCode(value: OpcodeMap[keyof OpcodeMap]): void;

  hasObject(): boolean;
  clearObject(): void;
  getObject(): aserto_directory_v2_object_pb.Object | undefined;
  setObject(value?: aserto_directory_v2_object_pb.Object): void;

  hasObjectType(): boolean;
  clearObjectType(): void;
  getObjectType(): aserto_directory_v2_object_pb.ObjectType | undefined;
  setObjectType(value?: aserto_directory_v2_object_pb.ObjectType): void;

  hasRelation(): boolean;
  clearRelation(): void;
  getRelation(): aserto_directory_v2_relation_pb.Relation | undefined;
  setRelation(value?: aserto_directory_v2_relation_pb.Relation): void;

  hasRelationType(): boolean;
  clearRelationType(): void;
  getRelationType(): aserto_directory_v2_relation_pb.RelationType | undefined;
  setRelationType(value?: aserto_directory_v2_relation_pb.RelationType): void;

  hasPermission(): boolean;
  clearPermission(): void;
  getPermission(): aserto_directory_v2_relation_pb.Permission | undefined;
  setPermission(value?: aserto_directory_v2_relation_pb.Permission): void;

  getMsgOneofCase(): ImportRequest.MsgOneofCase;
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
    object?: aserto_directory_v2_object_pb.Object.AsObject,
    objectType?: aserto_directory_v2_object_pb.ObjectType.AsObject,
    relation?: aserto_directory_v2_relation_pb.Relation.AsObject,
    relationType?: aserto_directory_v2_relation_pb.RelationType.AsObject,
    permission?: aserto_directory_v2_relation_pb.Permission.AsObject,
  }

  export enum MsgOneofCase {
    MSG_ONEOF_NOT_SET = 0,
    OBJECT = 2,
    OBJECT_TYPE = 3,
    RELATION = 4,
    RELATION_TYPE = 5,
    PERMISSION = 6,
  }
}

export class ImportResponse extends jspb.Message {
  hasError(): boolean;
  clearError(): void;
  getError(): google_rpc_status_pb.Status | undefined;
  setError(value?: google_rpc_status_pb.Status): void;

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
    error?: google_rpc_status_pb.Status.AsObject,
  }
}

export interface OpcodeMap {
  OPCODE_UNKNOWN: 0;
  OPCODE_SET: 1;
  OPCODE_DELETE: 2;
}

export const Opcode: OpcodeMap;

