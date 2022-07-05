import { Activity, Direction, Fortune, Replacement, Special } from './types'

export const fortunes: Fortune[] = [
  {
    name: '不可说',
    desc: '天机难测，好自为之',
    star: 0,
    rate: 4,
  },
  {
    name: '垃圾',
    desc: '在座的各位，都是垃圾',
    star: 0,
    rate: 50,
  },
  {
    name: '惨',
    desc: '惨绝人寰的惨，惨无人道的惨',
    star: 1,
    rate: 58,
  },
  {
    name: '险恶',
    desc: '永远不要哭泣，永远不要说谎来伤害自己',
    star: 2,
    rate: 68,
  },
  {
    name: '马马虎虎',
    desc: '得过且过，难得糊涂',
    star: 3,
    rate: 78,
  },
  {
    name: '明媚',
    desc: '闲庭信步，不穿秋裤',
    star: 4,
    rate: 88,
  },
  {
    name: '特别棒',
    desc: '666666666666666666',
    star: 5,
    rate: 98,
  },
  {
    name: '祥云乍现',
    desc: '至尊无上，地表最强',
    star: 30,
    rate: 100,
  },
]

export const actionNames = [
  '干活',
  '写程序',
  '撸代码',
  '写文档',
  '做PPT',
  '做汇报',
]

export const actionDescs = [
  '有异样的灵感来源',
  '灵感说来就来',
  '山重水复疑无路，柳暗花明又一村',
  '踏破铁鞋无觅处，得来全不费工夫',
  '文思泉涌一泻千里黯然销魂不可自拔',
]

export const directions: Partial<Direction>[] = [
  { name: '北方' },
  { name: '东北方' },
  { name: '东方' },
  { name: '东南方' },
  { name: '南方' },
  { name: '西南方' },
  { name: '西方' },
  { name: '西北方' },
  { name: '自己', desc: '真正的勇士，敢于面对惨淡的人生' },
  { name: '大海', desc: '喂马、劈柴、周游世界' },
  { name: '墙角', action: '思考', desc: '睿智的双眼如一汪深幽的潭水' },
]

export const activities: Activity[] = [
  {
    name: '写单元测试',
    good: '发现一个重大问题，被老板表扬了',
    bad: '发布都延期了，写个鬼的单元测试啊',
  },
  {
    name: '洗澡',
    good: '你几天没洗澡了？',
    bad: '会把设计方面的灵感洗掉',
  },
  {
    name: '锻炼',
    good: '一口气上十楼，腰不酸腿不痛',
    bad: '能量没消耗多少，吃得却更多',
  },
  {
    name: '抽烟',
    good: '抽烟有利于提神，增加思维敏捷',
    bad: '除非你活够了，死得早点没关系',
  },
  {
    name: '重构',
    good: '代码质量得到提高',
    bad: '你很有可能会陷入泥潭，骑虎难下',
  },
  {
    name: '使用 %t',
    good: '看起来更有品位',
    bad: '别人会觉得你在装逼',
  },
  {
    name: '跳槽',
    good: '该放手时就放手',
    bad: '鉴于当前的经济形势，你的下一份工作未必比现在强',
  },
  {
    name: '招人',
    good: '你面前这位有成为牛人的潜质',
    bad: '这人会写程序吗？',
  },
  {
    name: '面试',
    good: '面试官今天心情很好',
    bad: '面试官不爽，会拿你出气',
  },
  {
    name: '提交辞职申请',
    good: '公司找到了一个比你更能干更便宜的家伙，巴不得你赶快滚蛋',
    bad: '鉴于当前的经济形势，你的下一份工作未必比现在强',
  },
  {
    name: '申请加薪',
    good: '老板今天心情很好',
    bad: '公司正在考虑裁员',
  },
  {
    name: '晚上加班',
    good: '晚上是程序员精神最好的时候',
    bad: '妨碍保安部门夜间工作',
  },
  {
    name: '在妹子面前吹牛',
    good: '改善你矮穷挫的形象',
    bad: '妹子识破了，指着鼻子骂半小时',
  },
  {
    name: '撸一发',
    good: '避免缓冲区溢出',
    bad: '小撸怡情，大撸伤身，强撸灰飞烟灭',
  },
  {
    name: '浏览成人网站',
    good: '重拾对生活的信心',
    bad: '单身久了看到谁都感觉眉清目秀',
  },
  {
    name: '命名变量"%v"',
    good: '显示出你唑唑逼人的逼格',
    bad: '暴露了你异于常人的英文水准',
  },
  {
    name: '写超过 %l 行的方法',
    good: '你的代码组织的很好，长一点没关系',
    bad: '原来代码只有你和上帝看的懂，现在只剩上帝了',
  },
  {
    name: '提交代码',
    good: '神奇地修复了几个遗留 BUG',
    bad: '遇到一大堆冲突会让你觉得自己是不是时间穿越了',
  },
  {
    name: '代码复审',
    good: '发现重要问题的几率大大增加',
    bad: '你什么问题都发现不了，白白浪费时间',
  },
  {
    name: '开会',
    good: '写代码之余放松一下打个盹，有益健康',
    bad: '小心天降屎盆子背黑锅',
  },
  {
    name: '农药上分',
    good: '有如神助，连赢十把',
    bad: '问君能有几多愁，五人四坑赶快投',
  },
  {
    name: '修复 BUG',
    good: '你今天对 BUG 的嗅觉大大提高',
    bad: '修复一个多出三个',
  },
  {
    name: '设计评审',
    good: '设计评审会议将变成头脑风暴',
    bad: '人人筋疲力尽，评审就这么过了',
  },
]

export const specials: Special[] = [
  {
    date: '0213,0214',
    type: 'bad',
    name: '翘班',
    desc: '努力营造敬业氛围',
  },
  {
    date: '0601',
    type: 'good',
    name: '欢度六一',
    desc: '过期儿童欢乐多',
  },
  {
    date: '1224',
    type: 'good',
    name: '欢度平安夜',
    desc: '放心玩耍吧，你长得最平安了',
  },
]

const variableNames = [
  'jieguo',
  'huodong',
  'pay',
  'expire',
  'zhangdan',
  'every',
  'free',
  'i1',
  'a',
  'virtual',
  'ad',
  'asdf',
  'spider',
  'mima',
  'pass',
  'ui',
]

const tools = [
  'VSCode 写程序',
  'Vim 写程序',
  '记事本写程序',
  'PPT 画图',
  'Windows10',
  'Linux',
  'MacOS',
  'IE',
  'Chrome',
  'Android 设备',
  'iOS 设备',
]

export const replace: Replacement[] = [
  {
    name: '%v',
    desc: variableNames.join(','),
  },
  {
    name: '%t',
    desc: tools.join(','),
  },
  {
    name: '%l',
    random: true,
    randomMin: 30,
    randomMax: 250,
  },
]
