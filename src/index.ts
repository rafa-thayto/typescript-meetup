type TesteResponse = {
  fn: () => void
  text: string
}

function teste(): TesteResponse {
  return {
    fn: () => {},
    text: 'Hello World!',
  }
}

function helloWorld(message: string) {
  return console.log(message)
}
