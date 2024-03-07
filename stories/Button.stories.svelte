<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { Button } from '../components/mdc'
import { copyAndModifyArgs } from './helpers.js'

const args = {
  raised: true,
  class: '',
  'on:click': () => alert('you clicked'),
}
</script>

<Meta title="Atoms/Button" tags={['autodocs']} component={Button} />

<Template let:args>
  <Button {...args} on:click={args['on:click']}>Button slot</Button>
</Template>

<Story name="Primary" {args} />

<Story name="Secondary" args={copyAndModifyArgs(args, { outlined: true })} />

<Story name="Disabled" args={copyAndModifyArgs(args, { disabled: true })} />

<Story name="Icon After" args={copyAndModifyArgs(args, { appendIcon: 'arrow_forward' })} />

<Story name="Icon Before" args={copyAndModifyArgs(args, { prependIcon: 'work' })} />

<Story
  name="Url"
  args={copyAndModifyArgs(args, {
    url: '/?path=/story/atoms-button--url',
    raised: false,
    'on:click': () => {},
  })}
/>

<Story
  name="Target"
  args={copyAndModifyArgs(args, {
    url: '/?path=/story/atoms-button--url',
    target: '_blank',
    raised: false,
    'on:click': () => {},
  })}
/>
