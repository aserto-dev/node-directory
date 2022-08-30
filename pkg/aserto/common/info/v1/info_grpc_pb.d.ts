// GENERATED CODE -- DO NOT EDIT!

// package: aserto.common.info.v1
// file: aserto/common/info/v1/info.proto

import * as aserto_common_info_v1_info_pb from "../../../../aserto/common/info/v1/info_pb";
import * as grpc from "grpc";

interface IInfoService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  info: grpc.MethodDefinition<aserto_common_info_v1_info_pb.InfoRequest, aserto_common_info_v1_info_pb.InfoResponse>;
}

export const InfoService: IInfoService;

export interface IInfoServer extends grpc.UntypedServiceImplementation {
  info: grpc.handleUnaryCall<aserto_common_info_v1_info_pb.InfoRequest, aserto_common_info_v1_info_pb.InfoResponse>;
}

export class InfoClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  info(argument: aserto_common_info_v1_info_pb.InfoRequest, callback: grpc.requestCallback<aserto_common_info_v1_info_pb.InfoResponse>): grpc.ClientUnaryCall;
  info(argument: aserto_common_info_v1_info_pb.InfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_common_info_v1_info_pb.InfoResponse>): grpc.ClientUnaryCall;
  info(argument: aserto_common_info_v1_info_pb.InfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_common_info_v1_info_pb.InfoResponse>): grpc.ClientUnaryCall;
}
