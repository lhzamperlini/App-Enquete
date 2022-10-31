export class ServerError extends Error {
  constructor () {
    super('Um erro inesperado ocorreu no servidor, tente novamente mais tarde.')
    this.name = 'ServerError'
  }
}
