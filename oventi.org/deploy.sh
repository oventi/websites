#!/usr/bin/env bash

# deploy the website to Catalyst Cloud's object container oventi.org

export GIT_SSH_COMMAND="ssh -i ~/pk/oventi.net"

cd ~/repo/websites/oventi.org/dist
rm * -Rf
cd ~/repo/websites/oventi.org
git checkout main
git pull
yarn install
yarn build
cd ~/repo/websites/oventi.org/dist
swift upload oventi.org *
