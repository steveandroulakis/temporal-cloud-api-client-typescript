// package: temporal.api.cloud.identity.v1
// file: temporal/api/cloud/identity/v1/message.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AccountAccess extends jspb.Message {
  getRole(): string;
  setRole(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountAccess.AsObject;
  static toObject(includeInstance: boolean, msg: AccountAccess): AccountAccess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountAccess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountAccess;
  static deserializeBinaryFromReader(message: AccountAccess, reader: jspb.BinaryReader): AccountAccess;
}

export namespace AccountAccess {
  export type AsObject = {
    role: string,
  }
}

export class NamespaceAccess extends jspb.Message {
  getPermission(): string;
  setPermission(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamespaceAccess.AsObject;
  static toObject(includeInstance: boolean, msg: NamespaceAccess): NamespaceAccess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NamespaceAccess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamespaceAccess;
  static deserializeBinaryFromReader(message: NamespaceAccess, reader: jspb.BinaryReader): NamespaceAccess;
}

export namespace NamespaceAccess {
  export type AsObject = {
    permission: string,
  }
}

export class Access extends jspb.Message {
  hasAccountAccess(): boolean;
  clearAccountAccess(): void;
  getAccountAccess(): AccountAccess | undefined;
  setAccountAccess(value?: AccountAccess): void;

  getNamespaceAccessesMap(): jspb.Map<string, NamespaceAccess>;
  clearNamespaceAccessesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Access.AsObject;
  static toObject(includeInstance: boolean, msg: Access): Access.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Access, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Access;
  static deserializeBinaryFromReader(message: Access, reader: jspb.BinaryReader): Access;
}

export namespace Access {
  export type AsObject = {
    accountAccess?: AccountAccess.AsObject,
    namespaceAccessesMap: Array<[string, NamespaceAccess.AsObject]>,
  }
}

export class UserSpec extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  hasAccess(): boolean;
  clearAccess(): void;
  getAccess(): Access | undefined;
  setAccess(value?: Access): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSpec.AsObject;
  static toObject(includeInstance: boolean, msg: UserSpec): UserSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSpec;
  static deserializeBinaryFromReader(message: UserSpec, reader: jspb.BinaryReader): UserSpec;
}

export namespace UserSpec {
  export type AsObject = {
    email: string,
    access?: Access.AsObject,
  }
}

export class Invitation extends jspb.Message {
  hasCreatedTime(): boolean;
  clearCreatedTime(): void;
  getCreatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpiredTime(): boolean;
  clearExpiredTime(): void;
  getExpiredTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiredTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invitation.AsObject;
  static toObject(includeInstance: boolean, msg: Invitation): Invitation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Invitation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invitation;
  static deserializeBinaryFromReader(message: Invitation, reader: jspb.BinaryReader): Invitation;
}

export namespace Invitation {
  export type AsObject = {
    createdTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expiredTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getResourceVersion(): string;
  setResourceVersion(value: string): void;

  hasSpec(): boolean;
  clearSpec(): void;
  getSpec(): UserSpec | undefined;
  setSpec(value?: UserSpec): void;

  getState(): string;
  setState(value: string): void;

  getAsyncOperationId(): string;
  setAsyncOperationId(value: string): void;

  hasInvitation(): boolean;
  clearInvitation(): void;
  getInvitation(): Invitation | undefined;
  setInvitation(value?: Invitation): void;

  hasCreatedTime(): boolean;
  clearCreatedTime(): void;
  getCreatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastModifiedTime(): boolean;
  clearLastModifiedTime(): void;
  getLastModifiedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastModifiedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    resourceVersion: string,
    spec?: UserSpec.AsObject,
    state: string,
    asyncOperationId: string,
    invitation?: Invitation.AsObject,
    createdTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastModifiedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

