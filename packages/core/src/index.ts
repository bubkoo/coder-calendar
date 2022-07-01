import {
  initPRNG,
  randomNum,
  getFortune,
  getGoodBad,
  getDirection,
} from './random'
import { getTodayNumber, getTodayString, lunar } from './date'
import { directions, specials, activities, replace, fortunes } from './data'

export * from './types'

export function generate(uuid: string, count: number = 7) {
  initPRNG(`${uuid}_${getTodayNumber()}`)
  return {
    lunar,
    random: randomNum,
    todayString: getTodayString(),
    fortune: getFortune(fortunes),
    direction: getDirection(directions),
    goodbad: getGoodBad({ specials, activities, replace }, count),
  }
}
