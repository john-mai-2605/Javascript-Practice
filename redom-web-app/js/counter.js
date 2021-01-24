import { el, text } from 'redom';

export class Counter {
  constructor (day = "1 Jan 2022") {
    const targetDate = new Date(day)
    const clockStyling = {style: 'padding: 10px'}
    const timeStyling = {style: 'text-align: center'}
    const colon = el('h1', ':', {style : 'padding: 10px'})
    this.day = el('h1#day', 0, clockStyling)
    this.hour = el('h1#hour', 0, clockStyling)
    this.min = el('h1#min', 0, clockStyling)
    this.sec = el('h1#sec', 0, clockStyling)
    this.headline = el('h1', 'Happy new year', 
        {style: "display: flex; flex-wrap: wrap; justify-content: center; color: rgb(255, 236, 188)"})
    this.clock = el('div', 
        el('div', this.day, el('p', 'days', )), colon, 
        el('div', this.hour, el('p', 'hours', timeStyling)), colon.cloneNode(true),
        el('div', this.min, el('p', 'mins', timeStyling)), colon.cloneNode(true),
        el('div', this.sec, el('p', 'secs', timeStyling)), 
        {style: "display: flex; flex-wrap: wrap; justify-content: center; color: rgb(255,229,87)"})
    this.el = el('div', this.headline, this.clock)
    const format = time =>  time < 10 ? `0${time}` : time
    this.count = () => {  
      const currentDate = new Date()
      const totalSeconds = (targetDate - currentDate) / 1000
      this.day.innerHTML = format(Math.floor(totalSeconds / 3600 / 24))
      this.hour.innerHTML = format(Math.floor(totalSeconds / 3600) % 24)
      this.min.innerHTML = format(Math.floor(totalSeconds / 60) % 60)
      this.sec.innerHTML = format(Math.floor(totalSeconds) % 60)
    }
  }
}
