import './index.css';
import { ClockClass } from './components';

const clock = new ClockClass();
const clocksContainer = document.getElementById("clocks-container");

clock.addClockElementInContainer(clocksContainer);
