// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file aserto/directory/schema/v2/group.proto (package aserto.directory.schema.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Properties of "group" objects.
 *
 * @generated from message aserto.directory.schema.v2.GroupProperties
 */
export class GroupProperties extends Message<GroupProperties> {
  /**
   * ID of the IDP connection the group is associated with.
   *
   * @generated from field: string connection_id = 1;
   */
  connectionId = "";

  constructor(data?: PartialMessage<GroupProperties>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "aserto.directory.schema.v2.GroupProperties";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GroupProperties {
    return new GroupProperties().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GroupProperties {
    return new GroupProperties().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GroupProperties {
    return new GroupProperties().fromJsonString(jsonString, options);
  }

  static equals(a: GroupProperties | PlainMessage<GroupProperties> | undefined, b: GroupProperties | PlainMessage<GroupProperties> | undefined): boolean {
    return proto3.util.equals(GroupProperties, a, b);
  }
}

