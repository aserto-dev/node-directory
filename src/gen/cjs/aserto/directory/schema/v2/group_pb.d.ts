import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Properties of "group" objects.
 *
 * @generated from message aserto.directory.schema.v2.GroupProperties
 */
export declare class GroupProperties extends Message<GroupProperties> {
    /**
     * ID of the IDP connection the group instance is associated with.
     *
     * @generated from field: string connection_id = 1;
     */
    connectionId: string;
    constructor(data?: PartialMessage<GroupProperties>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.schema.v2.GroupProperties";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GroupProperties;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GroupProperties;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GroupProperties;
    static equals(a: GroupProperties | PlainMessage<GroupProperties> | undefined, b: GroupProperties | PlainMessage<GroupProperties> | undefined): boolean;
}
