export const copyAndModifyArgs = (args, argsToChangeArray) => { //takes the default args object and an array of objects eg. [{key: 'raised', value: true}]
  const copyOfArgs = {...args}

  argsToChangeArray.forEach( arg => copyOfArgs[arg.key] = arg.value )

  return copyOfArgs
}