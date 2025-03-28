<script>
import { NumberInput } from '../components/mdc'
import { copyAndModifyArgs } from './helpers.js'
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { getDecimalPlacesLength } from '../components/mdc/TextInput/helpers'

let arrayOfValues = []
let dynamicValue
let lastKey = ''
let title = 'NumberInput'

const args = {
  label: title,
  'on:keydown': (event) => console.log('keydown', event),
  'on:keypress': (event) => (lastKey = event.key),
  'on:keyup': (event) => console.log('keyup', event),
  class: '', //will only work with global class
  step: '1',
}
$: arrayOfValues.forEach((v) =>
  setTimeout(() => {
    dynamicValue = v
  }, 100),
)

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#sequence_generator_range
function range(start, stop, step) {
  const numberOfDecToFix = getDecimalPlacesLength(step)
  return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step).toFixed(numberOfDecToFix))
}

function setValues(max, step) {
  arrayOfValues = range(0, max, step)
}
</script>

<style>
.d-none {
  display: none;
}
</style>

<Meta title="Atoms/NumberInput" component={NumberInput} />

<Template let:args>
  {#if !args.label}
    <div class="d-none">
      {setValues(args.maxValue, args.step)}
    </div>
  {/if}
  <NumberInput
    value={!args.label && dynamicValue}
    {...args}
    on:keydown={args['on:keydown']}
    on:keypress={args['on:keypress']}
    on:keyup={args['on:keyup']}
  />
  {#if lastKey}
    <p>Last key pressed: {lastKey}</p>
  {/if}
</Template>

<Story name="Default" {args} />

<Story name="Required" args={copyAndModifyArgs(args, { required: true })} />

<Story name="Placeholder" args={copyAndModifyArgs(args, { placeholder: 'Placeholder' })} />

<Story name="Label" args={copyAndModifyArgs(args, { label: 'label' })} />

<Story name="MinValue" args={copyAndModifyArgs(args, { minValue: '0' })} />

<Story name="MaxValue" args={copyAndModifyArgs(args, { maxValue: '10' })} />

<Story name="Step" args={copyAndModifyArgs(args, { step: '.5' })} />

<Story name="Autofocus" args={copyAndModifyArgs(args, { autofocus: true })} />

<Story name="Disabled" args={copyAndModifyArgs(args, { disabled: true })} />

<Story name="Description" args={copyAndModifyArgs(args, { description: 'a description' })} />

<Story name="Test step" args={{ ...args, label: '' }} />

<Story name="showError" args={copyAndModifyArgs(args, { showError: true })} />

<Story name="showWarn" args={copyAndModifyArgs(args, { showWarn: true })} />
