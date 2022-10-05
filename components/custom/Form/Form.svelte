<script>
import { onMount } from 'svelte'
import { generateRandomID } from '../../../random'

export let id = generateRandomID('form-')
export let saveToLocalStorage = false
export let success = false

let form = {}

onMount(() => {
  saveToLocalStorage && listenForBlurOnForm(form)
})

$: saveToLocalStorage && restoreFormValues(form)
$: success && resetForm(form)

const resetForm = (form) => {
  form.reset()
  sessionStorage.removeItem(id)
}

const getValuesFromForm = (form) => Object.fromEntries(new FormData(form))

const storeFormValues = (formId, valuesFromForm) => {
  sessionStorage.setItem(formId, JSON.stringify(valuesFromForm))
}

const setValuesOnForm = (form, valuesForForm) => {
  Object.entries(valuesForForm).forEach((keyValuePair) => {
    const [key, value] = keyValuePair
    form[key].value = value
  })
}

const restoreFormValues = (form) => {
  const sessionStorageKey = form.id
  const formValuesJson = sessionStorage.getItem(sessionStorageKey)
  if (formValuesJson) {
    const valuesForForm = JSON.parse(formValuesJson)
    if (valuesForForm) {
      setValuesOnForm(form, valuesForForm)
    }
  }
}

const onBlur = (value) => {
  if (value) {
    storeFormValues(form.id, getValuesFromForm(form))
  }
}

const listenForBlurOnForm = (form) => {
  const inputs = form.querySelectorAll('input, textarea')
  inputs.forEach((input) => {
    input.addEventListener('blur', function () {
      onBlur(this.value)
    })
  })
}
</script>

<style>
:global(form > *) {
  margin-top: 2rem;
}
</style>

<form bind:this={form} {id} class="w-100 {$$props.class}" on:submit|preventDefault autocomplete="off">
  <slot />
</form>
