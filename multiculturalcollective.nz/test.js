// https://api-ap.storyblok.com/v2/cdn

const mustache = require('mustache')
const fs = require('fs')

const endpoint = 'https://api.storyblok.com/v2/cdn'
const token = 'ZYAfn9ZV0g1tVewgsFVAXQtt'

const parsers = {
    image: ({ id, alt, filename: src }) => ({ id, alt, src }),
    link: ({ _uid: id, name, title, url: href }) => ({ id, name, title, href }),

    header: (story) => {
        const { logo, navbar, socials } = story.content

        return {
            logo: parsers.image(logo),
            navbar: navbar.map(parsers.link),
            socials: socials.map(parsers.link)
        }
    }
}

const parseComponents = (story) => {
    const parse = parsers[story.content.component] || (() => {})

    return parse(story)
}

;(async () => {
    const request = await fetch(`${endpoint}/stories?token=${token}&version=published`)
    const { stories } = await request.json()

    const header = stories.filter((s) => s.content.component === 'header').pop()
    const pages = stories.filter((s) => s.content.component === 'page')
    const footer = stories.filter((s) => s.content.component === 'footer')

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

    const data = {
        header: parseComponents(header)
    }
    console.dir(data, {depth:null})

    const output = mustache.render(templates.index, data, templates);
    fs.writeFileSync('test.html', output);

})()
