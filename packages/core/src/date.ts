import Lunar from '@tony801015/chinese-lunar'

const now: Date = new Date()
const y = now.getFullYear()
const m = now.getMonth() + 1
const d = now.getDate()
const s = now.getDay()

export const lunar = Lunar(`${y}`, padDateNumber(m), padDateNumber(d))

export function padDateNumber(m: number) {
  return m > 9 ? `${m}` : `0${m}`
}

export function getMonthDateString() {
  return `${padDateNumber(m)}${padDateNumber(d)}`
}

export function getFullYearString() {
  return y.toString()
}

export function getTodayNumber() {
  return +`${y}${getMonthDateString()}`
}

const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

export function getTodayString() {
  return `${y}年${padDateNumber(m)}月${padDateNumber(d)}日 ${weeks[s]}`
}

export function getHuangLiDateString() {
  return `${lunar.chineseYear}年【${lunar.animal}年】${lunar.chineseMonth}月 ${lunar.chineseDay}日`
}
