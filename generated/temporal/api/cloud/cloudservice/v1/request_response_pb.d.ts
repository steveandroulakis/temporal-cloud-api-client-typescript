// package: temporal.api.cloud.cloudservice.v1
// file: temporal/api/cloud/cloudservice/v1/request_response.proto

import * as jspb from "google-protobuf";
import * as temporal_api_cloud_operation_v1_message_pb from "../../../../../temporal/api/cloud/operation/v1/message_pb";
import * as temporal_api_cloud_identity_v1_message_pb from "../../../../../temporal/api/cloud/identity/v1/message_pb";
import * as temporal_api_cloud_namespace_v1_message_pb from "../../../../../temporal/api/cloud/namespace/v1/message_pb";
import * as temporal_api_cloud_region_v1_message_pb from "../../../../../temporal/api/cloud/region/v1/message_pb";

export class GetUsersRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getNamespace(): string;
  setNamespace(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersRequest): GetUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersRequest;
  static deserializeBinaryFromReader(message: GetUsersRequest, reader: jspb.BinaryReader): GetUsersRequest;
}

export namespace GetUsersRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    email: string,
    namespace: string,
  }
}

export class GetUsersResponse extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<temporal_api_cloud_identity_v1_message_pb.User>;
  setUsersList(value: Array<temporal_api_cloud_identity_v1_message_pb.User>): void;
  addUsers(value?: temporal_api_cloud_identity_v1_message_pb.User, index?: number): temporal_api_cloud_identity_v1_message_pb.User;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersResponse): GetUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersResponse;
  static deserializeBinaryFromReader(message: GetUsersResponse, reader: jspb.BinaryReader): GetUsersResponse;
}

export namespace GetUsersResponse {
  export type AsObject = {
    usersList: Array<temporal_api_cloud_identity_v1_message_pb.User.AsObject>,
    nextPageToken: string,
  }
}

export class GetUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetUserResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): temporal_api_cloud_identity_v1_message_pb.User | undefined;
  setUser(value?: temporal_api_cloud_identity_v1_message_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    user?: temporal_api_cloud_identity_v1_message_pb.User.AsObject,
  }
}

export class CreateUserRequest extends jspb.Message {
  hasSpec(): boolean;
  clearSpec(): void;
  getSpec(): temporal_api_cloud_identity_v1_message_pb.UserSpec | undefined;
  setSpec(value?: temporal_api_cloud_identity_v1_message_pb.UserSpec): void;

  getAsyncOperationId(): string;
  setAsyncOperationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    spec?: temporal_api_cloud_identity_v1_message_pb.UserSpec.AsObject,
    asyncOperationId: string,
  }
}

export class CreateUserResponse extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  hasAsyncOperation(): boolean;
  clearAsyncOperation(): void;
  getAsyncOperation(): temporal_api_cloud_operation_v1_message_pb.AsyncOperation | undefined;
  setAsyncOperation(value?: temporal_api_cloud_operation_v1_message_pb.AsyncOperation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
  static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
  export type AsObject = {
    userId: string,
    asyncOperation?: temporal_api_cloud_operation_v1_message_pb.AsyncOperation.AsObject,
  }
}

export class UpdateUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  hasSpec(): boolean;
  clearSpec(): void;
  getSpec(): temporal_api_cloud_identity_v1_message_pb.UserSpec | undefined;
  setSpec(value?: temporal_api_cloud_identity_v1_message_pb.UserSpec): void;

  getResourceVersion(): string;
  setResourceVersion(value: string): void;

  getAsyncOperationId(): string;
  setAsyncOperationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
  static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    userId: string,
    spec?: temporal_api_cloud_identity_v1_message_pb.UserSpec.AsObject,
    resourceVersion: string,
    asyncOperationId: string,
  }
}

