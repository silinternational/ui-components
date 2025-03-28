declare module '@silintl/ui-components' {
  import type { SvelteComponent } from 'svelte'
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
  export class Button extends SvelteComponent<ButtonProps> {}

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
  export class Card extends SvelteComponent<CardProps> {}

  interface CheckboxProps {
    label?: string
    description: string
    checked?: boolean
    disabled?: boolean
    uppercase?: boolean
    class?: string
    inputID?: string
  }
  export class Checkbox extends SvelteComponent<CheckboxProps> {}

  //Datatable
  interface DatatableProps {
    label?: string
    numberOfCheckboxes?: number
    class?: string
  }
  export class Datatable extends SvelteComponent<DatatableProps> {}

  export namespace Datatable {
    export class Header extends SvelteComponent {}

    interface DatatableCheckboxProps {
      disabled?: boolean
      rowId?: string
      class?: string
    }
    export class Checkbox extends SvelteComponent<DatatableCheckboxProps> {}

    export namespace Header {
      interface ItemProps {
        numeric?: boolean
        columnID?: string
        sortable?: boolean
        class?: string
      }
      export class Item extends SvelteComponent<ItemProps> {}
      export class Checkbox extends SvelteComponent {}
    }

    export class Data extends SvelteComponent {}

    export namespace Data {
      interface RowProps {
        clickable?: boolean
        class?: string
      }
      export class Row extends SvelteComponent<RowProps> {}

      export namespace Row {
        interface ItemProps {
          numeric?: boolean
          colspan?: number
          class?: string
          lowContrast?: boolean
        }
        export class Item extends SvelteComponent<ItemProps> {}
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

  export class DateInput extends SvelteComponent<DateInputProps> {}

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
    export class Alert extends SvelteComponent<AlertProps> {}

    interface SimpleProps {
      open?: boolean
      title?: string
      items?: { id: string; name: string }[]
      class?: string
    }
    export class Simple extends SvelteComponent<SimpleProps> {}
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
  export class Drawer extends SvelteComponent<DrawerProps> {}

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
  export class Fab extends SvelteComponent<FabProps> {}

  interface IconButtonProps {
    ariaLabel?: string
    disabled?: boolean
    icon?: string
    target?: string
    url?: string
    class?: string
  }
  export class IconButton extends SvelteComponent<IconButtonProps> {}

  interface ListProps {
    twoLine?: boolean
    avatar?: boolean
    class?: string
  }
  export class List extends SvelteComponent<ListProps> {}

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
  export class Menu extends SvelteComponent<MenuProps> {}

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
    showWarn?: boolean
    showError?: boolean
  }
  export class MoneyInput extends SvelteComponent<MoneyInputProps> {}

  export namespace Progress {
    type CircularProps = {}
    export class Circular extends SvelteComponent<CircularProps> {}

    interface LinearProps {
      indeterminate?: boolean
      value?: number
      class?: string
    }
    export class Linear extends SvelteComponent<LinearProps> {}
  }

  interface SelectProps {
    disabled?: boolean
    label?: string
    description?: string
    name?: string
    options?: { name: string; id: string }[]
    required?: boolean
    showError?: boolean
    selectedID?: string
    width?: string
    class?: string
  }
  export class Select extends SvelteComponent<SelectProps> {}

  interface SwitchProps {
    label?: string
    disabled?: boolean
    selected?: boolean
    class?: string
  }
  export class Switch extends SvelteComponent<SwitchProps> {}

  interface SnackbarProps {
    // no exported members
  }
  export class Snackbar extends SvelteComponent<SnackbarProps> {}

  interface TabBarProps {
    tab?: number
    class?: string
  }
  export class TabBar extends SvelteComponent<TabBarProps> {}

  export namespace TabBar {
    interface ScrollerProps {}
    export class Scroller extends SvelteComponent<ScrollerProps> {}

    interface TabProps {
      active?: boolean
      label?: string
      class?: string
    }
    export class Tab extends SvelteComponent<TabProps> {}
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
    showWarn?: boolean
    showError?: boolean
  }
  export class TextArea extends SvelteComponent<TextAreaProps> {}

  interface TextFieldProps {
    label?: string
    value?: string
    name?: string
    icon?: string
    type?: string
    placeholder?: string
    maxlength?: number
    autofocus?: boolean
    disabled?: boolean
    required?: boolean
    description?: string
    class?: string
    showWarn?: boolean
    showError?: boolean
  }
  export class TextField extends SvelteComponent<TextFieldProps> {}

  interface TooltipProps {
    tooltipID?: string
    positionX?: 'start' | 'center' | 'end'
    positionY?: 'above' | 'below'
    rich?: boolean
    class?: string
  }
  export class Tooltip extends SvelteComponent<TooltipProps> {}

  export namespace Tooltip {
    interface TooltipWrapperProps {
      ariaDescribedBy?: string
      rich?: boolean
      class?: string
    }
    export class Wrapper extends SvelteComponent<TooltipWrapperProps> {}
  }

  interface TopAppBarProps {
    bgColorIsVariant?: boolean
    dense?: boolean
    fixed?: boolean
    navIconBreakpointClass?: string
    class?: string
  }
  export class TopAppBar extends SvelteComponent<TopAppBarProps> {}

  interface BadgeProps {
    color?: string
    borderRadius?: string
    padding?: string
    bordered?: boolean
    class?: string
  }
  export class Badge extends SvelteComponent<BadgeProps> {}

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
  export class CustomCard extends SvelteComponent<CustomCardProps> {}

  interface FileDropAreaProps {
    raised?: boolean
    outlined?: boolean
    mimeType?: string
    uploading?: boolean
    class?: string
  }
  export class FileDropArea extends SvelteComponent<FileDropAreaProps> {}

  interface FormProps {
    id?: string
    saveToLocalStorage?: boolean
    class?: string
  }
  export class Form extends SvelteComponent<FormProps> {}

  interface PageProps {
    loading?: boolean
    title?: string
    layout?: string
    center?: boolean
    noProgress?: boolean
    class?: string
  }
  export class Page extends SvelteComponent<PageProps> {}

  interface StaticChipProps {
    bgColor?: string
    height?: string
    class?: string
  }
  export class StaticChip extends SvelteComponent<StaticChipProps> {}

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
  export class SearchableSelect extends SvelteComponent<SearchableSelectProps> {}

  type steps = 'title' | 'content' | 'left' | 'right' | 'previous' | 'next' | 'target'

  interface TourProps {
    steps?: { [key in steps]: string | number }[]
    data?: { [key: string]: string }
    class?: string
  }
  export class Tour extends SvelteComponent<TourProps> {}
}

declare module '@silintl/ui-components/random' {
  export function generateRandomID(prefix?: string): string
}
