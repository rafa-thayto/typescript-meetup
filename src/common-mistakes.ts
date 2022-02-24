import { fetchApi } from './utils'

function helloWorld(): any {
  return 'Hello World!'
}

function helloWorldCorreto(): string {
  return 'Hello World!'
}

async function callApiAndDoSomething(): Promise<any> {
  const data = await fetchApi(100)

  return data
}

async function callApiAndDoSomethingCorreto(): Promise<string> {
  const data = await fetchApi(100)

  return data
}

function exampleFn1() {
  const requestEx = (): any => ({ nome: 'Thaytoclebson' })

  const valorString = requestEx().valor.toString() // ERROR: Cannot read properties of null (reading 'toString') -> fazendo assim o código quebrar

  return valorString
}

// Criamos uma interface, pois além de agora termos o auto-complete, também podemos saber o retorno da API
// e não simplemente adivinhar igual fizemos acima
interface ApiResponse {
  nome: string
  valor?: number | null
}

function exampleFn1Correto(): string {
  const requestEx = (): ApiResponse => ({ nome: 'Thaytoclebson' })

  const valorString = requestEx().valor?.toString() // SUCESS: vai retornar uma string undefined, porém o código não vai quebrar

  return valorString
}

// Melhores formas para tipar
interface BadPokemon {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: [
    {
      is_hidden: boolean
      slot: number
      ability: { name: string; url: string }
    },
  ]
}

interface Pokemon {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: PokemonAbility[] // Array<PokemonAbility>;
}

interface PokemonAbility {
  is_hidden: boolean
  slot: number
  ability: NamedAPIResource
}

interface NamedAPIResource {
  name: string
  url: string
}

interface Row {
  id: number
  value: string | number
}

function handleClick(row: Row) {
  setRow(row as Row) // Casting desnecessário já que está tentando transformar um tipo no mesmo tipo
  setRow(row) // poderíamos deixar somente assim
}

function setRow(row: Row): Row {
  const newRow: Row = { ...row }
  return newRow
}
