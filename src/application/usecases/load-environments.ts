import { getProvider } from './get-provider'
import { getSecrets } from './get-secrets'

export async function loadEnvironment(compartmentId: string, vaultId: string) {
  const provider = getProvider()
  const secrets = await getSecrets(provider, compartmentId, vaultId)

  for (const secret of secrets) {
    process.env[secret.name] = secret.value
  }
  return secrets
}
