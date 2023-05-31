<p align="center">
  <a href="https://codeclimate.com/github/jailtoncruz/oci-vault-env/maintainability"><img src="https://api.codeclimate.com/v1/badges/ea0c5722eda076aa55ad/maintainability" /></a>
  <a href="https://codeclimate.com/github/jailtoncruz/oci-vault-env/test_coverage"><img src="https://api.codeclimate.com/v1/badges/ea0c5722eda076aa55ad/test_coverage" /></a>
</p>

# OCI Vault Environment

## Description

This package use the Oracle Cloud Vault to load production environment variables securely and centrally 

## Install

```sh
npm install
```

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
## Run tests

```sh
npm run test
```

## Author

👤 **Jailton Cruz <jailtoncruz01@gmail.com> [LinkedIn](https://www.linkedin.com/in/jailtoncruz/)**

* Github: [@jailtoncruz](https://github.com/jailtoncruz)


## 📝 License

Copyright © 2022 [Jailton Cruz](https://www.linkedin.com/in/jailtoncruz/) <jailtoncruz01@gmail.com> .<br />
This project is [MIT](https://github.com/jailtoncruz/oci-vault-env/blob/main/LICENSE) licensed.
