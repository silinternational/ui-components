<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { Snackbar, setNotice } from '../components/mdc'
import { onMount } from 'svelte'

const args = {
  class: '', //only works for global classes
}

onMount(() => {
  setTimeout(() => setNotice('Here is a notice set by the setNotice function'), 2000)
})
</script>

<Meta tags={['autodocs']} title="Atoms/Snackbar" component={Snackbar} />

<Template let:args>
  <Snackbar {...args} />
</Template>

<Story name="Default" {args} />
