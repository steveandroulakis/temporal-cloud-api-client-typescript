## Temporal Cloud API Usage Example (Typescript)

rough guide, todo clean up

#### Run API call
```
# set TEMPORAL_CLOUD_API_KEY in your environment
ts-node index.ts
```

#### Generate protos (you don't need to do this if you clone this repo)

use protoc to install temporal protos

reference them from ts

```
git clone https://github.com/googleapis/googleapis.git
## take google/api out of here and put in root of this repo

git clone https://github.com/temporalio/api-cloud.git
## put temporal/ in root of this repo

mkdir generated
```

You'll need grpc-tools which is compatible with node (vs browser) js.

`npm install -g grpc-tools`

#### Directory to write generated code to (.js and .d.ts files)

```
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./generated --grpc_out=grpc_js:./generated --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
       --ts_out=service=grpc-node,mode=grpc-js:./generated \
    $(find ./google/api/ -name "*.proto")

grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./generated --grpc_out=grpc_js:./generated --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
       --ts_out=service=grpc-node,mode=grpc-js:./generated \
$(find ./temporal/api/cloud/ -name "*.proto")
```
