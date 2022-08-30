// GENERATED CODE -- DO NOT EDIT!

// package: aserto.directory.importer.v2
// file: aserto/directory/importer/v2/importer.proto

import * as aserto_directory_importer_v2_importer_pb from "../../../../aserto/directory/importer/v2/importer_pb";
import * as grpc from "grpc";

interface IImporterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  import: grpc.MethodDefinition<aserto_directory_importer_v2_importer_pb.ImportRequest, aserto_directory_importer_v2_importer_pb.ImportResponse>;
}

export const ImporterService: IImporterService;

export interface IImporterServer extends grpc.UntypedServiceImplementation {
  import: grpc.handleBidiStreamingCall<aserto_directory_importer_v2_importer_pb.ImportRequest, aserto_directory_importer_v2_importer_pb.ImportResponse>;
}

export class ImporterClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  import(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<aserto_directory_importer_v2_importer_pb.ImportRequest, aserto_directory_importer_v2_importer_pb.ImportResponse>;
  import(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<aserto_directory_importer_v2_importer_pb.ImportRequest, aserto_directory_importer_v2_importer_pb.ImportResponse>;
}
