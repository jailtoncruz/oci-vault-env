import { ConfigFileAuthenticationDetailsProvider } from 'oci-common'

export function getProvider(configPath?: string, profile?: string) {
  const provider = new ConfigFileAuthenticationDetailsProvider(
    configPath,
    profile,
  )
  return provider
}
