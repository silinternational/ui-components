declare module '@silintl/ui-components' {
  import type { SvelteComponentTyped } from 'svelte'
  import type { writable } from 'svelte/store'

  export type actions = writable<any[]>

  interface ButtonProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    disabled?: any
    outlined?: any
    raised?: any
    prependIcon?: any
    appendIcon?: any
    url?: any
  }
  export class Button extends SvelteComponentTyped<ButtonProps> {}

  export function isAboveMobile(): boolean

  export function isAboveTablet(): boolean

  interface CardProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    secondary?: string
    outlined?: boolean
    color?: string
    isClickable?: boolean
    noPadding?: boolean
  }
  export class Card extends SvelteComponentTyped<CardProps> {}

  interface CheckboxProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    label?: string
    checked?: boolean
    disabled?: boolean
    uppercase?: boolean
  }
  export class Checkbox extends SvelteComponentTyped<CheckboxProps> {}

  //Datatable
  interface DatatableProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    label?: string
    numberOfCheckboxes?: number
  }
  export class Datatable extends SvelteComponentTyped<DatatableProps> {}

  export namespace Datatable {
    type HeaderProps = svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']>
    export class Header extends SvelteComponentTyped<HeaderProps> {}

    interface DatatableCheckboxProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
      disabled?: boolean
      rowId?: string
    }
    export class Checkbox extends SvelteComponentTyped<DatatableCheckboxProps> {}

    export namespace Header {
      interface ItemProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
        numeric?: boolean
        columnID?: string
        sortable?: boolean
      }
      export class Item extends SvelteComponentTyped<ItemProps> {}
      export class Checkbox extends SvelteComponentTyped<HeaderProps> {}
    }

    type DataProps = svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']>
    export class Data extends SvelteComponentTyped<DataProps> {}

    export namespace Data {
      interface RowProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
        clickable?: boolean
      }
      export class Row extends SvelteComponentTyped<RowProps> {}

      export namespace Row {
        interface ItemProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
          numeric?: boolean
          colspan?: number
        }
        export class Item extends SvelteComponentTyped<ItemProps> {}
      }
    }
  }

  export namespace Dialog {
    export type AlertButton = {
      label: string
      action: string
      class: string
    }
    interface AlertProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
      open?: boolean
      title?: string
      titleIcon?: string
      defaultAction?: string
      buttons?: AlertButton[]
    }
    export class Alert extends SvelteComponentTyped<AlertProps> {}

    interface SimpleProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
      open?: boolean
      title?: string
    }
    export class Simple extends SvelteComponentTyped<SimpleProps> {}
  }

  interface DrawerProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    title?: string
    subtitle?: string
    menuItems?: any[]
    dismissible?: boolean
    hasTopAppBar?: boolean
    hideForTablet?: boolean
    hideForPhonesOnly?: boolean
    isFullHeightMenu?: boolean
    miniMenu?: boolean
    modal?: boolean
    toggle?: boolean
    currentUrl?: string
  }
  export class Drawer extends SvelteComponentTyped<DrawerProps> {}

  interface FabProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    icon?: string
    label?: string
    mini?: boolean
    extended?: boolean
    url?: string
    action?: any
  }
  export class Fab extends SvelteComponentTyped<FabProps> {}

  interface IconButtonProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    icon?: any
    ariaLabel?: any
    url?: any
    disabled?: any
  }
  export class IconButton extends SvelteComponentTyped<IconButtonProps> {}

  interface ListProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    twoLine?: boolean
    avatar?: boolean
  }
  export class List extends SvelteComponentTyped<ListProps> {}

  type MenuItem = {
    icon?: string
    label?: string
    url?: string
    action?: VoidFunction
    subtitle?: string
  }
  interface MenuProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    menuItems?: MenuItem[]
    menuOpen?: boolean
  }
  export class Menu extends SvelteComponentTyped<MenuProps> {}

  interface MoneyInputProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    label?: string
    value?: number
    placeholder?: string
    autofocus?: boolean
    disabled?: boolean
    required?: boolean
    minValue?: string
    maxValue?: string
    step?: string
    description?: string
  }
  export class MoneyInput extends SvelteComponentTyped<MoneyInputProps> {}

  export namespace Progress {
    type CircularProps = svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']>
    export class Circular extends SvelteComponentTyped<CircularProps> {}

    interface LinearProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
      indeterminate?: boolean
      value?: number
    }
    export class Linear extends SvelteComponentTyped<LinearProps> {}
  }

  interface SelectProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    options?: any[]
    width?: string
    disabled?: boolean
    selectedID?: string
  }
  export class Select extends SvelteComponentTyped<SelectProps> {}

  interface SwitchProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    label?: string
    disabled?: boolean
    selected?: boolean
  }
  export class Switch extends SvelteComponentTyped<SwitchProps> {}

  interface SnackbarProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    // no exported members
  }
  export class Snackbar extends SvelteComponentTyped<SnackbarProps> {}

  interface TabBarProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    tab?: number
  }
  export class TabBar extends SvelteComponentTyped<TabBarProps> {}

  interface TextAreaProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    label?: string
    value?: string
    placeholder?: string
    rows?: number | string
    required?: boolean
    maxlength?: number
    autofocus?: boolean
    rtl?: boolean
    description?: string
  }
  export class TextArea extends SvelteComponentTyped<TextAreaProps> {}

  interface TextFieldProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    label?: string
    value?: string
    placeholder?: string
    maxlength?: number
    autofocus?: boolean
    disabled?: boolean
    required?: boolean
    description?: string
  }
  export class TextField extends SvelteComponentTyped<TextFieldProps> {}

  interface TooltipProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    tooltipID?: any
    positionX?: 'start' | 'center' | 'end'
    positionY?: 'above' | 'below'
  }
  export class Tooltip extends SvelteComponentTyped<TooltipProps> {}

  export namespace Tooltip {
    interface TooltipWrapperProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
      ariaDescribedBy?: any
    }
    export class Wrapper extends SvelteComponentTyped<TooltipWrapperProps> {}
  }

  interface TopAppBarProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    bgColorIsVariant?: boolean
    dense?: boolean
    fixed?: boolean
    navIconBreakpointClass?: string
  }
  export class TopAppBar extends SvelteComponentTyped<TopAppBarProps> {}

  interface BadgeProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    color?: string
    borderRadius?: string
    padding?: string
    bordered?: boolean
  }
  export class Badge extends SvelteComponentTyped<BadgeProps> {}

  interface CustomCardProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    src?: string
    alt?: string
    title?: string
    icon?: string
    disabled?: boolean
    buttons?: any
    footerText?: string
  }
  export class CustomCard extends SvelteComponentTyped<CustomCardProps> {}

  interface FileDropAreaProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    raised?: boolean
    outlined?: boolean
    mimeType?: string
    uploading?: boolean
  }
  export class FileDropArea extends SvelteComponentTyped<FileDropAreaProps> {}

  interface FormProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    // no exported members
  }
  export class Form extends SvelteComponentTyped<FormProps> {}

  interface PageProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    loading?: any
    title?: any
    layout?: any
    center?: any
    noProgress?: any
  }
  export class Page extends SvelteComponentTyped<PageProps> {}

  interface StaticChipProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    bgColor?: string
  }
  export class StaticChip extends SvelteComponentTyped<StaticChipProps> {}

  export function setNotice(label: string, action?: string, callback?: Function): void

  interface SearchableSelectProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    options: { [key: string]: string }
    choice?: string
    placeholder?: string
    padding?: string
    width?: string
    maxlength?: string
    disabled?: boolean
  }
  export class SearchableSelect extends SvelteComponentTyped<SearchableSelectProps> {}

  interface TourProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
    steps?: any[]
    data?: any
  }
  export class Tour extends SvelteComponentTyped<TourProps> {}
}

module '@silintl/ui-components/random' {
  export function generateRandomID(prefix?: string): string
}
