// @generated by protoc-gen-es v2.2.3 with parameter "target=ts+js"
// @generated from file aserto/directory/reader/v3/reader.proto (package aserto.directory.reader.v3, syntax proto3)
/* eslint-disable */

import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../../protoc-gen-openapiv2/options/annotations_pb";
import { file_google_api_annotations } from "../../../../google/api/annotations_pb";
import { file_google_api_field_behavior } from "../../../../google/api/field_behavior_pb";
import { file_google_protobuf_struct } from "@bufbuild/protobuf/wkt";
import { file_buf_validate_validate } from "../../../../buf/validate/validate_pb";
import { file_aserto_directory_common_v3_common } from "../../common/v3/common_pb";

/**
 * Describes the file aserto/directory/reader/v3/reader.proto.
 */
export const file_aserto_directory_reader_v3_reader = /*@__PURE__*/
  fileDesc("Cidhc2VydG8vZGlyZWN0b3J5L3JlYWRlci92My9yZWFkZXIucHJvdG8SGmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzIoYEChBHZXRPYmplY3RSZXF1ZXN0EoQCCgtvYmplY3RfdHlwZRgBIAEoCULuAeBBArpI5wG6AdwBChZnZXRfb2JqZWN0Lm9iamVjdF90eXBlEoQBbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBtaXhlZCBjYXNlIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0Gjt0aGlzLm1hdGNoZXMoJ15bYS16QS1aXVthLXpBLVowLTlcXC5fLV17MSw2Mn1bYS16QS1aMC05XSQnKcgBAXICGEASiwEKCW9iamVjdF9pZBgCIAEoCUJ4ukh1ugFqChRnZXRfb2JqZWN0Lm9iamVjdF9pZBI4Y2Fubm90IGNvbnRhaW4gYW55IHNwYWNlcyBvciBvdGhlciB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMaGHRoaXMubWF0Y2hlcygnXltcXFNdKyQnKcgBAXIDGIACEhsKDndpdGhfcmVsYXRpb25zGAMgASgIQgPgQQESQAoEcGFnZRgJIAEoCzItLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlBhZ2luYXRpb25SZXF1ZXN0QgPgQQEivgEKEUdldE9iamVjdFJlc3BvbnNlEjIKBnJlc3VsdBgBIAEoCzIiLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLk9iamVjdBI3CglyZWxhdGlvbnMYBCADKAsyJC5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5SZWxhdGlvbhI8CgRwYWdlGAkgASgLMi4uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuUGFnaW5hdGlvblJlc3BvbnNlIlgKFEdldE9iamVjdE1hbnlSZXF1ZXN0EkAKBXBhcmFtGAEgAygLMiwuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuT2JqZWN0SWRlbnRpZmllckID4EECIkwKFUdldE9iamVjdE1hbnlSZXNwb25zZRIzCgdyZXN1bHRzGAEgAygLMiIuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuT2JqZWN0It0CChFHZXRPYmplY3RzUmVxdWVzdBKFAgoLb2JqZWN0X3R5cGUYASABKAlC7wHgQQG6SOgBugHdAQoXZ2V0X29iamVjdHMub2JqZWN0X3R5cGUShAFtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIG1peGVkIGNhc2UgbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaO3RoaXMubWF0Y2hlcygnXlthLXpBLVpdW2EtekEtWjAtOVxcLl8tXXsxLDYyfVthLXpBLVowLTldJCcp0AEBcgIYQBJACgRwYWdlGAkgASgLMi0uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuUGFnaW5hdGlvblJlcXVlc3RCA+BBASKHAQoSR2V0T2JqZWN0c1Jlc3BvbnNlEjMKB3Jlc3VsdHMYASADKAsyIi5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5PYmplY3QSPAoEcGFnZRgJIAEoCzIuLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlBhZ2luYXRpb25SZXNwb25zZSKvDwoSR2V0UmVsYXRpb25SZXF1ZXN0EoYCCgtvYmplY3RfdHlwZRgBIAEoCULwAeBBArpI6QG6Ad4BChhnZXRfcmVsYXRpb24ub2JqZWN0X3R5cGUShAFtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIG1peGVkIGNhc2UgbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaO3RoaXMubWF0Y2hlcygnXlthLXpBLVpdW2EtekEtWjAtOVxcLl8tXXsxLDYyfVthLXpBLVowLTldJCcp0AEBcgIYQBKQAQoJb2JqZWN0X2lkGAIgASgJQn3gQQK6SHe6AWwKFmdldF9yZWxhdGlvbi5vYmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynQAQFyAxiAAhKAAgoIcmVsYXRpb24YAyABKAlC7QHgQQK6SOYBugHbAQoVZ2V0X3JlbGF0aW9uLnJlbGF0aW9uEoQBbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBtaXhlZCBjYXNlIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0Gjt0aGlzLm1hdGNoZXMoJ15bYS16QS1aXVthLXpBLVowLTlcXC5fLV17MSw2Mn1bYS16QS1aMC05XSQnKdABAXICGEASiAIKDHN1YmplY3RfdHlwZRgEIAEoCULxAeBBArpI6gG6Ad8BChlnZXRfcmVsYXRpb24uc3ViamVjdF90eXBlEoQBbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBtaXhlZCBjYXNlIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0Gjt0aGlzLm1hdGNoZXMoJ15bYS16QS1aXVthLXpBLVowLTlcXC5fLV17MSw2Mn1bYS16QS1aMC05XSQnKdABAXICGEASkgEKCnN1YmplY3RfaWQYBSABKAlCfuBBArpIeLoBbQoXZ2V0X3JlbGF0aW9uLnN1YmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynQAQFyAxiAAhKQAgoQc3ViamVjdF9yZWxhdGlvbhgGIAEoCUL1AeBBAbpI7gG6AeMBCh1nZXRfcmVsYXRpb24uc3ViamVjdF9yZWxhdGlvbhKEAW11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbWl4ZWQgY2FzZSBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBo7dGhpcy5tYXRjaGVzKCdeW2EtekEtWl1bYS16QS1aMC05XFwuXy1dezEsNjJ9W2EtekEtWjAtOV0kJynQAQFyAhhAEhkKDHdpdGhfb2JqZWN0cxgHIAEoCEID4EEBOqsEukinBBqMAgogZ2V0X3JlbGF0aW9uLm9iamVjdF9pZF93aXRoX3R5cGUSTXdoZW4gYW4gb2JqZWN0X2lkIGlzIHNwZWNpZmllZCwgdGhlIGFjY29tcGFueWluZyBvYmplY3RfdHlwZSBtdXN0IGJlIHByb3ZpZGVkGpgBKHRoaXMub2JqZWN0X3R5cGUgPT0gJycgJiYgdGhpcy5vYmplY3RfaWQgPT0gJycpIHx8ICh0aGlzLm9iamVjdF90eXBlICE9ICcnICYmIHRoaXMub2JqZWN0X2lkID09ICcnKSB8fCAodGhpcy5vYmplY3RfdHlwZSAhPSAnJyAmJiB0aGlzLm9iamVjdF9pZCAhPSAnJykalQIKIWdldF9yZWxhdGlvbi5zdWJqZWN0X2lkX3dpdGhfdHlwZRJPd2hlbiBhbiBzdWJqZWN0X2lkIGlzIHNwZWNpZmllZCwgdGhlIGFjY29tcGFueWluZyBzdWJqZWN0X3R5cGUgbXVzdCBiZSBwcm92aWRlZBqeASh0aGlzLnN1YmplY3RfdHlwZSA9PSAnJyAmJiB0aGlzLnN1YmplY3RfaWQgPT0gJycpIHx8ICh0aGlzLnN1YmplY3RfdHlwZSAhPSAnJyAmJiB0aGlzLnN1YmplY3RfaWQgPT0gJycpIHx8ICh0aGlzLnN1YmplY3RfdHlwZSAhPSAnJyAmJiB0aGlzLnN1YmplY3RfaWQgIT0gJycpIu4BChNHZXRSZWxhdGlvblJlc3BvbnNlEjQKBnJlc3VsdBgBIAEoCzIkLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlJlbGF0aW9uEk0KB29iamVjdHMYAiADKAsyPC5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRSZWxhdGlvblJlc3BvbnNlLk9iamVjdHNFbnRyeRpSCgxPYmplY3RzRW50cnkSCwoDa2V5GAEgASgJEjEKBXZhbHVlGAIgASgLMiIuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuT2JqZWN0OgI4ASKkEAoTR2V0UmVsYXRpb25zUmVxdWVzdBKHAgoLb2JqZWN0X3R5cGUYASABKAlC8QHgQQG6SOoBugHfAQoZZ2V0X3JlbGF0aW9ucy5vYmplY3RfdHlwZRKEAW11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbWl4ZWQgY2FzZSBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBo7dGhpcy5tYXRjaGVzKCdeW2EtekEtWl1bYS16QS1aMC05XFwuXy1dezEsNjJ9W2EtekEtWjAtOV0kJynQAQFyAhhAEpEBCglvYmplY3RfaWQYAiABKAlCfuBBAbpIeLoBbQoXZ2V0X3JlbGF0aW9ucy5vYmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynQAQFyAxiAAhKBAgoIcmVsYXRpb24YAyABKAlC7gHgQQG6SOcBugHcAQoWZ2V0X3JlbGF0aW9ucy5yZWxhdGlvbhKEAW11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbWl4ZWQgY2FzZSBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBo7dGhpcy5tYXRjaGVzKCdeW2EtekEtWl1bYS16QS1aMC05XFwuXy1dezEsNjJ9W2EtekEtWjAtOV0kJynQAQFyAhhAEokCCgxzdWJqZWN0X3R5cGUYBCABKAlC8gHgQQG6SOsBugHgAQoaZ2V0X3JlbGF0aW9ucy5zdWJqZWN0X3R5cGUShAFtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIG1peGVkIGNhc2UgbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaO3RoaXMubWF0Y2hlcygnXlthLXpBLVpdW2EtekEtWjAtOVxcLl8tXXsxLDYyfVthLXpBLVowLTldJCcp0AEBcgIYQBKTAQoKc3ViamVjdF9pZBgFIAEoCUJ/4EEBukh5ugFuChhnZXRfcmVsYXRpb25zLnN1YmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynQAQFyAxiAAhKRAgoQc3ViamVjdF9yZWxhdGlvbhgGIAEoCUL2AeBBAbpI7wG6AeQBCh5nZXRfcmVsYXRpb25zLnN1YmplY3RfcmVsYXRpb24ShAFtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIG1peGVkIGNhc2UgbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaO3RoaXMubWF0Y2hlcygnXlthLXpBLVpdW2EtekEtWjAtOVxcLl8tXXsxLDYyfVthLXpBLVowLTldJCcp0AEBcgIYQBIZCgx3aXRoX29iamVjdHMYByABKAhCA+BBARIoCht3aXRoX2VtcHR5X3N1YmplY3RfcmVsYXRpb24YCCABKAhCA+BBARJACgRwYWdlGAkgASgLMi0uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuUGFnaW5hdGlvblJlcXVlc3RCA+BBATqtBLpIqQQajQIKIWdldF9yZWxhdGlvbnMub2JqZWN0X2lkX3dpdGhfdHlwZRJNd2hlbiBhbiBvYmplY3RfaWQgaXMgc3BlY2lmaWVkLCB0aGUgYWNjb21wYW55aW5nIG9iamVjdF90eXBlIG11c3QgYmUgcHJvdmlkZWQamAEodGhpcy5vYmplY3RfdHlwZSA9PSAnJyAmJiB0aGlzLm9iamVjdF9pZCA9PSAnJykgfHwgKHRoaXMub2JqZWN0X3R5cGUgIT0gJycgJiYgdGhpcy5vYmplY3RfaWQgPT0gJycpIHx8ICh0aGlzLm9iamVjdF90eXBlICE9ICcnICYmIHRoaXMub2JqZWN0X2lkICE9ICcnKRqWAgoiZ2V0X3JlbGF0aW9ucy5zdWJqZWN0X2lkX3dpdGhfdHlwZRJPd2hlbiBhbiBzdWJqZWN0X2lkIGlzIHNwZWNpZmllZCwgdGhlIGFjY29tcGFueWluZyBzdWJqZWN0X3R5cGUgbXVzdCBiZSBwcm92aWRlZBqeASh0aGlzLnN1YmplY3RfdHlwZSA9PSAnJyAmJiB0aGlzLnN1YmplY3RfaWQgPT0gJycpIHx8ICh0aGlzLnN1YmplY3RfdHlwZSAhPSAnJyAmJiB0aGlzLnN1YmplY3RfaWQgPT0gJycpIHx8ICh0aGlzLnN1YmplY3RfdHlwZSAhPSAnJyAmJiB0aGlzLnN1YmplY3RfaWQgIT0gJycpIq8CChRHZXRSZWxhdGlvbnNSZXNwb25zZRI1CgdyZXN1bHRzGAEgAygLMiQuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuUmVsYXRpb24STgoHb2JqZWN0cxgCIAMoCzI9LmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkdldFJlbGF0aW9uc1Jlc3BvbnNlLk9iamVjdHNFbnRyeRI8CgRwYWdlGAkgASgLMi4uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuUGFnaW5hdGlvblJlc3BvbnNlGlIKDE9iamVjdHNFbnRyeRILCgNrZXkYASABKAkSMQoFdmFsdWUYAiABKAsyIi5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5PYmplY3Q6AjgBIswHCgxDaGVja1JlcXVlc3QS/wEKC29iamVjdF90eXBlGAEgASgJQukB4EECukjiAboB1wEKEWNoZWNrLm9iamVjdF90eXBlEoQBbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBtaXhlZCBjYXNlIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0Gjt0aGlzLm1hdGNoZXMoJ15bYS16QS1aXVthLXpBLVowLTlcXC5fLV17MSw2Mn1bYS16QS1aMC05XSQnKcgBAXICGEASiQEKCW9iamVjdF9pZBgCIAEoCUJ24EECukhwugFlCg9jaGVjay5vYmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynIAQFyAxiAAhKHAQoIcmVsYXRpb24YAyABKAlCdeBBArpIb7oBZAoOY2hlY2sucmVsYXRpb24SOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynIAQFyAxiAAhKBAgoMc3ViamVjdF90eXBlGAQgASgJQuoB4EECukjjAboB2AEKEmNoZWNrLnN1YmplY3RfdHlwZRKEAW11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbWl4ZWQgY2FzZSBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBo7dGhpcy5tYXRjaGVzKCdeW2EtekEtWl1bYS16QS1aMC05XFwuXy1dezEsNjJ9W2EtekEtWjAtOV0kJynIAQFyAhhAEosBCgpzdWJqZWN0X2lkGAUgASgJQnfgQQK6SHG6AWYKEGNoZWNrLnN1YmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynIAQFyAxiAAhISCgV0cmFjZRgHIAEoCEID4EEBIlcKDUNoZWNrUmVzcG9uc2USDQoFY2hlY2sYASABKAgSDQoFdHJhY2UYAiADKAkSKAoHY29udGV4dBgDIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QihAEKDUNoZWNrc1JlcXVlc3QSOQoHZGVmYXVsdBgBIAEoCzIoLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkNoZWNrUmVxdWVzdBI4CgZjaGVja3MYAiADKAsyKC5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5DaGVja1JlcXVlc3QiSwoOQ2hlY2tzUmVzcG9uc2USOQoGY2hlY2tzGAEgAygLMikuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjMuQ2hlY2tSZXNwb25zZSKUCAoWQ2hlY2tQZXJtaXNzaW9uUmVxdWVzdBKKAgoLb2JqZWN0X3R5cGUYASABKAlC9AHgQQK6SO0BugHiAQocY2hlY2tfcGVybWlzc2lvbi5vYmplY3RfdHlwZRKEAW11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbWl4ZWQgY2FzZSBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBo7dGhpcy5tYXRjaGVzKCdeW2EtekEtWl1bYS16QS1aMC05XFwuXy1dezEsNjJ9W2EtekEtWjAtOV0kJynIAQFyAhhAEpUBCglvYmplY3RfaWQYAiABKAlCgQHgQQK6SHu6AXAKGmNoZWNrX3Blcm1pc3Npb24ub2JqZWN0X2lkEjhjYW5ub3QgY29udGFpbiBhbnkgc3BhY2VzIG9yIG90aGVyIHdoaXRlc3BhY2UgY2hhcmFjdGVycxoYdGhpcy5tYXRjaGVzKCdeW1xcU10rJCcpyAEBcgMYgAISlwEKCnBlcm1pc3Npb24YAyABKAlCggHgQQK6SHy6AXEKG2NoZWNrX3Blcm1pc3Npb24ucGVybWlzc2lvbhI4Y2Fubm90IGNvbnRhaW4gYW55IHNwYWNlcyBvciBvdGhlciB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMaGHRoaXMubWF0Y2hlcygnXltcXFNdKyQnKcgBAXIDGIACEowCCgxzdWJqZWN0X3R5cGUYBCABKAlC9QHgQQK6SO4BugHjAQodY2hlY2tfcGVybWlzc2lvbi5zdWJqZWN0X3R5cGUShAFtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIG1peGVkIGNhc2UgbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaO3RoaXMubWF0Y2hlcygnXlthLXpBLVpdW2EtekEtWjAtOVxcLl8tXXsxLDYyfVthLXpBLVowLTldJCcpyAEBcgIYQBKXAQoKc3ViamVjdF9pZBgFIAEoCUKCAeBBArpIfLoBcQobY2hlY2tfcGVybWlzc2lvbi5zdWJqZWN0X2lkEjhjYW5ub3QgY29udGFpbiBhbnkgc3BhY2VzIG9yIG90aGVyIHdoaXRlc3BhY2UgY2hhcmFjdGVycxoYdGhpcy5tYXRjaGVzKCdeW1xcU10rJCcpyAEBcgMYgAISEgoFdHJhY2UYByABKAhCA+BBASI3ChdDaGVja1Blcm1pc3Npb25SZXNwb25zZRINCgVjaGVjaxgBIAEoCBINCgV0cmFjZRgCIAMoCSL0CAoUQ2hlY2tSZWxhdGlvblJlcXVlc3QSiAIKC29iamVjdF90eXBlGAEgASgJQvIB4EECukjrAboB4AEKGmNoZWNrX3JlbGF0aW9uLm9iamVjdF90eXBlEoQBbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBtaXhlZCBjYXNlIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0Gjt0aGlzLm1hdGNoZXMoJ15bYS16QS1aXVthLXpBLVowLTlcXC5fLV17MSw2Mn1bYS16QS1aMC05XSQnKcgBAXICGEASkgEKCW9iamVjdF9pZBgCIAEoCUJ/4EECukh5ugFuChhjaGVja19yZWxhdGlvbi5vYmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynIAQFyAxiAAhKCAgoIcmVsYXRpb24YAyABKAlC7wHgQQK6SOgBugHdAQoXY2hlY2tfcmVsYXRpb24ucmVsYXRpb24ShAFtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIG1peGVkIGNhc2UgbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaO3RoaXMubWF0Y2hlcygnXlthLXpBLVpdW2EtekEtWjAtOVxcLl8tXXsxLDYyfVthLXpBLVowLTldJCcpyAEBcgIYQBKKAgoMc3ViamVjdF90eXBlGAQgASgJQvMB4EECukjsAboB4QEKG2NoZWNrX3JlbGF0aW9uLnN1YmplY3RfdHlwZRKEAW11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbWl4ZWQgY2FzZSBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBo7dGhpcy5tYXRjaGVzKCdeW2EtekEtWl1bYS16QS1aMC05XFwuXy1dezEsNjJ9W2EtekEtWjAtOV0kJynIAQFyAhhAEpUBCgpzdWJqZWN0X2lkGAUgASgJQoAB4EECukh6ugFvChljaGVja19yZWxhdGlvbi5zdWJqZWN0X2lkEjhjYW5ub3QgY29udGFpbiBhbnkgc3BhY2VzIG9yIG90aGVyIHdoaXRlc3BhY2UgY2hhcmFjdGVycxoYdGhpcy5tYXRjaGVzKCdeW1xcU10rJCcpyAEBcgMYgAISEgoFdHJhY2UYByABKAhCA+BBASI1ChVDaGVja1JlbGF0aW9uUmVzcG9uc2USDQoFY2hlY2sYASABKAgSDQoFdHJhY2UYAiADKAkinwsKD0dldEdyYXBoUmVxdWVzdBKDAgoLb2JqZWN0X3R5cGUYAyABKAlC7QHgQQK6SOYBugHbAQoVZ2V0X2dyYXBoLm9iamVjdF90eXBlEoQBbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBtaXhlZCBjYXNlIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0Gjt0aGlzLm1hdGNoZXMoJ15bYS16QS1aXVthLXpBLVowLTlcXC5fLV17MSw2Mn1bYS16QS1aMC05XSQnKdABAXICGEASjQEKCW9iamVjdF9pZBgEIAEoCUJ64EEBukh0ugFpChNnZXRfZ3JhcGgub2JqZWN0X2lkEjhjYW5ub3QgY29udGFpbiBhbnkgc3BhY2VzIG9yIG90aGVyIHdoaXRlc3BhY2UgY2hhcmFjdGVycxoYdGhpcy5tYXRjaGVzKCdeW1xcU10rJCcp0AEBcgMYgAIS/QEKCHJlbGF0aW9uGAUgASgJQuoB4EECukjjAboB2AEKEmdldF9ncmFwaC5yZWxhdGlvbhKEAW11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbWl4ZWQgY2FzZSBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBo7dGhpcy5tYXRjaGVzKCdeW2EtekEtWl1bYS16QS1aMC05XFwuXy1dezEsNjJ9W2EtekEtWjAtOV0kJynQAQFyAhhAEoUCCgxzdWJqZWN0X3R5cGUYBiABKAlC7gHgQQK6SOcBugHcAQoWZ2V0X2dyYXBoLnN1YmplY3RfdHlwZRKEAW11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbWl4ZWQgY2FzZSBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBo7dGhpcy5tYXRjaGVzKCdeW2EtekEtWl1bYS16QS1aMC05XFwuXy1dezEsNjJ9W2EtekEtWjAtOV0kJynQAQFyAhhAEo8BCgpzdWJqZWN0X2lkGAcgASgJQnvgQQG6SHW6AWoKFGdldF9ncmFwaC5zdWJqZWN0X2lkEjhjYW5ub3QgY29udGFpbiBhbnkgc3BhY2VzIG9yIG90aGVyIHdoaXRlc3BhY2UgY2hhcmFjdGVycxoYdGhpcy5tYXRjaGVzKCdeW1xcU10rJCcp0AEBcgMYgAISjQIKEHN1YmplY3RfcmVsYXRpb24YCCABKAlC8gHgQQG6SOsBugHgAQoaZ2V0X2dyYXBoLnN1YmplY3RfcmVsYXRpb24ShAFtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIG1peGVkIGNhc2UgbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaO3RoaXMubWF0Y2hlcygnXlthLXpBLVpdW2EtekEtWjAtOVxcLl8tXXsxLDYyfVthLXpBLVowLTldJCcp0AEBcgIYQBIUCgdleHBsYWluGAkgASgIQgPgQQESEgoFdHJhY2UYCiABKAhCA+BBAUoECAEQAkoECAIQA1ILYW5jaG9yX3R5cGVSCWFuY2hvcl9pZCKUAQoQR2V0R3JhcGhSZXNwb25zZRI9CgdyZXN1bHRzGAIgAygLMiwuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuT2JqZWN0SWRlbnRpZmllchIsCgtleHBsYW5hdGlvbhgDIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QSDQoFdHJhY2UYBCADKAlKBAgBEAIyxRYKBlJlYWRlchLpAgoJR2V0T2JqZWN0EiwuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjMuR2V0T2JqZWN0UmVxdWVzdBotLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkdldE9iamVjdFJlc3BvbnNlIv4BkkHAAQoJZGlyZWN0b3J5EhNHZXQgb2JqZWN0IGluc3RhbmNlGjpSZXR1cm5zIHNpbmdsZSBvYmplY3QgaW5zdGFuY2UsIG9wdGlvbmFsbHkgd2l0aCByZWxhdGlvbnMuKh5kaXJlY3RvcnkucmVhZGVyLnYzLm9iamVjdC5nZXRKHQoDMzA0EhYKFE9iamVjdCBub3QgbW9kaWZpZWQuYiMKEwoPRGlyZWN0b3J5QVBJS2V5EgAKDAoIVGVuYW50SUQSAILT5JMCNBIyL2FwaS92My9kaXJlY3Rvcnkvb2JqZWN0L3tvYmplY3RfdHlwZX0ve29iamVjdF9pZH0SdgoNR2V0T2JqZWN0TWFueRIwLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkdldE9iamVjdE1hbnlSZXF1ZXN0GjEuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjMuR2V0T2JqZWN0TWFueVJlc3BvbnNlIgASnwIKCkdldE9iamVjdHMSLS5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRPYmplY3RzUmVxdWVzdBouLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkdldE9iamVjdHNSZXNwb25zZSKxAZJBjAEKCWRpcmVjdG9yeRIVTGlzdCBvYmplY3QgaW5zdGFuY2VzGiFSZXR1cm5zIGxpc3Qgb2Ygb2JqZWN0IGluc3RhbmNlcy4qIGRpcmVjdG9yeS5yZWFkZXIudjMub2JqZWN0cy5saXN0YiMKEwoPRGlyZWN0b3J5QVBJS2V5EgAKDAoIVGVuYW50SUQSAILT5JMCGxIZL2FwaS92My9kaXJlY3Rvcnkvb2JqZWN0cxLdAgoLR2V0UmVsYXRpb24SLi5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRSZWxhdGlvblJlcXVlc3QaLy5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRSZWxhdGlvblJlc3BvbnNlIuwBkkHGAQoJZGlyZWN0b3J5EhVHZXQgcmVsYXRpb24gaW5zdGFuY2UaOlJldHVybnMgc2luZ2xlIHJlbGF0aW9uIGluc3RhbmNlLCBvcHRpb25hbGx5IHdpdGggb2JqZWN0cy4qIGRpcmVjdG9yeS5yZWFkZXIudjMucmVsYXRpb24uZ2V0Sh8KAzMwNBIYChZSZWxhdGlvbiBub3QgbW9kaWZpZWQuYiMKEwoPRGlyZWN0b3J5QVBJS2V5EgAKDAoIVGVuYW50SUQSAILT5JMCHBIaL2FwaS92My9kaXJlY3RvcnkvcmVsYXRpb24SrgIKDEdldFJlbGF0aW9ucxIvLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkdldFJlbGF0aW9uc1JlcXVlc3QaMC5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRSZWxhdGlvbnNSZXNwb25zZSK6AZJBkwEKCWRpcmVjdG9yeRIYTGlzdCByZWxhdGlvbnMgaW5zdGFuY2VzGiNSZXR1cm5zIGxpc3Qgb2YgcmVsYXRpb24gaW5zdGFuY2VzLioiZGlyZWN0b3J5LnJlYWRlci52My5yZWxhdGlvbnMubGlzdGIjChMKD0RpcmVjdG9yeUFQSUtleRIACgwKCFRlbmFudElEEgCC0+STAh0SGy9hcGkvdjMvZGlyZWN0b3J5L3JlbGF0aW9ucxLuAQoFQ2hlY2sSKC5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5DaGVja1JlcXVlc3QaKS5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5DaGVja1Jlc3BvbnNlIo8BkkFqCglkaXJlY3RvcnkSBUNoZWNrGhZSZXR1cm5zIGNoZWNrIG91dGNvbWUuKhlkaXJlY3RvcnkucmVhZGVyLnYzLmNoZWNrYiMKEwoPRGlyZWN0b3J5QVBJS2V5EgAKDAoIVGVuYW50SUQSAILT5JMCHDoBKiIXL2FwaS92My9kaXJlY3RvcnkvY2hlY2sS/gEKBkNoZWNrcxIpLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkNoZWNrc1JlcXVlc3QaKi5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5DaGVja3NSZXNwb25zZSKcAZJBdgoJZGlyZWN0b3J5EgZDaGVja3MaIFJldHVybnMgbXVsdGlwbGUgY2hlY2sgb3V0Y29tZXMuKhpkaXJlY3RvcnkucmVhZGVyLnYzLmNoZWNrc2IjChMKD0RpcmVjdG9yeUFQSUtleRIACgwKCFRlbmFudElEEgCC0+STAh06ASoiGC9hcGkvdjMvZGlyZWN0b3J5L2NoZWNrcxK8AgoPQ2hlY2tQZXJtaXNzaW9uEjIuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjMuQ2hlY2tQZXJtaXNzaW9uUmVxdWVzdBozLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkNoZWNrUGVybWlzc2lvblJlc3BvbnNlIr8BiAIBkkGLAQoJZGlyZWN0b3J5EhBDaGVjayBwZXJtaXNzaW9uGiFSZXR1cm5zIGNoZWNrIHBlcm1pc3Npb24gb3V0Y29tZS4qJGRpcmVjdG9yeS5yZWFkZXIudjMuY2hlY2sucGVybWlzc2lvbmIjChMKD0RpcmVjdG9yeUFQSUtleRIACgwKCFRlbmFudElEEgCC0+STAic6ASoiIi9hcGkvdjMvZGlyZWN0b3J5L2NoZWNrL3Blcm1pc3Npb24SrgIKDUNoZWNrUmVsYXRpb24SMC5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5DaGVja1JlbGF0aW9uUmVxdWVzdBoxLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkNoZWNrUmVsYXRpb25SZXNwb25zZSK3AYgCAZJBhQEKCWRpcmVjdG9yeRIOQ2hlY2sgcmVsYXRpb24aH1JldHVybnMgY2hlY2sgcmVsYXRpb24gb3V0Y29tZS4qImRpcmVjdG9yeS5yZWFkZXIudjMuY2hlY2sucmVsYXRpb25iIwoTCg9EaXJlY3RvcnlBUElLZXkSAAoMCghUZW5hbnRJRBIAgtPkkwIlOgEqIiAvYXBpL3YzL2RpcmVjdG9yeS9jaGVjay9yZWxhdGlvbhLBAgoIR2V0R3JhcGgSKy5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRHcmFwaFJlcXVlc3QaLC5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRHcmFwaFJlc3BvbnNlItkBkkGOAQoJZGlyZWN0b3J5EglHZXQgZ3JhcGgaNlJldHVybnMgb2JqZWN0IGdyYXBoIGZyb20gYW5jaG9yIHRvIHN1YmplY3Qgb3Igb2JqZWN0LioZZGlyZWN0b3J5LnJlYWRlci52My5ncmFwaGIjChMKD0RpcmVjdG9yeUFQSUtleRIACgwKCFRlbmFudElEEgCC0+STAkESPy9hcGkvdjMvZGlyZWN0b3J5L2dyYXBoL3tvYmplY3RfdHlwZX0ve3JlbGF0aW9ufS97c3ViamVjdF90eXBlfUJGWkRnaXRodWIuY29tL2FzZXJ0by1kZXYvZ28tZGlyZWN0b3J5L2FzZXJ0by9kaXJlY3RvcnkvcmVhZGVyL3YzO3JlYWRlcmIGcHJvdG8z", [file_protoc_gen_openapiv2_options_annotations, file_google_api_annotations, file_google_api_field_behavior, file_google_protobuf_struct, file_buf_validate_validate, file_aserto_directory_common_v3_common]);

