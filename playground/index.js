// @ts-check
import { Device, ModuleA } from '../dist/index.js'

const devicePort = 'port://path/to/device'
const pin = '11111111'

// 單獨使用
{
  const moduleA = new ModuleA(devicePort)
  moduleA.pinAuth(pin)
  moduleA.methodA()
}

console.log()

// 混合使用
{
  const device = new Device(devicePort)
  device.pinAuth(pin)

  const moduleA = new ModuleA(device)
  moduleA.methodA()
}
