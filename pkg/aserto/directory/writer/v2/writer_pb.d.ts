// package: aserto.directory.writer.v2
// file: aserto/directory/writer/v2/writer.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as aserto_directory_common_v2_common_pb from "../../../../aserto/directory/common/v2/common_pb";

export class SetObjectTypeRequest extends jspb.Message {
  hasObjectType(): boolean;
  clearObjectType(): void;
  getObjectType(): aserto_directory_common_v2_common_pb.ObjectType | undefined;
  setObjectType(value?: aserto_directory_common_v2_common_pb.ObjectType): void;

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
    objectType?: aserto_directory_common_v2_common_pb.ObjectType.AsObject,
  }
}

export class SetObjectTypeResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): aserto_directory_common_v2_common_pb.ObjectType | undefined;
  setResult(value?: aserto_directory_common_v2_common_pb.ObjectType): void;

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
    result?: aserto_directory_common_v2_common_pb.ObjectType.AsObject,
  }
}

export class DeleteObjectTypeRequest extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_common_v2_common_pb.ObjectTypeIdentifier | undefined;
  setParam(value?: aserto_directory_common_v2_common_pb.ObjectTypeIdentifier): void;

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
    param?: aserto_directory_common_v2_common_pb.ObjectTypeIdentifier.AsObject,
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

export class SetRelationTypeRequest extends jspb.Message {
  hasRelationType(): boolean;
  clearRelationType(): void;
  getRelationType(): aserto_directory_common_v2_common_pb.RelationType | undefined;
  setRelationType(value?: aserto_directory_common_v2_common_pb.RelationType): void;

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
    relationType?: aserto_directory_common_v2_common_pb.RelationType.AsObject,
  }
}

export class SetRelationTypeResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): aserto_directory_common_v2_common_pb.RelationType | undefined;
  setResult(value?: aserto_directory_common_v2_common_pb.RelationType): void;

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
    result?: aserto_directory_common_v2_common_pb.RelationType.AsObject,
  }
}

export class DeleteRelationTypeRequest extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_common_v2_common_pb.RelationTypeIdentifier | undefined;
  setParam(value?: aserto_directory_common_v2_common_pb.RelationTypeIdentifier): void;

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
    param?: aserto_directory_common_v2_common_pb.RelationTypeIdentifier.AsObject,
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

export class SetPermissionRequest extends jspb.Message {
  hasPermission(): boolean;
  clearPermission(): void;
  getPermission(): aserto_directory_common_v2_common_pb.Permission | undefined;
  setPermission(value?: aserto_directory_common_v2_common_pb.Permission): void;

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
    permission?: aserto_directory_common_v2_common_pb.Permission.AsObject,
  }
}

export class SetPermissionResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): aserto_directory_common_v2_common_pb.Permission | undefined;
  setResult(value?: aserto_directory_common_v2_common_pb.Permission): void;

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
    result?: aserto_directory_common_v2_common_pb.Permission.AsObject,
  }
}

export class DeletePermissionRequest extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_common_v2_common_pb.PermissionIdentifier | undefined;
  setParam(value?: aserto_directory_common_v2_common_pb.PermissionIdentifier): void;

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
    param?: aserto_directory_common_v2_common_pb.PermissionIdentifier.AsObject,
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

export class SetObjectRequest extends jspb.Message {
  hasObject(): boolean;
  clearObject(): void;
  getObject(): aserto_directory_common_v2_common_pb.Object | undefined;
  setObject(value?: aserto_directory_common_v2_common_pb.Object): void;

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
    object?: aserto_directory_common_v2_common_pb.Object.AsObject,
  }
}

export class SetObjectResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): aserto_directory_common_v2_common_pb.Object | undefined;
  setResult(value?: aserto_directory_common_v2_common_pb.Object): void;

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
    result?: aserto_directory_common_v2_common_pb.Object.AsObject,
  }
}

export class DeleteObjectRequest extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_common_v2_common_pb.ObjectIdentifier | undefined;
  setParam(value?: aserto_directory_common_v2_common_pb.ObjectIdentifier): void;

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
    param?: aserto_directory_common_v2_common_pb.ObjectIdentifier.AsObject,
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

export class SetRelationRequest extends jspb.Message {
  hasRelation(): boolean;
  clearRelation(): void;
  getRelation(): aserto_directory_common_v2_common_pb.Relation | undefined;
  setRelation(value?: aserto_directory_common_v2_common_pb.Relation): void;

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
    relation?: aserto_directory_common_v2_common_pb.Relation.AsObject,
  }
}

export class SetRelationResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): aserto_directory_common_v2_common_pb.Relation | undefined;
  setResult(value?: aserto_directory_common_v2_common_pb.Relation): void;

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
    result?: aserto_directory_common_v2_common_pb.Relation.AsObject,
  }
}

export class DeleteRelationRequest extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): aserto_directory_common_v2_common_pb.RelationIdentifier | undefined;
  setParam(value?: aserto_directory_common_v2_common_pb.RelationIdentifier): void;

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
    param?: aserto_directory_common_v2_common_pb.RelationIdentifier.AsObject,
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

