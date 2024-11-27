import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/schema/v2/group.proto.
 */
export declare const file_aserto_directory_schema_v2_group: GenFile;
/**
 * Properties of "group" objects.
 *
 * @generated from message aserto.directory.schema.v2.GroupProperties
 * @deprecated
 */
export type GroupProperties = Message<"aserto.directory.schema.v2.GroupProperties"> & {
    /**
     * ID of the IDP connection the group instance is associated with.
     *
     * @generated from field: string connection_id = 1;
     */
    connectionId: string;
};
/**
 * Describes the message aserto.directory.schema.v2.GroupProperties.
 * Use `create(GroupPropertiesSchema)` to create a new message.
 * @deprecated
 */
export declare const GroupPropertiesSchema: GenMessage<GroupProperties>;
