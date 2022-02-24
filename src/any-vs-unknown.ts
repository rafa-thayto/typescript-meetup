// any -> O tipo any nos permite atribuir literalmente “qualquer” valor específico a essa variável,
//        simulando o que conhecemos como JavaScript. Ou seja, any === JavaScript

// unknown - O tipo unknown é um tipo seguro, diferentemente do tipo any. Qualquer coisa é atribuível ao tipo unknown,
//           mas unknown não é atribuível a nada além de si mesmo.

{
  let age: number
  let userAge: any

  userAge = 'This is some age'
  userAge = 20

  age = userAge // SUCCESS: Porque any nos permite atribuir qualquer valor e o compilador não entende direito
}

{
  let age: number
  let userAge: unknown

  userAge = 'This is some age'
  userAge = 20
  age = userAge // ERROR: Type 'unknown' is not assignable to type 'number'.
}

{
  let age: number
  let userAge: unknown

  userAge = 'This is some age'
  userAge = 20

  if (typeof userAge === 'string') {
    age = userAge // ERROR: Type 'string' is not assignable to type 'number'.
  }

  if (typeof userAge === 'number') {
    age = userAge // SUCCESS: Porque fizemos uma validação e o tipo unknown é do tipo number
  }
}
