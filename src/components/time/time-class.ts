import './time-styles.css';

export class TimeClass {
  private timeElement: HTMLElement;

  constructor(private hours: number, private minuts: number, private seconds: number) {
    this.createTimeElement();
    var interval = setInterval( this.incrementSeconds, 1000);
  }

  get(): HTMLElement {
    return this.timeElement;
  }

  getHours(): number {
    return this.hours;
  }

  getMinuts(): number {
    return this.minuts;
  }

  getSeconds(): number {
    return this.seconds;
  }

  private createTimeElement = (): void => {
    //Create the time element
    this.timeElement = document.createElement("div");
    this.timeElement.className = "time-element";

    const time = document.createElement("a");
    time.id = "time";
    time.text = this.hours.toString().padStart(2, '0') + ":" + this.minuts.toString().padStart(2, '0') + ":" + this.seconds.toString().padStart(2, '0');
    this.timeElement.appendChild(time);
  }

  private updateTimeElement = (): void => {
    const time = document.getElementById("time");
    time.innerHTML = this.hours.toString().padStart(2, '0') + ":" + this.minuts.toString().padStart(2, '0') + ":" + this.seconds.toString().padStart(2, '0');
  }

  public incrementSeconds = (): void => {
    this.seconds++;

    if(this.seconds === 60) {
        this.incrementMinuts();
        this.seconds = 0;
    }
    if(this.minuts === 60) {
        this.incrementHours();
    }
    this.updateTimeElement();
  }

  public incrementMinuts = (): void => {
    this.minuts++;

    if(this.minuts === 60) {
        this.incrementHours();
        this.minuts = 0;
    }
  }

  public incrementHours = (): void => {
    this.hours++;

    if(this.hours === 24) {
        this.hours = 0;
    }
  }

}
