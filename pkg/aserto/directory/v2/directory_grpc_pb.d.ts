// GENERATED CODE -- DO NOT EDIT!

// package: aserto.directory.v2
// file: aserto/directory/v2/directory.proto

import * as aserto_directory_v2_directory_pb from "../../../aserto/directory/v2/directory_pb";
import * as grpc from "grpc";

interface IDirectoryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getObjectType: grpc.MethodDefinition<aserto_directory_v2_directory_pb.GetObjectTypeRequest, aserto_directory_v2_directory_pb.GetObjectTypeResponse>;
  setObjectType: grpc.MethodDefinition<aserto_directory_v2_directory_pb.SetObjectTypeRequest, aserto_directory_v2_directory_pb.SetObjectTypeResponse>;
  deleteObjectType: grpc.MethodDefinition<aserto_directory_v2_directory_pb.DeleteObjectTypeRequest, aserto_directory_v2_directory_pb.DeleteObjectTypeResponse>;
  listObjectTypes: grpc.MethodDefinition<aserto_directory_v2_directory_pb.ListObjectTypesRequest, aserto_directory_v2_directory_pb.ListObjectTypesResponse>;
  getRelationType: grpc.MethodDefinition<aserto_directory_v2_directory_pb.GetRelationTypeRequest, aserto_directory_v2_directory_pb.GetRelationTypeResponse>;
  setRelationType: grpc.MethodDefinition<aserto_directory_v2_directory_pb.SetRelationTypeRequest, aserto_directory_v2_directory_pb.SetRelationTypeResponse>;
  deleteRelationType: grpc.MethodDefinition<aserto_directory_v2_directory_pb.DeleteRelationTypeRequest, aserto_directory_v2_directory_pb.DeleteRelationTypeResponse>;
  listRelationTypes: grpc.MethodDefinition<aserto_directory_v2_directory_pb.ListRelationTypesRequest, aserto_directory_v2_directory_pb.ListRelationTypesResponse>;
  getPermission: grpc.MethodDefinition<aserto_directory_v2_directory_pb.GetPermissionRequest, aserto_directory_v2_directory_pb.GetPermissionResponse>;
  setPermission: grpc.MethodDefinition<aserto_directory_v2_directory_pb.SetPermissionRequest, aserto_directory_v2_directory_pb.SetPermissionResponse>;
  deletePermission: grpc.MethodDefinition<aserto_directory_v2_directory_pb.DeletePermissionRequest, aserto_directory_v2_directory_pb.DeletePermissionResponse>;
  listPermissions: grpc.MethodDefinition<aserto_directory_v2_directory_pb.ListPermissionsRequest, aserto_directory_v2_directory_pb.ListPermissionsResponse>;
  getObject: grpc.MethodDefinition<aserto_directory_v2_directory_pb.GetObjectRequest, aserto_directory_v2_directory_pb.GetObjectResponse>;
  setObject: grpc.MethodDefinition<aserto_directory_v2_directory_pb.SetObjectRequest, aserto_directory_v2_directory_pb.SetObjectResponse>;
  deleteObject: grpc.MethodDefinition<aserto_directory_v2_directory_pb.DeleteObjectRequest, aserto_directory_v2_directory_pb.DeleteObjectResponse>;
  listObjects: grpc.MethodDefinition<aserto_directory_v2_directory_pb.ListObjectsRequest, aserto_directory_v2_directory_pb.ListObjectsResponse>;
  getRelation: grpc.MethodDefinition<aserto_directory_v2_directory_pb.GetRelationRequest, aserto_directory_v2_directory_pb.GetRelationResponse>;
  setRelation: grpc.MethodDefinition<aserto_directory_v2_directory_pb.SetRelationRequest, aserto_directory_v2_directory_pb.SetRelationResponse>;
  deleteRelation: grpc.MethodDefinition<aserto_directory_v2_directory_pb.DeleteRelationRequest, aserto_directory_v2_directory_pb.DeleteRelationResponse>;
  listRelations: grpc.MethodDefinition<aserto_directory_v2_directory_pb.ListRelationsRequest, aserto_directory_v2_directory_pb.ListRelationsResponse>;
  getGraph: grpc.MethodDefinition<aserto_directory_v2_directory_pb.GetGraphRequest, aserto_directory_v2_directory_pb.GetGraphResponse>;
  checkRelation: grpc.MethodDefinition<aserto_directory_v2_directory_pb.CheckRelationRequest, aserto_directory_v2_directory_pb.CheckRelationResponse>;
  checkPermission: grpc.MethodDefinition<aserto_directory_v2_directory_pb.CheckPermissionRequest, aserto_directory_v2_directory_pb.CheckPermissionResponse>;
  info: grpc.MethodDefinition<aserto_directory_v2_directory_pb.InfoRequest, aserto_directory_v2_directory_pb.InfoResponse>;
}

