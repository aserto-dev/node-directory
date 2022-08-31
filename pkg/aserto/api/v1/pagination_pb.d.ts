// package: aserto.api.v1
// file: aserto/api/v1/pagination.proto

import * as jspb from "google-protobuf";

export class PaginationRequest extends jspb.Message {
  getSize(): number;
  setSize(value: number): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationRequest): PaginationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaginationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationRequest;
  static deserializeBinaryFromReader(message: PaginationRequest, reader: jspb.BinaryReader): PaginationRequest;
}

export namespace PaginationRequest {
  export type AsObject = {
    size: number,
    token: string,
  }
}

export class PaginationResponse extends jspb.Message {
  getNextToken(): string;
  setNextToken(value: string): void;

  getResultSize(): number;
  setResultSize(value: number): void;

  getTotalSize(): number;
  setTotalSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationResponse): PaginationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaginationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationResponse;
  static deserializeBinaryFromReader(message: PaginationResponse, reader: jspb.BinaryReader): PaginationResponse;
}

export namespace PaginationResponse {
  export type AsObject = {
    nextToken: string,
    resultSize: number,
    totalSize: number,
  }
}

