// package: google.api.cloudquotas.v1
// file: google/api/cloudquotas/v1/cloudquotas.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_cloudquotas_v1_resources_pb from "../../../../google/api/cloudquotas/v1/resources_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class ListQuotaInfosRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListQuotaInfosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListQuotaInfosRequest): ListQuotaInfosRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListQuotaInfosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListQuotaInfosRequest;
  static deserializeBinaryFromReader(message: ListQuotaInfosRequest, reader: jspb.BinaryReader): ListQuotaInfosRequest;
}

export namespace ListQuotaInfosRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListQuotaInfosResponse extends jspb.Message {
  clearQuotaInfosList(): void;
  getQuotaInfosList(): Array<google_api_cloudquotas_v1_resources_pb.QuotaInfo>;
  setQuotaInfosList(value: Array<google_api_cloudquotas_v1_resources_pb.QuotaInfo>): void;
  addQuotaInfos(value?: google_api_cloudquotas_v1_resources_pb.QuotaInfo, index?: number): google_api_cloudquotas_v1_resources_pb.QuotaInfo;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListQuotaInfosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListQuotaInfosResponse): ListQuotaInfosResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListQuotaInfosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListQuotaInfosResponse;
  static deserializeBinaryFromReader(message: ListQuotaInfosResponse, reader: jspb.BinaryReader): ListQuotaInfosResponse;
}

export namespace ListQuotaInfosResponse {
  export type AsObject = {
    quotaInfosList: Array<google_api_cloudquotas_v1_resources_pb.QuotaInfo.AsObject>,
    nextPageToken: string,
  }
}

export class GetQuotaInfoRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQuotaInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetQuotaInfoRequest): GetQuotaInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQuotaInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQuotaInfoRequest;
  static deserializeBinaryFromReader(message: GetQuotaInfoRequest, reader: jspb.BinaryReader): GetQuotaInfoRequest;
}

export namespace GetQuotaInfoRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListQuotaPreferencesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListQuotaPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListQuotaPreferencesRequest): ListQuotaPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListQuotaPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListQuotaPreferencesRequest;
  static deserializeBinaryFromReader(message: ListQuotaPreferencesRequest, reader: jspb.BinaryReader): ListQuotaPreferencesRequest;
}

export namespace ListQuotaPreferencesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    filter: string,
    orderBy: string,
  }
}

export class ListQuotaPreferencesResponse extends jspb.Message {
  clearQuotaPreferencesList(): void;
  getQuotaPreferencesList(): Array<google_api_cloudquotas_v1_resources_pb.QuotaPreference>;
  setQuotaPreferencesList(value: Array<google_api_cloudquotas_v1_resources_pb.QuotaPreference>): void;
  addQuotaPreferences(value?: google_api_cloudquotas_v1_resources_pb.QuotaPreference, index?: number): google_api_cloudquotas_v1_resources_pb.QuotaPreference;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  clearUnreachableList(): void;
  getUnreachableList(): Array<string>;
  setUnreachableList(value: Array<string>): void;
  addUnreachable(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListQuotaPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListQuotaPreferencesResponse): ListQuotaPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListQuotaPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListQuotaPreferencesResponse;
  static deserializeBinaryFromReader(message: ListQuotaPreferencesResponse, reader: jspb.BinaryReader): ListQuotaPreferencesResponse;
}

export namespace ListQuotaPreferencesResponse {
  export type AsObject = {
    quotaPreferencesList: Array<google_api_cloudquotas_v1_resources_pb.QuotaPreference.AsObject>,
    nextPageToken: string,
    unreachableList: Array<string>,
  }
}

export class GetQuotaPreferenceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQuotaPreferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetQuotaPreferenceRequest): GetQuotaPreferenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQuotaPreferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQuotaPreferenceRequest;
  static deserializeBinaryFromReader(message: GetQuotaPreferenceRequest, reader: jspb.BinaryReader): GetQuotaPreferenceRequest;
}

export namespace GetQuotaPreferenceRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateQuotaPreferenceRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getQuotaPreferenceId(): string;
  setQuotaPreferenceId(value: string): void;

  hasQuotaPreference(): boolean;
  clearQuotaPreference(): void;
  getQuotaPreference(): google_api_cloudquotas_v1_resources_pb.QuotaPreference | undefined;
  setQuotaPreference(value?: google_api_cloudquotas_v1_resources_pb.QuotaPreference): void;

  clearIgnoreSafetyChecksList(): void;
  getIgnoreSafetyChecksList(): Array<google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap[keyof google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap]>;
  setIgnoreSafetyChecksList(value: Array<google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap[keyof google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap]>): void;
  addIgnoreSafetyChecks(value: google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap[keyof google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap], index?: number): google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap[keyof google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateQuotaPreferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateQuotaPreferenceRequest): CreateQuotaPreferenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateQuotaPreferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateQuotaPreferenceRequest;
  static deserializeBinaryFromReader(message: CreateQuotaPreferenceRequest, reader: jspb.BinaryReader): CreateQuotaPreferenceRequest;
}

export namespace CreateQuotaPreferenceRequest {
  export type AsObject = {
    parent: string,
    quotaPreferenceId: string,
    quotaPreference?: google_api_cloudquotas_v1_resources_pb.QuotaPreference.AsObject,
    ignoreSafetyChecksList: Array<google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap[keyof google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap]>,
  }
}

export class UpdateQuotaPreferenceRequest extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasQuotaPreference(): boolean;
  clearQuotaPreference(): void;
  getQuotaPreference(): google_api_cloudquotas_v1_resources_pb.QuotaPreference | undefined;
  setQuotaPreference(value?: google_api_cloudquotas_v1_resources_pb.QuotaPreference): void;

  getAllowMissing(): boolean;
  setAllowMissing(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  clearIgnoreSafetyChecksList(): void;
  getIgnoreSafetyChecksList(): Array<google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap[keyof google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap]>;
  setIgnoreSafetyChecksList(value: Array<google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap[keyof google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap]>): void;
  addIgnoreSafetyChecks(value: google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap[keyof google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap], index?: number): google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap[keyof google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateQuotaPreferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateQuotaPreferenceRequest): UpdateQuotaPreferenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateQuotaPreferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateQuotaPreferenceRequest;
  static deserializeBinaryFromReader(message: UpdateQuotaPreferenceRequest, reader: jspb.BinaryReader): UpdateQuotaPreferenceRequest;
}

export namespace UpdateQuotaPreferenceRequest {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    quotaPreference?: google_api_cloudquotas_v1_resources_pb.QuotaPreference.AsObject,
    allowMissing: boolean,
    validateOnly: boolean,
    ignoreSafetyChecksList: Array<google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap[keyof google_api_cloudquotas_v1_resources_pb.QuotaSafetyCheckMap]>,
  }
}

