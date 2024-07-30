const printNos = (n, result) => {
  if (n > 0) {
      result = result ? result : []
      result.push(n)
      return printNos(n - 1, result)
  }
  return result.reverse()
}