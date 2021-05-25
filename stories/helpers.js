export const copyAndModifyArgs = (args, argsToChange) => { //takes the default args object and object of args to change eg. { raised: true, disable: true }
  const copyOfArgs = {...args}

  for (const [key, value] of Object.entries(argsToChange)) {
    copyOfArgs[key] = value
  }

  return copyOfArgs
}