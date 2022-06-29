<script>
import { Meta, Story } from '@storybook/addon-svelte-csf'
import { Datatable, isAboveMobile, isAboveTablet, Progress } from '../components/mdc'
import { onMount } from 'svelte'

const args = {
  class: '', //only works for global classes
  'on:sorted': (e) => alert('you sorted the table'),
  'on:selectedAll': (e) => alert('you selected all rows'),
  'on:unselectedAll': (e) => alert('you unselected all rows'),
  'on:rowSelectionChanged': (e) => alert(`row ${e.detail.rowId} was ${e.detail.selected ? 'selected' : 'unselected'}`),
  'on:click': (e) => alert(`you clicked on row ${e.detail}`),
}

let loaded = false

onMount(() =>
  setTimeout(() => {
    loaded = true
  }, 5000)
)
</script>

<Meta
  title="Molecule/Datatable"
  component={Datatable}
  argTypes={{
    label: { control: 'text' },
    clickable: { control: 'boolean' },
  }}
/>

<Story name="Default" {args}>
  <Datatable
    class={args.class}
    on:sorted={args['on:sorted']}
    on:rowSelectionChanged={args['on:rowSelectionChanged']}
    on:unselectedAll={args['on:unselectedAll']}
    on:selectedAll={args['on:selectedAll']}
  >
    <Datatable.Header>
      <Datatable.Header.Item class={isAboveTablet() ? 'w-50' : ''}>Name</Datatable.Header.Item>
      <Datatable.Header.Item>Date</Datatable.Header.Item>
    </Datatable.Header>

    <Datatable.Data>
      <Datatable.Data.Row clickable={args.clickable}>
        <Datatable.Data.Row.Item>item</Datatable.Data.Row.Item>
        <Datatable.Data.Row.Item>today</Datatable.Data.Row.Item>
      </Datatable.Data.Row>

      <Datatable.Data.Row>
        <Datatable.Data.Row.Item>item2</Datatable.Data.Row.Item>
        <Datatable.Data.Row.Item>tomorrow</Datatable.Data.Row.Item>
      </Datatable.Data.Row>

      <Datatable.Data.Row>
        <Datatable.Data.Row.Item colspan={isAboveMobile() ? 6 : 2}>
          {#if loaded}
            Done loading
          {:else}
            Loading...
            <Progress.Linear barColorProvided={false} indeterminate />
          {/if}
        </Datatable.Data.Row.Item>
      </Datatable.Data.Row>
    </Datatable.Data>
  </Datatable>
</Story>

<Story name="Checkbox" {args}>
  <Datatable
    class={args.class}
    on:sorted={args['on:sorted']}
    on:rowSelectionChanged={args['on:rowSelectionChanged']}
    on:unselectedAll={args['on:unselectedAll']}
    on:selectedAll={args['on:selectedAll']}
  >
    <Datatable.Header>
      <Datatable.Header.Checkbox />
      <Datatable.Header.Item class={isAboveTablet() ? 'w-50' : ''}>Name</Datatable.Header.Item>
      <Datatable.Header.Item>Date</Datatable.Header.Item>
    </Datatable.Header>

    <Datatable.Data>
      <Datatable.Data.Row clickable={args.clickable}>
        <Datatable.Checkbox />
        <Datatable.Data.Row.Item>item</Datatable.Data.Row.Item>
        <Datatable.Data.Row.Item>today</Datatable.Data.Row.Item>
      </Datatable.Data.Row>

      <Datatable.Data.Row>
        <Datatable.Checkbox />
        <Datatable.Data.Row.Item>item2</Datatable.Data.Row.Item>
        <Datatable.Data.Row.Item>tomorrow</Datatable.Data.Row.Item>
      </Datatable.Data.Row>

      <Datatable.Data.Row>
        <Datatable.Checkbox />
        <Datatable.Data.Row.Item colspan={isAboveMobile() ? 6 : 2}>
          {#if loaded}
            Done loading
          {:else}
            Loading...
            <Progress.Linear barColorProvided={false} indeterminate />
          {/if}
        </Datatable.Data.Row.Item>
      </Datatable.Data.Row>
    </Datatable.Data>
  </Datatable>
</Story>

<Story name="Label">
  <Datatable
    class={args.class}
    label={'Label'}
    on:sorted={args['on:sorted']}
    on:rowSelectionChanged={args['on:rowSelectionChanged']}
    on:unselectedAll={args['on:unselectedAll']}
    on:selectedAll={args['on:selectedAll']}
  >
    <Datatable.Header>
      <Datatable.Header.Item class={isAboveTablet() ? 'w-50' : ''}>Name</Datatable.Header.Item>
      <Datatable.Header.Item>Date</Datatable.Header.Item>
    </Datatable.Header>

    <Datatable.Data>
      <Datatable.Data.Row clickable={args.clickable}>
        <Datatable.Data.Row.Item>item</Datatable.Data.Row.Item>
        <Datatable.Data.Row.Item>today</Datatable.Data.Row.Item>
      </Datatable.Data.Row>

      <Datatable.Data.Row>
        <Datatable.Data.Row.Item>item2</Datatable.Data.Row.Item>
        <Datatable.Data.Row.Item>tomorrow</Datatable.Data.Row.Item>
      </Datatable.Data.Row>

      <Datatable.Data.Row>
        <Datatable.Data.Row.Item colspan={isAboveMobile() ? 6 : 2}>
          {#if loaded}
            Done loading
          {:else}
            Loading...
            <Progress.Linear barColorProvided={false} indeterminate />
          {/if}
        </Datatable.Data.Row.Item>
      </Datatable.Data.Row>
    </Datatable.Data>
  </Datatable>
</Story>

<Story name="Clickable row">
  <Datatable class={args.class} on:sorted={args['on:sorted']}>
    <Datatable.Header>
      <Datatable.Header.Item class={isAboveTablet() ? 'w-50' : ''}>Name</Datatable.Header.Item>
      <Datatable.Header.Item>Date</Datatable.Header.Item>
    </Datatable.Header>

    <Datatable.Data>
      <Datatable.Data.Row on:click={args['on:click']} clickable="true}">
        <Datatable.Data.Row.Item>item</Datatable.Data.Row.Item>
        <Datatable.Data.Row.Item>today</Datatable.Data.Row.Item>
      </Datatable.Data.Row>

      <Datatable.Data.Row on:click={args['on:click']} clickable="true}">
        <Datatable.Data.Row.Item>item2</Datatable.Data.Row.Item>
        <Datatable.Data.Row.Item>tomorrow</Datatable.Data.Row.Item>
      </Datatable.Data.Row>

      <Datatable.Data.Row on:click={args['on:click']} clickable="true}">
        <Datatable.Data.Row.Item colspan={isAboveMobile() ? 6 : 2}>
          {#if loaded}
            Done loading
          {:else}
            Loading...
            <Progress.Linear barColorProvided={false} indeterminate />
          {/if}
        </Datatable.Data.Row.Item>
      </Datatable.Data.Row>
    </Datatable.Data>
  </Datatable>
</Story>
