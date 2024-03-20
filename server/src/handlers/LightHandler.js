import { logger } from '../utils/Logger.js'
import { SocketHandler } from '../utils/SocketHandler'

let isLightOn = false



export class LightHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket)
    this
      .on('TOGGLE_LIGHT', this.toggleLight)
      .on('JOIN', this.join)
      .on('LEAVE', this.leave)
  }

  toggleLight() {
    isLightOn = !isLightOn
    this.messageAll('TOGGLE_LIGHT', { isLightOn, timestamp: new Date() })
    this.messageRoom('bananas', 'MONKEYS', { state: '🐒' })
  }

  _verifyRoom(room) {
    if (typeof room != 'string' || !room) {
      this.messageSelf('ERROR',
        { message: 'You must provide a room name' }
      )
      return false
    }
    this.messageSelf('GOOD_NAME',
      { message: 'You provided a good room name' }
    )
    return true
  }

  join(room) {
    try {
      if (this._verifyRoom(room)) {
        this.socket.join(room)
      }
    } catch (e) {
      logger.error(e)
    }
  }

  leave(room) {
    try {
      if (this._verifyRoom(room)) {
        this.socket.leave(room)
      }
    } catch (e) {
      logger.error(e)
    }
  }

}
