<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import { Tour } from "../"
  import { copyAndModifyArgs } from "./helpers.js"

  const args = {
    steps: [
      {
        title:    'Welcome to Tour userName',
        content:  '<p>Tour takes you through steps of the Tour.</p><p style="text-align: center; font-size: x-large">● ○ ○ ○</p>',
        left:     'Skip tour',
        previous: -1,
      },
      {
        title:   'Tour step 2',
        content: '<p>Tour step 2 content goes here.</p><p style="text-align: center; font-size: x-large">○ ● ○ ○</p>',
        previous: 0,
      },
      {
        title:    'Tour step 3',
        content:  '<p>Tour content. blah. blah blah.</p><p style="text-align: center; font-size: x-large">○ ○ ● ○</p>',
        previous: 1,
      },
      {
        title:    'Finish the Tour already',
        content:  '<p>Finally its over</p>I mean it.<p style="text-align: center; font-size: x-large">○ ○ ○ ●</p>',
        right:    'Finish it →',
        target:   './',
        previous: 2,
      },
    ],
    onAlertChosen: () => {},
    class: '', //only works for global classes
  }
</script>

<Meta
  title="Molecule/Tour"
  component={Tour}
/>

<Template let:args>
  <Tour on:AlertChosen={args.onAlertChosen} {...args}/>
</Template>

<Story
  name="Default"
  {args}
/>
