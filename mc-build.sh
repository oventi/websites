#!/usr/bin/env bash

#TS=$(date +%Y%m%d)
#mv ./multiculturalcollective.nz/index.html "./multiculturalcollective.nz/archive/index_$TS.html"

yarn -s mustache \
-p ./multiculturalcollective.nz/templates/head.mustache \
-p ./multiculturalcollective.nz/templates/social.mustache \
-p ./multiculturalcollective.nz/templates/nav.mustache \
-p ./multiculturalcollective.nz/templates/footer.mustache \
./multiculturalcollective.nz/data.json ./multiculturalcollective.nz/templates/index.mustache > ./multiculturalcollective.nz/index.html
