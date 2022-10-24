// GENERATED CODE -- DO NOT EDIT!

// package: aserto.directory.reader.v2
// file: aserto/directory/reader/v2/reader.proto

import * as aserto_directory_reader_v2_reader_pb from "../../../../aserto/directory/reader/v2/reader_pb";
import * as grpc from "grpc";

interface IReaderService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getObjectType: grpc.MethodDefinition<aserto_directory_reader_v2_reader_pb.GetObjectTypeRequest, aserto_directory_reader_v2_reader_pb.GetObjectTypeResponse>;
  getObjectTypes: grpc.MethodDefinition<aserto_directory_reader_v2_reader_pb.GetObjectTypesRequest, aserto_directory_reader_v2_reader_pb.GetObjectTypesResponse>;
  getRelationType: grpc.MethodDefinition<aserto_directory_reader_v2_reader_pb.GetRelationTypeRequest, aserto_directory_reader_v2_reader_pb.GetRelationTypeResponse>;
  getRelationTypes: grpc.MethodDefinition<aserto_directory_reader_v2_reader_pb.GetRelationTypesRequest, aserto_directory_reader_v2_reader_pb.GetRelationTypesResponse>;
  getPermission: grpc.MethodDefinition<aserto_directory_reader_v2_reader_pb.GetPermissionRequest, aserto_directory_reader_v2_reader_pb.GetPermissionResponse>;
  getPermissions: grpc.MethodDefinition<aserto_directory_reader_v2_reader_pb.GetPermissionsRequest, aserto_directory_reader_v2_reader_pb.GetPermissionsResponse>;
  getObject: grpc.MethodDefinition<aserto_directory_reader_v2_reader_pb.GetObjectRequest, aserto_directory_reader_v2_reader_pb.GetObjectResponse>;
  getObjectMany: grpc.MethodDefinition<aserto_directory_reader_v2_reader_pb.GetObjectManyRequest, aserto_directory_reader_v2_reader_pb.GetObjectManyResponse>;
  getObjects: grpc.MethodDefinition<aserto_directory_reader_v2_reader_pb.GetObjectsRequest, aserto_directory_reader_v2_reader_pb.GetObjectsResponse>;
  getRelation: grpc.MethodDefinition<aserto_directory_reader_v2_reader_pb.GetRelationRequest, aserto_directory_reader_v2_reader_pb.GetRelationResponse>;
  getRelations: grpc.MethodDefinition<aserto_directory_reader_v2_reader_pb.GetRelationsRequest, aserto_directory_reader_v2_reader_pb.GetRelationsResponse>;
  checkPermission: grpc.MethodDefinition<aserto_directory_reader_v2_reader_pb.CheckPermissionRequest, aserto_directory_reader_v2_reader_pb.CheckPermissionResponse>;
  checkRelation: grpc.MethodDefinition<aserto_directory_reader_v2_reader_pb.CheckRelationRequest, aserto_directory_reader_v2_reader_pb.CheckRelationResponse>;
  getGraph: grpc.MethodDefinition<aserto_directory_reader_v2_reader_pb.GetGraphRequest, aserto_directory_reader_v2_reader_pb.GetGraphResponse>;
}

export const ReaderService: IReaderService;

