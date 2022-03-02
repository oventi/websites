#!/usr/bin/env bash

# deploy the website to Catalyst Cloud's object container oventi.org

BUCKET=https://object-storage.nz-hlz-1.catalystcloud.io/oventi.org

yarn build

yarn cc containers --bucket $BUCKET --empty

yarn cc containers --bucket $BUCKET --put-files ./dist
