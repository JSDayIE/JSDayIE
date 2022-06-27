#!/bin/sh

echo 'INSTALLING DEPENDENCIES...'
lerna exec yarn
echo 'LINTING...'
yarn lint
echo 'BUILDING...'
yarn build
echo 'LINKING DEPENDENCIES...'
yarn link
echo 'TESTING...'
yarn test
read -p "Ready to deploy? " -n 1 -r
echo ''
echo 'DEPLOYING...'
az login
az account set --subscription ed1fc693-2d90-4ce8-8e79-8d41dc9f0e5b
az storage blob upload-batch -d 'https://jsdayie.blob.core.windows.net/$web' -s './packages/@jsdayie/ui/out' --overwrite
az cdn endpoint purge --resource-group jsdayie --profile-name jsdayie --name jsdayie --no-wait --content-paths /*