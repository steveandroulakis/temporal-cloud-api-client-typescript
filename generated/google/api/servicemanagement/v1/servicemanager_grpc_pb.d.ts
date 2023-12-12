// GENERATED CODE -- DO NOT EDIT!

// package: google.api.servicemanagement.v1
// file: google/api/servicemanagement/v1/servicemanager.proto

import * as google_api_servicemanagement_v1_servicemanager_pb from "../../../../google/api/servicemanagement/v1/servicemanager_pb";
import * as google_api_service_pb from "../../../../google/api/service_pb";
import * as google_api_servicemanagement_v1_resources_pb from "../../../../google/api/servicemanagement/v1/resources_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as grpc from "@grpc/grpc-js";

interface IServiceManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listServices: grpc.MethodDefinition<google_api_servicemanagement_v1_servicemanager_pb.ListServicesRequest, google_api_servicemanagement_v1_servicemanager_pb.ListServicesResponse>;
  getService: grpc.MethodDefinition<google_api_servicemanagement_v1_servicemanager_pb.GetServiceRequest, google_api_servicemanagement_v1_resources_pb.ManagedService>;
  createService: grpc.MethodDefinition<google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRequest, google_longrunning_operations_pb.Operation>;
  deleteService: grpc.MethodDefinition<google_api_servicemanagement_v1_servicemanager_pb.DeleteServiceRequest, google_longrunning_operations_pb.Operation>;
  undeleteService: grpc.MethodDefinition<google_api_servicemanagement_v1_servicemanager_pb.UndeleteServiceRequest, google_longrunning_operations_pb.Operation>;
  listServiceConfigs: grpc.MethodDefinition<google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsRequest, google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsResponse>;
  getServiceConfig: grpc.MethodDefinition<google_api_servicemanagement_v1_servicemanager_pb.GetServiceConfigRequest, google_api_service_pb.Service>;
  createServiceConfig: grpc.MethodDefinition<google_api_servicemanagement_v1_servicemanager_pb.CreateServiceConfigRequest, google_api_service_pb.Service>;
  submitConfigSource: grpc.MethodDefinition<google_api_servicemanagement_v1_servicemanager_pb.SubmitConfigSourceRequest, google_longrunning_operations_pb.Operation>;
  listServiceRollouts: grpc.MethodDefinition<google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsRequest, google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsResponse>;
  getServiceRollout: grpc.MethodDefinition<google_api_servicemanagement_v1_servicemanager_pb.GetServiceRolloutRequest, google_api_servicemanagement_v1_resources_pb.Rollout>;
  createServiceRollout: grpc.MethodDefinition<google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRolloutRequest, google_longrunning_operations_pb.Operation>;
  generateConfigReport: grpc.MethodDefinition<google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportRequest, google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportResponse>;
}

export const ServiceManagerService: IServiceManagerService;

export interface IServiceManagerServer extends grpc.UntypedServiceImplementation {
  listServices: grpc.handleUnaryCall<google_api_servicemanagement_v1_servicemanager_pb.ListServicesRequest, google_api_servicemanagement_v1_servicemanager_pb.ListServicesResponse>;
  getService: grpc.handleUnaryCall<google_api_servicemanagement_v1_servicemanager_pb.GetServiceRequest, google_api_servicemanagement_v1_resources_pb.ManagedService>;
  createService: grpc.handleUnaryCall<google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRequest, google_longrunning_operations_pb.Operation>;
  deleteService: grpc.handleUnaryCall<google_api_servicemanagement_v1_servicemanager_pb.DeleteServiceRequest, google_longrunning_operations_pb.Operation>;
  undeleteService: grpc.handleUnaryCall<google_api_servicemanagement_v1_servicemanager_pb.UndeleteServiceRequest, google_longrunning_operations_pb.Operation>;
  listServiceConfigs: grpc.handleUnaryCall<google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsRequest, google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsResponse>;
  getServiceConfig: grpc.handleUnaryCall<google_api_servicemanagement_v1_servicemanager_pb.GetServiceConfigRequest, google_api_service_pb.Service>;
  createServiceConfig: grpc.handleUnaryCall<google_api_servicemanagement_v1_servicemanager_pb.CreateServiceConfigRequest, google_api_service_pb.Service>;
  submitConfigSource: grpc.handleUnaryCall<google_api_servicemanagement_v1_servicemanager_pb.SubmitConfigSourceRequest, google_longrunning_operations_pb.Operation>;
  listServiceRollouts: grpc.handleUnaryCall<google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsRequest, google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsResponse>;
  getServiceRollout: grpc.handleUnaryCall<google_api_servicemanagement_v1_servicemanager_pb.GetServiceRolloutRequest, google_api_servicemanagement_v1_resources_pb.Rollout>;
  createServiceRollout: grpc.handleUnaryCall<google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRolloutRequest, google_longrunning_operations_pb.Operation>;
  generateConfigReport: grpc.handleUnaryCall<google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportRequest, google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportResponse>;
}

