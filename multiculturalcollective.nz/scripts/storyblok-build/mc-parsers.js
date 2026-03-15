const { imageParser, linkParser } = require('./generic-parsers')

const headerParser = (story) => {
    const { logo, navbar, socials } = story.content

    return {
        logo: imageParser(logo),
        navbar: navbar.map(linkParser),
        socials: socials.map(linkParser)
    }
}

const pageParser = (story) => {
    // const { logo, navbar, socials } = story.content

    return {}
}

const footerParser = (story) => {
    // const { logo, navbar, socials } = story.content

    return {}
}

module.exports = {
    headerParser,
    pageParser,
    footerParser
}
