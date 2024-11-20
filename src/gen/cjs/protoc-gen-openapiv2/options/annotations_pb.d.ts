import type { GenExtension, GenFile } from "@bufbuild/protobuf/codegenv1";
import type { FieldOptions, FileOptions, MessageOptions, MethodOptions, ServiceOptions } from "@bufbuild/protobuf/wkt";
import type { JSONSchema, Operation, Schema, Swagger, Tag } from "./openapiv2_pb";
/**
 * Describes the file protoc-gen-openapiv2/options/annotations.proto.
 */
export declare const file_protoc_gen_openapiv2_options_annotations: GenFile;
/**
 * ID assigned by protobuf-global-extension-registry@google.com for gRPC-Gateway project.
 *
 * All IDs are the same, as assigned. It is okay that they are the same, as they extend
 * different descriptor messages.
 *
 * @generated from extension: grpc.gateway.protoc_gen_openapiv2.options.Swagger openapiv2_swagger = 1042;
 */
export declare const openapiv2_swagger: GenExtension<FileOptions, Swagger>;
/**
 * ID assigned by protobuf-global-extension-registry@google.com for gRPC-Gateway project.
 *
 * All IDs are the same, as assigned. It is okay that they are the same, as they extend
 * different descriptor messages.
 *
 * @generated from extension: grpc.gateway.protoc_gen_openapiv2.options.Operation openapiv2_operation = 1042;
 */
export declare const openapiv2_operation: GenExtension<MethodOptions, Operation>;
/**
 * ID assigned by protobuf-global-extension-registry@google.com for gRPC-Gateway project.
 *
 * All IDs are the same, as assigned. It is okay that they are the same, as they extend
 * different descriptor messages.
 *
 * @generated from extension: grpc.gateway.protoc_gen_openapiv2.options.Schema openapiv2_schema = 1042;
 */
export declare const openapiv2_schema: GenExtension<MessageOptions, Schema>;
/**
 * ID assigned by protobuf-global-extension-registry@google.com for gRPC-Gateway project.
 *
 * All IDs are the same, as assigned. It is okay that they are the same, as they extend
 * different descriptor messages.
 *
 * @generated from extension: grpc.gateway.protoc_gen_openapiv2.options.Tag openapiv2_tag = 1042;
 */
export declare const openapiv2_tag: GenExtension<ServiceOptions, Tag>;
/**
 * ID assigned by protobuf-global-extension-registry@google.com for gRPC-Gateway project.
 *
 * All IDs are the same, as assigned. It is okay that they are the same, as they extend
 * different descriptor messages.
 *
 * @generated from extension: grpc.gateway.protoc_gen_openapiv2.options.JSONSchema openapiv2_field = 1042;
 */
export declare const openapiv2_field: GenExtension<FieldOptions, JSONSchema>;
