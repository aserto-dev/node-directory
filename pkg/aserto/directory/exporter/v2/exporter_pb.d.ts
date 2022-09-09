// package: aserto.directory.exporter.v2
// file: aserto/directory/exporter/v2/exporter.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as aserto_directory_v2_object_pb from "../../../../aserto/directory/v2/object_pb";
import * as aserto_directory_v2_permission_pb from "../../../../aserto/directory/v2/permission_pb";
import * as aserto_directory_v2_relation_pb from "../../../../aserto/directory/v2/relation_pb";

export class ExportRequest extends jspb.Message {
  getOptions(): number;
  setOptions(value: number): void;

  hasStartAt(): boolean;
  clearStartAt(): void;
  getStartAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportRequest): ExportRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportRequest;
  static deserializeBinaryFromReader(message: ExportRequest, reader: jspb.BinaryReader): ExportRequest;
}

export namespace ExportRequest {
  export type AsObject = {
    options: number,
    startAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ExportResponse extends jspb.Message {
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
  getPermission(): aserto_directory_v2_permission_pb.Permission | undefined;
  setPermission(value?: aserto_directory_v2_permission_pb.Permission): void;

  getMsgCase(): ExportResponse.MsgCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExportResponse): ExportResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportResponse;
  static deserializeBinaryFromReader(message: ExportResponse, reader: jspb.BinaryReader): ExportResponse;
}

export namespace ExportResponse {
  export type AsObject = {
    object?: aserto_directory_v2_object_pb.Object.AsObject,
    objectType?: aserto_directory_v2_object_pb.ObjectType.AsObject,
    relation?: aserto_directory_v2_relation_pb.Relation.AsObject,
    relationType?: aserto_directory_v2_relation_pb.RelationType.AsObject,
    permission?: aserto_directory_v2_permission_pb.Permission.AsObject,
  }

  export enum MsgCase {
    MSG_NOT_SET = 0,
    OBJECT = 2,
    OBJECT_TYPE = 3,
    RELATION = 4,
    RELATION_TYPE = 5,
    PERMISSION = 6,
  }
}

export interface OptionMap {
  OPTION_UNKNOWN: 0;
  OPTION_METADATA_OBJECT_TYPES: 1;
  OPTION_METADATA_RELATION_TYPES: 2;
  OPTION_METADATA_PERMISSIONS: 4;
  OPTION_METADATA: 7;
  OPTION_DATA_OBJECTS: 8;
  OPTION_DATA_RELATIONS: 16;
  OPTION_DATA: 24;
  OPTION_ALL: 31;
}

export const Option: OptionMap;

