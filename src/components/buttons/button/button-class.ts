import './button-styles.css';

export class ButtonClass {
  private buttonElement: HTMLElement;

  constructor(private readonly buttonLabel: string) {
    this.createLightButtonElement();
  }

  get(): HTMLElement {
    return this.buttonElement;
  }

  private createLightButtonElement(): void {
    //Create the gloabal clock element
    this.buttonElement = document.createElement("div");
    this.buttonElement.className = "button-element";

    const clocklabel = document.createElement("a");
    clocklabel.text = this.buttonLabel;
    this.buttonElement.appendChild(clocklabel);
  }
}
