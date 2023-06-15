import { VaultsClient, models } from 'oci-vault'
import { EnvSecret } from '../domain/EnvSecret'
import { getBundleSecret } from './get-bundle-secret'
import { getProvider } from './get-provider'

export async function getSecrets(
  compartmentId: string,
  vaultId: string,
): Promise<EnvSecret[]> {
  const authenticationDetailsProvider = getProvider()

  const vaultsClient = new VaultsClient({ authenticationDetailsProvider })

  const response = await vaultsClient
    .listSecretsResponseIterator({
      compartmentId,
      vaultId,
    })
    .next()

  const secrets = response.value as { items: models.Secret[] }
  const envs: EnvSecret[] = []

  for (const secret of secrets.items) {
    const bundle = await getBundleSecret(secret)
    envs.push(bundle)
  }

  return envs
}
