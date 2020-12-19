import namedColorToHexa from 'colornames'

const EXTRACT_RGB_PATTERN = /rgba?\((\d+), (\d+), (\d+)/
const NAMED_COLOR_PATTERN = /^\w+$/

expect.extend({
  toEqualColor(received: string, expected: string) {
    const equals = toEqualColor(received, expected)

    return {
      pass: equals,
      message: () => equals
        ? `Excepted ${received} not to equals ${expected}`
        : `Excepted ${received} to equals ${expected}`
    }
  }
})

const toEqualColor = (received: string, expected: string) => {
  return normalizeColor(received) === normalizeColor(expected)
}

const normalizeColor = (color: string) => {
  if (isNamedColor(color)) {
    const hexaColor = namedColorToHexa(color)

    if (!hexaColor) {
      throw new Error(`Unknown color: ${color}`)
    }

    return hexaColor.toLowerCase()
  }

  if (EXTRACT_RGB_PATTERN.test(color)) {
    return rgbToHexa(color)
  }

  return color.toLowerCase()
}

const isNamedColor = (color: string) => NAMED_COLOR_PATTERN.test(color)

const rgbToHexa = (color: string) => {
  const [, r, g, b] = color.match(EXTRACT_RGB_PATTERN)
  return `#${decimalToHexa(r)}${decimalToHexa(g)}${decimalToHexa(b)}`
}

const decimalToHexa = (decimal: string) => (
  parseInt(decimal, 10)
    .toString(16)
    .padStart(2, '0')
)