/**
 * Describes the message aserto.directory.reader.v3.GetObjectRequest.
 * Use `create(GetObjectRequestSchema)` to create a new message.
 */
export const GetObjectRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 0);

/**
 * Describes the message aserto.directory.reader.v3.GetObjectResponse.
 * Use `create(GetObjectResponseSchema)` to create a new message.
 */
export const GetObjectResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 1);

/**
 * Describes the message aserto.directory.reader.v3.GetObjectManyRequest.
 * Use `create(GetObjectManyRequestSchema)` to create a new message.
 */
export const GetObjectManyRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 2);

/**
 * Describes the message aserto.directory.reader.v3.GetObjectManyResponse.
 * Use `create(GetObjectManyResponseSchema)` to create a new message.
 */
export const GetObjectManyResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 3);

/**
 * Describes the message aserto.directory.reader.v3.GetObjectsRequest.
 * Use `create(GetObjectsRequestSchema)` to create a new message.
 */
export const GetObjectsRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 4);

/**
 * Describes the message aserto.directory.reader.v3.GetObjectsResponse.
 * Use `create(GetObjectsResponseSchema)` to create a new message.
 */
export const GetObjectsResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 5);

/**
 * Describes the message aserto.directory.reader.v3.GetRelationRequest.
 * Use `create(GetRelationRequestSchema)` to create a new message.
 */