export class UpdateUserResponse extends jspb.Message {
  hasAsyncOperation(): boolean;
  clearAsyncOperation(): void;
  getAsyncOperation(): temporal_api_cloud_operation_v1_message_pb.AsyncOperation | undefined;
  setAsyncOperation(value?: temporal_api_cloud_operation_v1_message_pb.AsyncOperation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserResponse): UpdateUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserResponse;
  static deserializeBinaryFromReader(message: UpdateUserResponse, reader: jspb.BinaryReader): UpdateUserResponse;
}

export namespace UpdateUserResponse {
  export type AsObject = {
    asyncOperation?: temporal_api_cloud_operation_v1_message_pb.AsyncOperation.AsObject,
  }
}

export class DeleteUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getResourceVersion(): string;
  setResourceVersion(value: string): void;

  getAsyncOperationId(): string;
  setAsyncOperationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
  static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    userId: string,
    resourceVersion: string,
    asyncOperationId: string,
  }
}

export class DeleteUserResponse extends jspb.Message {
  hasAsyncOperation(): boolean;
  clearAsyncOperation(): void;
  getAsyncOperation(): temporal_api_cloud_operation_v1_message_pb.AsyncOperation | undefined;
  setAsyncOperation(value?: temporal_api_cloud_operation_v1_message_pb.AsyncOperation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserResponse): DeleteUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserResponse;
  static deserializeBinaryFromReader(message: DeleteUserResponse, reader: jspb.BinaryReader): DeleteUserResponse;
}

export namespace DeleteUserResponse {
  export type AsObject = {
    asyncOperation?: temporal_api_cloud_operation_v1_message_pb.AsyncOperation.AsObject,
  }
}

export class SetUserNamespaceAccessRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  hasAccess(): boolean;
  clearAccess(): void;
  getAccess(): temporal_api_cloud_identity_v1_message_pb.NamespaceAccess | undefined;
  setAccess(value?: temporal_api_cloud_identity_v1_message_pb.NamespaceAccess): void;

  getResourceVersion(): string;
  setResourceVersion(value: string): void;

  getAsyncOperationId(): string;
  setAsyncOperationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetUserNamespaceAccessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetUserNamespaceAccessRequest): SetUserNamespaceAccessRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetUserNamespaceAccessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetUserNamespaceAccessRequest;
  static deserializeBinaryFromReader(message: SetUserNamespaceAccessRequest, reader: jspb.BinaryReader): SetUserNamespaceAccessRequest;
}

export namespace SetUserNamespaceAccessRequest {
  export type AsObject = {
    namespace: string,
    userId: string,
    access?: temporal_api_cloud_identity_v1_message_pb.NamespaceAccess.AsObject,
    resourceVersion: string,
    asyncOperationId: string,
  }
}

export class SetUserNamespaceAccessResponse extends jspb.Message {
  hasAsyncOperation(): boolean;
  clearAsyncOperation(): void;
  getAsyncOperation(): temporal_api_cloud_operation_v1_message_pb.AsyncOperation | undefined;
  setAsyncOperation(value?: temporal_api_cloud_operation_v1_message_pb.AsyncOperation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetUserNamespaceAccessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetUserNamespaceAccessResponse): SetUserNamespaceAccessResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetUserNamespaceAccessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetUserNamespaceAccessResponse;
  static deserializeBinaryFromReader(message: SetUserNamespaceAccessResponse, reader: jspb.BinaryReader): SetUserNamespaceAccessResponse;
}

export namespace SetUserNamespaceAccessResponse {
  export type AsObject = {
    asyncOperation?: temporal_api_cloud_operation_v1_message_pb.AsyncOperation.AsObject,
  }
}

export class GetAsyncOperationRequest extends jspb.Message {
  getAsyncOperationId(): string;
  setAsyncOperationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAsyncOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAsyncOperationRequest): GetAsyncOperationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAsyncOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAsyncOperationRequest;
  static deserializeBinaryFromReader(message: GetAsyncOperationRequest, reader: jspb.BinaryReader): GetAsyncOperationRequest;
}

export namespace GetAsyncOperationRequest {
  export type AsObject = {
    asyncOperationId: string,
  }
}

