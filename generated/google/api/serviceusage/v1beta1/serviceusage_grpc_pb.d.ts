// GENERATED CODE -- DO NOT EDIT!

// package: google.api.serviceusage.v1beta1
// file: google/api/serviceusage/v1beta1/serviceusage.proto

import * as google_api_serviceusage_v1beta1_serviceusage_pb from "../../../../google/api/serviceusage/v1beta1/serviceusage_pb";
import * as google_api_serviceusage_v1beta1_resources_pb from "../../../../google/api/serviceusage/v1beta1/resources_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as grpc from "@grpc/grpc-js";

interface IServiceUsageService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  enableService: grpc.MethodDefinition<google_api_serviceusage_v1beta1_serviceusage_pb.EnableServiceRequest, google_longrunning_operations_pb.Operation>;
  disableService: grpc.MethodDefinition<google_api_serviceusage_v1beta1_serviceusage_pb.DisableServiceRequest, google_longrunning_operations_pb.Operation>;
  getService: grpc.MethodDefinition<google_api_serviceusage_v1beta1_serviceusage_pb.GetServiceRequest, google_api_serviceusage_v1beta1_resources_pb.Service>;
  listServices: grpc.MethodDefinition<google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesRequest, google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesResponse>;
  batchEnableServices: grpc.MethodDefinition<google_api_serviceusage_v1beta1_serviceusage_pb.BatchEnableServicesRequest, google_longrunning_operations_pb.Operation>;
  listConsumerQuotaMetrics: grpc.MethodDefinition<google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsRequest, google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsResponse>;
  getConsumerQuotaMetric: grpc.MethodDefinition<google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaMetricRequest, google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaMetric>;
  getConsumerQuotaLimit: grpc.MethodDefinition<google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaLimitRequest, google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaLimit>;
  createAdminOverride: grpc.MethodDefinition<google_api_serviceusage_v1beta1_serviceusage_pb.CreateAdminOverrideRequest, google_longrunning_operations_pb.Operation>;
  updateAdminOverride: grpc.MethodDefinition<google_api_serviceusage_v1beta1_serviceusage_pb.UpdateAdminOverrideRequest, google_longrunning_operations_pb.Operation>;
  deleteAdminOverride: grpc.MethodDefinition<google_api_serviceusage_v1beta1_serviceusage_pb.DeleteAdminOverrideRequest, google_longrunning_operations_pb.Operation>;
  listAdminOverrides: grpc.MethodDefinition<google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesRequest, google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesResponse>;
  importAdminOverrides: grpc.MethodDefinition<google_api_serviceusage_v1beta1_serviceusage_pb.ImportAdminOverridesRequest, google_longrunning_operations_pb.Operation>;
  createConsumerOverride: grpc.MethodDefinition<google_api_serviceusage_v1beta1_serviceusage_pb.CreateConsumerOverrideRequest, google_longrunning_operations_pb.Operation>;
  updateConsumerOverride: grpc.MethodDefinition<google_api_serviceusage_v1beta1_serviceusage_pb.UpdateConsumerOverrideRequest, google_longrunning_operations_pb.Operation>;
  deleteConsumerOverride: grpc.MethodDefinition<google_api_serviceusage_v1beta1_serviceusage_pb.DeleteConsumerOverrideRequest, google_longrunning_operations_pb.Operation>;
  listConsumerOverrides: grpc.MethodDefinition<google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesRequest, google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesResponse>;
  importConsumerOverrides: grpc.MethodDefinition<google_api_serviceusage_v1beta1_serviceusage_pb.ImportConsumerOverridesRequest, google_longrunning_operations_pb.Operation>;
  generateServiceIdentity: grpc.MethodDefinition<google_api_serviceusage_v1beta1_serviceusage_pb.GenerateServiceIdentityRequest, google_longrunning_operations_pb.Operation>;
}

export const ServiceUsageService: IServiceUsageService;

