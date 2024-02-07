/// <reference types="cypress" />
// @ts-check

import { formatPrice } from './utils'

describe('formatPrice', () => {
  it('should format price correctly', () => {
    const price = 1000
    const formattedPrice = formatPrice(price)
    expect(formattedPrice).to.equal('$1,000.00')
  })

  it('should format negative price correctly', () => {
    const price = -1000
    const formattedPrice = formatPrice(price)
    expect(formattedPrice).to.equal('-$1,000.00')
  })

  it('should format zero price correctly', () => {
    const price = 0
    const formattedPrice = formatPrice(price)
    expect(formattedPrice).to.equal('$0.00')
  })

  it('should format price with cents correctly', () => {
    const price = 1000.5
    const formattedPrice = formatPrice(price)
    expect(formattedPrice).to.equal('$1,000.50')
  })
})
