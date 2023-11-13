export const colors = {
  primary: '#003049',
  white: '#ffffff',
  background: '##ffffff',
  surface: '#2a2f3d',
} as const

type T = keyof typeof colors

export const colorsAntDesign = (Object.keys(colors) as T[]).reduce(
  (acc, key) => ({
    ...acc,
    ['color'.concat(key.toUpperCase())]: colors[key],
  }),
  {},
)
