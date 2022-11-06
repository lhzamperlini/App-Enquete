import { MongoHelper } from '../helpers/mongo-helper'
describe('', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })
  test('', () => {

  })
})
