#!/usr/bin/env bash

# deploy the website to Catalyst Cloud's object container oventi.org

CONTAINER=https://object-storage.nz-hlz-1.catalystcloud.io/oventi.org

echo "** DEPLOYMENT STARTED **"

yarn build > /dev/null

yarn cc containers empty --container $CONTAINER
yarn cc containers put_files --container $CONTAINER --folder ./dist

echo "** DEPLOYMENT DONE **"
