#!/usr/bin/env node

// deploy the website to Catalyst Cloud's object container oventi.org
// to run: node -r esm deploy.js

require('dotenv-json')()
import {catalystcloud_containers} from 'catalystcloud'

const container = catalystcloud_containers({
  container: 'https://object-storage.nz-hlz-1.catalystcloud.io/oventi.org'
});

(async () => {
  // need to do yarn build first

  console.log('** DEPLOYMENT STARTED **')

  await container.empty()
  await container.put_files({folder: './dist'})

  console.log('** DEPLOYMENT DONE **')
})()
