import { generate, Item } from '@coder-calendar/core'
import { img_bg, img_taiji } from './resources'

function renderItems(items: Item[], emoji: string) {
  return items
    .map((item, index) =>
      `
        <g transform="translate(96, ${48 * index})" clip-path="url(#clip-item)">
          <text class="item-text">
              <tspan class="item-name" x="8" y="8">${emoji} ${item.name}</tspan>
              <tspan class="item-desc" x="8" y="27">${item.desc}</tspan>
          </text>
        </g>
  `.trim(),
    )
    .join('\n')
}

export function generateSVG(uuid: string, options: { title?: string } = {}) {
  const { goodbad, direction, random, lunar, todayString } = generate(uuid, 7)
  const goodEmojis = ['😜', '😱', '🤗']
  const badEmojis = ['🙄', '😵', '🤣']
  const goodEmoji = goodEmojis[random(goodEmojis.length - 1)]
  const badEmoji = badEmojis[random(badEmojis.length - 1)]
  const nlDateString = `${lunar.chineseYear}年【${lunar.animal}年】${lunar.chineseMonth}月 ${lunar.chineseDay}日`
  const sep_line_pos = 48 * goodbad.good.length + 8
  const title = options.title || '程序员老黄历'

  return `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="360" height="642" viewBox="0 0 360 642">
  <defs>
    <linearGradient id="gd-bg" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="rgb(255 151 44)"/>
        <stop offset="100%" stop-color="rgb(255 106 56)"/>
    </linearGradient>
    <pattern id="pt-bg" patternUnits="userSpaceOnUse" x="0" y="0" width="72" height="72">
        <image width="72" height="72" xlink:href="${img_bg}" />
    </pattern>
  </defs>
  <rect width="360" height="642" x="0" y="0" rx="32" ry="32" fill="url(#gd-bg)" />
  <rect width="360" height="642" x="0" y="0" rx="32" ry="32" fill="url(#pt-bg)" opacity="0.3" />
  <rect width="358" height="562" x="1" y="40" rx="40" ry="40" fill="#fff"/>
  <rect width="344" height="384" x="8" y="210" rx="40" ry="40" fill="#fffbeb"/>
  <g transform="translate(180, 8)">
    <text y="15" fill="#f5f5f5" font-size="12px">${title}</text>
  </g>
  <g transform="translate(180, 38)">
    <text class="date-text">
        <tspan x="8" y="24"  style="font-weight:600; font-size: 13px;">${todayString}</tspan>
        <tspan x="8" y="98"  style="font-weight:600; font-size: 120px;">${
          lunar.day
        }</tspan>
        <tspan x="8" y="154" style="font-weight:400; font-size: 10px;">${nlDateString}</tspan>
    </text>
  </g>
  <clipPath id="clip-item">
    <rect x="0" y="0" width="200" height="40"/>
  </clipPath>
  <g transform="translate(24, 224)">
    <image x="148" y="${
      sep_line_pos - 73 // sep_line_pos - img_height/2
    }" width="148" height="146" xlink:href="${img_taiji}" />
    <g transform="translate(0, 4)">
        ${renderItems(goodbad.good, goodEmoji)}
        <g transform="translate(48, ${(48 * goodbad.good.length - 8) / 2})">
          <circle r="36" fill="#fddf52" />
          <text class="group-text" y="4">宜</text>
        </g>
    </g>
    <line x1="4" x2="316" y1="${sep_line_pos}" y2="${sep_line_pos}" stroke-width="1" stroke-dasharray="3"  stroke="#ccc" />
    <g transform="translate(0, ${sep_line_pos + 24})">
        ${renderItems(goodbad.bad, badEmoji)}
        <g transform="translate(48, ${(48 * goodbad.bad.length - 8) / 2})">
          <circle r="36" fill="#ff6a38" />
          <text class="group-text" y="4">忌</text>
        </g>
    </g>
  </g>
  <g transform="translate(180, 623)">
    <text class="dir-text">
        <tspan>朝向：面向</tspan>
        <tspan class="dir-target">${direction.name}</tspan>
        <tspan>${direction.action}，${direction.desc}</tspan>
    </text>
  </g>
  <style>
    text {font-family: PingFang SC, sans-serif;  dominant-baseline:middle; text-anchor:middle; line-height: 1; }
    .date-text { fill: #FF6A38; font-family: Helvetica, Arial, sans-serif; }
    .group-text { font-size: 48px; font-weight: 600; fill:#fff;  }
    .item-text { fill:#666; text-anchor:start; }
    .item-text .item-name { font-size: 13px; }
    .item-text .item-desc { font-weight:200; font-size: 11px; }
    .dir-text {font-size:12px; font-weight: 300; fill:#fff;}
    .dir-text .dir-target{ font-size:13px; fill:#eaff8f; font-weight: 500; }
  </style>
</svg>`.trim()
}