export interface IServiceUsageServer extends grpc.UntypedServiceImplementation {
  enableService: grpc.handleUnaryCall<google_api_serviceusage_v1beta1_serviceusage_pb.EnableServiceRequest, google_longrunning_operations_pb.Operation>;
  disableService: grpc.handleUnaryCall<google_api_serviceusage_v1beta1_serviceusage_pb.DisableServiceRequest, google_longrunning_operations_pb.Operation>;
  getService: grpc.handleUnaryCall<google_api_serviceusage_v1beta1_serviceusage_pb.GetServiceRequest, google_api_serviceusage_v1beta1_resources_pb.Service>;
  listServices: grpc.handleUnaryCall<google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesRequest, google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesResponse>;
  batchEnableServices: grpc.handleUnaryCall<google_api_serviceusage_v1beta1_serviceusage_pb.BatchEnableServicesRequest, google_longrunning_operations_pb.Operation>;
  listConsumerQuotaMetrics: grpc.handleUnaryCall<google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsRequest, google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsResponse>;
  getConsumerQuotaMetric: grpc.handleUnaryCall<google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaMetricRequest, google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaMetric>;
  getConsumerQuotaLimit: grpc.handleUnaryCall<google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaLimitRequest, google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaLimit>;
  createAdminOverride: grpc.handleUnaryCall<google_api_serviceusage_v1beta1_serviceusage_pb.CreateAdminOverrideRequest, google_longrunning_operations_pb.Operation>;
  updateAdminOverride: grpc.handleUnaryCall<google_api_serviceusage_v1beta1_serviceusage_pb.UpdateAdminOverrideRequest, google_longrunning_operations_pb.Operation>;
  deleteAdminOverride: grpc.handleUnaryCall<google_api_serviceusage_v1beta1_serviceusage_pb.DeleteAdminOverrideRequest, google_longrunning_operations_pb.Operation>;
  listAdminOverrides: grpc.handleUnaryCall<google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesRequest, google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesResponse>;
  importAdminOverrides: grpc.handleUnaryCall<google_api_serviceusage_v1beta1_serviceusage_pb.ImportAdminOverridesRequest, google_longrunning_operations_pb.Operation>;
  createConsumerOverride: grpc.handleUnaryCall<google_api_serviceusage_v1beta1_serviceusage_pb.CreateConsumerOverrideRequest, google_longrunning_operations_pb.Operation>;
  updateConsumerOverride: grpc.handleUnaryCall<google_api_serviceusage_v1beta1_serviceusage_pb.UpdateConsumerOverrideRequest, google_longrunning_operations_pb.Operation>;
  deleteConsumerOverride: grpc.handleUnaryCall<google_api_serviceusage_v1beta1_serviceusage_pb.DeleteConsumerOverrideRequest, google_longrunning_operations_pb.Operation>;
  listConsumerOverrides: grpc.handleUnaryCall<google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesRequest, google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesResponse>;
  importConsumerOverrides: grpc.handleUnaryCall<google_api_serviceusage_v1beta1_serviceusage_pb.ImportConsumerOverridesRequest, google_longrunning_operations_pb.Operation>;
  generateServiceIdentity: grpc.handleUnaryCall<google_api_serviceusage_v1beta1_serviceusage_pb.GenerateServiceIdentityRequest, google_longrunning_operations_pb.Operation>;
}

