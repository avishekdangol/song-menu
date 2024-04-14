import kaboom from 'kaboom'

export const Kaboom = el => kaboom({
  global: false,
  touchToMouse: true,
  canvas: el,
})
