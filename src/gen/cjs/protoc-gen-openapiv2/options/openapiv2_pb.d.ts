import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Value } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file protoc-gen-openapiv2/options/openapiv2.proto.
 */
export declare const file_protoc_gen_openapiv2_options_openapiv2: GenFile;
/**
 * `Swagger` is a representation of OpenAPI v2 specification's Swagger object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#swaggerObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      title: "Echo API";
 *      version: "1.0";
 *      description: "";
 *      contact: {
 *        name: "gRPC-Gateway project";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *        email: "none@example.com";
 *      };
 *      license: {
 *        name: "BSD 3-Clause License";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway/blob/main/LICENSE";
 *      };
 *    };
 *    schemes: HTTPS;
 *    consumes: "application/json";
 *    produces: "application/json";
 *  };
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Swagger
 */
export type Swagger = Message<"grpc.gateway.protoc_gen_openapiv2.options.Swagger"> & {
    /**
     * Specifies the OpenAPI Specification version being used. It can be
     * used by the OpenAPI UI and other clients to interpret the API listing. The
     * value MUST be "2.0".
     *
     * @generated from field: string swagger = 1;
     */
    swagger: string;
    /**
     * Provides metadata about the API. The metadata can be used by the
     * clients if needed.
     *
     * @generated from field: grpc.gateway.protoc_gen_openapiv2.options.Info info = 2;
     */
    info?: Info;
    /**
     * The host (name or ip) serving the API. This MUST be the host only and does
     * not include the scheme nor sub-paths. It MAY include a port. If the host is
     * not included, the host serving the documentation is to be used (including
     * the port). The host does not support path templating.
     *
     * @generated from field: string host = 3;
     */
    host: string;
    /**
     * The base path on which the API is served, which is relative to the host. If
     * it is not included, the API is served directly under the host. The value
     * MUST start with a leading slash (/). The basePath does not support path
     * templating.
     * Note that using `base_path` does not change the endpoint paths that are
     * generated in the resulting OpenAPI file. If you wish to use `base_path`
     * with relatively generated OpenAPI paths, the `base_path` prefix must be
     * manually removed from your `google.api.http` paths and your code changed to
     * serve the API from the `base_path`.
     *
     * @generated from field: string base_path = 4;
     */
    basePath: string;
    /**
     * The transfer protocol of the API. Values MUST be from the list: "http",
     * "https", "ws", "wss". If the schemes is not included, the default scheme to
     * be used is the one used to access the OpenAPI definition itself.
     *
     * @generated from field: repeated grpc.gateway.protoc_gen_openapiv2.options.Scheme schemes = 5;
     */
    schemes: Scheme[];
    /**
     * A list of MIME types the APIs can consume. This is global to all APIs but
     * can be overridden on specific API calls. Value MUST be as described under
     * Mime Types.
     *
     * @generated from field: repeated string consumes = 6;
     */
    consumes: string[];
    /**
     * A list of MIME types the APIs can produce. This is global to all APIs but
     * can be overridden on specific API calls. Value MUST be as described under
     * Mime Types.
     *
     * @generated from field: repeated string produces = 7;
     */
    produces: string[];
    /**
     * An object to hold responses that can be used across operations. This
     * property does not define global responses for all operations.
     *
     * @generated from field: map<string, grpc.gateway.protoc_gen_openapiv2.options.Response> responses = 10;
     */
    responses: {
        [key: string]: Response;
    };
    /**
     * Security scheme definitions that can be used across the specification.
     *
     * @generated from field: grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions security_definitions = 11;
     */
    securityDefinitions?: SecurityDefinitions;
    /**
     * A declaration of which security schemes are applied for the API as a whole.
     * The list of values describes alternative security schemes that can be used
     * (that is, there is a logical OR between the security requirements).
     * Individual operations can override this definition.
     *
     * @generated from field: repeated grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement security = 12;
     */
    security: SecurityRequirement[];
    /**
     * A list of tags for API documentation control. Tags can be used for logical
     * grouping of operations by resources or any other qualifier.
     *
     * @generated from field: repeated grpc.gateway.protoc_gen_openapiv2.options.Tag tags = 13;
     */
    tags: Tag[];
    /**
     * Additional external documentation.
     *
     * @generated from field: grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs = 14;
     */
    externalDocs?: ExternalDocumentation;
    /**
     * Custom properties that start with "x-" such as "x-foo" used to describe
     * extra functionality that is not covered by the standard OpenAPI Specification.
     * See: https://swagger.io/docs/specification/2-0/swagger-extensions/
     *
     * @generated from field: map<string, google.protobuf.Value> extensions = 15;
     */
    extensions: {
        [key: string]: Value;
    };
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.Swagger.
 * Use `create(SwaggerSchema)` to create a new message.
 */
export declare const SwaggerSchema: GenMessage<Swagger>;
/**
 * `Operation` is a representation of OpenAPI v2 specification's Operation object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#operationObject
 *
 * Example:
 *
 *  service EchoService {
 *    rpc Echo(SimpleMessage) returns (SimpleMessage) {
 *      option (google.api.http) = {
 *        get: "/v1/example/echo/{id}"
 *      };
 *
 *      option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_operation) = {
 *        summary: "Get a message.";
 *        operation_id: "getMessage";
 *        tags: "echo";
 *        responses: {
 *          key: "200"
 *            value: {
 *            description: "OK";
 *          }
 *        }
 *      };
 *    }
 *  }
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Operation
 */
export type Operation = Message<"grpc.gateway.protoc_gen_openapiv2.options.Operation"> & {
    /**
     * A list of tags for API documentation control. Tags can be used for logical
     * grouping of operations by resources or any other qualifier.
     *
     * @generated from field: repeated string tags = 1;
     */
    tags: string[];
    /**
     * A short summary of what the operation does. For maximum readability in the
     * swagger-ui, this field SHOULD be less than 120 characters.
     *
     * @generated from field: string summary = 2;
     */
    summary: string;
    /**
     * A verbose explanation of the operation behavior. GFM syntax can be used for
     * rich text representation.
     *
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * Additional external documentation for this operation.
     *
     * @generated from field: grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs = 4;
     */
    externalDocs?: ExternalDocumentation;
    /**
     * Unique string used to identify the operation. The id MUST be unique among
     * all operations described in the API. Tools and libraries MAY use the
     * operationId to uniquely identify an operation, therefore, it is recommended
     * to follow common programming naming conventions.
     *
     * @generated from field: string operation_id = 5;
     */
    operationId: string;
    /**
     * A list of MIME types the operation can consume. This overrides the consumes
     * definition at the OpenAPI Object. An empty value MAY be used to clear the
     * global definition. Value MUST be as described under Mime Types.
     *
     * @generated from field: repeated string consumes = 6;
     */
    consumes: string[];
    /**
     * A list of MIME types the operation can produce. This overrides the produces
     * definition at the OpenAPI Object. An empty value MAY be used to clear the
     * global definition. Value MUST be as described under Mime Types.
     *
     * @generated from field: repeated string produces = 7;
     */
    produces: string[];
    /**
     * The list of possible responses as they are returned from executing this
     * operation.
     *
     * @generated from field: map<string, grpc.gateway.protoc_gen_openapiv2.options.Response> responses = 9;
     */
    responses: {
        [key: string]: Response;
    };
    /**
     * The transfer protocol for the operation. Values MUST be from the list:
     * "http", "https", "ws", "wss". The value overrides the OpenAPI Object
     * schemes definition.
     *
     * @generated from field: repeated grpc.gateway.protoc_gen_openapiv2.options.Scheme schemes = 10;
     */
    schemes: Scheme[];
    /**
     * Declares this operation to be deprecated. Usage of the declared operation
     * should be refrained. Default value is false.
     *
     * @generated from field: bool deprecated = 11;
     */
    deprecated: boolean;
    /**
     * A declaration of which security schemes are applied for this operation. The
     * list of values describes alternative security schemes that can be used
     * (that is, there is a logical OR between the security requirements). This
     * definition overrides any declared top-level security. To remove a top-level
     * security declaration, an empty array can be used.
     *
     * @generated from field: repeated grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement security = 12;
     */
    security: SecurityRequirement[];
    /**
     * Custom properties that start with "x-" such as "x-foo" used to describe
     * extra functionality that is not covered by the standard OpenAPI Specification.
     * See: https://swagger.io/docs/specification/2-0/swagger-extensions/
     *
     * @generated from field: map<string, google.protobuf.Value> extensions = 13;
     */
    extensions: {
        [key: string]: Value;
    };
    /**
     * Custom parameters such as HTTP request headers.
     * See: https://swagger.io/docs/specification/2-0/describing-parameters/
     * and https://swagger.io/specification/v2/#parameter-object.
     *
     * @generated from field: grpc.gateway.protoc_gen_openapiv2.options.Parameters parameters = 14;
     */
    parameters?: Parameters;
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.Operation.
 * Use `create(OperationSchema)` to create a new message.
 */
export declare const OperationSchema: GenMessage<Operation>;
/**
 * `Parameters` is a representation of OpenAPI v2 specification's parameters object.
 * Note: This technically breaks compatibility with the OpenAPI 2 definition structure as we only
 * allow header parameters to be set here since we do not want users specifying custom non-header
 * parameters beyond those inferred from the Protobuf schema.
 * See: https://swagger.io/specification/v2/#parameter-object
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Parameters
 */
export type Parameters = Message<"grpc.gateway.protoc_gen_openapiv2.options.Parameters"> & {
    /**
     * `Headers` is one or more HTTP header parameter.
     * See: https://swagger.io/docs/specification/2-0/describing-parameters/#header-parameters
     *
     * @generated from field: repeated grpc.gateway.protoc_gen_openapiv2.options.HeaderParameter headers = 1;
     */
    headers: HeaderParameter[];
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.Parameters.
 * Use `create(ParametersSchema)` to create a new message.
 */
export declare const ParametersSchema: GenMessage<Parameters>;
/**
 * `HeaderParameter` a HTTP header parameter.
 * See: https://swagger.io/specification/v2/#parameter-object
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.HeaderParameter
 */
export type HeaderParameter = Message<"grpc.gateway.protoc_gen_openapiv2.options.HeaderParameter"> & {
    /**
     * `Name` is the header name.
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * `Description` is a short description of the header.
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * `Type` is the type of the object. The value MUST be one of "string", "number", "integer", or "boolean". The "array" type is not supported.
     * See: https://swagger.io/specification/v2/#parameterType.
     *
     * @generated from field: grpc.gateway.protoc_gen_openapiv2.options.HeaderParameter.Type type = 3;
     */
    type: HeaderParameter_Type;
    /**
     * `Format` The extending format for the previously mentioned type.
     *
     * @generated from field: string format = 4;
     */
    format: string;
    /**
     * `Required` indicates if the header is optional
     *
     * @generated from field: bool required = 5;
     */
    required: boolean;
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.HeaderParameter.
 * Use `create(HeaderParameterSchema)` to create a new message.
 */
export declare const HeaderParameterSchema: GenMessage<HeaderParameter>;
/**
 * `Type` is a supported HTTP header type.
 * See https://swagger.io/specification/v2/#parameterType.
 *
 * @generated from enum grpc.gateway.protoc_gen_openapiv2.options.HeaderParameter.Type
 */
export declare enum HeaderParameter_Type {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: STRING = 1;
     */
    STRING = 1,
    /**
     * @generated from enum value: NUMBER = 2;
     */
    NUMBER = 2,
    /**
     * @generated from enum value: INTEGER = 3;
     */
    INTEGER = 3,
    /**
     * @generated from enum value: BOOLEAN = 4;
     */
    BOOLEAN = 4
}
/**
 * Describes the enum grpc.gateway.protoc_gen_openapiv2.options.HeaderParameter.Type.
 */
export declare const HeaderParameter_TypeSchema: GenEnum<HeaderParameter_Type>;
/**
 * `Header` is a representation of OpenAPI v2 specification's Header object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#headerObject
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Header
 */
export type Header = Message<"grpc.gateway.protoc_gen_openapiv2.options.Header"> & {
    /**
     * `Description` is a short description of the header.
     *
     * @generated from field: string description = 1;
     */
    description: string;
    /**
     * The type of the object. The value MUST be one of "string", "number", "integer", or "boolean". The "array" type is not supported.
     *
     * @generated from field: string type = 2;
     */
    type: string;
    /**
     * `Format` The extending format for the previously mentioned type.
     *
     * @generated from field: string format = 3;
     */
    format: string;
    /**
     * `Default` Declares the value of the header that the server will use if none is provided.
     * See: https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-6.2.
     * Unlike JSON Schema this value MUST conform to the defined type for the header.
     *
     * @generated from field: string default = 6;
     */
    default: string;
    /**
     * 'Pattern' See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.3.
     *
     * @generated from field: string pattern = 13;
     */
    pattern: string;
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.Header.
 * Use `create(HeaderSchema)` to create a new message.
 */
export declare const HeaderSchema: GenMessage<Header>;
/**
 * `Response` is a representation of OpenAPI v2 specification's Response object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#responseObject
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Response
 */
export type Response = Message<"grpc.gateway.protoc_gen_openapiv2.options.Response"> & {
    /**
     * `Description` is a short description of the response.
     * GFM syntax can be used for rich text representation.
     *
     * @generated from field: string description = 1;
     */
    description: string;
    /**
     * `Schema` optionally defines the structure of the response.
     * If `Schema` is not provided, it means there is no content to the response.
     *
     * @generated from field: grpc.gateway.protoc_gen_openapiv2.options.Schema schema = 2;
     */
    schema?: Schema;
    /**
     * `Headers` A list of headers that are sent with the response.
     * `Header` name is expected to be a string in the canonical format of the MIME header key
     * See: https://golang.org/pkg/net/textproto/#CanonicalMIMEHeaderKey
     *
     * @generated from field: map<string, grpc.gateway.protoc_gen_openapiv2.options.Header> headers = 3;
     */
    headers: {
        [key: string]: Header;
    };
    /**
     * `Examples` gives per-mimetype response examples.
     * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#example-object
     *
     * @generated from field: map<string, string> examples = 4;
     */
    examples: {
        [key: string]: string;
    };
    /**
     * Custom properties that start with "x-" such as "x-foo" used to describe
     * extra functionality that is not covered by the standard OpenAPI Specification.
     * See: https://swagger.io/docs/specification/2-0/swagger-extensions/
     *
     * @generated from field: map<string, google.protobuf.Value> extensions = 5;
     */
    extensions: {
        [key: string]: Value;
    };
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.Response.
 * Use `create(ResponseSchema)` to create a new message.
 */
export declare const ResponseSchema: GenMessage<Response>;
/**
 * `Info` is a representation of OpenAPI v2 specification's Info object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#infoObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      title: "Echo API";
 *      version: "1.0";
 *      description: "";
 *      contact: {
 *        name: "gRPC-Gateway project";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *        email: "none@example.com";
 *      };
 *      license: {
 *        name: "BSD 3-Clause License";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway/blob/main/LICENSE";
 *      };
 *    };
 *    ...
 *  };
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Info
 */
export type Info = Message<"grpc.gateway.protoc_gen_openapiv2.options.Info"> & {
    /**
     * The title of the application.
     *
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * A short description of the application. GFM syntax can be used for rich
     * text representation.
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * The Terms of Service for the API.
     *
     * @generated from field: string terms_of_service = 3;
     */
    termsOfService: string;
    /**
     * The contact information for the exposed API.
     *
     * @generated from field: grpc.gateway.protoc_gen_openapiv2.options.Contact contact = 4;
     */
    contact?: Contact;
    /**
     * The license information for the exposed API.
     *
     * @generated from field: grpc.gateway.protoc_gen_openapiv2.options.License license = 5;
     */
    license?: License;
    /**
     * Provides the version of the application API (not to be confused
     * with the specification version).
     *
     * @generated from field: string version = 6;
     */
    version: string;
    /**
     * Custom properties that start with "x-" such as "x-foo" used to describe
     * extra functionality that is not covered by the standard OpenAPI Specification.
     * See: https://swagger.io/docs/specification/2-0/swagger-extensions/
     *
     * @generated from field: map<string, google.protobuf.Value> extensions = 7;
     */
    extensions: {
        [key: string]: Value;
    };
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.Info.
 * Use `create(InfoSchema)` to create a new message.
 */
export declare const InfoSchema: GenMessage<Info>;
/**
 * `Contact` is a representation of OpenAPI v2 specification's Contact object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#contactObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      ...
 *      contact: {
 *        name: "gRPC-Gateway project";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *        email: "none@example.com";
 *      };
 *      ...
 *    };
 *    ...
 *  };
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Contact
 */
export type Contact = Message<"grpc.gateway.protoc_gen_openapiv2.options.Contact"> & {
    /**
     * The identifying name of the contact person/organization.
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * The URL pointing to the contact information. MUST be in the format of a
     * URL.
     *
     * @generated from field: string url = 2;
     */
    url: string;
    /**
     * The email address of the contact person/organization. MUST be in the format
     * of an email address.
     *
     * @generated from field: string email = 3;
     */
    email: string;
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.Contact.
 * Use `create(ContactSchema)` to create a new message.
 */
export declare const ContactSchema: GenMessage<Contact>;
/**
 * `License` is a representation of OpenAPI v2 specification's License object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#licenseObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      ...
 *      license: {
 *        name: "BSD 3-Clause License";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway/blob/main/LICENSE";
 *      };
 *      ...
 *    };
 *    ...
 *  };
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.License
 */
export type License = Message<"grpc.gateway.protoc_gen_openapiv2.options.License"> & {
    /**
     * The license name used for the API.
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * A URL to the license used for the API. MUST be in the format of a URL.
     *
     * @generated from field: string url = 2;
     */
    url: string;
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.License.
 * Use `create(LicenseSchema)` to create a new message.
 */
export declare const LicenseSchema: GenMessage<License>;
/**
 * `ExternalDocumentation` is a representation of OpenAPI v2 specification's
 * ExternalDocumentation object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#externalDocumentationObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    ...
 *    external_docs: {
 *      description: "More about gRPC-Gateway";
 *      url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *    }
 *    ...
 *  };
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation
 */
export type ExternalDocumentation = Message<"grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation"> & {
    /**
     * A short description of the target documentation. GFM syntax can be used for
     * rich text representation.
     *
     * @generated from field: string description = 1;
     */
    description: string;
    /**
     * The URL for the target documentation. Value MUST be in the format
     * of a URL.
     *
     * @generated from field: string url = 2;
     */
    url: string;
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation.
 * Use `create(ExternalDocumentationSchema)` to create a new message.
 */
export declare const ExternalDocumentationSchema: GenMessage<ExternalDocumentation>;
/**
 * `Schema` is a representation of OpenAPI v2 specification's Schema object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#schemaObject
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Schema
 */
export type Schema = Message<"grpc.gateway.protoc_gen_openapiv2.options.Schema"> & {
    /**
     * @generated from field: grpc.gateway.protoc_gen_openapiv2.options.JSONSchema json_schema = 1;
     */
    jsonSchema?: JSONSchema;
    /**
     * Adds support for polymorphism. The discriminator is the schema property
     * name that is used to differentiate between other schema that inherit this
     * schema. The property name used MUST be defined at this schema and it MUST
     * be in the required property list. When used, the value MUST be the name of
     * this schema or any schema that inherits it.
     *
     * @generated from field: string discriminator = 2;
     */
    discriminator: string;
    /**
     * Relevant only for Schema "properties" definitions. Declares the property as
     * "read only". This means that it MAY be sent as part of a response but MUST
     * NOT be sent as part of the request. Properties marked as readOnly being
     * true SHOULD NOT be in the required list of the defined schema. Default
     * value is false.
     *
     * @generated from field: bool read_only = 3;
     */
    readOnly: boolean;
    /**
     * Additional external documentation for this schema.
     *
     * @generated from field: grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs = 5;
     */
    externalDocs?: ExternalDocumentation;
    /**
     * A free-form property to include an example of an instance for this schema in JSON.
     * This is copied verbatim to the output.
     *
     * @generated from field: string example = 6;
     */
    example: string;
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.Schema.
 * Use `create(SchemaSchema)` to create a new message.
 */
export declare const SchemaSchema: GenMessage<Schema>;
/**
 * `EnumSchema` is subset of fields from the OpenAPI v2 specification's Schema object.
 * Only fields that are applicable to Enums are included
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#schemaObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_enum) = {
 *    ...
 *    title: "MyEnum";
 *    description:"This is my nice enum";
 *    example: "ZERO";
 *    required: true;
 *    ...
 *  };
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.EnumSchema
 */
export type EnumSchema = Message<"grpc.gateway.protoc_gen_openapiv2.options.EnumSchema"> & {
    /**
     * A short description of the schema.
     *
     * @generated from field: string description = 1;
     */
    description: string;
    /**
     * @generated from field: string default = 2;
     */
    default: string;
    /**
     * The title of the schema.
     *
     * @generated from field: string title = 3;
     */
    title: string;
    /**
     * @generated from field: bool required = 4;
     */
    required: boolean;
    /**
     * @generated from field: bool read_only = 5;
     */
    readOnly: boolean;
    /**
     * Additional external documentation for this schema.
     *
     * @generated from field: grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs = 6;
     */
    externalDocs?: ExternalDocumentation;
    /**
     * @generated from field: string example = 7;
     */
    example: string;
    /**
     * Ref is used to define an external reference to include in the message.
     * This could be a fully qualified proto message reference, and that type must
     * be imported into the protofile. If no message is identified, the Ref will
     * be used verbatim in the output.
     * For example:
     *  `ref: ".google.protobuf.Timestamp"`.
     *
     * @generated from field: string ref = 8;
     */
    ref: string;
    /**
     * Custom properties that start with "x-" such as "x-foo" used to describe
     * extra functionality that is not covered by the standard OpenAPI Specification.
     * See: https://swagger.io/docs/specification/2-0/swagger-extensions/
     *
     * @generated from field: map<string, google.protobuf.Value> extensions = 9;
     */
    extensions: {
        [key: string]: Value;
    };
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.EnumSchema.
 * Use `create(EnumSchemaSchema)` to create a new message.
 */
export declare const EnumSchemaSchema: GenMessage<EnumSchema>;
/**
 * `JSONSchema` represents properties from JSON Schema taken, and as used, in
 * the OpenAPI v2 spec.
 *
 * This includes changes made by OpenAPI v2.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#schemaObject
 *
 * See also: https://cswr.github.io/JsonSchema/spec/basic_types/,
 * https://github.com/json-schema-org/json-schema-spec/blob/master/schema.json
 *
 * Example:
 *
 *  message SimpleMessage {
 *    option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_schema) = {
 *      json_schema: {
 *        title: "SimpleMessage"
 *        description: "A simple message."
 *        required: ["id"]
 *      }
 *    };
 *
 *    // Id represents the message identifier.
 *    string id = 1; [
 *        (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = {
 *          description: "The unique identifier of the simple message."
 *        }];
 *  }
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.JSONSchema
 */
export type JSONSchema = Message<"grpc.gateway.protoc_gen_openapiv2.options.JSONSchema"> & {
    /**
     * Ref is used to define an external reference to include in the message.
     * This could be a fully qualified proto message reference, and that type must
     * be imported into the protofile. If no message is identified, the Ref will
     * be used verbatim in the output.
     * For example:
     *  `ref: ".google.protobuf.Timestamp"`.
     *
     * @generated from field: string ref = 3;
     */
    ref: string;
    /**
     * The title of the schema.
     *
     * @generated from field: string title = 5;
     */
    title: string;
    /**
     * A short description of the schema.
     *
     * @generated from field: string description = 6;
     */
    description: string;
    /**
     * @generated from field: string default = 7;
     */
    default: string;
    /**
     * @generated from field: bool read_only = 8;
     */
    readOnly: boolean;
    /**
     * A free-form property to include a JSON example of this field. This is copied
     * verbatim to the output swagger.json. Quotes must be escaped.
     * This property is the same for 2.0 and 3.0.0 https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/3.0.0.md#schemaObject  https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#schemaObject
     *
     * @generated from field: string example = 9;
     */
    example: string;
    /**
     * @generated from field: double multiple_of = 10;
     */
    multipleOf: number;
    /**
     * Maximum represents an inclusive upper limit for a numeric instance. The
     * value of MUST be a number,
     *
     * @generated from field: double maximum = 11;
     */
    maximum: number;
    /**
     * @generated from field: bool exclusive_maximum = 12;
     */
    exclusiveMaximum: boolean;
    /**
     * minimum represents an inclusive lower limit for a numeric instance. The
     * value of MUST be a number,
     *
     * @generated from field: double minimum = 13;
     */
    minimum: number;
    /**
     * @generated from field: bool exclusive_minimum = 14;
     */
    exclusiveMinimum: boolean;
    /**
     * @generated from field: uint64 max_length = 15;
     */
    maxLength: bigint;
    /**
     * @generated from field: uint64 min_length = 16;
     */
    minLength: bigint;
    /**
     * @generated from field: string pattern = 17;
     */
    pattern: string;
    /**
     * @generated from field: uint64 max_items = 20;
     */
    maxItems: bigint;
    /**
     * @generated from field: uint64 min_items = 21;
     */
    minItems: bigint;
    /**
     * @generated from field: bool unique_items = 22;
     */
    uniqueItems: boolean;
    /**
     * @generated from field: uint64 max_properties = 24;
     */
    maxProperties: bigint;
    /**
     * @generated from field: uint64 min_properties = 25;
     */
    minProperties: bigint;
    /**
     * @generated from field: repeated string required = 26;
     */
    required: string[];
    /**
     * Items in 'array' must be unique.
     *
     * @generated from field: repeated string array = 34;
     */
    array: string[];
    /**
     * @generated from field: repeated grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.JSONSchemaSimpleTypes type = 35;
     */
    type: JSONSchema_JSONSchemaSimpleTypes[];
    /**
     * `Format`
     *
     * @generated from field: string format = 36;
     */
    format: string;
    /**
     * Items in `enum` must be unique https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.1
     *
     * @generated from field: repeated string enum = 46;
     */
    enum: string[];
    /**
     * Additional field level properties used when generating the OpenAPI v2 file.
     *
     * @generated from field: grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.FieldConfiguration field_configuration = 1001;
     */
    fieldConfiguration?: JSONSchema_FieldConfiguration;
    /**
     * Custom properties that start with "x-" such as "x-foo" used to describe
     * extra functionality that is not covered by the standard OpenAPI Specification.
     * See: https://swagger.io/docs/specification/2-0/swagger-extensions/
     *
     * @generated from field: map<string, google.protobuf.Value> extensions = 48;
     */
    extensions: {
        [key: string]: Value;
    };
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.
 * Use `create(JSONSchemaSchema)` to create a new message.
 */
export declare const JSONSchemaSchema: GenMessage<JSONSchema>;
/**
 * 'FieldConfiguration' provides additional field level properties used when generating the OpenAPI v2 file.
 * These properties are not defined by OpenAPIv2, but they are used to control the generation.
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.FieldConfiguration
 */
export type JSONSchema_FieldConfiguration = Message<"grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.FieldConfiguration"> & {
    /**
     * Alternative parameter name when used as path parameter. If set, this will
     * be used as the complete parameter name when this field is used as a path
     * parameter. Use this to avoid having auto generated path parameter names
     * for overlapping paths.
     *
     * @generated from field: string path_param_name = 47;
     */
    pathParamName: string;
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.FieldConfiguration.
 * Use `create(JSONSchema_FieldConfigurationSchema)` to create a new message.
 */
export declare const JSONSchema_FieldConfigurationSchema: GenMessage<JSONSchema_FieldConfiguration>;
/**
 * @generated from enum grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.JSONSchemaSimpleTypes
 */
export declare enum JSONSchema_JSONSchemaSimpleTypes {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: ARRAY = 1;
     */
    ARRAY = 1,
    /**
     * @generated from enum value: BOOLEAN = 2;
     */
    BOOLEAN = 2,
    /**
     * @generated from enum value: INTEGER = 3;
     */
    INTEGER = 3,
    /**
     * @generated from enum value: NULL = 4;
     */
    NULL = 4,
    /**
     * @generated from enum value: NUMBER = 5;
     */
    NUMBER = 5,
    /**
     * @generated from enum value: OBJECT = 6;
     */
    OBJECT = 6,
    /**
     * @generated from enum value: STRING = 7;
     */
    STRING = 7
}
/**
 * Describes the enum grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.JSONSchemaSimpleTypes.
 */
export declare const JSONSchema_JSONSchemaSimpleTypesSchema: GenEnum<JSONSchema_JSONSchemaSimpleTypes>;
/**
 * `Tag` is a representation of OpenAPI v2 specification's Tag object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#tagObject
 *
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Tag
 */
export type Tag = Message<"grpc.gateway.protoc_gen_openapiv2.options.Tag"> & {
    /**
     * The name of the tag. Use it to allow override of the name of a
     * global Tag object, then use that name to reference the tag throughout the
     * OpenAPI file.
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * A short description for the tag. GFM syntax can be used for rich text
     * representation.
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * Additional external documentation for this tag.
     *
     * @generated from field: grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs = 3;
     */
    externalDocs?: ExternalDocumentation;
    /**
     * Custom properties that start with "x-" such as "x-foo" used to describe
     * extra functionality that is not covered by the standard OpenAPI Specification.
     * See: https://swagger.io/docs/specification/2-0/swagger-extensions/
     *
     * @generated from field: map<string, google.protobuf.Value> extensions = 4;
     */
    extensions: {
        [key: string]: Value;
    };
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.Tag.
 * Use `create(TagSchema)` to create a new message.
 */
export declare const TagSchema: GenMessage<Tag>;
/**
 * `SecurityDefinitions` is a representation of OpenAPI v2 specification's
 * Security Definitions object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#securityDefinitionsObject
 *
 * A declaration of the security schemes available to be used in the
 * specification. This does not enforce the security schemes on the operations
 * and only serves to provide the relevant details for each scheme.
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions
 */
export type SecurityDefinitions = Message<"grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions"> & {
    /**
     * A single security scheme definition, mapping a "name" to the scheme it
     * defines.
     *
     * @generated from field: map<string, grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme> security = 1;
     */
    security: {
        [key: string]: SecurityScheme;
    };
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions.
 * Use `create(SecurityDefinitionsSchema)` to create a new message.
 */
export declare const SecurityDefinitionsSchema: GenMessage<SecurityDefinitions>;
/**
 * `SecurityScheme` is a representation of OpenAPI v2 specification's
 * Security Scheme object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#securitySchemeObject
 *
 * Allows the definition of a security scheme that can be used by the
 * operations. Supported schemes are basic authentication, an API key (either as
 * a header or as a query parameter) and OAuth2's common flows (implicit,
 * password, application and access code).
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme
 */
export type SecurityScheme = Message<"grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme"> & {
    /**
     * The type of the security scheme. Valid values are "basic",
     * "apiKey" or "oauth2".
     *
     * @generated from field: grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Type type = 1;
     */
    type: SecurityScheme_Type;
    /**
     * A short description for security scheme.
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * The name of the header or query parameter to be used.
     * Valid for apiKey.
     *
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * The location of the API key. Valid values are "query" or
     * "header".
     * Valid for apiKey.
     *
     * @generated from field: grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.In in = 4;
     */
    in: SecurityScheme_In;
    /**
     * The flow used by the OAuth2 security scheme. Valid values are
     * "implicit", "password", "application" or "accessCode".
     * Valid for oauth2.
     *
     * @generated from field: grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Flow flow = 5;
     */
    flow: SecurityScheme_Flow;
    /**
     * The authorization URL to be used for this flow. This SHOULD be in
     * the form of a URL.
     * Valid for oauth2/implicit and oauth2/accessCode.
     *
     * @generated from field: string authorization_url = 6;
     */
    authorizationUrl: string;
    /**
     * The token URL to be used for this flow. This SHOULD be in the
     * form of a URL.
     * Valid for oauth2/password, oauth2/application and oauth2/accessCode.
     *
     * @generated from field: string token_url = 7;
     */
    tokenUrl: string;
    /**
     * The available scopes for the OAuth2 security scheme.
     * Valid for oauth2.
     *
     * @generated from field: grpc.gateway.protoc_gen_openapiv2.options.Scopes scopes = 8;
     */
    scopes?: Scopes;
    /**
     * Custom properties that start with "x-" such as "x-foo" used to describe
     * extra functionality that is not covered by the standard OpenAPI Specification.
     * See: https://swagger.io/docs/specification/2-0/swagger-extensions/
     *
     * @generated from field: map<string, google.protobuf.Value> extensions = 9;
     */
    extensions: {
        [key: string]: Value;
    };
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.
 * Use `create(SecuritySchemeSchema)` to create a new message.
 */
export declare const SecuritySchemeSchema: GenMessage<SecurityScheme>;
/**
 * The type of the security scheme. Valid values are "basic",
 * "apiKey" or "oauth2".
 *
 * @generated from enum grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Type
 */
export declare enum SecurityScheme_Type {
    /**
     * @generated from enum value: TYPE_INVALID = 0;
     */
    INVALID = 0,
    /**
     * @generated from enum value: TYPE_BASIC = 1;
     */
    BASIC = 1,
    /**
     * @generated from enum value: TYPE_API_KEY = 2;
     */
    API_KEY = 2,
    /**
     * @generated from enum value: TYPE_OAUTH2 = 3;
     */
    OAUTH2 = 3
}
/**
 * Describes the enum grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Type.
 */
export declare const SecurityScheme_TypeSchema: GenEnum<SecurityScheme_Type>;
/**
 * The location of the API key. Valid values are "query" or "header".
 *
 * @generated from enum grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.In
 */
export declare enum SecurityScheme_In {
    /**
     * @generated from enum value: IN_INVALID = 0;
     */
    INVALID = 0,
    /**
     * @generated from enum value: IN_QUERY = 1;
     */
    QUERY = 1,
    /**
     * @generated from enum value: IN_HEADER = 2;
     */
    HEADER = 2
}
/**
 * Describes the enum grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.In.
 */
export declare const SecurityScheme_InSchema: GenEnum<SecurityScheme_In>;
/**
 * The flow used by the OAuth2 security scheme. Valid values are
 * "implicit", "password", "application" or "accessCode".
 *
 * @generated from enum grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Flow
 */
export declare enum SecurityScheme_Flow {
    /**
     * @generated from enum value: FLOW_INVALID = 0;
     */
    INVALID = 0,
    /**
     * @generated from enum value: FLOW_IMPLICIT = 1;
     */
    IMPLICIT = 1,
    /**
     * @generated from enum value: FLOW_PASSWORD = 2;
     */
    PASSWORD = 2,
    /**
     * @generated from enum value: FLOW_APPLICATION = 3;
     */
    APPLICATION = 3,
    /**
     * @generated from enum value: FLOW_ACCESS_CODE = 4;
     */
    ACCESS_CODE = 4
}
/**
 * Describes the enum grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Flow.
 */
export declare const SecurityScheme_FlowSchema: GenEnum<SecurityScheme_Flow>;
/**
 * `SecurityRequirement` is a representation of OpenAPI v2 specification's
 * Security Requirement object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#securityRequirementObject
 *
 * Lists the required security schemes to execute this operation. The object can
 * have multiple security schemes declared in it which are all required (that
 * is, there is a logical AND between the schemes).
 *
 * The name used for each property MUST correspond to a security scheme
 * declared in the Security Definitions.
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement
 */
export type SecurityRequirement = Message<"grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement"> & {
    /**
     * Each name must correspond to a security scheme which is declared in
     * the Security Definitions. If the security scheme is of type "oauth2",
     * then the value is a list of scope names required for the execution.
     * For other security scheme types, the array MUST be empty.
     *
     * @generated from field: map<string, grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue> security_requirement = 1;
     */
    securityRequirement: {
        [key: string]: SecurityRequirement_SecurityRequirementValue;
    };
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.
 * Use `create(SecurityRequirementSchema)` to create a new message.
 */
export declare const SecurityRequirementSchema: GenMessage<SecurityRequirement>;
/**
 * If the security scheme is of type "oauth2", then the value is a list of
 * scope names required for the execution. For other security scheme types,
 * the array MUST be empty.
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue
 */
export type SecurityRequirement_SecurityRequirementValue = Message<"grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue"> & {
    /**
     * @generated from field: repeated string scope = 1;
     */
    scope: string[];
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue.
 * Use `create(SecurityRequirement_SecurityRequirementValueSchema)` to create a new message.
 */
export declare const SecurityRequirement_SecurityRequirementValueSchema: GenMessage<SecurityRequirement_SecurityRequirementValue>;
/**
 * `Scopes` is a representation of OpenAPI v2 specification's Scopes object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#scopesObject
 *
 * Lists the available scopes for an OAuth2 security scheme.
 *
 * @generated from message grpc.gateway.protoc_gen_openapiv2.options.Scopes
 */
export type Scopes = Message<"grpc.gateway.protoc_gen_openapiv2.options.Scopes"> & {
    /**
     * Maps between a name of a scope to a short description of it (as the value
     * of the property).
     *
     * @generated from field: map<string, string> scope = 1;
     */
    scope: {
        [key: string]: string;
    };
};
/**
 * Describes the message grpc.gateway.protoc_gen_openapiv2.options.Scopes.
 * Use `create(ScopesSchema)` to create a new message.
 */
export declare const ScopesSchema: GenMessage<Scopes>;
/**
 * Scheme describes the schemes supported by the OpenAPI Swagger
 * and Operation objects.
 *
 * @generated from enum grpc.gateway.protoc_gen_openapiv2.options.Scheme
 */
export declare enum Scheme {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: HTTP = 1;
     */
    HTTP = 1,
    /**
     * @generated from enum value: HTTPS = 2;
     */
    HTTPS = 2,
    /**
     * @generated from enum value: WS = 3;
     */
    WS = 3,
    /**
     * @generated from enum value: WSS = 4;
     */
    WSS = 4
}
/**
 * Describes the enum grpc.gateway.protoc_gen_openapiv2.options.Scheme.
 */
export declare const SchemeSchema: GenEnum<Scheme>;
