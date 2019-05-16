import * as PIXI from 'pixi.js'

const BitmapText = (root, props) => {
  const { text, style } = props
  return new PIXI.BitmapText(text, style)
}

export default BitmapText
