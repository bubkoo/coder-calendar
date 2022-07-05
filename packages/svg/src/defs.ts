import { img_bg } from './assets'

export const defs = `
  <defs>
    <linearGradient id="gd-bg" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="rgb(255 151 44)"/>
      <stop offset="100%" stop-color="rgb(255 106 56)"/>
    </linearGradient>
    <pattern id="pt-bg" patternUnits="userSpaceOnUse" x="0" y="0" width="72" height="72">
      <image width="72" height="72" xlink:href="${img_bg}" />
    </pattern>
    <linearGradient id="gd-date" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" style="stop-color:#ff512f;"/>
      <stop offset="25%" style="stop-color:#f09819;"/>
      <stop offset="50%" style="stop-color:#FF6A38;"/>
      <stop offset="75%" style="stop-color:#f09819;"/>
      <stop offset="100%" style="stop-color:#ff512f;"/>
    </linearGradient>
    <pattern id="pt-date" patternUnits="userSpaceOnUse" x="0" y="0" width="540" height="240">
      <rect x="0" y="0" width="540" height="240" fill="url(#gd-date)">
        <animate attributeType="XML"
                 attributeName="x"
                 from="0"
                 to="540"
                 dur="7s"
                 repeatCount="indefinite"/>
      </rect>
      <rect x="-540" y="0" width="540" height="240" fill="url(#gd-date)">
        <animate attributeType="XML"
                 attributeName="x"
                 from="-540"
                 to="0"
                 dur="7s"
                 repeatCount="indefinite"/>
      </rect>
    </pattern>
  </defs>
`