export class ServiceUsageClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  enableService(argument: google_api_serviceusage_v1beta1_serviceusage_pb.EnableServiceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  enableService(argument: google_api_serviceusage_v1beta1_serviceusage_pb.EnableServiceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  enableService(argument: google_api_serviceusage_v1beta1_serviceusage_pb.EnableServiceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  disableService(argument: google_api_serviceusage_v1beta1_serviceusage_pb.DisableServiceRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  disableService(argument: google_api_serviceusage_v1beta1_serviceusage_pb.DisableServiceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  disableService(argument: google_api_serviceusage_v1beta1_serviceusage_pb.DisableServiceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getService(argument: google_api_serviceusage_v1beta1_serviceusage_pb.GetServiceRequest, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_resources_pb.Service>): grpc.ClientUnaryCall;
  getService(argument: google_api_serviceusage_v1beta1_serviceusage_pb.GetServiceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_resources_pb.Service>): grpc.ClientUnaryCall;
  getService(argument: google_api_serviceusage_v1beta1_serviceusage_pb.GetServiceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_resources_pb.Service>): grpc.ClientUnaryCall;
  listServices(argument: google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesRequest, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesResponse>): grpc.ClientUnaryCall;
  listServices(argument: google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesResponse>): grpc.ClientUnaryCall;
  listServices(argument: google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_serviceusage_pb.ListServicesResponse>): grpc.ClientUnaryCall;
  batchEnableServices(argument: google_api_serviceusage_v1beta1_serviceusage_pb.BatchEnableServicesRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchEnableServices(argument: google_api_serviceusage_v1beta1_serviceusage_pb.BatchEnableServicesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  batchEnableServices(argument: google_api_serviceusage_v1beta1_serviceusage_pb.BatchEnableServicesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  listConsumerQuotaMetrics(argument: google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsRequest, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsResponse>): grpc.ClientUnaryCall;
  listConsumerQuotaMetrics(argument: google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsResponse>): grpc.ClientUnaryCall;
  listConsumerQuotaMetrics(argument: google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerQuotaMetricsResponse>): grpc.ClientUnaryCall;
  getConsumerQuotaMetric(argument: google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaMetricRequest, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaMetric>): grpc.ClientUnaryCall;
  getConsumerQuotaMetric(argument: google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaMetricRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaMetric>): grpc.ClientUnaryCall;
  getConsumerQuotaMetric(argument: google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaMetricRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaMetric>): grpc.ClientUnaryCall;
  getConsumerQuotaLimit(argument: google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaLimitRequest, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaLimit>): grpc.ClientUnaryCall;
  getConsumerQuotaLimit(argument: google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaLimitRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaLimit>): grpc.ClientUnaryCall;
  getConsumerQuotaLimit(argument: google_api_serviceusage_v1beta1_serviceusage_pb.GetConsumerQuotaLimitRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_resources_pb.ConsumerQuotaLimit>): grpc.ClientUnaryCall;
  createAdminOverride(argument: google_api_serviceusage_v1beta1_serviceusage_pb.CreateAdminOverrideRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createAdminOverride(argument: google_api_serviceusage_v1beta1_serviceusage_pb.CreateAdminOverrideRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createAdminOverride(argument: google_api_serviceusage_v1beta1_serviceusage_pb.CreateAdminOverrideRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateAdminOverride(argument: google_api_serviceusage_v1beta1_serviceusage_pb.UpdateAdminOverrideRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateAdminOverride(argument: google_api_serviceusage_v1beta1_serviceusage_pb.UpdateAdminOverrideRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateAdminOverride(argument: google_api_serviceusage_v1beta1_serviceusage_pb.UpdateAdminOverrideRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteAdminOverride(argument: google_api_serviceusage_v1beta1_serviceusage_pb.DeleteAdminOverrideRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteAdminOverride(argument: google_api_serviceusage_v1beta1_serviceusage_pb.DeleteAdminOverrideRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteAdminOverride(argument: google_api_serviceusage_v1beta1_serviceusage_pb.DeleteAdminOverrideRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  listAdminOverrides(argument: google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesRequest, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesResponse>): grpc.ClientUnaryCall;
  listAdminOverrides(argument: google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesResponse>): grpc.ClientUnaryCall;
  listAdminOverrides(argument: google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_serviceusage_pb.ListAdminOverridesResponse>): grpc.ClientUnaryCall;
  importAdminOverrides(argument: google_api_serviceusage_v1beta1_serviceusage_pb.ImportAdminOverridesRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importAdminOverrides(argument: google_api_serviceusage_v1beta1_serviceusage_pb.ImportAdminOverridesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importAdminOverrides(argument: google_api_serviceusage_v1beta1_serviceusage_pb.ImportAdminOverridesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createConsumerOverride(argument: google_api_serviceusage_v1beta1_serviceusage_pb.CreateConsumerOverrideRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createConsumerOverride(argument: google_api_serviceusage_v1beta1_serviceusage_pb.CreateConsumerOverrideRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createConsumerOverride(argument: google_api_serviceusage_v1beta1_serviceusage_pb.CreateConsumerOverrideRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateConsumerOverride(argument: google_api_serviceusage_v1beta1_serviceusage_pb.UpdateConsumerOverrideRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateConsumerOverride(argument: google_api_serviceusage_v1beta1_serviceusage_pb.UpdateConsumerOverrideRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateConsumerOverride(argument: google_api_serviceusage_v1beta1_serviceusage_pb.UpdateConsumerOverrideRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteConsumerOverride(argument: google_api_serviceusage_v1beta1_serviceusage_pb.DeleteConsumerOverrideRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteConsumerOverride(argument: google_api_serviceusage_v1beta1_serviceusage_pb.DeleteConsumerOverrideRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteConsumerOverride(argument: google_api_serviceusage_v1beta1_serviceusage_pb.DeleteConsumerOverrideRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  listConsumerOverrides(argument: google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesRequest, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesResponse>): grpc.ClientUnaryCall;
  listConsumerOverrides(argument: google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesResponse>): grpc.ClientUnaryCall;
  listConsumerOverrides(argument: google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_serviceusage_v1beta1_serviceusage_pb.ListConsumerOverridesResponse>): grpc.ClientUnaryCall;
  importConsumerOverrides(argument: google_api_serviceusage_v1beta1_serviceusage_pb.ImportConsumerOverridesRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importConsumerOverrides(argument: google_api_serviceusage_v1beta1_serviceusage_pb.ImportConsumerOverridesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importConsumerOverrides(argument: google_api_serviceusage_v1beta1_serviceusage_pb.ImportConsumerOverridesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  generateServiceIdentity(argument: google_api_serviceusage_v1beta1_serviceusage_pb.GenerateServiceIdentityRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  generateServiceIdentity(argument: google_api_serviceusage_v1beta1_serviceusage_pb.GenerateServiceIdentityRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  generateServiceIdentity(argument: google_api_serviceusage_v1beta1_serviceusage_pb.GenerateServiceIdentityRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}
