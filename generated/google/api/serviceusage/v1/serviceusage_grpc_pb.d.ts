// GENERATED CODE -- DO NOT EDIT!

// package: google.api.serviceusage.v1
// file: google/api/serviceusage/v1/serviceusage.proto

import * as google_api_serviceusage_v1_serviceusage_pb from "../../../../google/api/serviceusage/v1/serviceusage_pb";
import * as google_api_serviceusage_v1_resources_pb from "../../../../google/api/serviceusage/v1/resources_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as grpc from "@grpc/grpc-js";

interface IServiceUsageService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  enableService: grpc.MethodDefinition<google_api_serviceusage_v1_serviceusage_pb.EnableServiceRequest, google_longrunning_operations_pb.Operation>;
  disableService: grpc.MethodDefinition<google_api_serviceusage_v1_serviceusage_pb.DisableServiceRequest, google_longrunning_operations_pb.Operation>;
  getService: grpc.MethodDefinition<google_api_serviceusage_v1_serviceusage_pb.GetServiceRequest, google_api_serviceusage_v1_resources_pb.Service>;
  listServices: grpc.MethodDefinition<google_api_serviceusage_v1_serviceusage_pb.ListServicesRequest, google_api_serviceusage_v1_serviceusage_pb.ListServicesResponse>;
  batchEnableServices: grpc.MethodDefinition<google_api_serviceusage_v1_serviceusage_pb.BatchEnableServicesRequest, google_longrunning_operations_pb.Operation>;
  batchGetServices: grpc.MethodDefinition<google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesRequest, google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesResponse>;
}

export const ServiceUsageService: IServiceUsageService;

export interface IServiceUsageServer extends grpc.UntypedServiceImplementation {
  enableService: grpc.handleUnaryCall<google_api_serviceusage_v1_serviceusage_pb.EnableServiceRequest, google_longrunning_operations_pb.Operation>;
  disableService: grpc.handleUnaryCall<google_api_serviceusage_v1_serviceusage_pb.DisableServiceRequest, google_longrunning_operations_pb.Operation>;
  getService: grpc.handleUnaryCall<google_api_serviceusage_v1_serviceusage_pb.GetServiceRequest, google_api_serviceusage_v1_resources_pb.Service>;
  listServices: grpc.handleUnaryCall<google_api_serviceusage_v1_serviceusage_pb.ListServicesRequest, google_api_serviceusage_v1_serviceusage_pb.ListServicesResponse>;
  batchEnableServices: grpc.handleUnaryCall<google_api_serviceusage_v1_serviceusage_pb.BatchEnableServicesRequest, google_longrunning_operations_pb.Operation>;
  batchGetServices: grpc.handleUnaryCall<google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesRequest, google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesResponse>;
}

export class ServiceUsageClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  enableService(argument: google_api_serviceusage_v1_serviceusage_pb.EnableServiceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  enableService(argument: google_api_serviceusage_v1_serviceusage_pb.EnableServiceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  enableService(argument: google_api_serviceusage_v1_serviceusage_pb.EnableServiceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  disableService(argument: google_api_serviceusage_v1_serviceusage_pb.DisableServiceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  disableService(argument: google_api_serviceusage_v1_serviceusage_pb.DisableServiceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  disableService(argument: google_api_serviceusage_v1_serviceusage_pb.DisableServiceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getService(argument: google_api_serviceusage_v1_serviceusage_pb.GetServiceRequest, callback: grpc.requestCallback<google_api_serviceusage_v1_resources_pb.Service>): grpc.ClientUnaryCall;
  getService(argument: google_api_serviceusage_v1_serviceusage_pb.GetServiceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1_resources_pb.Service>): grpc.ClientUnaryCall;
  getService(argument: google_api_serviceusage_v1_serviceusage_pb.GetServiceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1_resources_pb.Service>): grpc.ClientUnaryCall;
  listServices(argument: google_api_serviceusage_v1_serviceusage_pb.ListServicesRequest, callback: grpc.requestCallback<google_api_serviceusage_v1_serviceusage_pb.ListServicesResponse>): grpc.ClientUnaryCall;
  listServices(argument: google_api_serviceusage_v1_serviceusage_pb.ListServicesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1_serviceusage_pb.ListServicesResponse>): grpc.ClientUnaryCall;
  listServices(argument: google_api_serviceusage_v1_serviceusage_pb.ListServicesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1_serviceusage_pb.ListServicesResponse>): grpc.ClientUnaryCall;
  batchEnableServices(argument: google_api_serviceusage_v1_serviceusage_pb.BatchEnableServicesRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchEnableServices(argument: google_api_serviceusage_v1_serviceusage_pb.BatchEnableServicesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchEnableServices(argument: google_api_serviceusage_v1_serviceusage_pb.BatchEnableServicesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchGetServices(argument: google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesRequest, callback: grpc.requestCallback<google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesResponse>): grpc.ClientUnaryCall;
  batchGetServices(argument: google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesResponse>): grpc.ClientUnaryCall;
  batchGetServices(argument: google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1_serviceusage_pb.BatchGetServicesResponse>): grpc.ClientUnaryCall;
}
