export const addOrRemoveInvalidClass = async (isInvalid, element) => {
  isInvalid ? element.classList?.add('mdc-text-field--invalid') : element.classList?.remove('mdc-text-field--invalid')
}
