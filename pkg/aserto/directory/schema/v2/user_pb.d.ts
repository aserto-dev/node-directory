// package: aserto.directory.schema.v2
// file: aserto/directory/schema/v2/user.proto

import * as jspb from "google-protobuf";

export class UserProperties extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPicture(): string;
  setPicture(value: string): void;

  getStatus(): UserStatusMap[keyof UserStatusMap];
  setStatus(value: UserStatusMap[keyof UserStatusMap]): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getConnectionId(): string;
  setConnectionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserProperties.AsObject;
  static toObject(includeInstance: boolean, msg: UserProperties): UserProperties.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserProperties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserProperties;
  static deserializeBinaryFromReader(message: UserProperties, reader: jspb.BinaryReader): UserProperties;
}

export namespace UserProperties {
  export type AsObject = {
    email: string,
    picture: string,
    status: UserStatusMap[keyof UserStatusMap],
    enabled: boolean,
    connectionId: string,
  }
}

export interface UserStatusMap {
  USER_STATUS_UNKNOWN: 0;
  USER_STATUS_STAGED: 1;
  USER_STATUS_PROVISIONED: 2;
  USER_STATUS_ACTIVE: 3;
  USER_STATUS_RECOVERY: 4;
  USER_STATUS_PASSWORD_EXPIRED: 5;
  USER_STATUS_LOCKED_OUT: 6;
  USER_STATUS_SUSPENDED: 7;
  USER_STATUS_DEPROVISIONED: 8;
}

export const UserStatus: UserStatusMap;

