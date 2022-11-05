import { Encrypter } from '../../data/protocols/encrypter'
import bcrypt from 'bcrypt'

export class BcryptAdapter implements Encrypter {
  private readonly salt: number
  constructor (salt: number) {
    this.salt = salt
  }

  async encrypt (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    try {
      return await new Promise(resolve => resolve(hash))
    } catch {
      return await new Promise(resolve => resolve('Deu ruim'))
    }
  }
}
