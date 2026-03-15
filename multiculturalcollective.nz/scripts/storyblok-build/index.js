// https://api-ap.storyblok.com/v2/cdn

const { headerParser, pageParser, footerParser } = require('./mc-parsers')
const mustache = require('mustache')
const fs = require('fs')

const endpoint = 'https://api.storyblok.com/v2/cdn'
const token = 'ZYAfn9ZV0g1tVewgsFVAXQtt'

const parsers = {
    header: headerParser,
    page: pageParser,
    footer: footerParser
}

const parseComponent = (story) => {
    const parse = parsers[story?.content?.component] || (() => null)

    return parse(story)
}

;(async () => {
    // fetch data //////////////////////////////////////////////////
    const request = await fetch(`${endpoint}/stories?token=${token}&version=published`)
    const { stories } = await request.json()

    const headerComponent = stories.filter((s) => s.content.component === 'header').pop()
    const pageComponents = stories.filter((s) => s.content.component === 'page')
    const footerComponent = stories.filter((s) => s.content.component === 'footer').pop()

    // parse data //////////////////////////////////////////////////

    const data = {
        header: parseComponent(headerComponent),
        pages: pageComponents.map(parseComponent),
        footer: parseComponent(footerComponent)
    }
    console.dir(data, {depth:null})

    /*
    console.log(JSON.stringify({
        header: parseComponents(header)
    }, null, 2))
    */

    const templates = {
        index: fs.readFileSync('templates/index2.mustache', 'utf8'),

        header: fs.readFileSync('templates/header.mustache', 'utf8'),
        nav: fs.readFileSync('templates/nav.mustache', 'utf8'),
        social: fs.readFileSync('templates/social.mustache', 'utf8')
    }

    const output = mustache.render(templates.index, data, templates)
    fs.writeFileSync('test.html', output)

})()
