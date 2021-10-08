<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { CustomCard } from '../'
import { copyAndModifyArgs } from './helpers.js'

const args = {
  class: '', //only works for global classes
}
</script>

<Meta title="Molecule/CustomCard" component={CustomCard} />

<Template let:args>
  <CustomCard {...args} />
</Template>

<Story name="Default" {args} />

<Story name="FooterText" args={copyAndModifyArgs(args, { footerText: 'Here is some footertext' })} />

<Story name="Icon" args={copyAndModifyArgs(args, { icon: 'face' })} />

<Story name="Buttons" args={copyAndModifyArgs(args, { buttons: [{ label: 'return to root', url: './' }] })} />

<Story name="Disabled" args={copyAndModifyArgs(args, { disabled: true })} />
