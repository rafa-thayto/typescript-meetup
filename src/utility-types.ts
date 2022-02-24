// -> Partial<Type>
interface Todo {
  title: string
  description: string
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
}

const todo2 = updateTodo(todo1, {
  description: 'throw out trash',
})

// -> Required<Type>
interface Props {
  a?: number
  b?: string
}

const obj: Props = { a: 5 }

const obj2: Required<Props> = { a: 5 } // Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.

// -> Record<Keys, Type>
interface CatInfo {
  age: number
  breed: string
}

type CatName = 'miffy' | 'boris' | 'mordred'

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
}

cats.boris
