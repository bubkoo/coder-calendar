import SeedRandom from 'seedrandom'
import { actionDescs, actionNames } from './data'
import { getMonthDateString, getFullYearString } from './date'
import {
  Activity,
  Direction,
  Fortune,
  Item,
  Replacement,
  Special,
} from './types'

let prng: SeedRandom.PRNG
let hasAD = false

export function initPRNG(seed?: string) {
  prng = seed ? SeedRandom(seed) : prng || SeedRandom(seed)
  return prng
}

export const randomNum = (num: number = 1) => Math.round(prng() * num)

export function getFortune(presets: Fortune[]) {
  const rand = randomNum(100)
  const res = presets.find((item) => item.rate >= rand)!
  res.rate = rand
  return res
}

export function getDirection(data: Partial<Direction>[]) {
  const dir = data[randomNum(data.length - 1)]
  if (!dir.action) {
    dir.action = actionNames[randomNum(actionNames.length - 1)]
  }

  if (!dir.desc) {
    dir.desc = actionDescs[randomNum(actionDescs.length - 1)]
  }
  return dir as Direction
}

function getSpecials(presets: Special[]) {
  const currentYear = getFullYearString()
  const currentDate = getMonthDateString()
  const result: { good: Special[]; bad: Special[] } = {
    good: [],
    bad: [],
  }
  presets.forEach((item) => {
    if (
      item.date.indexOf(currentDate) >= 0 &&
      (!item.year || item.year === currentYear)
    ) {
      if (item.ad) {
        hasAD = true
      }
      if (item.type === 'good') {
        result.good.push(item)
      } else {
        result.bad.push(item)
      }
    }
  })
  return result
}

function parseName(name: string, replace: Replacement[]) {
  let output = name
  if (output.match(/%[a-z]/i)) {
    replace.forEach((item) => {
      if (item.random) {
        output = output.replace(
          item.name,
          `${randomNum(item.randomMax - item.randomMin) + item.randomMin}`,
        )
      } else {
        const ptesets = item.desc.split(',').map((s) => s.trim())
        output = output.replace(
          item.name,
          ptesets[randomNum(ptesets.length - 1)],
        )
      }
    })
  }
  return output
}

function getActivities(
  data: Activity[],
  replace: Replacement[],
  count: number,
) {
  const adItems = data.filter((item) => item.ad)
  const normalItems = data.filter((item) => !item.ad)
  const adItem = !hasAD && adItems[randomNum(adItems.length - 1)]

  const result: Activity[] = []
  if (adItem) {
    result.push(adItem)
  }
  for (let i = 0, l = count - (adItem ? 1 : 0); i < l; i++) {
    const index = randomNum(normalItems.length - 1)
    const item = normalItems[index]
    normalItems.splice(index, 1)
    result.push({
      ...item,
      name: parseName(item.name, replace),
    })
  }

  return result
}

const adfirst = (data: Item[]) => data.sort((a: any) => (a.ad ? -1 : 0))

export function getGoodBad(
  data: { specials: Special[]; activities: Activity[]; replace: Replacement[] },
  count: number,
) {
  // 当天特殊事件
  const specials = getSpecials(data.specials)
  const activities = getActivities(
    data.activities,
    data.replace,
    count - specials.good.length - specials.bad.length,
  )

  // 宜
  const numGood = randomNum() + Math.floor(count / 2)
  const goodArr: Item[] = []
  for (let i = 0; i < numGood; i++) {
    const good = specials.good[i]
    if (good) {
      goodArr.push({
        name: good.name,
        desc: good.desc,
        ad: good.ad,
        link: good.link,
      })
    } else {
      const index = randomNum(activities.length - 1)
      const item = activities[index]
      activities.splice(index, 1)
      goodArr.push({
        name: item.name,
        desc: item.good,
        ad: item.ad,
        link: item.link,
      })
    }
  }

  // 忌
  const badArr: Item[] = []
  specials.bad.forEach((bad) => {
    badArr.push({
      name: bad.name,
      desc: bad.desc,
      ad: bad.ad,
      link: bad.link,
    })
  })

  activities.forEach((item) => {
    badArr.push({
      name: item.name,
      desc: item.bad,
      ad: item.ad,
      link: item.link,
    })
  })

  return {
    good: adfirst(goodArr),
    bad: adfirst(badArr),
  }
}
