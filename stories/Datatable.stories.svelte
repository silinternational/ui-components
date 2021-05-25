<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import { Datatable, isAboveMobile, isAboveTablet, Progress } from "../components/mdc"
  import { copyAndModifyArgs } from "./helpers.js"
  import { onMount } from "svelte"

  const args = {
    class: '', //only works for global classes
    onSorted: () => {},
  }

  let loaded = false

  onMount(() => setTimeout(() => {
    loaded = true
  }, 5000))
</script>

<Meta
  title="Molecule/Datatable"
  component={Datatable}
/>

<Template let:args>
  <Datatable {...args} on:sorted={args.onSorted}>
    <Datatable.Header>
      <Datatable.Header.Item class={isAboveTablet() ? 'w-50' : ''}>Name</Datatable.Header.Item>
      <Datatable.Header.Item>Date</Datatable.Header.Item>
    </Datatable.Header>

    <Datatable.Data>
        <Datatable.Data.Row>
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
              <Progress.Linear barColorProvided={false} indeterminate/>
            {/if}
          </Datatable.Data.Row.Item>
        </Datatable.Data.Row>
    </Datatable.Data>
  </Datatable>
</Template>

<Story
  name="Default"
  {args}
/>

<Story
  name="Label"
  args={copyAndModifyArgs(args, {label: 'label'})}
/>