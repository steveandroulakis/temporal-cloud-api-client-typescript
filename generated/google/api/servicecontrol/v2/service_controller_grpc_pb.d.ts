// GENERATED CODE -- DO NOT EDIT!

// package: google.api.servicecontrol.v2
// file: google/api/servicecontrol/v2/service_controller.proto

import * as google_api_servicecontrol_v2_service_controller_pb from "../../../../google/api/servicecontrol/v2/service_controller_pb";
import * as grpc from "@grpc/grpc-js";

interface IServiceControllerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  check: grpc.MethodDefinition<google_api_servicecontrol_v2_service_controller_pb.CheckRequest, google_api_servicecontrol_v2_service_controller_pb.CheckResponse>;
  report: grpc.MethodDefinition<google_api_servicecontrol_v2_service_controller_pb.ReportRequest, google_api_servicecontrol_v2_service_controller_pb.ReportResponse>;
}

export const ServiceControllerService: IServiceControllerService;

export interface IServiceControllerServer extends grpc.UntypedServiceImplementation {
  check: grpc.handleUnaryCall<google_api_servicecontrol_v2_service_controller_pb.CheckRequest, google_api_servicecontrol_v2_service_controller_pb.CheckResponse>;
  report: grpc.handleUnaryCall<google_api_servicecontrol_v2_service_controller_pb.ReportRequest, google_api_servicecontrol_v2_service_controller_pb.ReportResponse>;
}

export class ServiceControllerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  check(argument: google_api_servicecontrol_v2_service_controller_pb.CheckRequest, callback: grpc.requestCallback<google_api_servicecontrol_v2_service_controller_pb.CheckResponse>): grpc.ClientUnaryCall;
  check(argument: google_api_servicecontrol_v2_service_controller_pb.CheckRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_servicecontrol_v2_service_controller_pb.CheckResponse>): grpc.ClientUnaryCall;
  check(argument: google_api_servicecontrol_v2_service_controller_pb.CheckRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_servicecontrol_v2_service_controller_pb.CheckResponse>): grpc.ClientUnaryCall;
  report(argument: google_api_servicecontrol_v2_service_controller_pb.ReportRequest, callback: grpc.requestCallback<google_api_servicecontrol_v2_service_controller_pb.ReportResponse>): grpc.ClientUnaryCall;
  report(argument: google_api_servicecontrol_v2_service_controller_pb.ReportRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_servicecontrol_v2_service_controller_pb.ReportResponse>): grpc.ClientUnaryCall;
  report(argument: google_api_servicecontrol_v2_service_controller_pb.ReportRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_servicecontrol_v2_service_controller_pb.ReportResponse>): grpc.ClientUnaryCall;
}
