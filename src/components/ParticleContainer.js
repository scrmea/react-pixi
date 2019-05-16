import * as PIXI from 'pixi.js'
import { applyDefaultProps, getTextureFromProps } from '../utils/props'

const ParticleContainer = (root, props) => {
  const { maxSize = 1500, batchSize = 16384, autoResize = false } = props

  const properties = {
    ...{
      vertices: false,
      scale: true,
      position: true,
      rotation: true,
      uvs: true,
      tint: true,
    },
    ...(props.properties || {}),
  }

  const destroyOptions = {
    ...{
      children: false,
      texture: false,
      baseTexture: false,
    },
    ...(props.destroyOptions || {}),
  }

  const container = new PIXI.ParticleContainer(maxSize, properties, batchSize, autoResize)

  container.willUnmount = (instance, child, parent) => {
    instance.destroy(destroyOptions)
  }

  return container
}

export default ParticleContainer