export class GetAsyncOperationResponse extends jspb.Message {
  hasAsyncOperation(): boolean;
  clearAsyncOperation(): void;
  getAsyncOperation(): temporal_api_cloud_operation_v1_message_pb.AsyncOperation | undefined;
  setAsyncOperation(value?: temporal_api_cloud_operation_v1_message_pb.AsyncOperation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAsyncOperationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAsyncOperationResponse): GetAsyncOperationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAsyncOperationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAsyncOperationResponse;
  static deserializeBinaryFromReader(message: GetAsyncOperationResponse, reader: jspb.BinaryReader): GetAsyncOperationResponse;
}

export namespace GetAsyncOperationResponse {
  export type AsObject = {
    asyncOperation?: temporal_api_cloud_operation_v1_message_pb.AsyncOperation.AsObject,
  }
}

export class CreateNamespaceRequest extends jspb.Message {
  hasSpec(): boolean;
  clearSpec(): void;
  getSpec(): temporal_api_cloud_namespace_v1_message_pb.NamespaceSpec | undefined;
  setSpec(value?: temporal_api_cloud_namespace_v1_message_pb.NamespaceSpec): void;

  getAsyncOperationId(): string;
  setAsyncOperationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNamespaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNamespaceRequest): CreateNamespaceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNamespaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNamespaceRequest;
  static deserializeBinaryFromReader(message: CreateNamespaceRequest, reader: jspb.BinaryReader): CreateNamespaceRequest;
}

export namespace CreateNamespaceRequest {
  export type AsObject = {
    spec?: temporal_api_cloud_namespace_v1_message_pb.NamespaceSpec.AsObject,
    asyncOperationId: string,
  }
}

export class CreateNamespaceResponse extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  hasAsyncOperation(): boolean;
  clearAsyncOperation(): void;
  getAsyncOperation(): temporal_api_cloud_operation_v1_message_pb.AsyncOperation | undefined;
  setAsyncOperation(value?: temporal_api_cloud_operation_v1_message_pb.AsyncOperation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNamespaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNamespaceResponse): CreateNamespaceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNamespaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNamespaceResponse;
  static deserializeBinaryFromReader(message: CreateNamespaceResponse, reader: jspb.BinaryReader): CreateNamespaceResponse;
}

export namespace CreateNamespaceResponse {
  export type AsObject = {
    namespace: string,
    asyncOperation?: temporal_api_cloud_operation_v1_message_pb.AsyncOperation.AsObject,
  }
}

export class GetNamespacesRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNamespacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNamespacesRequest): GetNamespacesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNamespacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNamespacesRequest;
  static deserializeBinaryFromReader(message: GetNamespacesRequest, reader: jspb.BinaryReader): GetNamespacesRequest;
}

export namespace GetNamespacesRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    name: string,
  }
}

export class GetNamespacesResponse extends jspb.Message {
  clearNamespacesList(): void;
  getNamespacesList(): Array<temporal_api_cloud_namespace_v1_message_pb.Namespace>;
  setNamespacesList(value: Array<temporal_api_cloud_namespace_v1_message_pb.Namespace>): void;
  addNamespaces(value?: temporal_api_cloud_namespace_v1_message_pb.Namespace, index?: number): temporal_api_cloud_namespace_v1_message_pb.Namespace;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNamespacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNamespacesResponse): GetNamespacesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNamespacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNamespacesResponse;
  static deserializeBinaryFromReader(message: GetNamespacesResponse, reader: jspb.BinaryReader): GetNamespacesResponse;
}

export namespace GetNamespacesResponse {
  export type AsObject = {
    namespacesList: Array<temporal_api_cloud_namespace_v1_message_pb.Namespace.AsObject>,
    nextPageToken: string,
  }
}

export class GetNamespaceRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNamespaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNamespaceRequest): GetNamespaceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNamespaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNamespaceRequest;
  static deserializeBinaryFromReader(message: GetNamespaceRequest, reader: jspb.BinaryReader): GetNamespaceRequest;
}

