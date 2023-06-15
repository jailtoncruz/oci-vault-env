import { getSecrets } from './get-secret'

export async function loadEnvironment(compartmentId: string, vaultId: string) {
  const secrets = await getSecrets(compartmentId, vaultId)

  for (const secret of secrets) {
    process.env[secret.name] = secret.value
  }
  return secrets
}
