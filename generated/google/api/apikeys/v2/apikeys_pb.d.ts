// package: google.api.apikeys.v2
// file: google/api/apikeys/v2/apikeys.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_apikeys_v2_resources_pb from "../../../../google/api/apikeys/v2/resources_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class CreateKeyRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): google_api_apikeys_v2_resources_pb.Key | undefined;
  setKey(value?: google_api_apikeys_v2_resources_pb.Key): void;

  getKeyId(): string;
  setKeyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKeyRequest): CreateKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKeyRequest;
  static deserializeBinaryFromReader(message: CreateKeyRequest, reader: jspb.BinaryReader): CreateKeyRequest;
}

export namespace CreateKeyRequest {
  export type AsObject = {
    parent: string,
    key?: google_api_apikeys_v2_resources_pb.Key.AsObject,
    keyId: string,
  }
}

export class ListKeysRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getShowDeleted(): boolean;
  setShowDeleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListKeysRequest): ListKeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListKeysRequest;
  static deserializeBinaryFromReader(message: ListKeysRequest, reader: jspb.BinaryReader): ListKeysRequest;
}

export namespace ListKeysRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    showDeleted: boolean,
  }
}

export class ListKeysResponse extends jspb.Message {
  clearKeysList(): void;
  getKeysList(): Array<google_api_apikeys_v2_resources_pb.Key>;
  setKeysList(value: Array<google_api_apikeys_v2_resources_pb.Key>): void;
  addKeys(value?: google_api_apikeys_v2_resources_pb.Key, index?: number): google_api_apikeys_v2_resources_pb.Key;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListKeysResponse): ListKeysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListKeysResponse;
  static deserializeBinaryFromReader(message: ListKeysResponse, reader: jspb.BinaryReader): ListKeysResponse;
}

export namespace ListKeysResponse {
  export type AsObject = {
    keysList: Array<google_api_apikeys_v2_resources_pb.Key.AsObject>,
    nextPageToken: string,
  }
}

export class GetKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeyRequest): GetKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeyRequest;
  static deserializeBinaryFromReader(message: GetKeyRequest, reader: jspb.BinaryReader): GetKeyRequest;
}

export namespace GetKeyRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetKeyStringRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeyStringRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeyStringRequest): GetKeyStringRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKeyStringRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeyStringRequest;
  static deserializeBinaryFromReader(message: GetKeyStringRequest, reader: jspb.BinaryReader): GetKeyStringRequest;
}

export namespace GetKeyStringRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetKeyStringResponse extends jspb.Message {
  getKeyString(): string;
  setKeyString(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeyStringResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeyStringResponse): GetKeyStringResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKeyStringResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeyStringResponse;
  static deserializeBinaryFromReader(message: GetKeyStringResponse, reader: jspb.BinaryReader): GetKeyStringResponse;
}

export namespace GetKeyStringResponse {
  export type AsObject = {
    keyString: string,
  }
}

export class UpdateKeyRequest extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): google_api_apikeys_v2_resources_pb.Key | undefined;
  setKey(value?: google_api_apikeys_v2_resources_pb.Key): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateKeyRequest): UpdateKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateKeyRequest;
  static deserializeBinaryFromReader(message: UpdateKeyRequest, reader: jspb.BinaryReader): UpdateKeyRequest;
}

export namespace UpdateKeyRequest {
  export type AsObject = {
    key?: google_api_apikeys_v2_resources_pb.Key.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEtag(): string;
  setEtag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteKeyRequest): DeleteKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteKeyRequest;
  static deserializeBinaryFromReader(message: DeleteKeyRequest, reader: jspb.BinaryReader): DeleteKeyRequest;
}

export namespace DeleteKeyRequest {
  export type AsObject = {
    name: string,
    etag: string,
  }
}

export class UndeleteKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeleteKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UndeleteKeyRequest): UndeleteKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UndeleteKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeleteKeyRequest;
  static deserializeBinaryFromReader(message: UndeleteKeyRequest, reader: jspb.BinaryReader): UndeleteKeyRequest;
}

export namespace UndeleteKeyRequest {
  export type AsObject = {
    name: string,
  }
}

export class LookupKeyRequest extends jspb.Message {
  getKeyString(): string;
  setKeyString(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LookupKeyRequest): LookupKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LookupKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupKeyRequest;
  static deserializeBinaryFromReader(message: LookupKeyRequest, reader: jspb.BinaryReader): LookupKeyRequest;
}

export namespace LookupKeyRequest {
  export type AsObject = {
    keyString: string,
  }
}

export class LookupKeyResponse extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LookupKeyResponse): LookupKeyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LookupKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupKeyResponse;
  static deserializeBinaryFromReader(message: LookupKeyResponse, reader: jspb.BinaryReader): LookupKeyResponse;
}

export namespace LookupKeyResponse {
  export type AsObject = {
    parent: string,
    name: string,
  }
}

