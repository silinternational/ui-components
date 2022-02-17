<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { IconButton } from '../components/mdc'
</script>

<Meta title="Atoms/IconButton" component={IconButton} />

<Template let:args>
  <IconButton {...args} on:click={args['on:click']} />
</Template>

<Story
  name="Primary"
  args={{
    icon: 'done',
    ariaLabel: 'ariaLabel',
    class: '', //will only work with global class
    url: '',
    disabled: false,
    'on:click': () => alert('click'),
  }}
/>
<Story
  name="Url"
  args={{
    icon: 'done',
    ariaLabel: 'ariaLabel',
    class: '', //will only work with global class
    url: 'https://google.com',
    disabled: false,
    'on:click': () => alert('click'),
  }}
/>
<Story
  name="Disabled"
  args={{
    icon: 'done',
    ariaLabel: 'ariaLabel',
    class: '', //will only work with global class
    url: '',
    disabled: true,
    'on:click': () => alert('click'),
  }}
/>
