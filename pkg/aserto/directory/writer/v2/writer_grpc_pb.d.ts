// GENERATED CODE -- DO NOT EDIT!

// package: aserto.directory.writer.v2
// file: aserto/directory/writer/v2/writer.proto

import * as aserto_directory_writer_v2_writer_pb from "../../../../aserto/directory/writer/v2/writer_pb";
import * as grpc from "grpc";

interface IWriterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  setObjectType: grpc.MethodDefinition<aserto_directory_writer_v2_writer_pb.SetObjectTypeRequest, aserto_directory_writer_v2_writer_pb.SetObjectTypeResponse>;
  deleteObjectType: grpc.MethodDefinition<aserto_directory_writer_v2_writer_pb.DeleteObjectTypeRequest, aserto_directory_writer_v2_writer_pb.DeleteObjectTypeResponse>;
  setRelationType: grpc.MethodDefinition<aserto_directory_writer_v2_writer_pb.SetRelationTypeRequest, aserto_directory_writer_v2_writer_pb.SetRelationTypeResponse>;
  deleteRelationType: grpc.MethodDefinition<aserto_directory_writer_v2_writer_pb.DeleteRelationTypeRequest, aserto_directory_writer_v2_writer_pb.DeleteRelationTypeResponse>;
  setPermission: grpc.MethodDefinition<aserto_directory_writer_v2_writer_pb.SetPermissionRequest, aserto_directory_writer_v2_writer_pb.SetPermissionResponse>;
  deletePermission: grpc.MethodDefinition<aserto_directory_writer_v2_writer_pb.DeletePermissionRequest, aserto_directory_writer_v2_writer_pb.DeletePermissionResponse>;
  setObject: grpc.MethodDefinition<aserto_directory_writer_v2_writer_pb.SetObjectRequest, aserto_directory_writer_v2_writer_pb.SetObjectResponse>;
  deleteObject: grpc.MethodDefinition<aserto_directory_writer_v2_writer_pb.DeleteObjectRequest, aserto_directory_writer_v2_writer_pb.DeleteObjectResponse>;
  setRelation: grpc.MethodDefinition<aserto_directory_writer_v2_writer_pb.SetRelationRequest, aserto_directory_writer_v2_writer_pb.SetRelationResponse>;
  deleteRelation: grpc.MethodDefinition<aserto_directory_writer_v2_writer_pb.DeleteRelationRequest, aserto_directory_writer_v2_writer_pb.DeleteRelationResponse>;
}

export const WriterService: IWriterService;

export interface IWriterServer extends grpc.UntypedServiceImplementation {
  setObjectType: grpc.handleUnaryCall<aserto_directory_writer_v2_writer_pb.SetObjectTypeRequest, aserto_directory_writer_v2_writer_pb.SetObjectTypeResponse>;
  deleteObjectType: grpc.handleUnaryCall<aserto_directory_writer_v2_writer_pb.DeleteObjectTypeRequest, aserto_directory_writer_v2_writer_pb.DeleteObjectTypeResponse>;
  setRelationType: grpc.handleUnaryCall<aserto_directory_writer_v2_writer_pb.SetRelationTypeRequest, aserto_directory_writer_v2_writer_pb.SetRelationTypeResponse>;
  deleteRelationType: grpc.handleUnaryCall<aserto_directory_writer_v2_writer_pb.DeleteRelationTypeRequest, aserto_directory_writer_v2_writer_pb.DeleteRelationTypeResponse>;
  setPermission: grpc.handleUnaryCall<aserto_directory_writer_v2_writer_pb.SetPermissionRequest, aserto_directory_writer_v2_writer_pb.SetPermissionResponse>;
  deletePermission: grpc.handleUnaryCall<aserto_directory_writer_v2_writer_pb.DeletePermissionRequest, aserto_directory_writer_v2_writer_pb.DeletePermissionResponse>;
  setObject: grpc.handleUnaryCall<aserto_directory_writer_v2_writer_pb.SetObjectRequest, aserto_directory_writer_v2_writer_pb.SetObjectResponse>;
  deleteObject: grpc.handleUnaryCall<aserto_directory_writer_v2_writer_pb.DeleteObjectRequest, aserto_directory_writer_v2_writer_pb.DeleteObjectResponse>;
  setRelation: grpc.handleUnaryCall<aserto_directory_writer_v2_writer_pb.SetRelationRequest, aserto_directory_writer_v2_writer_pb.SetRelationResponse>;
  deleteRelation: grpc.handleUnaryCall<aserto_directory_writer_v2_writer_pb.DeleteRelationRequest, aserto_directory_writer_v2_writer_pb.DeleteRelationResponse>;
}

