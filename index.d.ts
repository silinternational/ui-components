declare module '@silintl/ui-components' {
  import type { SvelteComponentTyped } from 'svelte'
  import type { writable } from 'svelte/store'

  export type actions = typeof writable<any[]>

  interface ButtonProps {
    appendIcon?: string
    disabled?: boolean
    outlined?: boolean
    prependIcon?: string
    raised?: boolean
    target?: string
    url?: string
    class?: string
  }
  export class Button extends SvelteComponentTyped<ButtonProps> {}

  export function isAboveMobile(): boolean

  export function isAboveTablet(): boolean

  interface CardProps {
    secondary?: string
    outlined?: boolean
    color?: string
    isClickable?: boolean
    noPadding?: boolean
    class?: string
  }
  export class Card extends SvelteComponentTyped<CardProps> {}

  interface CheckboxProps {
    label?: string
    checked?: boolean
    disabled?: boolean
    uppercase?: boolean
    class?: string
    inputID?: string
  }
  export class Checkbox extends SvelteComponentTyped<CheckboxProps> {}

  //Datatable
  interface DatatableProps {
    label?: string
    numberOfCheckboxes?: number
    class?: string
  }
  export class Datatable extends SvelteComponentTyped<DatatableProps> {}

  export namespace Datatable {
    type HeaderProps = svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']>
    export class Header extends SvelteComponentTyped<HeaderProps> {}

    interface DatatableCheckboxProps {
      disabled?: boolean
      rowId?: string
      class?: string
    }
    export class Checkbox extends SvelteComponentTyped<DatatableCheckboxProps> {}

    export namespace Header {
      interface ItemProps {
        numeric?: boolean
        columnID?: string
        sortable?: boolean
        class?: string
      }
      export class Item extends SvelteComponentTyped<ItemProps> {}
      export class Checkbox extends SvelteComponentTyped<HeaderProps> {}
    }

    type DataProps = svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']>
    export class Data extends SvelteComponentTyped<DataProps> {}

    export namespace Data {
      interface RowProps {
        clickable?: boolean
        class?: string
      }
      export class Row extends SvelteComponentTyped<RowProps> {}

      export namespace Row {
        interface ItemProps {
          numeric?: boolean
          colspan?: number
          class?: string
          lowContrast?: boolean
        }
        export class Item extends SvelteComponentTyped<ItemProps> {}
      }
    }
  }

  interface DateInputProps {
    color?: string
    borderColor?: string
    errorColor?: string
    padding?: string
    width?: string
    fontSize?: string
    name?: string
    value?: string
    disabled?: boolean
    autofocus?: boolean
    required?: boolean
    class?: string
  }

  export class DateInput extends SvelteComponentTyped<DateInputProps> {}

  export namespace Dialog {
    export type AlertButton = {
      label: string
      action: string
      class: string
    }
    interface AlertProps {
      open?: boolean
      title?: string
      titleIcon?: string
      defaultAction?: string
      buttons?: AlertButton[]
      class?: string
    }
    export class Alert extends SvelteComponentTyped<AlertProps> {}

    interface SimpleProps {
      open?: boolean
      title?: string
      items?: { id: string; name: string }[]
      class?: string
    }
    export class Simple extends SvelteComponentTyped<SimpleProps> {}
  }

  interface DrawerProps {
    title?: string
    subtitle?: string
    menuItems?: {
      icon: string
      label: string
      url: string
      urlPattern: string
      hide: boolean
      button: boolean
      tooltip: string
    }[]
    dismissible?: boolean
    hasTopAppBar?: boolean
    hideForTablet?: boolean
    hideForPhonesOnly?: boolean
    isFullHeightMenu?: boolean
    miniMenu?: boolean
    modal?: boolean
    toggle?: boolean
    currentUrl?: string
    class?: string
  }
  export class Drawer extends SvelteComponentTyped<DrawerProps> {}

  interface FabProps {
    icon?: string
    label?: string
    mini?: boolean
    extended?: boolean
    url?: string
    action?: Function
    target?: string
    class?: string
  }
  export class Fab extends SvelteComponentTyped<FabProps> {}

  interface IconButtonProps {
    ariaLabel?: string
    disabled?: boolean
    icon?: string
    target?: string
    url?: string
    class?: string
  }
  export class IconButton extends SvelteComponentTyped<IconButtonProps> {}

  interface ListProps {
    twoLine?: boolean
    avatar?: boolean
    class?: string
  }
  export class List extends SvelteComponentTyped<ListProps> {}

  type MenuItem = {
    icon?: string
    label?: string
    url?: string
    action?: VoidFunction
    subtitle?: string
    class?: string
  }
  interface MenuProps {
    menuItems?: MenuItem[]
    menuOpen?: boolean
    currentUrl?: string
    class?: string
  }
  export class Menu extends SvelteComponentTyped<MenuProps> {}

  interface MoneyInputProps {
    label?: string
    value?: number | string
    name?: string
    placeholder?: string
    autofocus?: boolean
    disabled?: boolean
    required?: boolean
    minValue?: number | string
    maxValue?: number | string
    step?: number | string
    description?: string
    class?: string
  }
  export class MoneyInput extends SvelteComponentTyped<MoneyInputProps> {}

  export namespace Progress {
    type CircularProps = {}
    export class Circular extends SvelteComponentTyped<CircularProps> {}

    interface LinearProps {
      indeterminate?: boolean
      value?: number
      class?: string
    }
    export class Linear extends SvelteComponentTyped<LinearProps> {}
  }

  interface SelectProps {
    options?: { name: string; id: string }[]
    width?: string
    disabled?: boolean
    selectedID?: string
    class?: string
  }
  export class Select extends SvelteComponentTyped<SelectProps> {}

  interface SwitchProps {
    label?: string
    disabled?: boolean
    selected?: boolean
    class?: string
  }
  export class Switch extends SvelteComponentTyped<SwitchProps> {}

  interface SnackbarProps {
    // no exported members
  }
  export class Snackbar extends SvelteComponentTyped<SnackbarProps> {}

  interface TabBarProps {
    tab?: number
    class?: string
  }
  export class TabBar extends SvelteComponentTyped<TabBarProps> {}

  export namespace TabBar {
    interface ScrollerProps {}
    export class Scroller extends SvelteComponentTyped<ScrollerProps> {}

    interface TabProps {
      active?: boolean
      label?: string
      class?: string
    }
    export class Tab extends SvelteComponentTyped<TabProps> {}
  }

  interface TextAreaProps {
    label?: string
    value?: string
    name?: string
    placeholder?: string
    rows?: number | string
    required?: boolean
    maxlength?: number
    autofocus?: boolean
    rtl?: boolean
    description?: string
    class?: string
  }
  export class TextArea extends SvelteComponentTyped<TextAreaProps> {}

  interface TextFieldProps {
    label?: string
    value?: string
    name?: string
    icon?: string
    placeholder?: string
    maxlength?: number
    autofocus?: boolean
    disabled?: boolean
    required?: boolean
    description?: string
    class?: string
  }
  export class TextField extends SvelteComponentTyped<TextFieldProps> {}

  interface TooltipProps {
    tooltipID?: string
    positionX?: 'start' | 'center' | 'end'
    positionY?: 'above' | 'below'
    class?: string
  }
  export class Tooltip extends SvelteComponentTyped<TooltipProps> {}

  export namespace Tooltip {
    interface TooltipWrapperProps {
      ariaDescribedBy?: string
      class?: string
    }
    export class Wrapper extends SvelteComponentTyped<TooltipWrapperProps> {}
  }

  interface TopAppBarProps {
    bgColorIsVariant?: boolean
    dense?: boolean
    fixed?: boolean
    navIconBreakpointClass?: string
    class?: string
  }
  export class TopAppBar extends SvelteComponentTyped<TopAppBarProps> {}

  interface BadgeProps {
    color?: string
    borderRadius?: string
    padding?: string
    bordered?: boolean
    class?: string
  }
  export class Badge extends SvelteComponentTyped<BadgeProps> {}

  interface CustomCardProps {
    src?: string
    alt?: string
    title?: string
    icon?: string
    disabled?: boolean
    buttons?: { label: string; url: string }[]
    footerText?: string
    class?: string
  }
  export class CustomCard extends SvelteComponentTyped<CustomCardProps> {}

  interface FileDropAreaProps {
    raised?: boolean
    outlined?: boolean
    mimeType?: string
    uploading?: boolean
    class?: string
  }
  export class FileDropArea extends SvelteComponentTyped<FileDropAreaProps> {}

  interface FormProps {
    id?: string
    saveToLocalStorage?: boolean
    class?: string
  }
  export class Form extends SvelteComponentTyped<FormProps> {}

  interface PageProps {
    loading?: boolean
    title?: string
    layout?: string
    center?: boolean
    noProgress?: boolean
    class?: string
  }
  export class Page extends SvelteComponentTyped<PageProps> {}

  interface StaticChipProps {
    bgColor?: string
    height?: string
    class?: string
  }
  export class StaticChip extends SvelteComponentTyped<StaticChipProps> {}

  export function setNotice(label: string, action?: string, callback?: Function): void

  interface SearchableSelectProps {
    choice?: string
    disabled?: boolean
    maxlength?: string
    options: { [key: string]: string }
    padding?: string
    placeholder?: string
    required?: boolean
    width?: string
    class?: string
  }
  export class SearchableSelect extends SvelteComponentTyped<SearchableSelectProps> {}

  type steps = 'title' | 'content' | 'left' | 'right' | 'previous' | 'next' | 'target'

  interface TourProps {
    steps?: { [key in steps]: string | number }[]
    data?: { [key: string]: string }
    class?: string
  }
  export class Tour extends SvelteComponentTyped<TourProps> {}
}

declare module '@silintl/ui-components/random' {
  export function generateRandomID(prefix?: string): string
}
