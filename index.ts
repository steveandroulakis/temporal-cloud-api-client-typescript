// set env variable TEMPORAL_CLOUD_API_KEY to your API key

import * as grpc from '@grpc/grpc-js';
import { CloudServiceClient } from './generated/temporal/api/cloud/cloudservice/v1/service_grpc_pb';
import { GetUsersRequest, GetUserRequest } from './generated/temporal/api/cloud/cloudservice/v1/request_response_pb';

const TemporalCloudAPIVersion = '2023-10-01-00'; // Define your API version
const TemporalCloudAPIVersionHeader = 'temporal-cloud-api-version'; // Define the header name for the API version

// Setup the gRPC client
function newConnectionWithAPIKey(addr: string, apiKey: string): CloudServiceClient {
    const credentials = grpc.credentials.createSsl();

    // Append headers for each request
    const callCredentials = grpc.credentials.createFromMetadataGenerator((params, callback) => {
        const metadata = new grpc.Metadata();
        metadata.set('authorization', `Bearer ${apiKey}`);
        metadata.set(TemporalCloudAPIVersionHeader, TemporalCloudAPIVersion); // Set the API version here
        callback(null, metadata);
    });

    // Combine SSL credentials with call credentials
    const combinedCredentials = grpc.credentials.combineChannelCredentials(credentials, callCredentials);
    const client = new CloudServiceClient(addr, combinedCredentials);

    return client;
}

// Usage example
const addr = 'saas-api.tmprl.cloud:443';
const apiKey = process.env.TEMPORAL_CLOUD_API_KEY || '';

const client = newConnectionWithAPIKey(addr, apiKey);

// For each user, display their information and then their account access role
const request = new GetUsersRequest();
client.getUsers(request, (error, response) => {
    if (error) {
        console.error('Error:', error);
    } else {
        if(response) {
            const responseObject = response.toObject();
            console.log('Response:', responseObject);

            for (const user of responseObject.usersList) {
                // getUser
                const getUserRequest = new GetUserRequest();
                getUserRequest.setUserId(user.id);
                client.getUser(getUserRequest, (error, response) => {
                    if (error) {
                        console.error('Error:', error);
                    } else {
                        if(response) {
                            const responseObject = response.toObject();
                            console.log('Response:', responseObject);
                            console.log('Access:', responseObject.user?.spec?.access?.accountAccess?.role);
                        }
                    }
                });
            }
        }
    }

});