export namespace GetNamespaceRequest {
  export type AsObject = {
    namespace: string,
  }
}

export class GetNamespaceResponse extends jspb.Message {
  hasNamespace(): boolean;
  clearNamespace(): void;
  getNamespace(): temporal_api_cloud_namespace_v1_message_pb.Namespace | undefined;
  setNamespace(value?: temporal_api_cloud_namespace_v1_message_pb.Namespace): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNamespaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNamespaceResponse): GetNamespaceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNamespaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNamespaceResponse;
  static deserializeBinaryFromReader(message: GetNamespaceResponse, reader: jspb.BinaryReader): GetNamespaceResponse;
}

export namespace GetNamespaceResponse {
  export type AsObject = {
    namespace?: temporal_api_cloud_namespace_v1_message_pb.Namespace.AsObject,
  }
}

export class UpdateNamespaceRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  hasSpec(): boolean;
  clearSpec(): void;
  getSpec(): temporal_api_cloud_namespace_v1_message_pb.NamespaceSpec | undefined;
  setSpec(value?: temporal_api_cloud_namespace_v1_message_pb.NamespaceSpec): void;

  getResourceVersion(): string;
  setResourceVersion(value: string): void;

  getAsyncOperationId(): string;
  setAsyncOperationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNamespaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNamespaceRequest): UpdateNamespaceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNamespaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNamespaceRequest;
  static deserializeBinaryFromReader(message: UpdateNamespaceRequest, reader: jspb.BinaryReader): UpdateNamespaceRequest;
}

export namespace UpdateNamespaceRequest {
  export type AsObject = {
    namespace: string,
    spec?: temporal_api_cloud_namespace_v1_message_pb.NamespaceSpec.AsObject,
    resourceVersion: string,
    asyncOperationId: string,
  }
}

export class UpdateNamespaceResponse extends jspb.Message {
  hasAsyncOperation(): boolean;
  clearAsyncOperation(): void;
  getAsyncOperation(): temporal_api_cloud_operation_v1_message_pb.AsyncOperation | undefined;
  setAsyncOperation(value?: temporal_api_cloud_operation_v1_message_pb.AsyncOperation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNamespaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNamespaceResponse): UpdateNamespaceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNamespaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNamespaceResponse;
  static deserializeBinaryFromReader(message: UpdateNamespaceResponse, reader: jspb.BinaryReader): UpdateNamespaceResponse;
}

export namespace UpdateNamespaceResponse {
  export type AsObject = {
    asyncOperation?: temporal_api_cloud_operation_v1_message_pb.AsyncOperation.AsObject,
  }
}

export class RenameCustomSearchAttributeRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getExistingCustomSearchAttributeName(): string;
  setExistingCustomSearchAttributeName(value: string): void;

  getNewCustomSearchAttributeName(): string;
  setNewCustomSearchAttributeName(value: string): void;

  getResourceVersion(): string;
  setResourceVersion(value: string): void;

  getAsyncOperationId(): string;
  setAsyncOperationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameCustomSearchAttributeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RenameCustomSearchAttributeRequest): RenameCustomSearchAttributeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenameCustomSearchAttributeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameCustomSearchAttributeRequest;
  static deserializeBinaryFromReader(message: RenameCustomSearchAttributeRequest, reader: jspb.BinaryReader): RenameCustomSearchAttributeRequest;
}

export namespace RenameCustomSearchAttributeRequest {
  export type AsObject = {
    namespace: string,
    existingCustomSearchAttributeName: string,
    newCustomSearchAttributeName: string,
    resourceVersion: string,
    asyncOperationId: string,
  }
}

export class RenameCustomSearchAttributeResponse extends jspb.Message {
  hasAsyncOperation(): boolean;
  clearAsyncOperation(): void;
  getAsyncOperation(): temporal_api_cloud_operation_v1_message_pb.AsyncOperation | undefined;
  setAsyncOperation(value?: temporal_api_cloud_operation_v1_message_pb.AsyncOperation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameCustomSearchAttributeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RenameCustomSearchAttributeResponse): RenameCustomSearchAttributeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenameCustomSearchAttributeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameCustomSearchAttributeResponse;
  static deserializeBinaryFromReader(message: RenameCustomSearchAttributeResponse, reader: jspb.BinaryReader): RenameCustomSearchAttributeResponse;
}

