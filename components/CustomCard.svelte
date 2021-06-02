<script>
    import { Button, Card } from './mdc'

    export let src = ''
    export let alt = 'image is missing'
    export let title = 'Title'
    export let icon = ''
    export let disabled = false
    export let buttons
    export let footerText = ''
</script>

<style>
    img {
        object-fit: cover;
        object-position: 33%;
    }

    .disabled {
        mix-blend-mode: luminosity;
    }

    .action {
        margin-left: 8px;
    }
</style>

<Card class="h-100 py-1 {$$props.class}">
    <div class="flex justify-center">
        <img class="w-100" {src} {alt} class:disabled/>
    </div>

    <div class="flex justify-between align-items-center black">
        <h4>{title}</h4>

        <span class="material-icons">{icon}</span>  
    </div>

    <div class="fs-14 mb-1">
        <slot></slot>
    </div>

    <div class="action" slot="actions">
        {#if buttons && !disabled}
            {#each buttons as btn}
                <Button raised appendIcon="arrow_forward" url={btn.url}>{btn.label}</Button>
            {/each}
        {/if}

        {#if footerText}
            <div class="fs-12 gray">
                {footerText} 
            </div>
        {/if}
    </div>
</Card>