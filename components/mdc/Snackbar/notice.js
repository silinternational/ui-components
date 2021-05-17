import { writable } from 'svelte/store'

export const notice = writable({})
export const setNotice = (label, action, callback) => notice.set({label, action, callback})
