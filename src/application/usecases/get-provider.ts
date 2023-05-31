import { ConfigFileAuthenticationDetailsProvider } from "oci-common";

export function getProvider() {
  const provider = new ConfigFileAuthenticationDetailsProvider();
  return provider
}