// package: temporal.api.cloud.operation.v1
// file: temporal/api/cloud/operation/v1/message.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class AsyncOperation extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getState(): string;
  setState(value: string): void;

  hasCheckDuration(): boolean;
  clearCheckDuration(): void;
  getCheckDuration(): google_protobuf_duration_pb.Duration | undefined;
  setCheckDuration(value?: google_protobuf_duration_pb.Duration): void;

  getOperationType(): string;
  setOperationType(value: string): void;

  hasOperationInput(): boolean;
  clearOperationInput(): void;
  getOperationInput(): google_protobuf_any_pb.Any | undefined;
  setOperationInput(value?: google_protobuf_any_pb.Any): void;

  getFailureReason(): string;
  setFailureReason(value: string): void;

  hasStartedTime(): boolean;
  clearStartedTime(): void;
  getStartedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFinishedTime(): boolean;
  clearFinishedTime(): void;
  getFinishedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsyncOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AsyncOperation): AsyncOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AsyncOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsyncOperation;
  static deserializeBinaryFromReader(message: AsyncOperation, reader: jspb.BinaryReader): AsyncOperation;
}

export namespace AsyncOperation {
  export type AsObject = {
    id: string,
    state: string,
    checkDuration?: google_protobuf_duration_pb.Duration.AsObject,
    operationType: string,
    operationInput?: google_protobuf_any_pb.Any.AsObject,
    failureReason: string,
    startedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

