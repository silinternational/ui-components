<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { List } from '../components/mdc'
import { copyAndModifyArgs } from './helpers.js'

const args = {
  class: '', //will only work with global class
}

const onClick = () => alert('you clicked')
</script>

<Meta title="Molecule/List" component={List} />

<Template let:args>
  <List {...args}>
    <List.Divider />
    <List.Item on:click={onClick}>list item 1</List.Item>
    <List.Divider />
    <List.Item on:click={onClick}>list item 2</List.Item>
    <List.Divider />
    <List.Item on:click={onClick}>list item 3</List.Item>
    <List.Divider />
  </List>
</Template>

<Story name="Default" {args} />

<Story name="TwoList" args={copyAndModifyArgs(args, { twoLine: true })} />

<Story name="Avatar" args={copyAndModifyArgs(args, { avatar: true })} />
