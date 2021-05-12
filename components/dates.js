export const formatDate = (dateString, ...others) => {
  if (dateString) {
    const date = new Date(dateString)
    return date.toLocaleDateString(...others)
  }
  return ''
}