// GENERATED CODE -- DO NOT EDIT!

// package: google.api.servicecontrol.v1
// file: google/api/servicecontrol/v1/quota_controller.proto

import * as google_api_servicecontrol_v1_quota_controller_pb from "../../../../google/api/servicecontrol/v1/quota_controller_pb";
import * as grpc from "@grpc/grpc-js";

interface IQuotaControllerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  allocateQuota: grpc.MethodDefinition<google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaRequest, google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaResponse>;
}

export const QuotaControllerService: IQuotaControllerService;

export interface IQuotaControllerServer extends grpc.UntypedServiceImplementation {
  allocateQuota: grpc.handleUnaryCall<google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaRequest, google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaResponse>;
}

export class QuotaControllerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  allocateQuota(argument: google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaRequest, callback: grpc.requestCallback<google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaResponse>): grpc.ClientUnaryCall;
  allocateQuota(argument: google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaResponse>): grpc.ClientUnaryCall;
  allocateQuota(argument: google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_servicecontrol_v1_quota_controller_pb.AllocateQuotaResponse>): grpc.ClientUnaryCall;
}
