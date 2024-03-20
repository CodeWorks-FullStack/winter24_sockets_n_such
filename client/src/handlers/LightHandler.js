import { AppState } from "../AppState.js";
import { SocketHandler } from "../utils/SocketHandler.js";

class LightHandler extends SocketHandler {

  constructor() {
    super()
    this.on('TOGGLE_LIGHT', this.toggleLight)
  }

  toggleLight(light){
    AppState.isLightOn = light.isLightOn
  }


}

export const lightHandler = new LightHandler()
