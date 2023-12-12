// package: google.api.cloudquotas.v1
// file: google/api/cloudquotas/v1/resources.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class QuotaInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getQuotaId(): string;
  setQuotaId(value: string): void;

  getMetric(): string;
  setMetric(value: string): void;

  getService(): string;
  setService(value: string): void;

  getIsPrecise(): boolean;
  setIsPrecise(value: boolean): void;

  getRefreshInterval(): string;
  setRefreshInterval(value: string): void;

  getContainerType(): QuotaInfo.ContainerTypeMap[keyof QuotaInfo.ContainerTypeMap];
  setContainerType(value: QuotaInfo.ContainerTypeMap[keyof QuotaInfo.ContainerTypeMap]): void;

  clearDimensionsList(): void;
  getDimensionsList(): Array<string>;
  setDimensionsList(value: Array<string>): void;
  addDimensions(value: string, index?: number): string;

  getMetricDisplayName(): string;
  setMetricDisplayName(value: string): void;

  getQuotaDisplayName(): string;
  setQuotaDisplayName(value: string): void;

  getMetricUnit(): string;
  setMetricUnit(value: string): void;

  hasQuotaIncreaseEligibility(): boolean;
  clearQuotaIncreaseEligibility(): void;
  getQuotaIncreaseEligibility(): QuotaIncreaseEligibility | undefined;
  setQuotaIncreaseEligibility(value?: QuotaIncreaseEligibility): void;

  getIsFixed(): boolean;
  setIsFixed(value: boolean): void;

  clearDimensionsInfosList(): void;
  getDimensionsInfosList(): Array<DimensionsInfo>;
  setDimensionsInfosList(value: Array<DimensionsInfo>): void;
  addDimensionsInfos(value?: DimensionsInfo, index?: number): DimensionsInfo;

  getIsConcurrent(): boolean;
  setIsConcurrent(value: boolean): void;

  getServiceRequestQuotaUri(): string;
  setServiceRequestQuotaUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuotaInfo.AsObject;
  static toObject(includeInstance: boolean, msg: QuotaInfo): QuotaInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuotaInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuotaInfo;
  static deserializeBinaryFromReader(message: QuotaInfo, reader: jspb.BinaryReader): QuotaInfo;
}

export namespace QuotaInfo {
  export type AsObject = {
    name: string,
    quotaId: string,
    metric: string,
    service: string,
    isPrecise: boolean,
    refreshInterval: string,
    containerType: QuotaInfo.ContainerTypeMap[keyof QuotaInfo.ContainerTypeMap],
    dimensionsList: Array<string>,
    metricDisplayName: string,
    quotaDisplayName: string,
    metricUnit: string,
    quotaIncreaseEligibility?: QuotaIncreaseEligibility.AsObject,
    isFixed: boolean,
    dimensionsInfosList: Array<DimensionsInfo.AsObject>,
    isConcurrent: boolean,
    serviceRequestQuotaUri: string,
  }

  export interface ContainerTypeMap {
    CONTAINER_TYPE_UNSPECIFIED: 0;
    PROJECT: 1;
    FOLDER: 2;
    ORGANIZATION: 3;
  }

  export const ContainerType: ContainerTypeMap;
}

export class QuotaIncreaseEligibility extends jspb.Message {
  getIsEligible(): boolean;
  setIsEligible(value: boolean): void;

