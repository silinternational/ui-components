<script>
import { isAboveMobile } from '../../mdc'
import { createEventDispatcher } from 'svelte'

/** @type {boolean} if the button uses raised styling or not */
export let raised = false
/** @type {boolean} if the button uses outlined styling or not */
export let outlined = false
/** @type {boolean} if the button is disabled or not */
export let uploading = false
/** @type {string} the mime type of the file. */
export let mimeType = 'application/pdf,image/*'

let fileInput = {}

let highlighted = false

const dispatch = createEventDispatcher()

function highlight() {
  highlighted = true
}

function unhighlight() {
  highlighted = false
}

function handleDrop(e) {
  unhighlight()

  let dt = e.dataTransfer
  let files = dt.files

  handleFiles(files)
}

function handleFiles(files) {
  if (!uploading) {
    uploading = true
    files = [...files] //turns files into an array so forEach works
    files.forEach(uploadFile)
  }
}

function uploadFile(file) {
  const formData = new FormData()

  formData.append('file', file)

  dispatch('upload', formData)
}
</script>

<style>
form > * {
  margin-top: 0;
}
#drop-area {
  border: 2px dashed #ccc;
}
#drop-area.highlighted {
  border-color: var(--mdc-theme-primary);
}

#fileElem {
  display: none;
}
.disabled {
  cursor: progress;
}
.icon {
  color: hsla(213, 6%, 55%, 1);
}
</style>

<form
  id="drop-area"
  class="br-8px flex justify-between align-items-center py-1 px-1 {$$props.class || ''}"
  class:highlighted
  on:dragenter|preventDefault|stopPropagation={highlight}
  on:dragleave|preventDefault|stopPropagation={unhighlight}
  on:dragover|preventDefault|stopPropagation={highlight}
  on:drop|preventDefault|stopPropagation={handleDrop}
  class:column={!isAboveMobile()}
>
  {#if !uploading}
    <input
      bind:this={fileInput}
      type="file"
      id="fileElem"
      multiple
      accept={mimeType}
      disabled={uploading}
      on:change={() => handleFiles(fileInput.files)}
    />
  {/if}
  <label
    class="mdc-button m-8px"
    for="fileElem"
    class:custom-text-button={raised}
    class:mdc-button--outlined={outlined}
    class:disabled={uploading}
    class:mdc-button--raised={raised}>Choose files</label
  >
  <div class="m-8px">or drop files here</div>
  <i class="material-icons icon m-8px" id="upload-icon">cloud_upload</i>
</form>
