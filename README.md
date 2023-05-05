# node-directory

### Node bindings for the Aserto Directory service

## Build

```sh
yarn install
yarn gen
```

**On M1 Mac**: Run `arch -x86_64 zsh` first and the continue normally.


## Examples

```typescript
import { Reader as ReaderClient } from "@aserto/node-directory/src/gen/cjs/aserto/directory/reader/v2/reader_connect";
import { GetObjectRequest } from "@aserto/node-directory/src/gen/cjs/aserto/directory/reader/v2/reader_pb";
import { createPromiseClient } from "@bufbuild/connect";
import { createGrpcTransport } from "@bufbuild/connect-node";

const grpcTansport = createGrpcTransport({
  httpVersion: "2",
  baseUrl: `https://localhost:9393`,
  nodeOptions: { rejectUnauthorized: false },
});

const client = createPromiseClient(ReaderClient, grpcTansport);
const objectResponse = client.getObject(
  new GetObjectRequest({
    param: {
      type: "user",
      key: "CiRmZDA2MTRkMy1jMzlhLTQ3ODEtYjdiZC04Yjk2ZjVhNTEwMGQSBWxvY2Fs"
    }
  })
)

objectResponse.then((result) => {
  console.log(result.result?.toJson())
}).catch((err) => {
  console.log(err)
})
```