export interface IReaderServer extends grpc.UntypedServiceImplementation {
  getObjectType: grpc.handleUnaryCall<aserto_directory_reader_v2_reader_pb.GetObjectTypeRequest, aserto_directory_reader_v2_reader_pb.GetObjectTypeResponse>;
  getObjectTypes: grpc.handleUnaryCall<aserto_directory_reader_v2_reader_pb.GetObjectTypesRequest, aserto_directory_reader_v2_reader_pb.GetObjectTypesResponse>;
  getRelationType: grpc.handleUnaryCall<aserto_directory_reader_v2_reader_pb.GetRelationTypeRequest, aserto_directory_reader_v2_reader_pb.GetRelationTypeResponse>;
  getRelationTypes: grpc.handleUnaryCall<aserto_directory_reader_v2_reader_pb.GetRelationTypesRequest, aserto_directory_reader_v2_reader_pb.GetRelationTypesResponse>;
  getPermission: grpc.handleUnaryCall<aserto_directory_reader_v2_reader_pb.GetPermissionRequest, aserto_directory_reader_v2_reader_pb.GetPermissionResponse>;
  getPermissions: grpc.handleUnaryCall<aserto_directory_reader_v2_reader_pb.GetPermissionsRequest, aserto_directory_reader_v2_reader_pb.GetPermissionsResponse>;
  getObject: grpc.handleUnaryCall<aserto_directory_reader_v2_reader_pb.GetObjectRequest, aserto_directory_reader_v2_reader_pb.GetObjectResponse>;
  getObjectMany: grpc.handleUnaryCall<aserto_directory_reader_v2_reader_pb.GetObjectManyRequest, aserto_directory_reader_v2_reader_pb.GetObjectManyResponse>;
  getObjects: grpc.handleUnaryCall<aserto_directory_reader_v2_reader_pb.GetObjectsRequest, aserto_directory_reader_v2_reader_pb.GetObjectsResponse>;
  getRelation: grpc.handleUnaryCall<aserto_directory_reader_v2_reader_pb.GetRelationRequest, aserto_directory_reader_v2_reader_pb.GetRelationResponse>;
  getRelations: grpc.handleUnaryCall<aserto_directory_reader_v2_reader_pb.GetRelationsRequest, aserto_directory_reader_v2_reader_pb.GetRelationsResponse>;
  checkPermission: grpc.handleUnaryCall<aserto_directory_reader_v2_reader_pb.CheckPermissionRequest, aserto_directory_reader_v2_reader_pb.CheckPermissionResponse>;
  checkRelation: grpc.handleUnaryCall<aserto_directory_reader_v2_reader_pb.CheckRelationRequest, aserto_directory_reader_v2_reader_pb.CheckRelationResponse>;
  getGraph: grpc.handleUnaryCall<aserto_directory_reader_v2_reader_pb.GetGraphRequest, aserto_directory_reader_v2_reader_pb.GetGraphResponse>;
}

