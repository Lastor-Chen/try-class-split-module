import { Device } from '@/Device/index.js'

export class ModuleA extends Device {
  methodA() {
    console.log('methodA')
    console.log('sn', this.sn)
    console.log('handle', this.handle)
    console.log('pinToken', this.pinToken)
  }

  methodB() {
    console.log('methodB')
  }
}
