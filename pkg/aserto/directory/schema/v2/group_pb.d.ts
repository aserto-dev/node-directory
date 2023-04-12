// package: aserto.directory.schema.v2
// file: aserto/directory/schema/v2/group.proto

import * as jspb from "google-protobuf";

export class GroupProperties extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupProperties.AsObject;
  static toObject(includeInstance: boolean, msg: GroupProperties): GroupProperties.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupProperties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupProperties;
  static deserializeBinaryFromReader(message: GroupProperties, reader: jspb.BinaryReader): GroupProperties;
}

export namespace GroupProperties {
  export type AsObject = {
    connectionId: string,
  }
}

