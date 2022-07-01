export interface Fortune extends Item {
  name: string
  desc: string
  star: number
  rate: number
}

export interface Direction {
  name: string
  desc: string
  action: string
}

export interface AD {
  ad?: boolean
  link?: string
}

export interface Item extends AD {
  name: string
  desc: string
}

export interface Special extends Item {
  date: string
  year?: string
  type: 'good' | 'bad'
}

export interface Activity extends AD {
  name: string
  good: string
  bad: string
}

export type Replacement =
  | {
      name: string
      desc: string
      random?: undefined
      randomMin?: undefined
      randomMax?: undefined
    }
  | {
      name: string
      random: true
      randomMin: number
      randomMax: number
      desc?: undefined
    }
