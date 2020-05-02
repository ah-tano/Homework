// https://github.com/goitacademy/javascript-homework/tree/master/homework-11/timer

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.reverseTimer();
  }

  reverseTimer() {
    const timerField = document.querySelector(this.selector);
    const daysField = timerField.querySelector('span[data-value="days"]');
    const hoursField = timerField.querySelector('span[data-value="hours"]');
    const minsField = timerField.querySelector('span[data-value="mins"]');
    const secsField = timerField.querySelector('span[data-value="secs"]');

    this.timer = setInterval(() => {
      const currentDate = new Date();
      const timeDiff = Math.abs(
        this.targetDate.getTime() - currentDate.getTime()
      );

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      daysField.innerHTML = days;
      hoursField.innerHTML = hours;
      minsField.innerHTML = minutes;
      secsField.innerHTML = seconds;

      if (timeDiff < 0) {
        clearInterval(this.timer);
        document.querySelector(this.selector).innerHTML = 'Today is the day!';
      }
    }, 1000);
  }
}

const timer1 = new CountdownTimer('#timer-1', new Date('May 18, 2020'));
const timer2 = new CountdownTimer('#timer-2', new Date('May 3, 2020'));
