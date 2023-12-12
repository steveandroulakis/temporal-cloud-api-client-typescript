// package: temporal.api.cloud.region.v1
// file: temporal/api/cloud/region/v1/message.proto

import * as jspb from "google-protobuf";

export class Region extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getCloudProvider(): string;
  setCloudProvider(value: string): void;

  getCloudProviderRegion(): string;
  setCloudProviderRegion(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Region.AsObject;
  static toObject(includeInstance: boolean, msg: Region): Region.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Region, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Region;
  static deserializeBinaryFromReader(message: Region, reader: jspb.BinaryReader): Region;
}

export namespace Region {
  export type AsObject = {
    id: string,
    cloudProvider: string,
    cloudProviderRegion: string,
    location: string,
  }
}

