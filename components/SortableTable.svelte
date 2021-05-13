<script>
import { Button, Datatable, Progress } from './mdc'
import { isAboveMobile, isAboveTablet } from './mdc/breakpoints'
import { resolvePath, sortByNum, sortByString } from './helpers.js'
import { formatDate } from './dates'

let headerID = 'name'
let ascending = true
let current = {path : 'name', numeric: false}

export let loading = false
export let name = 'Name'
export let label = ''
export let hrefBase = 'projects' //link to project or gig
export let hrefEnd = '' //link to project or gig
export let datas = [] //title, headerID, numeric, action if a button, symbol, path, isDate if a date
export let projects = [] //projects, gigs, or targets
export let action //should contain the buttons name, allowAction and method
export let message = '' //parent needs to choose the message

$: path = current?.path
$: shallowArray = current?.numeric ? sortByNum(current?.path, projects, ascending) : sortByString(path, projects, ascending)

const sorted = event => {
    ascending = event.detail.sortValue === 'ascending'
    headerID = event.detail.columnId || ''
    current = datas.find(data => data.headerID == headerID) || {path : 'name', numeric: false}
}
</script>

<Datatable {label} on:sorted={sorted}>
<Datatable.Header>
    <Datatable.Header.Item sortable class={isAboveTablet() ? 'w-40' : ''}>{name}</Datatable.Header.Item>
    {#if isAboveMobile()}
        <Datatable.Header.Item>
            {#if action}
                Action
            {/if}
        </Datatable.Header.Item>
        {#each datas as data}
            <Datatable.Header.Item columnID={data.headerID} sortable>{data.title}</Datatable.Header.Item>
        {/each}
    {/if}
</Datatable.Header>

<Datatable.Data>
    {#each shallowArray as project (project.id)}
        <Datatable.Data.Row>
            <Datatable.Data.Row.Item><a href="/{hrefBase}/{project.id}/{hrefEnd}">{project.name}</a></Datatable.Data.Row.Item>
            {#if isAboveMobile()}
                <Datatable.Data.Row.Item>
                    {#if action?.allowAction(project)}
                        <Button on:click={() => action.action(project.id)}>{action.name}</Button>
                    {/if}
                </Datatable.Data.Row.Item>
                {#each datas as data}
                    <Datatable.Data.Row.Item numeric={data.numeric}>{data?.isDate ? formatDate(resolvePath(project, data?.path)) : resolvePath(project, data?.path)} {data?.symbol || ''}</Datatable.Data.Row.Item>
                {/each}
            {/if}
        </Datatable.Data.Row>
    {:else}
        <Datatable.Data.Row>
            <Datatable.Data.Row.Item colspan={isAboveMobile() ? 6 : 2}>
            {#if loading}
                Loading...
                <Progress.Linear indeterminate />
            {:else if message}
                {message}
            {/if}
            </Datatable.Data.Row.Item>
        </Datatable.Data.Row>
    {/each}
</Datatable.Data>
</Datatable>
