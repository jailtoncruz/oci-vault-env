import { SecretsClient } from "oci-secrets";
import { models as VaultModel } from 'oci-vault';
import { getProvider } from "./get-provider";

export async function getBundleSecret(secret: VaultModel.Secret) {
  const authenticationDetailsProvider = getProvider();
  const secretsClient = new SecretsClient({ authenticationDetailsProvider })

  const bundle = await secretsClient.getSecretBundle({
    secretId: secret.id,
  });

  let value = '';

  if (bundle.secretBundle.secretBundleContent) {
    const { contentType, content } = bundle.secretBundle.secretBundleContent;
    if (contentType === "BASE64" && content)
      value = atob(content)
  }

  return {
    name: secret.secretName,
    id: secret.id,
    value
  }
}