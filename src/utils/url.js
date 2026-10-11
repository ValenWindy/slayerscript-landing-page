export function isValidUrl(value) {
  if (typeof value !== 'string' || value.trim() === '') return false
  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:'
  } catch {
    return false
  }
}


export function isExternalUrl(value) {
  if (!isValidUrl(value)) return false
  return new URL(value).origin !== window.location.origin
}
