// package: temporal.api.cloud.namespace.v1
// file: temporal/api/cloud/namespace/v1/message.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CertificateFilterSpec extends jspb.Message {
  getCommonName(): string;
  setCommonName(value: string): void;

  getOrganization(): string;
  setOrganization(value: string): void;

  getOrganizationalUnit(): string;
  setOrganizationalUnit(value: string): void;

  getSubjectAlternativeName(): string;
  setSubjectAlternativeName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CertificateFilterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CertificateFilterSpec): CertificateFilterSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CertificateFilterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CertificateFilterSpec;
  static deserializeBinaryFromReader(message: CertificateFilterSpec, reader: jspb.BinaryReader): CertificateFilterSpec;
}

export namespace CertificateFilterSpec {
  export type AsObject = {
    commonName: string,
    organization: string,
    organizationalUnit: string,
    subjectAlternativeName: string,
  }
}

export class MtlsAuthSpec extends jspb.Message {
  getAcceptedClientCa(): string;
  setAcceptedClientCa(value: string): void;

  clearCertificateFiltersList(): void;
  getCertificateFiltersList(): Array<CertificateFilterSpec>;
  setCertificateFiltersList(value: Array<CertificateFilterSpec>): void;
  addCertificateFilters(value?: CertificateFilterSpec, index?: number): CertificateFilterSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MtlsAuthSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MtlsAuthSpec): MtlsAuthSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MtlsAuthSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MtlsAuthSpec;
  static deserializeBinaryFromReader(message: MtlsAuthSpec, reader: jspb.BinaryReader): MtlsAuthSpec;
}

export namespace MtlsAuthSpec {
  export type AsObject = {
    acceptedClientCa: string,
    certificateFiltersList: Array<CertificateFilterSpec.AsObject>,
  }
}

export class CodecServerSpec extends jspb.Message {
  getEndpoint(): string;
  setEndpoint(value: string): void;

  getPassAccessToken(): boolean;
  setPassAccessToken(value: boolean): void;

  getIncludeCrossOriginCredentials(): boolean;
  setIncludeCrossOriginCredentials(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodecServerSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CodecServerSpec): CodecServerSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodecServerSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodecServerSpec;
  static deserializeBinaryFromReader(message: CodecServerSpec, reader: jspb.BinaryReader): CodecServerSpec;
}

export namespace CodecServerSpec {
  export type AsObject = {
    endpoint: string,
    passAccessToken: boolean,
    includeCrossOriginCredentials: boolean,
  }
}

export class NamespaceSpec extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearRegionsList(): void;
  getRegionsList(): Array<string>;
  setRegionsList(value: Array<string>): void;
  addRegions(value: string, index?: number): string;

  getRetentionDays(): number;
  setRetentionDays(value: number): void;

  hasMtlsAuth(): boolean;
  clearMtlsAuth(): void;
  getMtlsAuth(): MtlsAuthSpec | undefined;
  setMtlsAuth(value?: MtlsAuthSpec): void;

  getCustomSearchAttributesMap(): jspb.Map<string, string>;
  clearCustomSearchAttributesMap(): void;
  hasCodecServer(): boolean;
  clearCodecServer(): void;
  getCodecServer(): CodecServerSpec | undefined;
  setCodecServer(value?: CodecServerSpec): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamespaceSpec.AsObject;
  static toObject(includeInstance: boolean, msg: NamespaceSpec): NamespaceSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NamespaceSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamespaceSpec;
  static deserializeBinaryFromReader(message: NamespaceSpec, reader: jspb.BinaryReader): NamespaceSpec;
}

export namespace NamespaceSpec {
  export type AsObject = {
    name: string,
    regionsList: Array<string>,
    retentionDays: number,
    mtlsAuth?: MtlsAuthSpec.AsObject,
    customSearchAttributesMap: Array<[string, string]>,
    codecServer?: CodecServerSpec.AsObject,
  }
}

export class Endpoints extends jspb.Message {
  getWebAddress(): string;
  setWebAddress(value: string): void;

  getGrpcAddress(): string;
  setGrpcAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Endpoints.AsObject;
  static toObject(includeInstance: boolean, msg: Endpoints): Endpoints.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Endpoints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Endpoints;
  static deserializeBinaryFromReader(message: Endpoints, reader: jspb.BinaryReader): Endpoints;
}

