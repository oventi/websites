#!/usr/bin/env bash

# deploy the website to Catalyst Cloud's object container oventi.org

yarn build

yarn cc containers --name oventi.org --empty

yarn cc containers --name oventi.org --put-files ./dist
