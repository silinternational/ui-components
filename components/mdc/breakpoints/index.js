// https://material.io/design/layout/responsive-layout-grid.html#breakpoints

const isAboveMobile = () => matchMedia('(min-width: 600px)').matches
const isAboveTablet = () => matchMedia('(min-width: 840px)').matches

export {
  isAboveMobile,
  isAboveTablet,
}
