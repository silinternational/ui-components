<script>
import { SearchableSelect, Form } from '../components/custom'
import { Button, Progress, Snackbar, setNotice } from '../components/mdc'
import { copyAndModifyArgs } from './helpers.js'
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'

let choice
let loading = true

const args = {
  options: {
    'choice 1': 'choice 1',
    'choice 2': 'choice 2',
    'choice 3': 'choice 3',
    'choice 4': 'choice 4',
  },
  placeholder: 'choice 1',
  padding: '12px',
  required: false,
  width: '232px',
  maxlength: 255,
  'on:chosen': (e) => setNotice(e.detail + ' chosen (accessed by event.detail)'),
  'on:check': (e) => {
    !args.options[e.detail] && setNotice(e.detail + ' not available')
  },
  class: '', //only works for global classes
}

setTimeout(() => {
  choice = 'choice 2'
  loading = false
}, 1500)
</script>

<Meta tags={['autodocs']} title="Atoms/SearchableSelect" component={SearchableSelect} />

<Template let:args>
  <Form on:submit={() => setNotice('submitted')}>
    <SearchableSelect {choice} {...args} on:chosen={args['on:chosen']} on:check={args['on:check']} />
    <Button>Submit</Button>
  </Form>

  {#if loading}
    <Progress.Circular />
  {/if}

  <Snackbar />
</Template>

<Story name="Default" {args} />
<Story name="placeholder" args={copyAndModifyArgs(args, { label: 'Label' })} />
<Story name="Width" args={copyAndModifyArgs(args, { width: '560px' })} />
<Story name="Disabled" args={copyAndModifyArgs(args, { disabled: true })} />
<Story name="Maxlength" args={copyAndModifyArgs(args, { maxlength: 25 })} />
<Story name="padding" args={copyAndModifyArgs(args, { padding: '20px' })} />
<Story
  name="required"
  args={copyAndModifyArgs(args, { required: true, 'on:check': () => console.log('this is required') })}
/>
