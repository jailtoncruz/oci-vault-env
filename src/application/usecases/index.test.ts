import { randomUUID } from 'crypto'
import { existsSync, readFileSync, rmSync } from 'fs'
import { resolve } from 'path'
import { EnvSecret } from '../domain/EnvSecret'
import { exportFile } from './export-file'

function generateRandomSecret() {
  return {
    name: randomUUID(),
    id: randomUUID(),
    value: randomUUID()
  }
}

describe("Use case test suit", () => {
  const filename = '.generated.env'
  const filepath = resolve(process.cwd(), filename);

  beforeAll(() => {
    if (existsSync(filepath)) rmSync(filepath)
  })

  afterAll(() => {
    if (existsSync(filepath)) rmSync(filepath)
  })

  test(`should be create file [${filename}] with secrets`, () => {
    const secrets: EnvSecret[] = []
    secrets.push(generateRandomSecret())
    secrets.push(generateRandomSecret())

    exportFile(secrets, filename)

    expect(existsSync(filepath)).toBeTruthy()
    expect(readFileSync(filepath).toString().split("\n")).toHaveLength(secrets.length)
  })
})