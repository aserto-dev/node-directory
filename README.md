# node-directory

### Node bindings for the Aserto Directory service

## Build

```sh
yarn install
yarn gen
```
### Build with a local build of directory
```
BUF_PATH=/path/to/directory.bin yarn gen
```

## Usage

This repository contains only the bindings.
See https://github.com/aserto-dev/aserto-node#directory for usage.


## Troubleshooting

**On M1 Mac**: Run `arch -x86_64 zsh` first and the continue normally.


## Examples

```typescript
import { Reader } from "@aserto/node-directory/src/gen/cjs/aserto/directory/reader/v3/reader_connect";
import { createPromiseClient } from "@bufbuild/connect";
import { createGrpcTransport } from "@bufbuild/connect-node";

const grpcTansport = createGrpcTransport({
  httpVersion: "2",
  baseUrl: `https://localhost:9393`,
  nodeOptions: { rejectUnauthorized: false },
});

const client = createPromiseClient(Reader, grpcTansport);
const objectResponse = client.getObject({
    objectType: "user",
    objectId: "rick@the-citadel.com",
  })


objectResponse.then((result) => {
  console.log(result.result?.toJson())
}).catch((err) => {
  console.log(err)
})
```
