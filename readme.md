# **gRPC** with nodejs

application made in node.js with **gRPC** server and _javascript_/_typescript_.

## Install dependencies

```sh
npm install
```

## Compiling the protofiles

To compile the `.proto` files, you need to have [protoc](https://github.com/protocolbuffers/protobuf/releases/) installed (_it's important to add in your environment variables in the **PATH**_).

```sh
npm run compile # in the root directory
```

### Start server

```sh
npm run start:server
```

### Start client (_in another terminal_)

```sh
npm run start:client
```

## **gRPC** _web_

Install the plugin [grpc-web](https://github.com/grpc/grpc-web/releases/).
Rename the executable _protoc-gen-grpc-web-**VERSION**-**PLATFORM**_ to _protoc-gen-grpc-web_.
(_it's important to add in your environment variables in the **PATH**_).

Compile **gRPC** _web_

```sh
npm run compile:grpc_web
```

With the `webpack and webpack-cli` dependency installed

```sh
npm run bundle
```

Start the server **gRPC**: `npm run start:server`.

Then start an HTTP server of your choice (_ex.: php -S localhost:8080_) in the `web` folder.
