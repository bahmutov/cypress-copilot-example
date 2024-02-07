function formatPrice(price) {
  // return string starting with "$" sign
  // separate thousands with comma
  // formatted for USA
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return formatter.format(price)
}

export { formatPrice }