export class ServiceManagerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listServices(argument: google_api_servicemanagement_v1_servicemanager_pb.ListServicesRequest, callback: grpc.requestCallback<google_api_servicemanagement_v1_servicemanager_pb.ListServicesResponse>): grpc.ClientUnaryCall;
  listServices(argument: google_api_servicemanagement_v1_servicemanager_pb.ListServicesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_servicemanagement_v1_servicemanager_pb.ListServicesResponse>): grpc.ClientUnaryCall;
  listServices(argument: google_api_servicemanagement_v1_servicemanager_pb.ListServicesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_servicemanagement_v1_servicemanager_pb.ListServicesResponse>): grpc.ClientUnaryCall;
  getService(argument: google_api_servicemanagement_v1_servicemanager_pb.GetServiceRequest, callback: grpc.requestCallback<google_api_servicemanagement_v1_resources_pb.ManagedService>): grpc.ClientUnaryCall;
  getService(argument: google_api_servicemanagement_v1_servicemanager_pb.GetServiceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_servicemanagement_v1_resources_pb.ManagedService>): grpc.ClientUnaryCall;
  getService(argument: google_api_servicemanagement_v1_servicemanager_pb.GetServiceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_servicemanagement_v1_resources_pb.ManagedService>): grpc.ClientUnaryCall;
  createService(argument: google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createService(argument: google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createService(argument: google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteService(argument: google_api_servicemanagement_v1_servicemanager_pb.DeleteServiceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteService(argument: google_api_servicemanagement_v1_servicemanager_pb.DeleteServiceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteService(argument: google_api_servicemanagement_v1_servicemanager_pb.DeleteServiceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  undeleteService(argument: google_api_servicemanagement_v1_servicemanager_pb.UndeleteServiceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  undeleteService(argument: google_api_servicemanagement_v1_servicemanager_pb.UndeleteServiceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  undeleteService(argument: google_api_servicemanagement_v1_servicemanager_pb.UndeleteServiceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  listServiceConfigs(argument: google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsRequest, callback: grpc.requestCallback<google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsResponse>): grpc.ClientUnaryCall;
  listServiceConfigs(argument: google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsResponse>): grpc.ClientUnaryCall;
  listServiceConfigs(argument: google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsResponse>): grpc.ClientUnaryCall;
  getServiceConfig(argument: google_api_servicemanagement_v1_servicemanager_pb.GetServiceConfigRequest, callback: grpc.requestCallback<google_api_service_pb.Service>): grpc.ClientUnaryCall;
  getServiceConfig(argument: google_api_servicemanagement_v1_servicemanager_pb.GetServiceConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_service_pb.Service>): grpc.ClientUnaryCall;
  getServiceConfig(argument: google_api_servicemanagement_v1_servicemanager_pb.GetServiceConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_service_pb.Service>): grpc.ClientUnaryCall;
  createServiceConfig(argument: google_api_servicemanagement_v1_servicemanager_pb.CreateServiceConfigRequest, callback: grpc.requestCallback<google_api_service_pb.Service>): grpc.ClientUnaryCall;
  createServiceConfig(argument: google_api_servicemanagement_v1_servicemanager_pb.CreateServiceConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_service_pb.Service>): grpc.ClientUnaryCall;
  createServiceConfig(argument: google_api_servicemanagement_v1_servicemanager_pb.CreateServiceConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_service_pb.Service>): grpc.ClientUnaryCall;
  submitConfigSource(argument: google_api_servicemanagement_v1_servicemanager_pb.SubmitConfigSourceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  submitConfigSource(argument: google_api_servicemanagement_v1_servicemanager_pb.SubmitConfigSourceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  submitConfigSource(argument: google_api_servicemanagement_v1_servicemanager_pb.SubmitConfigSourceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  listServiceRollouts(argument: google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsRequest, callback: grpc.requestCallback<google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsResponse>): grpc.ClientUnaryCall;
  listServiceRollouts(argument: google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsResponse>): grpc.ClientUnaryCall;
  listServiceRollouts(argument: google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsResponse>): grpc.ClientUnaryCall;
  getServiceRollout(argument: google_api_servicemanagement_v1_servicemanager_pb.GetServiceRolloutRequest, callback: grpc.requestCallback<google_api_servicemanagement_v1_resources_pb.Rollout>): grpc.ClientUnaryCall;
  getServiceRollout(argument: google_api_servicemanagement_v1_servicemanager_pb.GetServiceRolloutRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_servicemanagement_v1_resources_pb.Rollout>): grpc.ClientUnaryCall;
  getServiceRollout(argument: google_api_servicemanagement_v1_servicemanager_pb.GetServiceRolloutRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_servicemanagement_v1_resources_pb.Rollout>): grpc.ClientUnaryCall;
  createServiceRollout(argument: google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRolloutRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createServiceRollout(argument: google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRolloutRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createServiceRollout(argument: google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRolloutRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  generateConfigReport(argument: google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportRequest, callback: grpc.requestCallback<google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportResponse>): grpc.ClientUnaryCall;
  generateConfigReport(argument: google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportResponse>): grpc.ClientUnaryCall;
  generateConfigReport(argument: google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportResponse>): grpc.ClientUnaryCall;
}
