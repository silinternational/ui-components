<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import { Button, Datatable, Drawer } from '../components/mdc'
import Page from '../components/page/Page.svelte'
import { copyAndModifyArgs } from './helpers.js'

const args = {
  class: '', //only works for global classes
  title: 'Title',
  toggle: true,
  currentUrl: './user',
  menuItems: [
    {},
    {
      url: './user',
      icon: 'account_circle',
      label: 'account',
      tooltip: 'user account',
    },
    {
      url: './',
      icon: 'face',
      label: 'bio',
    },
    {
      url: './',
      icon: 'add',
      label: 'add stuff',
      tooltip: 'add things',
    },
    {
      url: './',
      icon: 'remove',
      label: 'remove stuff',
      tooltip: 'remove things',
    },
    {
      url: './',
      icon: 'money',
      label: 'reload',
      button: true,
    },
  ],
}
</script>

<style>
footer {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: end;
}
a {
  padding-bottom: 2rem;
}
</style>

<Meta title="Molecule/Drawer" component={Drawer} />

<Template let:args>
  <body>
    <Drawer {...args}>
      <span class="pointer" slot="header">
        <img class="w-100" src="/logo.png" alt="logo" />
        <Button on:click={() => (args.toggle = !args.toggle)}>Toggle drawer</Button>
      </span>

      <Button on:click={() => (args.toggle = !args.toggle)}>Toggle drawer</Button>
      <Page>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
          dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
          Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
          Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
          Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus,
          iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum.
          Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed
          lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla
          facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien.
          Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus
          luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget
          diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia
          molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum
          sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum
          tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est
          pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a
          tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet,
          augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
          dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
          Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
          Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
          Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus,
          iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum.
          Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed
          lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla
          facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien.
        </p>

        <Datatable on:sorted={args.onSorted}>
          <Datatable.Header>
            <Datatable.Header.Item class={'w-50'}>Name</Datatable.Header.Item>
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
              <Datatable.Data.Row.Item colspan={6}>Done loading</Datatable.Data.Row.Item>
            </Datatable.Data.Row>
          </Datatable.Data>
        </Datatable>
      </Page>

      <footer>
        <a class="pr-1" href="">Terms of Service</a>
        <a href="">Privacy Policy</a>
      </footer>
    </Drawer>
  </body>
</Template>

<Story name="Default" {args} />

<Story name="Subtitle" args={copyAndModifyArgs(args, { subtitle: 'subtitle' })} />

<Story name="Dismissible" args={copyAndModifyArgs(args, { dismissible: true })} />

<Story name="HideForTablets" args={copyAndModifyArgs(args, { hideForTablet: true, modal: true })} />

<Story name="hideForPhonesOnly" args={copyAndModifyArgs(args, { hideForPhonesOnly: true, modal: true })} />

<Story name="miniMenu" args={copyAndModifyArgs(args, { miniMenu: true })} />
