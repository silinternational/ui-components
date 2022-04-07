export const addOrRemoveInvalidClass = async (isInvalid, element) => {
  isInvalid ? element.classList?.add('mdc-text-field--invalid') : element.classList?.remove('mdc-text-field--invalid')
}

export function getDecimalPlacesLength(number = 0) {
  const string = String(number)
  const length = string.includes('e-') ? string.split('e-')?.[1] : string.split('.')[1]?.length
  return length || 0
}
