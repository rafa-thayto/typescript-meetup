enum AnimalType {
  Peixe,
  Anfibio,
  Reptil,
  Ave,
  Mamifero,
}

type Animal = {
  dataNascimento: Date
  tipo: AnimalType
  caracteristica: 'eucarionte' | 'procarionte'
}

interface Cachorro {
  nome: string
  raca?: string
  irmaos?: number
  isFilhoUnico: boolean
  preco?: number
}

interface Gato {
  nome: string
  raca?: string
  irmaos?: number
  isFilhoUnico: boolean
  preco?: number
}

const texto: string = 'texto'
const numeroInteiro: number = 1
const numerosDecimal: number = 1.231
const numeroNegativo: number = -2
const numeroNegativoDecimal: number = -1.231
const booleano: boolean = true
const nullo: null = null
const naoDefinido: undefined = undefined
const qualquerTipo: any = 'hello world' || undefined || 5123 || true || false
const desconhecido: unknown = 'hello world' || undefined || 5123 || true || false

const valorIndefinido: number | undefined = 0