export const DirectoryService: IDirectoryService;

export interface IDirectoryServer extends grpc.UntypedServiceImplementation {
  getObjectType: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.GetObjectTypeRequest, aserto_directory_v2_directory_pb.GetObjectTypeResponse>;
  setObjectType: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.SetObjectTypeRequest, aserto_directory_v2_directory_pb.SetObjectTypeResponse>;
  deleteObjectType: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.DeleteObjectTypeRequest, aserto_directory_v2_directory_pb.DeleteObjectTypeResponse>;
  listObjectTypes: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.ListObjectTypesRequest, aserto_directory_v2_directory_pb.ListObjectTypesResponse>;
  getRelationType: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.GetRelationTypeRequest, aserto_directory_v2_directory_pb.GetRelationTypeResponse>;
  setRelationType: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.SetRelationTypeRequest, aserto_directory_v2_directory_pb.SetRelationTypeResponse>;
  deleteRelationType: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.DeleteRelationTypeRequest, aserto_directory_v2_directory_pb.DeleteRelationTypeResponse>;
  listRelationTypes: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.ListRelationTypesRequest, aserto_directory_v2_directory_pb.ListRelationTypesResponse>;
  getPermission: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.GetPermissionRequest, aserto_directory_v2_directory_pb.GetPermissionResponse>;
  setPermission: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.SetPermissionRequest, aserto_directory_v2_directory_pb.SetPermissionResponse>;
  deletePermission: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.DeletePermissionRequest, aserto_directory_v2_directory_pb.DeletePermissionResponse>;
  listPermissions: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.ListPermissionsRequest, aserto_directory_v2_directory_pb.ListPermissionsResponse>;
  getObject: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.GetObjectRequest, aserto_directory_v2_directory_pb.GetObjectResponse>;
  setObject: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.SetObjectRequest, aserto_directory_v2_directory_pb.SetObjectResponse>;
  deleteObject: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.DeleteObjectRequest, aserto_directory_v2_directory_pb.DeleteObjectResponse>;
  listObjects: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.ListObjectsRequest, aserto_directory_v2_directory_pb.ListObjectsResponse>;
  getRelation: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.GetRelationRequest, aserto_directory_v2_directory_pb.GetRelationResponse>;
  setRelation: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.SetRelationRequest, aserto_directory_v2_directory_pb.SetRelationResponse>;
  deleteRelation: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.DeleteRelationRequest, aserto_directory_v2_directory_pb.DeleteRelationResponse>;
  listRelations: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.ListRelationsRequest, aserto_directory_v2_directory_pb.ListRelationsResponse>;
  getGraph: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.GetGraphRequest, aserto_directory_v2_directory_pb.GetGraphResponse>;
  checkRelation: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.CheckRelationRequest, aserto_directory_v2_directory_pb.CheckRelationResponse>;
  checkPermission: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.CheckPermissionRequest, aserto_directory_v2_directory_pb.CheckPermissionResponse>;
  info: grpc.handleUnaryCall<aserto_directory_v2_directory_pb.InfoRequest, aserto_directory_v2_directory_pb.InfoResponse>;
}