export const GetRelationRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 6);

/**
 * Describes the message aserto.directory.reader.v3.GetRelationResponse.
 * Use `create(GetRelationResponseSchema)` to create a new message.
 */
export const GetRelationResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 7);

/**
 * Describes the message aserto.directory.reader.v3.GetRelationsRequest.
 * Use `create(GetRelationsRequestSchema)` to create a new message.
 */
export const GetRelationsRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 8);

/**
 * Describes the message aserto.directory.reader.v3.GetRelationsResponse.
 * Use `create(GetRelationsResponseSchema)` to create a new message.
 */
export const GetRelationsResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 9);

/**
 * Describes the message aserto.directory.reader.v3.CheckRequest.
 * Use `create(CheckRequestSchema)` to create a new message.
 */
export const CheckRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 10);

/**
 * Describes the message aserto.directory.reader.v3.CheckResponse.
 * Use `create(CheckResponseSchema)` to create a new message.
 */
export const CheckResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 11);

/**
 * Describes the message aserto.directory.reader.v3.ChecksRequest.
 * Use `create(ChecksRequestSchema)` to create a new message.
 */
export const ChecksRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 12);

/**
 * Describes the message aserto.directory.reader.v3.ChecksResponse.
 * Use `create(ChecksResponseSchema)` to create a new message.
 */
