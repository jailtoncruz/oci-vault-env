# OCI Vault Environment

## Description

This package use the Oracle Cloud Vault to load production environment variables securely and centrally 

## Usage 

Ensure crendential provider on default folder (~/.oci) with configs and keys!

```ts
import { loadEnvironment, exportFile } from 'oci-vault-env';

const COMPARTMENT_ID = 'YOUR_COMPARTMENT_ID';
const VAULT_ID = 'YOUR_APP_VAULT_ID';

// loadEnvironment append secrets on process.env
const secrets = await loadEnvironment(); // I using top-level await, adapt it to your code if your project don't support this feature

// Export secret to file
exportFile(secrets, '.env.production')
```