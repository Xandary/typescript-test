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

  private createTimeElement(): void {
    //Create the time element
    this.timeElement = document.createElement("div");
    this.timeElement.className = "time-element";

    const time = document.createElement("a");
    time.text = this.hours.toString() + ":" + this.minuts.toString() + ":" + this.seconds.toString();
    this.timeElement.appendChild(time);
  }

  private incrementSeconds(): void {
    this.seconds++;
    console.log(this.seconds);

    if(this.seconds === 60) {
        this.incrementMinuts();
    }
    if(this.minuts === 60) {
        this.incrementHours();
    }
  }

  private incrementMinuts(): void {
    this.minuts++;

    if(this.minuts === 60) {
        this.incrementHours();
        this.minuts = 0;
    }
  }

  private incrementHours(): void {
    this.hours++;

    if(this.hours === 24) {
        this.hours = 0;
    }
  }

}