export const ChecksResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 13);

/**
 * Describes the message aserto.directory.reader.v3.CheckPermissionRequest.
 * Use `create(CheckPermissionRequestSchema)` to create a new message.
 */
export const CheckPermissionRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 14);

/**
 * Describes the message aserto.directory.reader.v3.CheckPermissionResponse.
 * Use `create(CheckPermissionResponseSchema)` to create a new message.
 */
export const CheckPermissionResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 15);

/**
 * Describes the message aserto.directory.reader.v3.CheckRelationRequest.
 * Use `create(CheckRelationRequestSchema)` to create a new message.
 */
export const CheckRelationRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 16);

/**
 * Describes the message aserto.directory.reader.v3.CheckRelationResponse.
 * Use `create(CheckRelationResponseSchema)` to create a new message.
 */
export const CheckRelationResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 17);

/**
 * Describes the message aserto.directory.reader.v3.GetGraphRequest.
 * Use `create(GetGraphRequestSchema)` to create a new message.
 */
export const GetGraphRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 18);

/**
 * Describes the message aserto.directory.reader.v3.GetGraphResponse.
 * Use `create(GetGraphResponseSchema)` to create a new message.
 */
export const GetGraphResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_reader_v3_reader, 19);

/**
 * @generated from service aserto.directory.reader.v3.Reader
 */
export const Reader = /*@__PURE__*/
  serviceDesc(file_aserto_directory_reader_v3_reader, 0);

