// GENERATED CODE -- DO NOT EDIT!

// package: aserto.directory.v2
// file: aserto/directory/v2/directory.proto

import * as aserto_directory_v2_directory_pb from "../../../aserto/directory/v2/directory_pb";
import * as grpc from "grpc";

interface IDirectoryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getObjectType: grpc.MethodDefinition<aserto_directory_v2_directory_pb.GetObjectTypeRequest, aserto_directory_v2_directory_pb.GetObjectTypeResponse>;
  listObjectTypes: grpc.MethodDefinition<aserto_directory_v2_directory_pb.ListObjectTypesRequest, aserto_directory_v2_directory_pb.ListObjectTypesResponse>;
  getRelationType: grpc.MethodDefinition<aserto_directory_v2_directory_pb.GetRelationTypeRequest, aserto_directory_v2_directory_pb.GetRelationTypeResponse>;
  listRelationTypes: grpc.MethodDefinition<aserto_directory_v2_directory_pb.ListRelationTypesRequest, aserto_directory_v2_directory_pb.ListRelationTypesResponse>;
  getPermission: grpc.MethodDefinition<aserto_directory_v2_directory_pb.GetPermissionRequest, aserto_directory_v2_directory_pb.GetPermissionResponse>;
  listPermissions: grpc.MethodDefinition<aserto_directory_v2_directory_pb.ListPermissionsRequest, aserto_directory_v2_directory_pb.ListPermissionsResponse>;
  getObject: grpc.MethodDefinition<aserto_directory_v2_directory_pb.GetObjectRequest, aserto_directory_v2_directory_pb.GetObjectResponse>;
  listObjects: grpc.MethodDefinition<aserto_directory_v2_directory_pb.ListObjectsRequest, aserto_directory_v2_directory_pb.ListObjectsResponse>;
  getRelation: grpc.MethodDefinition<aserto_directory_v2_directory_pb.GetRelationRequest, aserto_directory_v2_directory_pb.GetRelationResponse>;
  listRelations: grpc.MethodDefinition<aserto_directory_v2_directory_pb.ListRelationsRequest, aserto_directory_v2_directory_pb.ListRelationsResponse>;
  getGraph: grpc.MethodDefinition<aserto_directory_v2_directory_pb.GetGraphRequest, aserto_directory_v2_directory_pb.GetGraphResponse>;
  check: grpc.MethodDefinition<aserto_directory_v2_directory_pb.CheckRequest, aserto_directory_v2_directory_pb.CheckResponse>;
  info: grpc.MethodDefinition<aserto_directory_v2_directory_pb.InfoRequest, aserto_directory_v2_directory_pb.InfoResponse>;
}

export const DirectoryService: IDirectoryService;

export interface IDirectoryServer extends grpc.UntypedServiceImplementation {
  getObjectType: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.GetObjectTypeRequest, aserto_directory_v2_directory_pb.GetObjectTypeResponse>;
  listObjectTypes: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.ListObjectTypesRequest, aserto_directory_v2_directory_pb.ListObjectTypesResponse>;
  getRelationType: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.GetRelationTypeRequest, aserto_directory_v2_directory_pb.GetRelationTypeResponse>;
  listRelationTypes: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.ListRelationTypesRequest, aserto_directory_v2_directory_pb.ListRelationTypesResponse>;
  getPermission: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.GetPermissionRequest, aserto_directory_v2_directory_pb.GetPermissionResponse>;
  listPermissions: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.ListPermissionsRequest, aserto_directory_v2_directory_pb.ListPermissionsResponse>;
  getObject: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.GetObjectRequest, aserto_directory_v2_directory_pb.GetObjectResponse>;
  listObjects: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.ListObjectsRequest, aserto_directory_v2_directory_pb.ListObjectsResponse>;
  getRelation: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.GetRelationRequest, aserto_directory_v2_directory_pb.GetRelationResponse>;
  listRelations: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.ListRelationsRequest, aserto_directory_v2_directory_pb.ListRelationsResponse>;
  getGraph: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.GetGraphRequest, aserto_directory_v2_directory_pb.GetGraphResponse>;
  check: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.CheckRequest, aserto_directory_v2_directory_pb.CheckResponse>;
  info: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.InfoRequest, aserto_directory_v2_directory_pb.InfoResponse>;
}