export namespace Endpoints {
  export type AsObject = {
    webAddress: string,
    grpcAddress: string,
  }
}

export class Limits extends jspb.Message {
  getActionsPerSecondLimit(): number;
  setActionsPerSecondLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Limits.AsObject;
  static toObject(includeInstance: boolean, msg: Limits): Limits.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Limits, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Limits;
  static deserializeBinaryFromReader(message: Limits, reader: jspb.BinaryReader): Limits;
}

export namespace Limits {
  export type AsObject = {
    actionsPerSecondLimit: number,
  }
}

export class AWSPrivateLinkInfo extends jspb.Message {
  clearAllowedPrincipalArnsList(): void;
  getAllowedPrincipalArnsList(): Array<string>;
  setAllowedPrincipalArnsList(value: Array<string>): void;
  addAllowedPrincipalArns(value: string, index?: number): string;

  clearVpcEndpointServiceNamesList(): void;
  getVpcEndpointServiceNamesList(): Array<string>;
  setVpcEndpointServiceNamesList(value: Array<string>): void;
  addVpcEndpointServiceNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AWSPrivateLinkInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AWSPrivateLinkInfo): AWSPrivateLinkInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AWSPrivateLinkInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AWSPrivateLinkInfo;
  static deserializeBinaryFromReader(message: AWSPrivateLinkInfo, reader: jspb.BinaryReader): AWSPrivateLinkInfo;
}

export namespace AWSPrivateLinkInfo {
  export type AsObject = {
    allowedPrincipalArnsList: Array<string>,
    vpcEndpointServiceNamesList: Array<string>,
  }
}

export class PrivateConnectivity extends jspb.Message {
  getRegion(): string;
  setRegion(value: string): void;

  hasAwsPrivateLink(): boolean;
  clearAwsPrivateLink(): void;
  getAwsPrivateLink(): AWSPrivateLinkInfo | undefined;
  setAwsPrivateLink(value?: AWSPrivateLinkInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrivateConnectivity.AsObject;
  static toObject(includeInstance: boolean, msg: PrivateConnectivity): PrivateConnectivity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrivateConnectivity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrivateConnectivity;
  static deserializeBinaryFromReader(message: PrivateConnectivity, reader: jspb.BinaryReader): PrivateConnectivity;
}

export namespace PrivateConnectivity {
  export type AsObject = {
    region: string,
    awsPrivateLink?: AWSPrivateLinkInfo.AsObject,
  }
}

export class Namespace extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getResourceVersion(): string;
  setResourceVersion(value: string): void;

  hasSpec(): boolean;
  clearSpec(): void;
  getSpec(): NamespaceSpec | undefined;
  setSpec(value?: NamespaceSpec): void;

  getState(): string;
  setState(value: string): void;

  getAsyncOperationId(): string;
  setAsyncOperationId(value: string): void;

  hasEndpoints(): boolean;
  clearEndpoints(): void;
  getEndpoints(): Endpoints | undefined;
  setEndpoints(value?: Endpoints): void;

  getActiveRegion(): string;
  setActiveRegion(value: string): void;

  hasLimits(): boolean;
  clearLimits(): void;
  getLimits(): Limits | undefined;
  setLimits(value?: Limits): void;

  clearPrivateConnectivitiesList(): void;
  getPrivateConnectivitiesList(): Array<PrivateConnectivity>;
  setPrivateConnectivitiesList(value: Array<PrivateConnectivity>): void;
  addPrivateConnectivities(value?: PrivateConnectivity, index?: number): PrivateConnectivity;

  hasCreatedTime(): boolean;
  clearCreatedTime(): void;
  getCreatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastModifiedTime(): boolean;
  clearLastModifiedTime(): void;
  getLastModifiedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastModifiedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Namespace.AsObject;
  static toObject(includeInstance: boolean, msg: Namespace): Namespace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Namespace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Namespace;
  static deserializeBinaryFromReader(message: Namespace, reader: jspb.BinaryReader): Namespace;
}

export namespace Namespace {
  export type AsObject = {
    namespace: string,
    resourceVersion: string,
    spec?: NamespaceSpec.AsObject,
    state: string,
    asyncOperationId: string,
    endpoints?: Endpoints.AsObject,
    activeRegion: string,
    limits?: Limits.AsObject,
    privateConnectivitiesList: Array<PrivateConnectivity.AsObject>,
    createdTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastModifiedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

