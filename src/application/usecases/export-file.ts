import { existsSync, readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { EnvSecret } from '../domain/EnvSecret'

export async function exportFile(
  secrets: EnvSecret[],
  filename: string = '.env',
) {
  const envString: [string, string?][] = secrets.map((secret) => [
    secret.name,
    secret.value,
  ])

  const file = resolve(process.cwd(), filename)
  if (existsSync(file)) {
    const oldEnv = readFileSync(file)
      .toString()
      .split('\n')
      .filter((e) => !e.startsWith('#') && e.length > 0)
      .map((oldEnv) => oldEnv.split('=') as [string, string?])
      .filter((e) => !secrets.map((s) => s.name).includes(e[0]))

    envString.push(...oldEnv)
    envString.sort(orderByName)
  }

  writeFileSync(file, envString.map((env) => env.join('=')).join('\n'))
}

function orderByName(a: [string, string?], b: [string, string?]): 0 | 1 | -1 {
  if (a[0] < b[0]) return -1
  else if (a[0] > b[0]) return 1
  else return 0
}