export class WriterClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  setObjectType(argument: aserto_directory_writer_v2_writer_pb.SetObjectTypeRequest, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.SetObjectTypeResponse>): grpc.ClientUnaryCall;
  setObjectType(argument: aserto_directory_writer_v2_writer_pb.SetObjectTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.SetObjectTypeResponse>): grpc.ClientUnaryCall;
  setObjectType(argument: aserto_directory_writer_v2_writer_pb.SetObjectTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.SetObjectTypeResponse>): grpc.ClientUnaryCall;
  deleteObjectType(argument: aserto_directory_writer_v2_writer_pb.DeleteObjectTypeRequest, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.DeleteObjectTypeResponse>): grpc.ClientUnaryCall;
  deleteObjectType(argument: aserto_directory_writer_v2_writer_pb.DeleteObjectTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.DeleteObjectTypeResponse>): grpc.ClientUnaryCall;
  deleteObjectType(argument: aserto_directory_writer_v2_writer_pb.DeleteObjectTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.DeleteObjectTypeResponse>): grpc.ClientUnaryCall;
  setRelationType(argument: aserto_directory_writer_v2_writer_pb.SetRelationTypeRequest, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.SetRelationTypeResponse>): grpc.ClientUnaryCall;
  setRelationType(argument: aserto_directory_writer_v2_writer_pb.SetRelationTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.SetRelationTypeResponse>): grpc.ClientUnaryCall;
  setRelationType(argument: aserto_directory_writer_v2_writer_pb.SetRelationTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.SetRelationTypeResponse>): grpc.ClientUnaryCall;
  deleteRelationType(argument: aserto_directory_writer_v2_writer_pb.DeleteRelationTypeRequest, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.DeleteRelationTypeResponse>): grpc.ClientUnaryCall;
  deleteRelationType(argument: aserto_directory_writer_v2_writer_pb.DeleteRelationTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.DeleteRelationTypeResponse>): grpc.ClientUnaryCall;
  deleteRelationType(argument: aserto_directory_writer_v2_writer_pb.DeleteRelationTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.DeleteRelationTypeResponse>): grpc.ClientUnaryCall;
  setPermission(argument: aserto_directory_writer_v2_writer_pb.SetPermissionRequest, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.SetPermissionResponse>): grpc.ClientUnaryCall;
  setPermission(argument: aserto_directory_writer_v2_writer_pb.SetPermissionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.SetPermissionResponse>): grpc.ClientUnaryCall;
  setPermission(argument: aserto_directory_writer_v2_writer_pb.SetPermissionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.SetPermissionResponse>): grpc.ClientUnaryCall;
  deletePermission(argument: aserto_directory_writer_v2_writer_pb.DeletePermissionRequest, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.DeletePermissionResponse>): grpc.ClientUnaryCall;
  deletePermission(argument: aserto_directory_writer_v2_writer_pb.DeletePermissionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.DeletePermissionResponse>): grpc.ClientUnaryCall;
  deletePermission(argument: aserto_directory_writer_v2_writer_pb.DeletePermissionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.DeletePermissionResponse>): grpc.ClientUnaryCall;
  setObject(argument: aserto_directory_writer_v2_writer_pb.SetObjectRequest, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.SetObjectResponse>): grpc.ClientUnaryCall;
  setObject(argument: aserto_directory_writer_v2_writer_pb.SetObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.SetObjectResponse>): grpc.ClientUnaryCall;
  setObject(argument: aserto_directory_writer_v2_writer_pb.SetObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.SetObjectResponse>): grpc.ClientUnaryCall;
  deleteObject(argument: aserto_directory_writer_v2_writer_pb.DeleteObjectRequest, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.DeleteObjectResponse>): grpc.ClientUnaryCall;
  deleteObject(argument: aserto_directory_writer_v2_writer_pb.DeleteObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.DeleteObjectResponse>): grpc.ClientUnaryCall;
  deleteObject(argument: aserto_directory_writer_v2_writer_pb.DeleteObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.DeleteObjectResponse>): grpc.ClientUnaryCall;
  setRelation(argument: aserto_directory_writer_v2_writer_pb.SetRelationRequest, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.SetRelationResponse>): grpc.ClientUnaryCall;
  setRelation(argument: aserto_directory_writer_v2_writer_pb.SetRelationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.SetRelationResponse>): grpc.ClientUnaryCall;
  setRelation(argument: aserto_directory_writer_v2_writer_pb.SetRelationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.SetRelationResponse>): grpc.ClientUnaryCall;
  deleteRelation(argument: aserto_directory_writer_v2_writer_pb.DeleteRelationRequest, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.DeleteRelationResponse>): grpc.ClientUnaryCall;
  deleteRelation(argument: aserto_directory_writer_v2_writer_pb.DeleteRelationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.DeleteRelationResponse>): grpc.ClientUnaryCall;
  deleteRelation(argument: aserto_directory_writer_v2_writer_pb.DeleteRelationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_writer_v2_writer_pb.DeleteRelationResponse>): grpc.ClientUnaryCall;
}
