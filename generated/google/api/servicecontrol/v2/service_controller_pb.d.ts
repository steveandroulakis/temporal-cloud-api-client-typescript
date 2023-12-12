// package: google.api.servicecontrol.v2
// file: google/api/servicecontrol/v2/service_controller.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_rpc_context_attribute_context_pb from "../../../../google/rpc/context/attribute_context_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";

export class CheckRequest extends jspb.Message {
  getServiceName(): string;
  setServiceName(value: string): void;

  getServiceConfigId(): string;
  setServiceConfigId(value: string): void;

  hasAttributes(): boolean;
  clearAttributes(): void;
  getAttributes(): google_rpc_context_attribute_context_pb.AttributeContext | undefined;
  setAttributes(value?: google_rpc_context_attribute_context_pb.AttributeContext): void;

  clearResourcesList(): void;
  getResourcesList(): Array<ResourceInfo>;
  setResourcesList(value: Array<ResourceInfo>): void;
  addResources(value?: ResourceInfo, index?: number): ResourceInfo;

  getFlags(): string;
  setFlags(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckRequest): CheckRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckRequest;
  static deserializeBinaryFromReader(message: CheckRequest, reader: jspb.BinaryReader): CheckRequest;
}

export namespace CheckRequest {
  export type AsObject = {
    serviceName: string,
    serviceConfigId: string,
    attributes?: google_rpc_context_attribute_context_pb.AttributeContext.AsObject,
    resourcesList: Array<ResourceInfo.AsObject>,
    flags: string,
  }
}

export class ResourceInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  getPermission(): string;
  setPermission(value: string): void;

  getContainer(): string;
  setContainer(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceInfo): ResourceInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceInfo;
  static deserializeBinaryFromReader(message: ResourceInfo, reader: jspb.BinaryReader): ResourceInfo;
}

export namespace ResourceInfo {
  export type AsObject = {
    name: string,
    type: string,
    permission: string,
    container: string,
    location: string,
  }
}

export class CheckResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): void;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckResponse): CheckResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckResponse;
  static deserializeBinaryFromReader(message: CheckResponse, reader: jspb.BinaryReader): CheckResponse;
}

export namespace CheckResponse {
  export type AsObject = {
    status?: google_rpc_status_pb.Status.AsObject,
    headersMap: Array<[string, string]>,
  }
}

export class ReportRequest extends jspb.Message {
  getServiceName(): string;
  setServiceName(value: string): void;

  getServiceConfigId(): string;
  setServiceConfigId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<google_rpc_context_attribute_context_pb.AttributeContext>;
  setOperationsList(value: Array<google_rpc_context_attribute_context_pb.AttributeContext>): void;
  addOperations(value?: google_rpc_context_attribute_context_pb.AttributeContext, index?: number): google_rpc_context_attribute_context_pb.AttributeContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportRequest): ReportRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportRequest;
  static deserializeBinaryFromReader(message: ReportRequest, reader: jspb.BinaryReader): ReportRequest;
}

export namespace ReportRequest {
  export type AsObject = {
    serviceName: string,
    serviceConfigId: string,
    operationsList: Array<google_rpc_context_attribute_context_pb.AttributeContext.AsObject>,
  }
}

export class ReportResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReportResponse): ReportResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportResponse;
  static deserializeBinaryFromReader(message: ReportResponse, reader: jspb.BinaryReader): ReportResponse;
}

export namespace ReportResponse {
  export type AsObject = {
  }
}

export class ResourceInfoList extends jspb.Message {
  clearResourcesList(): void;
  getResourcesList(): Array<ResourceInfo>;
  setResourcesList(value: Array<ResourceInfo>): void;
  addResources(value?: ResourceInfo, index?: number): ResourceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceInfoList.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceInfoList): ResourceInfoList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceInfoList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceInfoList;
  static deserializeBinaryFromReader(message: ResourceInfoList, reader: jspb.BinaryReader): ResourceInfoList;
}

export namespace ResourceInfoList {
  export type AsObject = {
    resourcesList: Array<ResourceInfo.AsObject>,
  }
}

