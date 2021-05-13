<script>
    import Badge from './Badge.svelte'
    import { day } from './const'
    import { findByID } from "./helpers"
    import Tooltip from './mdc/Tooltip'
    import { goto } from '@roxi/routify'
    import { createEventDispatcher } from 'svelte'
    
    export let alt = 'owner Avatar'
    export let gigID = ''
    export let languages = []
    export let link = `/gigs/${gigID}/requests`
    export let claimed = false
    export let gig = {}
    let showImage = true
    const now = Date.now()
    
    $: gigID && getGig(gigID)
    $: src = gig?.owner?.avatar_url
    $: title = gig?.name || ''
    $: footerText = findByID(languages, gig?.target_language_id)?.name
    $: count = gig?.requests_count || ''
    $: ownerInitial = gig?.owner?.nickname?.charAt(0) || ''
    $: msLeft = Date.parse(gig?.deadline) - now
    $: daysLeft = msLeft > 0 ? Math.floor(msLeft/day) : '-' //TODO, Math.min(daysLeft, remainingWindowDays when available)

    const dispatch = createEventDispatcher()

    async function getGig (gigID) {
        dispatch('getGig', gigID)
    }

    const avatarError = () => showImage = false
</script>

<style>
    .content {
        overflow-wrap: anywhere;
    }

    .flex img {
        object-position: 33%;
        height: 24px;
        width: 24px;
        border-radius: 24px;
    }

    .padding {
        padding-left: 16px;
        padding-right: 16px;
    }

    .mb-8px {
        margin-bottom: 8px;
    }

    .material-icons.md-16 {
        font-size: 16px;
    }

    .max-ht {
        max-height: 200px;
        min-height: 60px;
        overflow: hidden;
        position: relative;
    }

    .max-ht .fade { 
        position: absolute; 
        bottom: 0; 
        left: 0;
        margin: 0; padding: 30px 0; 
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), white);
    }

    .divider {
        border-top: 3px solid var(sil-gray);
    }

    .icon {
        margin-left: 4px;
    }
</style>
    
<div on:click={$goto(link)} class="mdc-card h-100">
    <div class="mdc-card__primary-action padding h-100" tabindex="0">
        <div class="flex justify-between aligned fs-16 black">
            <p>{title}</p>
            <div class="flex justify-between aligned">
                {#if showImage && src}
                    <img {src} {alt} on:error={avatarError}/>
                {:else}
                    <Badge color='blue'>{ownerInitial}</Badge>
                {/if}
            </div> 
        </div>
        
        <div class="content gray fs-14 max-ht h-100 mb-1">
            {gig?.description || 'loading...'}
            <div class="fade align-center w-100"></div>
        </div>

        <hr class="divider w-100"/>

        <div class="flex justify-between aligned mb-8px gray fs-12">
            <span>{footerText}</span>
            <span class="flex justify-between aligned">
                <Tooltip.Wrapper ariaDescribedBy={`count-${gigID}`}>
                    <div class="flex aligned">
                        <span class="material-icons md-16">ballot</span>
                        <span>{count}</span>
                    </div>
                </Tooltip.Wrapper>
                <div class="icon">
                    <Tooltip.Wrapper ariaDescribedBy={`days-${gigID}`}>
                        <div class="flex aligned">
                            <span class="material-icons md-16">brightness_4</span>
                            <span>{daysLeft}</span>
                        </div>
                    </Tooltip.Wrapper>
                </div>
            </span>
        </div>
    </div>
</div>

<Tooltip tooltipID={`count-${gigID}`}>{gig?.word_count} words in {count} portions</Tooltip>
<Tooltip tooltipID={`days-${gigID}`}>{ claimed ? `Due in ${daysLeft} days` : 'Due 7 days after claiming' }</Tooltip>