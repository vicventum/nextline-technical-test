export const utilSplitStringByComma = (inputString) => {
  if (inputString.trim() === '') return []
  const list = []
  inputString.split(',').forEach((value) => {
    const valueTrimmed = value.trim()
    if (valueTrimmed !== '') list.push(valueTrimmed)
  })
  return list
}