  getIneligibilityReason(): QuotaIncreaseEligibility.IneligibilityReasonMap[keyof QuotaIncreaseEligibility.IneligibilityReasonMap];
  setIneligibilityReason(value: QuotaIncreaseEligibility.IneligibilityReasonMap[keyof QuotaIncreaseEligibility.IneligibilityReasonMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuotaIncreaseEligibility.AsObject;
  static toObject(includeInstance: boolean, msg: QuotaIncreaseEligibility): QuotaIncreaseEligibility.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuotaIncreaseEligibility, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuotaIncreaseEligibility;
  static deserializeBinaryFromReader(message: QuotaIncreaseEligibility, reader: jspb.BinaryReader): QuotaIncreaseEligibility;
}

export namespace QuotaIncreaseEligibility {
  export type AsObject = {
    isEligible: boolean,
    ineligibilityReason: QuotaIncreaseEligibility.IneligibilityReasonMap[keyof QuotaIncreaseEligibility.IneligibilityReasonMap],
  }

  export interface IneligibilityReasonMap {
    INELIGIBILITY_REASON_UNSPECIFIED: 0;
    NO_VALID_BILLING_ACCOUNT: 2;
    OTHER: 3;
  }

  export const IneligibilityReason: IneligibilityReasonMap;
}

export class QuotaPreference extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDimensionsMap(): jspb.Map<string, string>;
  clearDimensionsMap(): void;
  hasQuotaConfig(): boolean;
  clearQuotaConfig(): void;
  getQuotaConfig(): QuotaConfig | undefined;
  setQuotaConfig(value?: QuotaConfig): void;

  getEtag(): string;
  setEtag(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getService(): string;
  setService(value: string): void;

  getQuotaId(): string;
  setQuotaId(value: string): void;

  getReconciling(): boolean;
  setReconciling(value: boolean): void;

  getJustification(): string;
  setJustification(value: string): void;

  getContactEmail(): string;
  setContactEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuotaPreference.AsObject;
  static toObject(includeInstance: boolean, msg: QuotaPreference): QuotaPreference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuotaPreference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuotaPreference;
  static deserializeBinaryFromReader(message: QuotaPreference, reader: jspb.BinaryReader): QuotaPreference;
}

export namespace QuotaPreference {
  export type AsObject = {
    name: string,
    dimensionsMap: Array<[string, string]>,
    quotaConfig?: QuotaConfig.AsObject,
    etag: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    service: string,
    quotaId: string,
    reconciling: boolean,
    justification: string,
    contactEmail: string,
  }
}

export class QuotaConfig extends jspb.Message {
  getPreferredValue(): number;
  setPreferredValue(value: number): void;

  getStateDetail(): string;
  setStateDetail(value: string): void;

  hasGrantedValue(): boolean;
  clearGrantedValue(): void;
  getGrantedValue(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setGrantedValue(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getTraceId(): string;
  setTraceId(value: string): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;
  getRequestOrigin(): QuotaConfig.OriginMap[keyof QuotaConfig.OriginMap];
  setRequestOrigin(value: QuotaConfig.OriginMap[keyof QuotaConfig.OriginMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuotaConfig.AsObject;
  static toObject(includeInstance: boolean, msg: QuotaConfig): QuotaConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuotaConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuotaConfig;
  static deserializeBinaryFromReader(message: QuotaConfig, reader: jspb.BinaryReader): QuotaConfig;
}

export namespace QuotaConfig {
  export type AsObject = {
    preferredValue: number,
    stateDetail: string,
    grantedValue?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    traceId: string,
    annotationsMap: Array<[string, string]>,
    requestOrigin: QuotaConfig.OriginMap[keyof QuotaConfig.OriginMap],
  }

  export interface OriginMap {
    ORIGIN_UNSPECIFIED: 0;
    CLOUD_CONSOLE: 1;
    AUTO_ADJUSTER: 2;
  }

  export const Origin: OriginMap;
}

export class DimensionsInfo extends jspb.Message {
  getDimensionsMap(): jspb.Map<string, string>;
  clearDimensionsMap(): void;
  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): QuotaDetails | undefined;
  setDetails(value?: QuotaDetails): void;

  clearApplicableLocationsList(): void;
  getApplicableLocationsList(): Array<string>;
  setApplicableLocationsList(value: Array<string>): void;
  addApplicableLocations(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DimensionsInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DimensionsInfo): DimensionsInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DimensionsInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DimensionsInfo;
  static deserializeBinaryFromReader(message: DimensionsInfo, reader: jspb.BinaryReader): DimensionsInfo;
}

export namespace DimensionsInfo {
  export type AsObject = {
    dimensionsMap: Array<[string, string]>,
    details?: QuotaDetails.AsObject,
    applicableLocationsList: Array<string>,
  }
}

export class QuotaDetails extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuotaDetails.AsObject;
  static toObject(includeInstance: boolean, msg: QuotaDetails): QuotaDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuotaDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuotaDetails;
  static deserializeBinaryFromReader(message: QuotaDetails, reader: jspb.BinaryReader): QuotaDetails;
}

export namespace QuotaDetails {
  export type AsObject = {
    value: number,
  }
}

export interface QuotaSafetyCheckMap {
  QUOTA_SAFETY_CHECK_UNSPECIFIED: 0;
  LIMIT_DECREASE_BELOW_USAGE: 1;
  LIMIT_DECREASE_PERCENTAGE_TOO_HIGH: 2;
}

export const QuotaSafetyCheck: QuotaSafetyCheckMap;

