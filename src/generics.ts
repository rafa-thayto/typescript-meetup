interface DataFiles<T> {
  name: string
  files: Array<T>
}

function createFilesData<T>(list: Array<T>): DataFiles<T> {
  const dataFiles: DataFiles<T> = {
    name: 'file_name',
    files: list,
  }

  return dataFiles
}

const array = ['item_1', 'item_2', 'item_3', 'item_4', 'item_5']

const dataFiles = createFilesData<string>(array)

// Aqui temos uma função que queremos que ela receba diversos tipos, mas ao invés de replicá-la podemos criá-la de outras formas
function identityNumber(arg: number): number {
  return arg
}

function identityString(arg: string): string {
  return arg
}

// Aqui colocando o any conseguimos passar qualquer tipo, porém não sabemos que tipo é, e isso pode nos causar problemas
function identityAny(arg: any): any {
  return arg
}

// Dessa forma conseguimos fazer a função retornar o tipo que quisermos dinâmicamente
function identity<Type>(arg: Type): Type {
  return arg
}

const texto = identity<string>('Hello')
const numero = identity<number>(2001)
const data = identity<{ dia: number; mes: string }>({ dia: 18, mes: 'março' })