export class ReaderClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getObjectType(argument: aserto_directory_reader_v2_reader_pb.GetObjectTypeRequest, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetObjectTypeResponse>): grpc.ClientUnaryCall;
  getObjectType(argument: aserto_directory_reader_v2_reader_pb.GetObjectTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetObjectTypeResponse>): grpc.ClientUnaryCall;
  getObjectType(argument: aserto_directory_reader_v2_reader_pb.GetObjectTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetObjectTypeResponse>): grpc.ClientUnaryCall;
  getObjectTypes(argument: aserto_directory_reader_v2_reader_pb.GetObjectTypesRequest, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetObjectTypesResponse>): grpc.ClientUnaryCall;
  getObjectTypes(argument: aserto_directory_reader_v2_reader_pb.GetObjectTypesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetObjectTypesResponse>): grpc.ClientUnaryCall;
  getObjectTypes(argument: aserto_directory_reader_v2_reader_pb.GetObjectTypesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetObjectTypesResponse>): grpc.ClientUnaryCall;
  getRelationType(argument: aserto_directory_reader_v2_reader_pb.GetRelationTypeRequest, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetRelationTypeResponse>): grpc.ClientUnaryCall;
  getRelationType(argument: aserto_directory_reader_v2_reader_pb.GetRelationTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetRelationTypeResponse>): grpc.ClientUnaryCall;
  getRelationType(argument: aserto_directory_reader_v2_reader_pb.GetRelationTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetRelationTypeResponse>): grpc.ClientUnaryCall;
  getRelationTypes(argument: aserto_directory_reader_v2_reader_pb.GetRelationTypesRequest, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetRelationTypesResponse>): grpc.ClientUnaryCall;
  getRelationTypes(argument: aserto_directory_reader_v2_reader_pb.GetRelationTypesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetRelationTypesResponse>): grpc.ClientUnaryCall;
  getRelationTypes(argument: aserto_directory_reader_v2_reader_pb.GetRelationTypesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetRelationTypesResponse>): grpc.ClientUnaryCall;
  getPermission(argument: aserto_directory_reader_v2_reader_pb.GetPermissionRequest, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetPermissionResponse>): grpc.ClientUnaryCall;
  getPermission(argument: aserto_directory_reader_v2_reader_pb.GetPermissionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetPermissionResponse>): grpc.ClientUnaryCall;
  getPermission(argument: aserto_directory_reader_v2_reader_pb.GetPermissionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetPermissionResponse>): grpc.ClientUnaryCall;
  getPermissions(argument: aserto_directory_reader_v2_reader_pb.GetPermissionsRequest, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetPermissionsResponse>): grpc.ClientUnaryCall;
  getPermissions(argument: aserto_directory_reader_v2_reader_pb.GetPermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetPermissionsResponse>): grpc.ClientUnaryCall;
  getPermissions(argument: aserto_directory_reader_v2_reader_pb.GetPermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetPermissionsResponse>): grpc.ClientUnaryCall;
  getObject(argument: aserto_directory_reader_v2_reader_pb.GetObjectRequest, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetObjectResponse>): grpc.ClientUnaryCall;
  getObject(argument: aserto_directory_reader_v2_reader_pb.GetObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetObjectResponse>): grpc.ClientUnaryCall;
  getObject(argument: aserto_directory_reader_v2_reader_pb.GetObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetObjectResponse>): grpc.ClientUnaryCall;
  getObjectMany(argument: aserto_directory_reader_v2_reader_pb.GetObjectManyRequest, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetObjectManyResponse>): grpc.ClientUnaryCall;
  getObjectMany(argument: aserto_directory_reader_v2_reader_pb.GetObjectManyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetObjectManyResponse>): grpc.ClientUnaryCall;
  getObjectMany(argument: aserto_directory_reader_v2_reader_pb.GetObjectManyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetObjectManyResponse>): grpc.ClientUnaryCall;
  getObjects(argument: aserto_directory_reader_v2_reader_pb.GetObjectsRequest, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetObjectsResponse>): grpc.ClientUnaryCall;
  getObjects(argument: aserto_directory_reader_v2_reader_pb.GetObjectsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetObjectsResponse>): grpc.ClientUnaryCall;
  getObjects(argument: aserto_directory_reader_v2_reader_pb.GetObjectsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetObjectsResponse>): grpc.ClientUnaryCall;
  getRelation(argument: aserto_directory_reader_v2_reader_pb.GetRelationRequest, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetRelationResponse>): grpc.ClientUnaryCall;
  getRelation(argument: aserto_directory_reader_v2_reader_pb.GetRelationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetRelationResponse>): grpc.ClientUnaryCall;
  getRelation(argument: aserto_directory_reader_v2_reader_pb.GetRelationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetRelationResponse>): grpc.ClientUnaryCall;
  getRelations(argument: aserto_directory_reader_v2_reader_pb.GetRelationsRequest, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetRelationsResponse>): grpc.ClientUnaryCall;
  getRelations(argument: aserto_directory_reader_v2_reader_pb.GetRelationsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetRelationsResponse>): grpc.ClientUnaryCall;
  getRelations(argument: aserto_directory_reader_v2_reader_pb.GetRelationsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetRelationsResponse>): grpc.ClientUnaryCall;
  checkPermission(argument: aserto_directory_reader_v2_reader_pb.CheckPermissionRequest, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.CheckPermissionResponse>): grpc.ClientUnaryCall;
  checkPermission(argument: aserto_directory_reader_v2_reader_pb.CheckPermissionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.CheckPermissionResponse>): grpc.ClientUnaryCall;
  checkPermission(argument: aserto_directory_reader_v2_reader_pb.CheckPermissionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.CheckPermissionResponse>): grpc.ClientUnaryCall;
  checkRelation(argument: aserto_directory_reader_v2_reader_pb.CheckRelationRequest, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.CheckRelationResponse>): grpc.ClientUnaryCall;
  checkRelation(argument: aserto_directory_reader_v2_reader_pb.CheckRelationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.CheckRelationResponse>): grpc.ClientUnaryCall;
  checkRelation(argument: aserto_directory_reader_v2_reader_pb.CheckRelationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.CheckRelationResponse>): grpc.ClientUnaryCall;
  getGraph(argument: aserto_directory_reader_v2_reader_pb.GetGraphRequest, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetGraphResponse>): grpc.ClientUnaryCall;
  getGraph(argument: aserto_directory_reader_v2_reader_pb.GetGraphRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetGraphResponse>): grpc.ClientUnaryCall;
  getGraph(argument: aserto_directory_reader_v2_reader_pb.GetGraphRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_reader_v2_reader_pb.GetGraphResponse>): grpc.ClientUnaryCall;
}
