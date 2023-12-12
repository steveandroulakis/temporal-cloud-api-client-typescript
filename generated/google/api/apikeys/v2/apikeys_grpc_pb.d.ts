// GENERATED CODE -- DO NOT EDIT!

// package: google.api.apikeys.v2
// file: google/api/apikeys/v2/apikeys.proto

import * as google_api_apikeys_v2_apikeys_pb from "../../../../google/api/apikeys/v2/apikeys_pb";
import * as google_api_apikeys_v2_resources_pb from "../../../../google/api/apikeys/v2/resources_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as grpc from "@grpc/grpc-js";

interface IApiKeysService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createKey: grpc.MethodDefinition<google_api_apikeys_v2_apikeys_pb.CreateKeyRequest, google_longrunning_operations_pb.Operation>;
  listKeys: grpc.MethodDefinition<google_api_apikeys_v2_apikeys_pb.ListKeysRequest, google_api_apikeys_v2_apikeys_pb.ListKeysResponse>;
  getKey: grpc.MethodDefinition<google_api_apikeys_v2_apikeys_pb.GetKeyRequest, google_api_apikeys_v2_resources_pb.Key>;
  getKeyString: grpc.MethodDefinition<google_api_apikeys_v2_apikeys_pb.GetKeyStringRequest, google_api_apikeys_v2_apikeys_pb.GetKeyStringResponse>;
  updateKey: grpc.MethodDefinition<google_api_apikeys_v2_apikeys_pb.UpdateKeyRequest, google_longrunning_operations_pb.Operation>;
  deleteKey: grpc.MethodDefinition<google_api_apikeys_v2_apikeys_pb.DeleteKeyRequest, google_longrunning_operations_pb.Operation>;
  undeleteKey: grpc.MethodDefinition<google_api_apikeys_v2_apikeys_pb.UndeleteKeyRequest, google_longrunning_operations_pb.Operation>;
  lookupKey: grpc.MethodDefinition<google_api_apikeys_v2_apikeys_pb.LookupKeyRequest, google_api_apikeys_v2_apikeys_pb.LookupKeyResponse>;
}

export const ApiKeysService: IApiKeysService;

export interface IApiKeysServer extends grpc.UntypedServiceImplementation {
  createKey: grpc.handleUnaryCall<google_api_apikeys_v2_apikeys_pb.CreateKeyRequest, google_longrunning_operations_pb.Operation>;
  listKeys: grpc.handleUnaryCall<google_api_apikeys_v2_apikeys_pb.ListKeysRequest, google_api_apikeys_v2_apikeys_pb.ListKeysResponse>;
  getKey: grpc.handleUnaryCall<google_api_apikeys_v2_apikeys_pb.GetKeyRequest, google_api_apikeys_v2_resources_pb.Key>;
  getKeyString: grpc.handleUnaryCall<google_api_apikeys_v2_apikeys_pb.GetKeyStringRequest, google_api_apikeys_v2_apikeys_pb.GetKeyStringResponse>;
  updateKey: grpc.handleUnaryCall<google_api_apikeys_v2_apikeys_pb.UpdateKeyRequest, google_longrunning_operations_pb.Operation>;
  deleteKey: grpc.handleUnaryCall<google_api_apikeys_v2_apikeys_pb.DeleteKeyRequest, google_longrunning_operations_pb.Operation>;
  undeleteKey: grpc.handleUnaryCall<google_api_apikeys_v2_apikeys_pb.UndeleteKeyRequest, google_longrunning_operations_pb.Operation>;
  lookupKey: grpc.handleUnaryCall<google_api_apikeys_v2_apikeys_pb.LookupKeyRequest, google_api_apikeys_v2_apikeys_pb.LookupKeyResponse>;
}

export class ApiKeysClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createKey(argument: google_api_apikeys_v2_apikeys_pb.CreateKeyRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createKey(argument: google_api_apikeys_v2_apikeys_pb.CreateKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createKey(argument: google_api_apikeys_v2_apikeys_pb.CreateKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  listKeys(argument: google_api_apikeys_v2_apikeys_pb.ListKeysRequest, callback: grpc.requestCallback<google_api_apikeys_v2_apikeys_pb.ListKeysResponse>): grpc.ClientUnaryCall;
  listKeys(argument: google_api_apikeys_v2_apikeys_pb.ListKeysRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_apikeys_v2_apikeys_pb.ListKeysResponse>): grpc.ClientUnaryCall;
  listKeys(argument: google_api_apikeys_v2_apikeys_pb.ListKeysRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_apikeys_v2_apikeys_pb.ListKeysResponse>): grpc.ClientUnaryCall;
  getKey(argument: google_api_apikeys_v2_apikeys_pb.GetKeyRequest, callback: grpc.requestCallback<google_api_apikeys_v2_resources_pb.Key>): grpc.ClientUnaryCall;
  getKey(argument: google_api_apikeys_v2_apikeys_pb.GetKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_apikeys_v2_resources_pb.Key>): grpc.ClientUnaryCall;
  getKey(argument: google_api_apikeys_v2_apikeys_pb.GetKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_apikeys_v2_resources_pb.Key>): grpc.ClientUnaryCall;
  getKeyString(argument: google_api_apikeys_v2_apikeys_pb.GetKeyStringRequest, callback: grpc.requestCallback<google_api_apikeys_v2_apikeys_pb.GetKeyStringResponse>): grpc.ClientUnaryCall;
  getKeyString(argument: google_api_apikeys_v2_apikeys_pb.GetKeyStringRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_apikeys_v2_apikeys_pb.GetKeyStringResponse>): grpc.ClientUnaryCall;
  getKeyString(argument: google_api_apikeys_v2_apikeys_pb.GetKeyStringRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_apikeys_v2_apikeys_pb.GetKeyStringResponse>): grpc.ClientUnaryCall;
  updateKey(argument: google_api_apikeys_v2_apikeys_pb.UpdateKeyRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateKey(argument: google_api_apikeys_v2_apikeys_pb.UpdateKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateKey(argument: google_api_apikeys_v2_apikeys_pb.UpdateKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteKey(argument: google_api_apikeys_v2_apikeys_pb.DeleteKeyRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteKey(argument: google_api_apikeys_v2_apikeys_pb.DeleteKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteKey(argument: google_api_apikeys_v2_apikeys_pb.DeleteKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  undeleteKey(argument: google_api_apikeys_v2_apikeys_pb.UndeleteKeyRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  undeleteKey(argument: google_api_apikeys_v2_apikeys_pb.UndeleteKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  undeleteKey(argument: google_api_apikeys_v2_apikeys_pb.UndeleteKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  lookupKey(argument: google_api_apikeys_v2_apikeys_pb.LookupKeyRequest, callback: grpc.requestCallback<google_api_apikeys_v2_apikeys_pb.LookupKeyResponse>): grpc.ClientUnaryCall;
  lookupKey(argument: google_api_apikeys_v2_apikeys_pb.LookupKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_apikeys_v2_apikeys_pb.LookupKeyResponse>): grpc.ClientUnaryCall;
  lookupKey(argument: google_api_apikeys_v2_apikeys_pb.LookupKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_apikeys_v2_apikeys_pb.LookupKeyResponse>): grpc.ClientUnaryCall;
}
