// GENERATED CODE -- DO NOT EDIT!

// package: aserto.directory.exporter.v2
// file: aserto/directory/exporter/v2/exporter.proto

import * as aserto_directory_exporter_v2_exporter_pb from "../../../../aserto/directory/exporter/v2/exporter_pb";
import * as grpc from "grpc";

interface IExporterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  export: grpc.MethodDefinition<aserto_directory_exporter_v2_exporter_pb.ExportRequest, aserto_directory_exporter_v2_exporter_pb.ExportResponse>;
}

export const ExporterService: IExporterService;

export interface IExporterServer extends grpc.UntypedServiceImplementation {
  export: grpc.handleServerStreamingCall<aserto_directory_exporter_v2_exporter_pb.ExportRequest, aserto_directory_exporter_v2_exporter_pb.ExportResponse>;
}

export class ExporterClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  export(argument: aserto_directory_exporter_v2_exporter_pb.ExportRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<aserto_directory_exporter_v2_exporter_pb.ExportResponse>;
  export(argument: aserto_directory_exporter_v2_exporter_pb.ExportRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<aserto_directory_exporter_v2_exporter_pb.ExportResponse>;
}
