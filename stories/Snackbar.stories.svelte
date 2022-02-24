<script>
import { Snackbar, setNotice } from '../index.mjs'
import { onMount } from 'svelte'
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'

const args = {
  class: '', //only works for global classes
}

onMount(() => {
  setTimeout(() => setNotice('Here is a notice set by the setNotice function'), 2000)
})
</script>

<Meta title="Atoms/Snackbar" component={Snackbar} />

<Template let:args>
  <Snackbar {...args} />
</Template>

<Story name="Default" {args} />
