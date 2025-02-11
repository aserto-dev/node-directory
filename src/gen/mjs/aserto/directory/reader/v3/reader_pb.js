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
  fileDesc("Cidhc2VydG8vZGlyZWN0b3J5L3JlYWRlci92My9yZWFkZXIucHJvdG8SGmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzIoQEChBHZXRPYmplY3RSZXF1ZXN0EoICCgtvYmplY3RfdHlwZRgBIAEoCULsAeBBArpI5QG6AdoBChZnZXRfb2JqZWN0Lm9iamVjdF90eXBlEosBbXVzdCBiZSBhbGwgbG93ZXJjYXNlLCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBoydGhpcy5tYXRjaGVzKCdeW2Etel1bYS16MC05XFwuXy1dezEsNjJ9W2EtejAtOV0kJynIAQFyAhhAEosBCglvYmplY3RfaWQYAiABKAlCeLpIdboBagoUZ2V0X29iamVjdC5vYmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynIAQFyAxiAAhIbCg53aXRoX3JlbGF0aW9ucxgDIAEoCEID4EEBEkAKBHBhZ2UYCSABKAsyLS5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5QYWdpbmF0aW9uUmVxdWVzdEID4EEBIr4BChFHZXRPYmplY3RSZXNwb25zZRIyCgZyZXN1bHQYASABKAsyIi5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5PYmplY3QSNwoJcmVsYXRpb25zGAQgAygLMiQuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuUmVsYXRpb24SPAoEcGFnZRgJIAEoCzIuLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlBhZ2luYXRpb25SZXNwb25zZSJYChRHZXRPYmplY3RNYW55UmVxdWVzdBJACgVwYXJhbRgBIAMoCzIsLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLk9iamVjdElkZW50aWZpZXJCA+BBAiJMChVHZXRPYmplY3RNYW55UmVzcG9uc2USMwoHcmVzdWx0cxgBIAMoCzIiLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLk9iamVjdCLbAgoRR2V0T2JqZWN0c1JlcXVlc3QSgwIKC29iamVjdF90eXBlGAEgASgJQu0B4EEBukjmAboB2wEKF2dldF9vYmplY3RzLm9iamVjdF90eXBlEosBbXVzdCBiZSBhbGwgbG93ZXJjYXNlLCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBoydGhpcy5tYXRjaGVzKCdeW2Etel1bYS16MC05XFwuXy1dezEsNjJ9W2EtejAtOV0kJynQAQFyAhhAEkAKBHBhZ2UYCSABKAsyLS5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5QYWdpbmF0aW9uUmVxdWVzdEID4EEBIocBChJHZXRPYmplY3RzUmVzcG9uc2USMwoHcmVzdWx0cxgBIAMoCzIiLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLk9iamVjdBI8CgRwYWdlGAkgASgLMi4uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuUGFnaW5hdGlvblJlc3BvbnNlIqcPChJHZXRSZWxhdGlvblJlcXVlc3QShAIKC29iamVjdF90eXBlGAEgASgJQu4B4EECukjnAboB3AEKGGdldF9yZWxhdGlvbi5vYmplY3RfdHlwZRKLAW11c3QgYmUgYWxsIGxvd2VyY2FzZSwgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaMnRoaXMubWF0Y2hlcygnXlthLXpdW2EtejAtOVxcLl8tXXsxLDYyfVthLXowLTldJCcp0AEBcgIYQBKQAQoJb2JqZWN0X2lkGAIgASgJQn3gQQK6SHe6AWwKFmdldF9yZWxhdGlvbi5vYmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynQAQFyAxiAAhL+AQoIcmVsYXRpb24YAyABKAlC6wHgQQK6SOQBugHZAQoVZ2V0X3JlbGF0aW9uLnJlbGF0aW9uEosBbXVzdCBiZSBhbGwgbG93ZXJjYXNlLCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBoydGhpcy5tYXRjaGVzKCdeW2Etel1bYS16MC05XFwuXy1dezEsNjJ9W2EtejAtOV0kJynQAQFyAhhAEoYCCgxzdWJqZWN0X3R5cGUYBCABKAlC7wHgQQK6SOgBugHdAQoZZ2V0X3JlbGF0aW9uLnN1YmplY3RfdHlwZRKLAW11c3QgYmUgYWxsIGxvd2VyY2FzZSwgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaMnRoaXMubWF0Y2hlcygnXlthLXpdW2EtejAtOVxcLl8tXXsxLDYyfVthLXowLTldJCcp0AEBcgIYQBKSAQoKc3ViamVjdF9pZBgFIAEoCUJ+4EECukh4ugFtChdnZXRfcmVsYXRpb24uc3ViamVjdF9pZBI4Y2Fubm90IGNvbnRhaW4gYW55IHNwYWNlcyBvciBvdGhlciB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMaGHRoaXMubWF0Y2hlcygnXltcXFNdKyQnKdABAXIDGIACEo4CChBzdWJqZWN0X3JlbGF0aW9uGAYgASgJQvMB4EEBukjsAboB4QEKHWdldF9yZWxhdGlvbi5zdWJqZWN0X3JlbGF0aW9uEosBbXVzdCBiZSBhbGwgbG93ZXJjYXNlLCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBoydGhpcy5tYXRjaGVzKCdeW2Etel1bYS16MC05XFwuXy1dezEsNjJ9W2EtejAtOV0kJynQAQFyAhhAEhkKDHdpdGhfb2JqZWN0cxgHIAEoCEID4EEBOqsEukinBBqMAgogZ2V0X3JlbGF0aW9uLm9iamVjdF9pZF93aXRoX3R5cGUSTXdoZW4gYW4gb2JqZWN0X2lkIGlzIHNwZWNpZmllZCwgdGhlIGFjY29tcGFueWluZyBvYmplY3RfdHlwZSBtdXN0IGJlIHByb3ZpZGVkGpgBKHRoaXMub2JqZWN0X3R5cGUgPT0gJycgJiYgdGhpcy5vYmplY3RfaWQgPT0gJycpIHx8ICh0aGlzLm9iamVjdF90eXBlICE9ICcnICYmIHRoaXMub2JqZWN0X2lkID09ICcnKSB8fCAodGhpcy5vYmplY3RfdHlwZSAhPSAnJyAmJiB0aGlzLm9iamVjdF9pZCAhPSAnJykalQIKIWdldF9yZWxhdGlvbi5zdWJqZWN0X2lkX3dpdGhfdHlwZRJPd2hlbiBhbiBzdWJqZWN0X2lkIGlzIHNwZWNpZmllZCwgdGhlIGFjY29tcGFueWluZyBzdWJqZWN0X3R5cGUgbXVzdCBiZSBwcm92aWRlZBqeASh0aGlzLnN1YmplY3RfdHlwZSA9PSAnJyAmJiB0aGlzLnN1YmplY3RfaWQgPT0gJycpIHx8ICh0aGlzLnN1YmplY3RfdHlwZSAhPSAnJyAmJiB0aGlzLnN1YmplY3RfaWQgPT0gJycpIHx8ICh0aGlzLnN1YmplY3RfdHlwZSAhPSAnJyAmJiB0aGlzLnN1YmplY3RfaWQgIT0gJycpIu4BChNHZXRSZWxhdGlvblJlc3BvbnNlEjQKBnJlc3VsdBgBIAEoCzIkLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlJlbGF0aW9uEk0KB29iamVjdHMYAiADKAsyPC5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRSZWxhdGlvblJlc3BvbnNlLk9iamVjdHNFbnRyeRpSCgxPYmplY3RzRW50cnkSCwoDa2V5GAEgASgJEjEKBXZhbHVlGAIgASgLMiIuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuT2JqZWN0OgI4ASKcEAoTR2V0UmVsYXRpb25zUmVxdWVzdBKFAgoLb2JqZWN0X3R5cGUYASABKAlC7wHgQQG6SOgBugHdAQoZZ2V0X3JlbGF0aW9ucy5vYmplY3RfdHlwZRKLAW11c3QgYmUgYWxsIGxvd2VyY2FzZSwgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaMnRoaXMubWF0Y2hlcygnXlthLXpdW2EtejAtOVxcLl8tXXsxLDYyfVthLXowLTldJCcp0AEBcgIYQBKRAQoJb2JqZWN0X2lkGAIgASgJQn7gQQG6SHi6AW0KF2dldF9yZWxhdGlvbnMub2JqZWN0X2lkEjhjYW5ub3QgY29udGFpbiBhbnkgc3BhY2VzIG9yIG90aGVyIHdoaXRlc3BhY2UgY2hhcmFjdGVycxoYdGhpcy5tYXRjaGVzKCdeW1xcU10rJCcp0AEBcgMYgAIS/wEKCHJlbGF0aW9uGAMgASgJQuwB4EEBukjlAboB2gEKFmdldF9yZWxhdGlvbnMucmVsYXRpb24SiwFtdXN0IGJlIGFsbCBsb3dlcmNhc2UsIHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0GjJ0aGlzLm1hdGNoZXMoJ15bYS16XVthLXowLTlcXC5fLV17MSw2Mn1bYS16MC05XSQnKdABAXICGEAShwIKDHN1YmplY3RfdHlwZRgEIAEoCULwAeBBAbpI6QG6Ad4BChpnZXRfcmVsYXRpb25zLnN1YmplY3RfdHlwZRKLAW11c3QgYmUgYWxsIGxvd2VyY2FzZSwgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaMnRoaXMubWF0Y2hlcygnXlthLXpdW2EtejAtOVxcLl8tXXsxLDYyfVthLXowLTldJCcp0AEBcgIYQBKTAQoKc3ViamVjdF9pZBgFIAEoCUJ/4EEBukh5ugFuChhnZXRfcmVsYXRpb25zLnN1YmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynQAQFyAxiAAhKPAgoQc3ViamVjdF9yZWxhdGlvbhgGIAEoCUL0AeBBAbpI7QG6AeIBCh5nZXRfcmVsYXRpb25zLnN1YmplY3RfcmVsYXRpb24SiwFtdXN0IGJlIGFsbCBsb3dlcmNhc2UsIHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0GjJ0aGlzLm1hdGNoZXMoJ15bYS16XVthLXowLTlcXC5fLV17MSw2Mn1bYS16MC05XSQnKdABAXICGEASGQoMd2l0aF9vYmplY3RzGAcgASgIQgPgQQESKAobd2l0aF9lbXB0eV9zdWJqZWN0X3JlbGF0aW9uGAggASgIQgPgQQESQAoEcGFnZRgJIAEoCzItLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlBhZ2luYXRpb25SZXF1ZXN0QgPgQQE6rQS6SKkEGo0CCiFnZXRfcmVsYXRpb25zLm9iamVjdF9pZF93aXRoX3R5cGUSTXdoZW4gYW4gb2JqZWN0X2lkIGlzIHNwZWNpZmllZCwgdGhlIGFjY29tcGFueWluZyBvYmplY3RfdHlwZSBtdXN0IGJlIHByb3ZpZGVkGpgBKHRoaXMub2JqZWN0X3R5cGUgPT0gJycgJiYgdGhpcy5vYmplY3RfaWQgPT0gJycpIHx8ICh0aGlzLm9iamVjdF90eXBlICE9ICcnICYmIHRoaXMub2JqZWN0X2lkID09ICcnKSB8fCAodGhpcy5vYmplY3RfdHlwZSAhPSAnJyAmJiB0aGlzLm9iamVjdF9pZCAhPSAnJykalgIKImdldF9yZWxhdGlvbnMuc3ViamVjdF9pZF93aXRoX3R5cGUST3doZW4gYW4gc3ViamVjdF9pZCBpcyBzcGVjaWZpZWQsIHRoZSBhY2NvbXBhbnlpbmcgc3ViamVjdF90eXBlIG11c3QgYmUgcHJvdmlkZWQangEodGhpcy5zdWJqZWN0X3R5cGUgPT0gJycgJiYgdGhpcy5zdWJqZWN0X2lkID09ICcnKSB8fCAodGhpcy5zdWJqZWN0X3R5cGUgIT0gJycgJiYgdGhpcy5zdWJqZWN0X2lkID09ICcnKSB8fCAodGhpcy5zdWJqZWN0X3R5cGUgIT0gJycgJiYgdGhpcy5zdWJqZWN0X2lkICE9ICcnKSKvAgoUR2V0UmVsYXRpb25zUmVzcG9uc2USNQoHcmVzdWx0cxgBIAMoCzIkLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlJlbGF0aW9uEk4KB29iamVjdHMYAiADKAsyPS5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRSZWxhdGlvbnNSZXNwb25zZS5PYmplY3RzRW50cnkSPAoEcGFnZRgJIAEoCzIuLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlBhZ2luYXRpb25SZXNwb25zZRpSCgxPYmplY3RzRW50cnkSCwoDa2V5GAEgASgJEjEKBXZhbHVlGAIgASgLMiIuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuT2JqZWN0OgI4ASLIBwoMQ2hlY2tSZXF1ZXN0Ev0BCgtvYmplY3RfdHlwZRgBIAEoCULnAeBBArpI4AG6AdUBChFjaGVjay5vYmplY3RfdHlwZRKLAW11c3QgYmUgYWxsIGxvd2VyY2FzZSwgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaMnRoaXMubWF0Y2hlcygnXlthLXpdW2EtejAtOVxcLl8tXXsxLDYyfVthLXowLTldJCcpyAEBcgIYQBKJAQoJb2JqZWN0X2lkGAIgASgJQnbgQQK6SHC6AWUKD2NoZWNrLm9iamVjdF9pZBI4Y2Fubm90IGNvbnRhaW4gYW55IHNwYWNlcyBvciBvdGhlciB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMaGHRoaXMubWF0Y2hlcygnXltcXFNdKyQnKcgBAXIDGIACEocBCghyZWxhdGlvbhgDIAEoCUJ14EECukhvugFkCg5jaGVjay5yZWxhdGlvbhI4Y2Fubm90IGNvbnRhaW4gYW55IHNwYWNlcyBvciBvdGhlciB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMaGHRoaXMubWF0Y2hlcygnXltcXFNdKyQnKcgBAXIDGIACEv8BCgxzdWJqZWN0X3R5cGUYBCABKAlC6AHgQQK6SOEBugHWAQoSY2hlY2suc3ViamVjdF90eXBlEosBbXVzdCBiZSBhbGwgbG93ZXJjYXNlLCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBoydGhpcy5tYXRjaGVzKCdeW2Etel1bYS16MC05XFwuXy1dezEsNjJ9W2EtejAtOV0kJynIAQFyAhhAEosBCgpzdWJqZWN0X2lkGAUgASgJQnfgQQK6SHG6AWYKEGNoZWNrLnN1YmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynIAQFyAxiAAhISCgV0cmFjZRgHIAEoCEID4EEBIlcKDUNoZWNrUmVzcG9uc2USDQoFY2hlY2sYASABKAgSDQoFdHJhY2UYAiADKAkSKAoHY29udGV4dBgDIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QihAEKDUNoZWNrc1JlcXVlc3QSOQoHZGVmYXVsdBgBIAEoCzIoLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkNoZWNrUmVxdWVzdBI4CgZjaGVja3MYAiADKAsyKC5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5DaGVja1JlcXVlc3QiSwoOQ2hlY2tzUmVzcG9uc2USOQoGY2hlY2tzGAEgAygLMikuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjMuQ2hlY2tSZXNwb25zZSKQCAoWQ2hlY2tQZXJtaXNzaW9uUmVxdWVzdBKIAgoLb2JqZWN0X3R5cGUYASABKAlC8gHgQQK6SOsBugHgAQocY2hlY2tfcGVybWlzc2lvbi5vYmplY3RfdHlwZRKLAW11c3QgYmUgYWxsIGxvd2VyY2FzZSwgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaMnRoaXMubWF0Y2hlcygnXlthLXpdW2EtejAtOVxcLl8tXXsxLDYyfVthLXowLTldJCcpyAEBcgIYQBKVAQoJb2JqZWN0X2lkGAIgASgJQoEB4EECukh7ugFwChpjaGVja19wZXJtaXNzaW9uLm9iamVjdF9pZBI4Y2Fubm90IGNvbnRhaW4gYW55IHNwYWNlcyBvciBvdGhlciB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMaGHRoaXMubWF0Y2hlcygnXltcXFNdKyQnKcgBAXIDGIACEpcBCgpwZXJtaXNzaW9uGAMgASgJQoIB4EECukh8ugFxChtjaGVja19wZXJtaXNzaW9uLnBlcm1pc3Npb24SOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynIAQFyAxiAAhKKAgoMc3ViamVjdF90eXBlGAQgASgJQvMB4EECukjsAboB4QEKHWNoZWNrX3Blcm1pc3Npb24uc3ViamVjdF90eXBlEosBbXVzdCBiZSBhbGwgbG93ZXJjYXNlLCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBoydGhpcy5tYXRjaGVzKCdeW2Etel1bYS16MC05XFwuXy1dezEsNjJ9W2EtejAtOV0kJynIAQFyAhhAEpcBCgpzdWJqZWN0X2lkGAUgASgJQoIB4EECukh8ugFxChtjaGVja19wZXJtaXNzaW9uLnN1YmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynIAQFyAxiAAhISCgV0cmFjZRgHIAEoCEID4EEBIjcKF0NoZWNrUGVybWlzc2lvblJlc3BvbnNlEg0KBWNoZWNrGAEgASgIEg0KBXRyYWNlGAIgAygJIu4IChRDaGVja1JlbGF0aW9uUmVxdWVzdBKGAgoLb2JqZWN0X3R5cGUYASABKAlC8AHgQQK6SOkBugHeAQoaY2hlY2tfcmVsYXRpb24ub2JqZWN0X3R5cGUSiwFtdXN0IGJlIGFsbCBsb3dlcmNhc2UsIHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0GjJ0aGlzLm1hdGNoZXMoJ15bYS16XVthLXowLTlcXC5fLV17MSw2Mn1bYS16MC05XSQnKcgBAXICGEASkgEKCW9iamVjdF9pZBgCIAEoCUJ/4EECukh5ugFuChhjaGVja19yZWxhdGlvbi5vYmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynIAQFyAxiAAhKAAgoIcmVsYXRpb24YAyABKAlC7QHgQQK6SOYBugHbAQoXY2hlY2tfcmVsYXRpb24ucmVsYXRpb24SiwFtdXN0IGJlIGFsbCBsb3dlcmNhc2UsIHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0GjJ0aGlzLm1hdGNoZXMoJ15bYS16XVthLXowLTlcXC5fLV17MSw2Mn1bYS16MC05XSQnKcgBAXICGEASiAIKDHN1YmplY3RfdHlwZRgEIAEoCULxAeBBArpI6gG6Ad8BChtjaGVja19yZWxhdGlvbi5zdWJqZWN0X3R5cGUSiwFtdXN0IGJlIGFsbCBsb3dlcmNhc2UsIHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0GjJ0aGlzLm1hdGNoZXMoJ15bYS16XVthLXowLTlcXC5fLV17MSw2Mn1bYS16MC05XSQnKcgBAXICGEASlQEKCnN1YmplY3RfaWQYBSABKAlCgAHgQQK6SHq6AW8KGWNoZWNrX3JlbGF0aW9uLnN1YmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynIAQFyAxiAAhISCgV0cmFjZRgHIAEoCEID4EEBIjUKFUNoZWNrUmVsYXRpb25SZXNwb25zZRINCgVjaGVjaxgBIAEoCBINCgV0cmFjZRgCIAMoCSKXCwoPR2V0R3JhcGhSZXF1ZXN0EoECCgtvYmplY3RfdHlwZRgDIAEoCULrAeBBArpI5AG6AdkBChVnZXRfZ3JhcGgub2JqZWN0X3R5cGUSiwFtdXN0IGJlIGFsbCBsb3dlcmNhc2UsIHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0GjJ0aGlzLm1hdGNoZXMoJ15bYS16XVthLXowLTlcXC5fLV17MSw2Mn1bYS16MC05XSQnKdABAXICGEASjQEKCW9iamVjdF9pZBgEIAEoCUJ64EEBukh0ugFpChNnZXRfZ3JhcGgub2JqZWN0X2lkEjhjYW5ub3QgY29udGFpbiBhbnkgc3BhY2VzIG9yIG90aGVyIHdoaXRlc3BhY2UgY2hhcmFjdGVycxoYdGhpcy5tYXRjaGVzKCdeW1xcU10rJCcp0AEBcgMYgAIS+wEKCHJlbGF0aW9uGAUgASgJQugB4EECukjhAboB1gEKEmdldF9ncmFwaC5yZWxhdGlvbhKLAW11c3QgYmUgYWxsIGxvd2VyY2FzZSwgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaMnRoaXMubWF0Y2hlcygnXlthLXpdW2EtejAtOVxcLl8tXXsxLDYyfVthLXowLTldJCcp0AEBcgIYQBKDAgoMc3ViamVjdF90eXBlGAYgASgJQuwB4EECukjlAboB2gEKFmdldF9ncmFwaC5zdWJqZWN0X3R5cGUSiwFtdXN0IGJlIGFsbCBsb3dlcmNhc2UsIHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0GjJ0aGlzLm1hdGNoZXMoJ15bYS16XVthLXowLTlcXC5fLV17MSw2Mn1bYS16MC05XSQnKdABAXICGEASjwEKCnN1YmplY3RfaWQYByABKAlCe+BBAbpIdboBagoUZ2V0X2dyYXBoLnN1YmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynQAQFyAxiAAhKLAgoQc3ViamVjdF9yZWxhdGlvbhgIIAEoCULwAeBBAbpI6QG6Ad4BChpnZXRfZ3JhcGguc3ViamVjdF9yZWxhdGlvbhKLAW11c3QgYmUgYWxsIGxvd2VyY2FzZSwgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaMnRoaXMubWF0Y2hlcygnXlthLXpdW2EtejAtOVxcLl8tXXsxLDYyfVthLXowLTldJCcp0AEBcgIYQBIUCgdleHBsYWluGAkgASgIQgPgQQESEgoFdHJhY2UYCiABKAhCA+BBAUoECAEQAkoECAIQA1ILYW5jaG9yX3R5cGVSCWFuY2hvcl9pZCKUAQoQR2V0R3JhcGhSZXNwb25zZRI9CgdyZXN1bHRzGAIgAygLMiwuYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuT2JqZWN0SWRlbnRpZmllchIsCgtleHBsYW5hdGlvbhgDIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QSDQoFdHJhY2UYBCADKAlKBAgBEAIyhRYKBlJlYWRlchLiAgoJR2V0T2JqZWN0EiwuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjMuR2V0T2JqZWN0UmVxdWVzdBotLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkdldE9iamVjdFJlc3BvbnNlIvcBkkG5AQoJZGlyZWN0b3J5EhNHZXQgb2JqZWN0IGluc3RhbmNlGjpSZXR1cm5zIHNpbmdsZSBvYmplY3QgaW5zdGFuY2UsIG9wdGlvbmFsbHkgd2l0aCByZWxhdGlvbnMuKhdkaXJlY3RvcnkudjMub2JqZWN0LmdldEodCgMzMDQSFgoUT2JqZWN0IG5vdCBtb2RpZmllZC5iIwoTCg9EaXJlY3RvcnlBUElLZXkSAAoMCghUZW5hbnRJRBIAgtPkkwI0EjIvYXBpL3YzL2RpcmVjdG9yeS9vYmplY3Qve29iamVjdF90eXBlfS97b2JqZWN0X2lkfRJ2Cg1HZXRPYmplY3RNYW55EjAuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjMuR2V0T2JqZWN0TWFueVJlcXVlc3QaMS5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRPYmplY3RNYW55UmVzcG9uc2UiABKYAgoKR2V0T2JqZWN0cxItLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkdldE9iamVjdHNSZXF1ZXN0Gi4uYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjMuR2V0T2JqZWN0c1Jlc3BvbnNlIqoBkkGFAQoJZGlyZWN0b3J5EhVMaXN0IG9iamVjdCBpbnN0YW5jZXMaIVJldHVybnMgbGlzdCBvZiBvYmplY3QgaW5zdGFuY2VzLioZZGlyZWN0b3J5LnYzLm9iamVjdHMubGlzdGIjChMKD0RpcmVjdG9yeUFQSUtleRIACgwKCFRlbmFudElEEgCC0+STAhsSGS9hcGkvdjMvZGlyZWN0b3J5L29iamVjdHMS1gIKC0dldFJlbGF0aW9uEi4uYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjMuR2V0UmVsYXRpb25SZXF1ZXN0Gi8uYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjMuR2V0UmVsYXRpb25SZXNwb25zZSLlAZJBvwEKCWRpcmVjdG9yeRIVR2V0IHJlbGF0aW9uIGluc3RhbmNlGjpSZXR1cm5zIHNpbmdsZSByZWxhdGlvbiBpbnN0YW5jZSwgb3B0aW9uYWxseSB3aXRoIG9iamVjdHMuKhlkaXJlY3RvcnkudjMucmVsYXRpb24uZ2V0Sh8KAzMwNBIYChZSZWxhdGlvbiBub3QgbW9kaWZpZWQuYiMKEwoPRGlyZWN0b3J5QVBJS2V5EgAKDAoIVGVuYW50SUQSAILT5JMCHBIaL2FwaS92My9kaXJlY3RvcnkvcmVsYXRpb24SpwIKDEdldFJlbGF0aW9ucxIvLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkdldFJlbGF0aW9uc1JlcXVlc3QaMC5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRSZWxhdGlvbnNSZXNwb25zZSKzAZJBjAEKCWRpcmVjdG9yeRIYTGlzdCByZWxhdGlvbnMgaW5zdGFuY2VzGiNSZXR1cm5zIGxpc3Qgb2YgcmVsYXRpb24gaW5zdGFuY2VzLiobZGlyZWN0b3J5LnYzLnJlbGF0aW9ucy5saXN0YiMKEwoPRGlyZWN0b3J5QVBJS2V5EgAKDAoIVGVuYW50SUQSAILT5JMCHRIbL2FwaS92My9kaXJlY3RvcnkvcmVsYXRpb25zEucBCgVDaGVjaxIoLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkNoZWNrUmVxdWVzdBopLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkNoZWNrUmVzcG9uc2UiiAGSQWMKCWRpcmVjdG9yeRIFQ2hlY2saFlJldHVybnMgY2hlY2sgb3V0Y29tZS4qEmRpcmVjdG9yeS52My5jaGVja2IjChMKD0RpcmVjdG9yeUFQSUtleRIACgwKCFRlbmFudElEEgCC0+STAhw6ASoiFy9hcGkvdjMvZGlyZWN0b3J5L2NoZWNrEvcBCgZDaGVja3MSKS5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5DaGVja3NSZXF1ZXN0GiouYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjMuQ2hlY2tzUmVzcG9uc2UilQGSQW8KCWRpcmVjdG9yeRIGQ2hlY2tzGiBSZXR1cm5zIG11bHRpcGxlIGNoZWNrIG91dGNvbWVzLioTZGlyZWN0b3J5LnYzLmNoZWNrc2IjChMKD0RpcmVjdG9yeUFQSUtleRIACgwKCFRlbmFudElEEgCC0+STAh06ASoiGC9hcGkvdjMvZGlyZWN0b3J5L2NoZWNrcxK1AgoPQ2hlY2tQZXJtaXNzaW9uEjIuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjMuQ2hlY2tQZXJtaXNzaW9uUmVxdWVzdBozLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkNoZWNrUGVybWlzc2lvblJlc3BvbnNlIrgBiAIBkkGEAQoJZGlyZWN0b3J5EhBDaGVjayBwZXJtaXNzaW9uGiFSZXR1cm5zIGNoZWNrIHBlcm1pc3Npb24gb3V0Y29tZS4qHWRpcmVjdG9yeS52My5jaGVjay5wZXJtaXNzaW9uYiMKEwoPRGlyZWN0b3J5QVBJS2V5EgAKDAoIVGVuYW50SUQSAILT5JMCJzoBKiIiL2FwaS92My9kaXJlY3RvcnkvY2hlY2svcGVybWlzc2lvbhKmAgoNQ2hlY2tSZWxhdGlvbhIwLmFzZXJ0by5kaXJlY3RvcnkucmVhZGVyLnYzLkNoZWNrUmVsYXRpb25SZXF1ZXN0GjEuYXNlcnRvLmRpcmVjdG9yeS5yZWFkZXIudjMuQ2hlY2tSZWxhdGlvblJlc3BvbnNlIq8BiAIBkkF+CglkaXJlY3RvcnkSDkNoZWNrIHJlbGF0aW9uGh9SZXR1cm5zIGNoZWNrIHJlbGF0aW9uIG91dGNvbWUuKhtkaXJlY3RvcnkudjMuY2hlY2sucmVsYXRpb25iIwoTCg9EaXJlY3RvcnlBUElLZXkSAAoMCghUZW5hbnRJRBIAgtPkkwIlOgEqIiAvYXBpL3YzL2RpcmVjdG9yeS9jaGVjay9yZWxhdGlvbhK6AgoIR2V0R3JhcGgSKy5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRHcmFwaFJlcXVlc3QaLC5hc2VydG8uZGlyZWN0b3J5LnJlYWRlci52My5HZXRHcmFwaFJlc3BvbnNlItIBkkGHAQoJZGlyZWN0b3J5EglHZXQgZ3JhcGgaNlJldHVybnMgb2JqZWN0IGdyYXBoIGZyb20gYW5jaG9yIHRvIHN1YmplY3Qgb3Igb2JqZWN0LioSZGlyZWN0b3J5LnYzLmdyYXBoYiMKEwoPRGlyZWN0b3J5QVBJS2V5EgAKDAoIVGVuYW50SUQSAILT5JMCQRI/L2FwaS92My9kaXJlY3RvcnkvZ3JhcGgve29iamVjdF90eXBlfS97cmVsYXRpb259L3tzdWJqZWN0X3R5cGV9QkZaRGdpdGh1Yi5jb20vYXNlcnRvLWRldi9nby1kaXJlY3RvcnkvYXNlcnRvL2RpcmVjdG9yeS9yZWFkZXIvdjM7cmVhZGVyYgZwcm90bzM", [file_protoc_gen_openapiv2_options_annotations, file_google_api_annotations, file_google_api_field_behavior, file_google_protobuf_struct, file_buf_validate_validate, file_aserto_directory_common_v3_common]);

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

