// GENERATED CODE -- DO NOT EDIT!

// package: google.api.cloudquotas.v1
// file: google/api/cloudquotas/v1/cloudquotas.proto

import * as google_api_cloudquotas_v1_cloudquotas_pb from "../../../../google/api/cloudquotas/v1/cloudquotas_pb";
import * as google_api_cloudquotas_v1_resources_pb from "../../../../google/api/cloudquotas/v1/resources_pb";
import * as grpc from "@grpc/grpc-js";

interface ICloudQuotasService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listQuotaInfos: grpc.MethodDefinition<google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaInfosRequest, google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaInfosResponse>;
  getQuotaInfo: grpc.MethodDefinition<google_api_cloudquotas_v1_cloudquotas_pb.GetQuotaInfoRequest, google_api_cloudquotas_v1_resources_pb.QuotaInfo>;
  listQuotaPreferences: grpc.MethodDefinition<google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaPreferencesRequest, google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaPreferencesResponse>;
  getQuotaPreference: grpc.MethodDefinition<google_api_cloudquotas_v1_cloudquotas_pb.GetQuotaPreferenceRequest, google_api_cloudquotas_v1_resources_pb.QuotaPreference>;
  createQuotaPreference: grpc.MethodDefinition<google_api_cloudquotas_v1_cloudquotas_pb.CreateQuotaPreferenceRequest, google_api_cloudquotas_v1_resources_pb.QuotaPreference>;
  updateQuotaPreference: grpc.MethodDefinition<google_api_cloudquotas_v1_cloudquotas_pb.UpdateQuotaPreferenceRequest, google_api_cloudquotas_v1_resources_pb.QuotaPreference>;
}

export const CloudQuotasService: ICloudQuotasService;

export interface ICloudQuotasServer extends grpc.UntypedServiceImplementation {
  listQuotaInfos: grpc.handleUnaryCall<google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaInfosRequest, google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaInfosResponse>;
  getQuotaInfo: grpc.handleUnaryCall<google_api_cloudquotas_v1_cloudquotas_pb.GetQuotaInfoRequest, google_api_cloudquotas_v1_resources_pb.QuotaInfo>;
  listQuotaPreferences: grpc.handleUnaryCall<google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaPreferencesRequest, google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaPreferencesResponse>;
  getQuotaPreference: grpc.handleUnaryCall<google_api_cloudquotas_v1_cloudquotas_pb.GetQuotaPreferenceRequest, google_api_cloudquotas_v1_resources_pb.QuotaPreference>;
  createQuotaPreference: grpc.handleUnaryCall<google_api_cloudquotas_v1_cloudquotas_pb.CreateQuotaPreferenceRequest, google_api_cloudquotas_v1_resources_pb.QuotaPreference>;
  updateQuotaPreference: grpc.handleUnaryCall<google_api_cloudquotas_v1_cloudquotas_pb.UpdateQuotaPreferenceRequest, google_api_cloudquotas_v1_resources_pb.QuotaPreference>;
}

export class CloudQuotasClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listQuotaInfos(argument: google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaInfosRequest, callback: grpc.requestCallback<google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaInfosResponse>): grpc.ClientUnaryCall;
  listQuotaInfos(argument: google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaInfosRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaInfosResponse>): grpc.ClientUnaryCall;
  listQuotaInfos(argument: google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaInfosRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaInfosResponse>): grpc.ClientUnaryCall;
  getQuotaInfo(argument: google_api_cloudquotas_v1_cloudquotas_pb.GetQuotaInfoRequest, callback: grpc.requestCallback<google_api_cloudquotas_v1_resources_pb.QuotaInfo>): grpc.ClientUnaryCall;
  getQuotaInfo(argument: google_api_cloudquotas_v1_cloudquotas_pb.GetQuotaInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_cloudquotas_v1_resources_pb.QuotaInfo>): grpc.ClientUnaryCall;
  getQuotaInfo(argument: google_api_cloudquotas_v1_cloudquotas_pb.GetQuotaInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_cloudquotas_v1_resources_pb.QuotaInfo>): grpc.ClientUnaryCall;
  listQuotaPreferences(argument: google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaPreferencesRequest, callback: grpc.requestCallback<google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaPreferencesResponse>): grpc.ClientUnaryCall;
  listQuotaPreferences(argument: google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaPreferencesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaPreferencesResponse>): grpc.ClientUnaryCall;
  listQuotaPreferences(argument: google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaPreferencesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_cloudquotas_v1_cloudquotas_pb.ListQuotaPreferencesResponse>): grpc.ClientUnaryCall;
  getQuotaPreference(argument: google_api_cloudquotas_v1_cloudquotas_pb.GetQuotaPreferenceRequest, callback: grpc.requestCallback<google_api_cloudquotas_v1_resources_pb.QuotaPreference>): grpc.ClientUnaryCall;
  getQuotaPreference(argument: google_api_cloudquotas_v1_cloudquotas_pb.GetQuotaPreferenceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_cloudquotas_v1_resources_pb.QuotaPreference>): grpc.ClientUnaryCall;
  getQuotaPreference(argument: google_api_cloudquotas_v1_cloudquotas_pb.GetQuotaPreferenceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_cloudquotas_v1_resources_pb.QuotaPreference>): grpc.ClientUnaryCall;
  createQuotaPreference(argument: google_api_cloudquotas_v1_cloudquotas_pb.CreateQuotaPreferenceRequest, callback: grpc.requestCallback<google_api_cloudquotas_v1_resources_pb.QuotaPreference>): grpc.ClientUnaryCall;
  createQuotaPreference(argument: google_api_cloudquotas_v1_cloudquotas_pb.CreateQuotaPreferenceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_cloudquotas_v1_resources_pb.QuotaPreference>): grpc.ClientUnaryCall;
  createQuotaPreference(argument: google_api_cloudquotas_v1_cloudquotas_pb.CreateQuotaPreferenceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_cloudquotas_v1_resources_pb.QuotaPreference>): grpc.ClientUnaryCall;
  updateQuotaPreference(argument: google_api_cloudquotas_v1_cloudquotas_pb.UpdateQuotaPreferenceRequest, callback: grpc.requestCallback<google_api_cloudquotas_v1_resources_pb.QuotaPreference>): grpc.ClientUnaryCall;
  updateQuotaPreference(argument: google_api_cloudquotas_v1_cloudquotas_pb.UpdateQuotaPreferenceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_cloudquotas_v1_resources_pb.QuotaPreference>): grpc.ClientUnaryCall;
  updateQuotaPreference(argument: google_api_cloudquotas_v1_cloudquotas_pb.UpdateQuotaPreferenceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_cloudquotas_v1_resources_pb.QuotaPreference>): grpc.ClientUnaryCall;
}
