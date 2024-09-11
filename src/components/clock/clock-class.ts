import './clock-styles.css';
import {ButtonClass} from '../buttons/button';
import {TimeClass} from '../time'

export class ClockClass {
  private globalClockElement: HTMLElement;

  constructor() {
    this.createNewClockElement();
  }

  get(): HTMLElement {
    return this.globalClockElement;
  }

  private createNewClockElement() {
    //Create the gloabal clock element
    this.globalClockElement = document.createElement("div");
    this.globalClockElement.className = "global-clock-element";

    //Create the clock element
    const clockElement = document.createElement("div");
    clockElement.className = "clock-element";
    this.globalClockElement.appendChild(clockElement);

    //Create the time container element and add it into the clock element
    const timeContainerElement = document.createElement("div");
    timeContainerElement.className = "clock-time-container-element";
    clockElement.appendChild(timeContainerElement);

    const timeElement = new TimeClass(11, 25, 30).get();
    timeContainerElement.appendChild(timeElement);

    //Adds button container to the global clock element
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttons-container-element";
    this.globalClockElement.appendChild(buttonsContainer); 

    //Adds light button to the global clock element
    const lightButton = new ButtonClass('Light').get();
    buttonsContainer.appendChild(lightButton);

    //Adds mode button to the global clock element
    const modeButton = new ButtonClass('Mode').get();
    buttonsContainer.appendChild(modeButton);

    //Adds Increase button to the global clock element
    const IncreaseButton = new ButtonClass('Inc').get();
    buttonsContainer.appendChild(IncreaseButton);
  }

  addClockElementInContainer(clockContainerElement: HTMLElement): HTMLElement | null {
    if(!clockContainerElement) {
      return null;
    }

    var newClock = this.globalClockElement;
    return clockContainerElement.appendChild(newClock);
    
  }
}