export class DirectoryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getObjectType(argument: aserto_directory_v2_directory_pb.GetObjectTypeRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetObjectTypeResponse>): grpc.ClientUnaryCall;
  getObjectType(argument: aserto_directory_v2_directory_pb.GetObjectTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetObjectTypeResponse>): grpc.ClientUnaryCall;
  getObjectType(argument: aserto_directory_v2_directory_pb.GetObjectTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetObjectTypeResponse>): grpc.ClientUnaryCall;
  listObjectTypes(argument: aserto_directory_v2_directory_pb.ListObjectTypesRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListObjectTypesResponse>): grpc.ClientUnaryCall;
  listObjectTypes(argument: aserto_directory_v2_directory_pb.ListObjectTypesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListObjectTypesResponse>): grpc.ClientUnaryCall;
  listObjectTypes(argument: aserto_directory_v2_directory_pb.ListObjectTypesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListObjectTypesResponse>): grpc.ClientUnaryCall;
  getRelationType(argument: aserto_directory_v2_directory_pb.GetRelationTypeRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetRelationTypeResponse>): grpc.ClientUnaryCall;
  getRelationType(argument: aserto_directory_v2_directory_pb.GetRelationTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetRelationTypeResponse>): grpc.ClientUnaryCall;
  getRelationType(argument: aserto_directory_v2_directory_pb.GetRelationTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetRelationTypeResponse>): grpc.ClientUnaryCall;
  listRelationTypes(argument: aserto_directory_v2_directory_pb.ListRelationTypesRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListRelationTypesResponse>): grpc.ClientUnaryCall;
  listRelationTypes(argument: aserto_directory_v2_directory_pb.ListRelationTypesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListRelationTypesResponse>): grpc.ClientUnaryCall;
  listRelationTypes(argument: aserto_directory_v2_directory_pb.ListRelationTypesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListRelationTypesResponse>): grpc.ClientUnaryCall;
  getPermission(argument: aserto_directory_v2_directory_pb.GetPermissionRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetPermissionResponse>): grpc.ClientUnaryCall;
  getPermission(argument: aserto_directory_v2_directory_pb.GetPermissionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetPermissionResponse>): grpc.ClientUnaryCall;
  getPermission(argument: aserto_directory_v2_directory_pb.GetPermissionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetPermissionResponse>): grpc.ClientUnaryCall;
  listPermissions(argument: aserto_directory_v2_directory_pb.ListPermissionsRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListPermissionsResponse>): grpc.ClientUnaryCall;
  listPermissions(argument: aserto_directory_v2_directory_pb.ListPermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListPermissionsResponse>): grpc.ClientUnaryCall;
  listPermissions(argument: aserto_directory_v2_directory_pb.ListPermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListPermissionsResponse>): grpc.ClientUnaryCall;
  getObject(argument: aserto_directory_v2_directory_pb.GetObjectRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetObjectResponse>): grpc.ClientUnaryCall;
  getObject(argument: aserto_directory_v2_directory_pb.GetObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetObjectResponse>): grpc.ClientUnaryCall;
  getObject(argument: aserto_directory_v2_directory_pb.GetObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetObjectResponse>): grpc.ClientUnaryCall;
  listObjects(argument: aserto_directory_v2_directory_pb.ListObjectsRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListObjectsResponse>): grpc.ClientUnaryCall;
  listObjects(argument: aserto_directory_v2_directory_pb.ListObjectsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListObjectsResponse>): grpc.ClientUnaryCall;
  listObjects(argument: aserto_directory_v2_directory_pb.ListObjectsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListObjectsResponse>): grpc.ClientUnaryCall;
  getRelation(argument: aserto_directory_v2_directory_pb.GetRelationRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetRelationResponse>): grpc.ClientUnaryCall;
  getRelation(argument: aserto_directory_v2_directory_pb.GetRelationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetRelationResponse>): grpc.ClientUnaryCall;
  getRelation(argument: aserto_directory_v2_directory_pb.GetRelationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetRelationResponse>): grpc.ClientUnaryCall;
  listRelations(argument: aserto_directory_v2_directory_pb.ListRelationsRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListRelationsResponse>): grpc.ClientUnaryCall;
  listRelations(argument: aserto_directory_v2_directory_pb.ListRelationsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListRelationsResponse>): grpc.ClientUnaryCall;
  listRelations(argument: aserto_directory_v2_directory_pb.ListRelationsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListRelationsResponse>): grpc.ClientUnaryCall;
  getGraph(argument: aserto_directory_v2_directory_pb.GetGraphRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetGraphResponse>): grpc.ClientUnaryCall;
  getGraph(argument: aserto_directory_v2_directory_pb.GetGraphRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetGraphResponse>): grpc.ClientUnaryCall;
  getGraph(argument: aserto_directory_v2_directory_pb.GetGraphRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetGraphResponse>): grpc.ClientUnaryCall;
  check(argument: aserto_directory_v2_directory_pb.CheckRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.CheckResponse>): grpc.ClientUnaryCall;
  check(argument: aserto_directory_v2_directory_pb.CheckRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.CheckResponse>): grpc.ClientUnaryCall;
  check(argument: aserto_directory_v2_directory_pb.CheckRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.CheckResponse>): grpc.ClientUnaryCall;
  info(argument: aserto_directory_v2_directory_pb.InfoRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.InfoResponse>): grpc.ClientUnaryCall;
  info(argument: aserto_directory_v2_directory_pb.InfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.InfoResponse>): grpc.ClientUnaryCall;
  info(argument: aserto_directory_v2_directory_pb.InfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.InfoResponse>): grpc.ClientUnaryCall;
}
