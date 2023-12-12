// package: google.api.apikeys.v2
// file: google/api/apikeys/v2/resources.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Key extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getUid(): string;
  setUid(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getKeyString(): string;
  setKeyString(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeleteTime(): boolean;
  clearDeleteTime(): void;
  getDeleteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeleteTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;
  hasRestrictions(): boolean;
  clearRestrictions(): void;
  getRestrictions(): Restrictions | undefined;
  setRestrictions(value?: Restrictions): void;

  getEtag(): string;
  setEtag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Key.AsObject;
  static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Key;
  static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
  export type AsObject = {
    name: string,
    uid: string,
    displayName: string,
    keyString: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    annotationsMap: Array<[string, string]>,
    restrictions?: Restrictions.AsObject,
    etag: string,
  }
}

export class Restrictions extends jspb.Message {
  hasBrowserKeyRestrictions(): boolean;
  clearBrowserKeyRestrictions(): void;
  getBrowserKeyRestrictions(): BrowserKeyRestrictions | undefined;
  setBrowserKeyRestrictions(value?: BrowserKeyRestrictions): void;

  hasServerKeyRestrictions(): boolean;
  clearServerKeyRestrictions(): void;
  getServerKeyRestrictions(): ServerKeyRestrictions | undefined;
  setServerKeyRestrictions(value?: ServerKeyRestrictions): void;

  hasAndroidKeyRestrictions(): boolean;
  clearAndroidKeyRestrictions(): void;
  getAndroidKeyRestrictions(): AndroidKeyRestrictions | undefined;
  setAndroidKeyRestrictions(value?: AndroidKeyRestrictions): void;

  hasIosKeyRestrictions(): boolean;
  clearIosKeyRestrictions(): void;
  getIosKeyRestrictions(): IosKeyRestrictions | undefined;
  setIosKeyRestrictions(value?: IosKeyRestrictions): void;

  clearApiTargetsList(): void;
  getApiTargetsList(): Array<ApiTarget>;
  setApiTargetsList(value: Array<ApiTarget>): void;
  addApiTargets(value?: ApiTarget, index?: number): ApiTarget;

  getClientRestrictionsCase(): Restrictions.ClientRestrictionsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Restrictions.AsObject;
  static toObject(includeInstance: boolean, msg: Restrictions): Restrictions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Restrictions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Restrictions;
  static deserializeBinaryFromReader(message: Restrictions, reader: jspb.BinaryReader): Restrictions;
}

export namespace Restrictions {
  export type AsObject = {
    browserKeyRestrictions?: BrowserKeyRestrictions.AsObject,
    serverKeyRestrictions?: ServerKeyRestrictions.AsObject,
    androidKeyRestrictions?: AndroidKeyRestrictions.AsObject,
    iosKeyRestrictions?: IosKeyRestrictions.AsObject,
    apiTargetsList: Array<ApiTarget.AsObject>,
  }

  export enum ClientRestrictionsCase {
    CLIENT_RESTRICTIONS_NOT_SET = 0,
    BROWSER_KEY_RESTRICTIONS = 1,
    SERVER_KEY_RESTRICTIONS = 2,
    ANDROID_KEY_RESTRICTIONS = 3,
    IOS_KEY_RESTRICTIONS = 4,
  }
}

export class BrowserKeyRestrictions extends jspb.Message {
  clearAllowedReferrersList(): void;
  getAllowedReferrersList(): Array<string>;
  setAllowedReferrersList(value: Array<string>): void;
  addAllowedReferrers(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrowserKeyRestrictions.AsObject;
  static toObject(includeInstance: boolean, msg: BrowserKeyRestrictions): BrowserKeyRestrictions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BrowserKeyRestrictions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrowserKeyRestrictions;
  static deserializeBinaryFromReader(message: BrowserKeyRestrictions, reader: jspb.BinaryReader): BrowserKeyRestrictions;
}

export namespace BrowserKeyRestrictions {
  export type AsObject = {
    allowedReferrersList: Array<string>,
  }
}

export class ServerKeyRestrictions extends jspb.Message {
  clearAllowedIpsList(): void;
  getAllowedIpsList(): Array<string>;
  setAllowedIpsList(value: Array<string>): void;
  addAllowedIps(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerKeyRestrictions.AsObject;
  static toObject(includeInstance: boolean, msg: ServerKeyRestrictions): ServerKeyRestrictions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerKeyRestrictions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerKeyRestrictions;
  static deserializeBinaryFromReader(message: ServerKeyRestrictions, reader: jspb.BinaryReader): ServerKeyRestrictions;
}

export namespace ServerKeyRestrictions {
  export type AsObject = {
    allowedIpsList: Array<string>,
  }
}

export class AndroidKeyRestrictions extends jspb.Message {
  clearAllowedApplicationsList(): void;
  getAllowedApplicationsList(): Array<AndroidApplication>;
  setAllowedApplicationsList(value: Array<AndroidApplication>): void;
  addAllowedApplications(value?: AndroidApplication, index?: number): AndroidApplication;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AndroidKeyRestrictions.AsObject;
  static toObject(includeInstance: boolean, msg: AndroidKeyRestrictions): AndroidKeyRestrictions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AndroidKeyRestrictions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AndroidKeyRestrictions;
  static deserializeBinaryFromReader(message: AndroidKeyRestrictions, reader: jspb.BinaryReader): AndroidKeyRestrictions;
}

export namespace AndroidKeyRestrictions {
  export type AsObject = {
    allowedApplicationsList: Array<AndroidApplication.AsObject>,
  }
}

export class AndroidApplication extends jspb.Message {
  getSha1Fingerprint(): string;
  setSha1Fingerprint(value: string): void;

  getPackageName(): string;
  setPackageName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AndroidApplication.AsObject;
  static toObject(includeInstance: boolean, msg: AndroidApplication): AndroidApplication.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AndroidApplication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AndroidApplication;
  static deserializeBinaryFromReader(message: AndroidApplication, reader: jspb.BinaryReader): AndroidApplication;
}

export namespace AndroidApplication {
  export type AsObject = {
    sha1Fingerprint: string,
    packageName: string,
  }
}

export class IosKeyRestrictions extends jspb.Message {
  clearAllowedBundleIdsList(): void;
  getAllowedBundleIdsList(): Array<string>;
  setAllowedBundleIdsList(value: Array<string>): void;
  addAllowedBundleIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IosKeyRestrictions.AsObject;
  static toObject(includeInstance: boolean, msg: IosKeyRestrictions): IosKeyRestrictions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IosKeyRestrictions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IosKeyRestrictions;
  static deserializeBinaryFromReader(message: IosKeyRestrictions, reader: jspb.BinaryReader): IosKeyRestrictions;
}

export namespace IosKeyRestrictions {
  export type AsObject = {
    allowedBundleIdsList: Array<string>,
  }
}

export class ApiTarget extends jspb.Message {
  getService(): string;
  setService(value: string): void;

  clearMethodsList(): void;
  getMethodsList(): Array<string>;
  setMethodsList(value: Array<string>): void;
  addMethods(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiTarget.AsObject;
  static toObject(includeInstance: boolean, msg: ApiTarget): ApiTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApiTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiTarget;
  static deserializeBinaryFromReader(message: ApiTarget, reader: jspb.BinaryReader): ApiTarget;
}

export namespace ApiTarget {
  export type AsObject = {
    service: string,
    methodsList: Array<string>,
  }
}

