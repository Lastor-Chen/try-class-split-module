# Class 模塊拆分嘗試

## Usage

Clone repo.

```shell
git clone https://github.com/Lastor-Chen/try-class-split-module.git
```

Or clone without git history.

```shell
$ npx degit Lastor-Chen/try-class-split-module
```

Need to build typescript.

```shell
$ pnpm build
```

Then start it.

```shell
$ pnpm start
```

## About

將肥大的、所有功能都寫在一起的 Class 進行模塊拆分。

```ts
class MainClass {
  // ...數百行
}
```

JS Class 難以像 Object 單純拆分, 因此不考慮拆分檔案最後組在一起的方案。

```ts
import { moduleA } from '...'
import { moduleB } from '...'

// Class 無法這樣單純拆出去再拼回來
export const mainObj = {
  ...moduleA,
  ...moduleB,
}
```

嘗試區分為 Core, ModuleA, ModuleB... 並讓各 module 繼承 core。<br/>
Class Core 只放核心 states 與控制這些 states 有關的 methods。

```ts
Class Core {}
Class ModuleA extends Core {}
Class ModuleB extends Core {}
// ...
```

下游專案使用時，直接拉需要的 module。

```ts
import { Device, ModuleA } from '../dist/index.js'

const devicePort = 'port://path/to/device'
const pin = '11111111'

// 單獨使用
{
  const moduleA = new ModuleA(devicePort)
  moduleA.pinAuth(pin)
  moduleA.methodA()
}

// 混合使用
{
  const device = new Device(devicePort)
  device.pinAuth(pin)

  const moduleA = new ModuleA(device)
  moduleA.methodA()
}
```