export namespace RenameCustomSearchAttributeResponse {
  export type AsObject = {
    asyncOperation?: temporal_api_cloud_operation_v1_message_pb.AsyncOperation.AsObject,
  }
}

export class DeleteNamespaceRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getResourceVersion(): string;
  setResourceVersion(value: string): void;

  getAsyncOperationId(): string;
  setAsyncOperationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNamespaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNamespaceRequest): DeleteNamespaceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteNamespaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNamespaceRequest;
  static deserializeBinaryFromReader(message: DeleteNamespaceRequest, reader: jspb.BinaryReader): DeleteNamespaceRequest;
}

export namespace DeleteNamespaceRequest {
  export type AsObject = {
    namespace: string,
    resourceVersion: string,
    asyncOperationId: string,
  }
}

export class DeleteNamespaceResponse extends jspb.Message {
  hasAsyncOperation(): boolean;
  clearAsyncOperation(): void;
  getAsyncOperation(): temporal_api_cloud_operation_v1_message_pb.AsyncOperation | undefined;
  setAsyncOperation(value?: temporal_api_cloud_operation_v1_message_pb.AsyncOperation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNamespaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNamespaceResponse): DeleteNamespaceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteNamespaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNamespaceResponse;
  static deserializeBinaryFromReader(message: DeleteNamespaceResponse, reader: jspb.BinaryReader): DeleteNamespaceResponse;
}

export namespace DeleteNamespaceResponse {
  export type AsObject = {
    asyncOperation?: temporal_api_cloud_operation_v1_message_pb.AsyncOperation.AsObject,
  }
}

export class GetRegionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRegionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRegionsRequest): GetRegionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRegionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRegionsRequest;
  static deserializeBinaryFromReader(message: GetRegionsRequest, reader: jspb.BinaryReader): GetRegionsRequest;
}

export namespace GetRegionsRequest {
  export type AsObject = {
  }
}

export class GetRegionsResponse extends jspb.Message {
  clearRegionsList(): void;
  getRegionsList(): Array<temporal_api_cloud_region_v1_message_pb.Region>;
  setRegionsList(value: Array<temporal_api_cloud_region_v1_message_pb.Region>): void;
  addRegions(value?: temporal_api_cloud_region_v1_message_pb.Region, index?: number): temporal_api_cloud_region_v1_message_pb.Region;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRegionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRegionsResponse): GetRegionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRegionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRegionsResponse;
  static deserializeBinaryFromReader(message: GetRegionsResponse, reader: jspb.BinaryReader): GetRegionsResponse;
}

export namespace GetRegionsResponse {
  export type AsObject = {
    regionsList: Array<temporal_api_cloud_region_v1_message_pb.Region.AsObject>,
  }
}

export class GetRegionRequest extends jspb.Message {
  getRegion(): string;
  setRegion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRegionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRegionRequest): GetRegionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRegionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRegionRequest;
  static deserializeBinaryFromReader(message: GetRegionRequest, reader: jspb.BinaryReader): GetRegionRequest;
}

export namespace GetRegionRequest {
  export type AsObject = {
    region: string,
  }
}

export class GetRegionResponse extends jspb.Message {
  hasRegion(): boolean;
  clearRegion(): void;
  getRegion(): temporal_api_cloud_region_v1_message_pb.Region | undefined;
  setRegion(value?: temporal_api_cloud_region_v1_message_pb.Region): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRegionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRegionResponse): GetRegionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRegionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRegionResponse;
  static deserializeBinaryFromReader(message: GetRegionResponse, reader: jspb.BinaryReader): GetRegionResponse;
}

export namespace GetRegionResponse {
  export type AsObject = {
    region?: temporal_api_cloud_region_v1_message_pb.Region.AsObject,
  }
}

