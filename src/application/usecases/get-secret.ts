import { AuthenticationDetailsProvider } from 'oci-common'
import { VaultsClient, models } from 'oci-vault'
import { EnvSecret } from '../domain/EnvSecret'
import { getBundleSecret } from './get-bundle-secret'

export async function getSecrets(
  provider: AuthenticationDetailsProvider,
  compartmentId: string,
  vaultId: string,
): Promise<EnvSecret[]> {
  const vaultsClient = new VaultsClient({
    authenticationDetailsProvider: provider,
  })

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
