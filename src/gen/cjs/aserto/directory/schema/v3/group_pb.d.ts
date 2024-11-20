import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/schema/v3/group.proto.
 */
export declare const file_aserto_directory_schema_v3_group: GenFile;
/**
 * Properties of "group" objects.
 *
 * @generated from message aserto.directory.schema.v3.GroupProperties
 */
export type GroupProperties = Message<"aserto.directory.schema.v3.GroupProperties"> & {
    /**
     * ID of the IDP connection the group instance is associated with.
     *
     * @generated from field: string connection_id = 1;
     */
    connectionId: string;
};
/**
 * Describes the message aserto.directory.schema.v3.GroupProperties.
 * Use `create(GroupPropertiesSchema)` to create a new message.
 */
export declare const GroupPropertiesSchema: GenMessage<GroupProperties>;
