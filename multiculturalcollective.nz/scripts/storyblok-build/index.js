const { siteParser } = require('./mc-parsers')
const mustache = require('mustache')
const fs = require('fs')

const endpoint = 'https://api.storyblok.com/v2/cdn'
const token = 'ZYAfn9ZV0g1tVewgsFVAXQtt'

;(async () => {
    // fetch data //////////////////////////////////////////////////
    const request = await fetch(`${endpoint}/stories/multiculturalcollective-nz?token=${token}&version=published`)
    const { story: site } = await request.json()

    // parse data //////////////////////////////////////////////////

    const data = siteParser(site)
    console.dir(data, {depth:null})

    // build pages /////////////////////////////////////////////////

    const templates = {
        page: fs.readFileSync('templates/page.mustache', 'utf8'),
        header: fs.readFileSync('templates/header.mustache', 'utf8'),
        nav: fs.readFileSync('templates/nav.mustache', 'utf8'),
        social: fs.readFileSync('templates/social.mustache', 'utf8')
    }

    for(const page of data.pages) {
        const htmlPage = mustache.render(templates.page, { ...data, page }, templates)
        fs.writeFileSync(`${page.name}.html`, htmlPage)
    }
})()
