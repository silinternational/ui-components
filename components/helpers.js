export const findByID = (list, id) => list.find(item => id && (item.id === id))

export const compare = (first, second, ascending) => {
    if (ascending) {
      if (first < second) return -1
      if (first > second) return 1
    } else {
      if (first > second) return -1
      if (first < second) return 1
    }
    return 0
  }

export const sortByNum = (path, projects, ascending) => ascending ? 
  projects.sort((a, b) => resolvePath(a, path) - resolvePath(b, path)) : 
  projects.sort((a, b) => resolvePath(b, path) - resolvePath(a, path))

export const sortByString = (path, projects, ascending) => projects.sort((a, b) => compare((resolvePath(a, path) || ' '), (resolvePath(b, path) || ' '), ascending))

//on myObj.arr[0].prop path will be 'arr.0.prop'
export const resolvePath = (object, path) => path?.split('.').reduce((o, p) => o ? o[p] : '', object)