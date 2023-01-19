// package: aserto.directory.schema.v2
// file: aserto/directory/schema/v2/identity.proto

import * as jspb from "google-protobuf";

export class IdentityProperties extends jspb.Message {
  getKind(): IdentityKindMap[keyof IdentityKindMap];
  setKind(value: IdentityKindMap[keyof IdentityKindMap]): void;

  getProvider(): string;
  setProvider(value: string): void;

  getVerified(): boolean;
  setVerified(value: boolean): void;

  hasConnectionId(): boolean;
  clearConnectionId(): void;
  getConnectionId(): string;
  setConnectionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityProperties.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityProperties): IdentityProperties.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentityProperties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityProperties;
  static deserializeBinaryFromReader(message: IdentityProperties, reader: jspb.BinaryReader): IdentityProperties;
}

export namespace IdentityProperties {
  export type AsObject = {
    kind: IdentityKindMap[keyof IdentityKindMap],
    provider: string,
    verified: boolean,
    connectionId: string,
  }
}

export interface IdentityKindMap {
  IDENTITY_KIND_UNKNOWN: 0;
  IDENTITY_KIND_PID: 1;
  IDENTITY_KIND_EMAIL: 2;
  IDENTITY_KIND_USERNAME: 3;
  IDENTITY_KIND_DN: 4;
  IDENTITY_KIND_PHONE: 5;
  IDENTITY_KIND_EMPID: 6;
}

export const IdentityKind: IdentityKindMap;

