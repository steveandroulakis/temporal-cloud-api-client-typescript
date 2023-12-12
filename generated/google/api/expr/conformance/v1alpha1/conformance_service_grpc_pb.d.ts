// GENERATED CODE -- DO NOT EDIT!

// package: google.api.expr.conformance.v1alpha1
// file: google/api/expr/conformance/v1alpha1/conformance_service.proto

import * as google_api_expr_conformance_v1alpha1_conformance_service_pb from "../../../../../google/api/expr/conformance/v1alpha1/conformance_service_pb";
import * as grpc from "@grpc/grpc-js";

interface IConformanceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  parse: grpc.MethodDefinition<google_api_expr_conformance_v1alpha1_conformance_service_pb.ParseRequest, google_api_expr_conformance_v1alpha1_conformance_service_pb.ParseResponse>;
  check: grpc.MethodDefinition<google_api_expr_conformance_v1alpha1_conformance_service_pb.CheckRequest, google_api_expr_conformance_v1alpha1_conformance_service_pb.CheckResponse>;
  eval: grpc.MethodDefinition<google_api_expr_conformance_v1alpha1_conformance_service_pb.EvalRequest, google_api_expr_conformance_v1alpha1_conformance_service_pb.EvalResponse>;
}

export const ConformanceServiceService: IConformanceServiceService;

export interface IConformanceServiceServer extends grpc.UntypedServiceImplementation {
  parse: grpc.handleUnaryCall<google_api_expr_conformance_v1alpha1_conformance_service_pb.ParseRequest, google_api_expr_conformance_v1alpha1_conformance_service_pb.ParseResponse>;
  check: grpc.handleUnaryCall<google_api_expr_conformance_v1alpha1_conformance_service_pb.CheckRequest, google_api_expr_conformance_v1alpha1_conformance_service_pb.CheckResponse>;
  eval: grpc.handleUnaryCall<google_api_expr_conformance_v1alpha1_conformance_service_pb.EvalRequest, google_api_expr_conformance_v1alpha1_conformance_service_pb.EvalResponse>;
}

export class ConformanceServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  parse(argument: google_api_expr_conformance_v1alpha1_conformance_service_pb.ParseRequest, callback: grpc.requestCallback<google_api_expr_conformance_v1alpha1_conformance_service_pb.ParseResponse>): grpc.ClientUnaryCall;
  parse(argument: google_api_expr_conformance_v1alpha1_conformance_service_pb.ParseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_expr_conformance_v1alpha1_conformance_service_pb.ParseResponse>): grpc.ClientUnaryCall;
  parse(argument: google_api_expr_conformance_v1alpha1_conformance_service_pb.ParseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_expr_conformance_v1alpha1_conformance_service_pb.ParseResponse>): grpc.ClientUnaryCall;
  check(argument: google_api_expr_conformance_v1alpha1_conformance_service_pb.CheckRequest, callback: grpc.requestCallback<google_api_expr_conformance_v1alpha1_conformance_service_pb.CheckResponse>): grpc.ClientUnaryCall;
  check(argument: google_api_expr_conformance_v1alpha1_conformance_service_pb.CheckRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_expr_conformance_v1alpha1_conformance_service_pb.CheckResponse>): grpc.ClientUnaryCall;
  check(argument: google_api_expr_conformance_v1alpha1_conformance_service_pb.CheckRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_expr_conformance_v1alpha1_conformance_service_pb.CheckResponse>): grpc.ClientUnaryCall;
  eval(argument: google_api_expr_conformance_v1alpha1_conformance_service_pb.EvalRequest, callback: grpc.requestCallback<google_api_expr_conformance_v1alpha1_conformance_service_pb.EvalResponse>): grpc.ClientUnaryCall;
  eval(argument: google_api_expr_conformance_v1alpha1_conformance_service_pb.EvalRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_api_expr_conformance_v1alpha1_conformance_service_pb.EvalResponse>): grpc.ClientUnaryCall;
  eval(argument: google_api_expr_conformance_v1alpha1_conformance_service_pb.EvalRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_api_expr_conformance_v1alpha1_conformance_service_pb.EvalResponse>): grpc.ClientUnaryCall;
}
