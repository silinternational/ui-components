<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import { TopAppBar } from "../components/mdc"
  import { copyAndModifyArgs } from "./helpers.js"

  const args = {
    class: '', //only works for global classes
    bgColorIsVariant: false,
    onNav: () => {},
  }
</script>

<Meta
  title="Atoms/TopAppBar"
  component={TopAppBar}
/>

<Template let:args>
  <TopAppBar {...args} on:nav={args.onNav}/>
</Template>

<Story
  name="Default"
  {args}
/>

<Story
  name="Dense"
  args={copyAndModifyArgs(args, {dense: true})}
/>

<Story
  name="Fixed"
  args={copyAndModifyArgs(args, {fixed: true})}
/>

<Story
  name="Hide above tablet"
  args={copyAndModifyArgs(args, {navIconBreakpointClass: "hide-above-tablet"})}
/>