export class DirectoryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getObjectType(argument: aserto_directory_v2_directory_pb.GetObjectTypeRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetObjectTypeResponse>): grpc.ClientUnaryCall;
  getObjectType(argument: aserto_directory_v2_directory_pb.GetObjectTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetObjectTypeResponse>): grpc.ClientUnaryCall;
  getObjectType(argument: aserto_directory_v2_directory_pb.GetObjectTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetObjectTypeResponse>): grpc.ClientUnaryCall;
  setObjectType(argument: aserto_directory_v2_directory_pb.SetObjectTypeRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.SetObjectTypeResponse>): grpc.ClientUnaryCall;
  setObjectType(argument: aserto_directory_v2_directory_pb.SetObjectTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.SetObjectTypeResponse>): grpc.ClientUnaryCall;
  setObjectType(argument: aserto_directory_v2_directory_pb.SetObjectTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.SetObjectTypeResponse>): grpc.ClientUnaryCall;
  deleteObjectType(argument: aserto_directory_v2_directory_pb.DeleteObjectTypeRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.DeleteObjectTypeResponse>): grpc.ClientUnaryCall;
  deleteObjectType(argument: aserto_directory_v2_directory_pb.DeleteObjectTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.DeleteObjectTypeResponse>): grpc.ClientUnaryCall;
  deleteObjectType(argument: aserto_directory_v2_directory_pb.DeleteObjectTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.DeleteObjectTypeResponse>): grpc.ClientUnaryCall;
  listObjectTypes(argument: aserto_directory_v2_directory_pb.ListObjectTypesRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListObjectTypesResponse>): grpc.ClientUnaryCall;
  listObjectTypes(argument: aserto_directory_v2_directory_pb.ListObjectTypesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListObjectTypesResponse>): grpc.ClientUnaryCall;
  listObjectTypes(argument: aserto_directory_v2_directory_pb.ListObjectTypesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListObjectTypesResponse>): grpc.ClientUnaryCall;
  getRelationType(argument: aserto_directory_v2_directory_pb.GetRelationTypeRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetRelationTypeResponse>): grpc.ClientUnaryCall;
  getRelationType(argument: aserto_directory_v2_directory_pb.GetRelationTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetRelationTypeResponse>): grpc.ClientUnaryCall;
  getRelationType(argument: aserto_directory_v2_directory_pb.GetRelationTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetRelationTypeResponse>): grpc.ClientUnaryCall;
  setRelationType(argument: aserto_directory_v2_directory_pb.SetRelationTypeRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.SetRelationTypeResponse>): grpc.ClientUnaryCall;
  setRelationType(argument: aserto_directory_v2_directory_pb.SetRelationTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.SetRelationTypeResponse>): grpc.ClientUnaryCall;
  setRelationType(argument: aserto_directory_v2_directory_pb.SetRelationTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.SetRelationTypeResponse>): grpc.ClientUnaryCall;
  deleteRelationType(argument: aserto_directory_v2_directory_pb.DeleteRelationTypeRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.DeleteRelationTypeResponse>): grpc.ClientUnaryCall;
  deleteRelationType(argument: aserto_directory_v2_directory_pb.DeleteRelationTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.DeleteRelationTypeResponse>): grpc.ClientUnaryCall;
  deleteRelationType(argument: aserto_directory_v2_directory_pb.DeleteRelationTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.DeleteRelationTypeResponse>): grpc.ClientUnaryCall;
  listRelationTypes(argument: aserto_directory_v2_directory_pb.ListRelationTypesRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListRelationTypesResponse>): grpc.ClientUnaryCall;
  listRelationTypes(argument: aserto_directory_v2_directory_pb.ListRelationTypesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListRelationTypesResponse>): grpc.ClientUnaryCall;
  listRelationTypes(argument: aserto_directory_v2_directory_pb.ListRelationTypesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListRelationTypesResponse>): grpc.ClientUnaryCall;
  getPermission(argument: aserto_directory_v2_directory_pb.GetPermissionRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetPermissionResponse>): grpc.ClientUnaryCall;
  getPermission(argument: aserto_directory_v2_directory_pb.GetPermissionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetPermissionResponse>): grpc.ClientUnaryCall;
  getPermission(argument: aserto_directory_v2_directory_pb.GetPermissionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetPermissionResponse>): grpc.ClientUnaryCall;
  setPermission(argument: aserto_directory_v2_directory_pb.SetPermissionRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.SetPermissionResponse>): grpc.ClientUnaryCall;
  setPermission(argument: aserto_directory_v2_directory_pb.SetPermissionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.SetPermissionResponse>): grpc.ClientUnaryCall;
  setPermission(argument: aserto_directory_v2_directory_pb.SetPermissionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.SetPermissionResponse>): grpc.ClientUnaryCall;
  deletePermission(argument: aserto_directory_v2_directory_pb.DeletePermissionRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.DeletePermissionResponse>): grpc.ClientUnaryCall;
  deletePermission(argument: aserto_directory_v2_directory_pb.DeletePermissionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.DeletePermissionResponse>): grpc.ClientUnaryCall;
  deletePermission(argument: aserto_directory_v2_directory_pb.DeletePermissionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.DeletePermissionResponse>): grpc.ClientUnaryCall;
  listPermissions(argument: aserto_directory_v2_directory_pb.ListPermissionsRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListPermissionsResponse>): grpc.ClientUnaryCall;
  listPermissions(argument: aserto_directory_v2_directory_pb.ListPermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListPermissionsResponse>): grpc.ClientUnaryCall;
  listPermissions(argument: aserto_directory_v2_directory_pb.ListPermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListPermissionsResponse>): grpc.ClientUnaryCall;
  getObject(argument: aserto_directory_v2_directory_pb.GetObjectRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetObjectResponse>): grpc.ClientUnaryCall;
  getObject(argument: aserto_directory_v2_directory_pb.GetObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetObjectResponse>): grpc.ClientUnaryCall;
  getObject(argument: aserto_directory_v2_directory_pb.GetObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetObjectResponse>): grpc.ClientUnaryCall;
  setObject(argument: aserto_directory_v2_directory_pb.SetObjectRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.SetObjectResponse>): grpc.ClientUnaryCall;
  setObject(argument: aserto_directory_v2_directory_pb.SetObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.SetObjectResponse>): grpc.ClientUnaryCall;
  setObject(argument: aserto_directory_v2_directory_pb.SetObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.SetObjectResponse>): grpc.ClientUnaryCall;
  deleteObject(argument: aserto_directory_v2_directory_pb.DeleteObjectRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.DeleteObjectResponse>): grpc.ClientUnaryCall;
  deleteObject(argument: aserto_directory_v2_directory_pb.DeleteObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.DeleteObjectResponse>): grpc.ClientUnaryCall;
  deleteObject(argument: aserto_directory_v2_directory_pb.DeleteObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.DeleteObjectResponse>): grpc.ClientUnaryCall;
  listObjects(argument: aserto_directory_v2_directory_pb.ListObjectsRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListObjectsResponse>): grpc.ClientUnaryCall;
  listObjects(argument: aserto_directory_v2_directory_pb.ListObjectsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListObjectsResponse>): grpc.ClientUnaryCall;
  listObjects(argument: aserto_directory_v2_directory_pb.ListObjectsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListObjectsResponse>): grpc.ClientUnaryCall;
  getRelation(argument: aserto_directory_v2_directory_pb.GetRelationRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetRelationResponse>): grpc.ClientUnaryCall;
  getRelation(argument: aserto_directory_v2_directory_pb.GetRelationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetRelationResponse>): grpc.ClientUnaryCall;
  getRelation(argument: aserto_directory_v2_directory_pb.GetRelationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetRelationResponse>): grpc.ClientUnaryCall;
  setRelation(argument: aserto_directory_v2_directory_pb.SetRelationRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.SetRelationResponse>): grpc.ClientUnaryCall;
  setRelation(argument: aserto_directory_v2_directory_pb.SetRelationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.SetRelationResponse>): grpc.ClientUnaryCall;
  setRelation(argument: aserto_directory_v2_directory_pb.SetRelationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.SetRelationResponse>): grpc.ClientUnaryCall;
  deleteRelation(argument: aserto_directory_v2_directory_pb.DeleteRelationRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.DeleteRelationResponse>): grpc.ClientUnaryCall;
  deleteRelation(argument: aserto_directory_v2_directory_pb.DeleteRelationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.DeleteRelationResponse>): grpc.ClientUnaryCall;
  deleteRelation(argument: aserto_directory_v2_directory_pb.DeleteRelationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.DeleteRelationResponse>): grpc.ClientUnaryCall;
  listRelations(argument: aserto_directory_v2_directory_pb.ListRelationsRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListRelationsResponse>): grpc.ClientUnaryCall;
  listRelations(argument: aserto_directory_v2_directory_pb.ListRelationsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListRelationsResponse>): grpc.ClientUnaryCall;
  listRelations(argument: aserto_directory_v2_directory_pb.ListRelationsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.ListRelationsResponse>): grpc.ClientUnaryCall;
  getGraph(argument: aserto_directory_v2_directory_pb.GetGraphRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetGraphResponse>): grpc.ClientUnaryCall;
  getGraph(argument: aserto_directory_v2_directory_pb.GetGraphRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetGraphResponse>): grpc.ClientUnaryCall;
  getGraph(argument: aserto_directory_v2_directory_pb.GetGraphRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.GetGraphResponse>): grpc.ClientUnaryCall;
  checkRelation(argument: aserto_directory_v2_directory_pb.CheckRelationRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.CheckRelationResponse>): grpc.ClientUnaryCall;
  checkRelation(argument: aserto_directory_v2_directory_pb.CheckRelationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.CheckRelationResponse>): grpc.ClientUnaryCall;
  checkRelation(argument: aserto_directory_v2_directory_pb.CheckRelationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.CheckRelationResponse>): grpc.ClientUnaryCall;
  checkPermission(argument: aserto_directory_v2_directory_pb.CheckPermissionRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.CheckPermissionResponse>): grpc.ClientUnaryCall;
  checkPermission(argument: aserto_directory_v2_directory_pb.CheckPermissionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.CheckPermissionResponse>): grpc.ClientUnaryCall;
  checkPermission(argument: aserto_directory_v2_directory_pb.CheckPermissionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.CheckPermissionResponse>): grpc.ClientUnaryCall;
  info(argument: aserto_directory_v2_directory_pb.InfoRequest, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.InfoResponse>): grpc.ClientUnaryCall;
  info(argument: aserto_directory_v2_directory_pb.InfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.InfoResponse>): grpc.ClientUnaryCall;
  info(argument: aserto_directory_v2_directory_pb.InfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<aserto_directory_v2_directory_pb.InfoResponse>): grpc.ClientUnaryCall;
}
