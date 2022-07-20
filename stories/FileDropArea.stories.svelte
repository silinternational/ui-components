<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { FileDropArea } from '../components/custom'
import { copyAndModifyArgs } from './helpers.js'

const args = {
  raised: true,
  outlined: false,
  uploading: false,
  mimeType: 'application/pdf,image/*',
  class: '',
  'on:upload': () => alert('you uploaded'),
}
</script>

<Meta title="Atoms/FileDropArea" component={FileDropArea} />

<Template let:args>
  <FileDropArea {...args} on:upload={args['on:upload']} />
</Template>

<Story name="Default" {args} />

<Story name="Raised" args={copyAndModifyArgs(args, { raised: true })} />

<Story name="Outlined" args={copyAndModifyArgs(args, { outlined: true })} />

<Story name="Uploading" args={copyAndModifyArgs(args, { uploading: true })} />

<Story name="MimeType" args={copyAndModifyArgs(args, { mimeType: 'image/*' })} />
