import './_index.scss'
import TextArea from './TextArea.svelte'
import TextField from './TextField.svelte'
import MoneyInput from './MoneyInput.svelte'

export { TextArea, TextField, MoneyInput }

export const addOrRemoveInvalidClass = async (isInvalid, element) => {
  isInvalid ? element.classList.add('mdc-text-field--invalid') : element.classList.remove('mdc-text-field--invalid')
}
