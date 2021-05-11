export const generateRandomID = (prefix = '') => prefix + Math.random().toString(36).slice(2)
