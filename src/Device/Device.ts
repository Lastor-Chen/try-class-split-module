export class Device {
  sn: string
  handle: string
  pinToken: string

  constructor(devicePort: string)
  constructor(device: Device)
  constructor(device?: string | Device) {
    if (typeof device === 'string') {
      this.sn = randomNum(8)
      this.handle = Device.openDevice()
    } else {
      this.#inherit(device)
    }
  }

  static openDevice() {
    return randomNum(8)
  }

  #inherit(device: Device) {
    this.sn = device.sn
    this.handle = device.handle
    this.pinToken = device.pinToken
  }

  pinAuth(pin: string) {
    this.pinToken = randomNum(8)
  }
}

function randomNum(digit: number) {
  const multiple = +(1 + '0'.repeat(digit))
  return Math.floor(Math.random() * multiple).toString() 
}
