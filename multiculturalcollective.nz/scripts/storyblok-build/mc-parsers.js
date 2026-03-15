const { imageParser, linkParser } = require('./generic-parsers')

const cardParser = (card) => {
    const { name, image, title, description, action } = card

    return {
        name,
        image: imageParser(image),
        title,
        description,
        action: action?.length ? linkParser(action.pop()) : false
    }
}

const sectionParser = (section) => {
    const { name, title, description, cards } = section

    return {
        name,
        title: title.trim() || false,
        description,
        cards: cards?.length ? cards.map(cardParser) : false
    }
}

const pageParser = (page) => {
    const { header, sections, ...rest } = page

    return {
        ...rest,
        header: header?.filename ? imageParser(header) : false,
        sections: sections.map(sectionParser)
    }
}

const siteParser = (site) => {
    const { title, logo, navbar, socials, pages } = site.content

    return {
        title,
        logo: imageParser(logo),
        navbar: navbar.map(linkParser),
        socials: socials.map(linkParser),
        pages: pages.map(pageParser)
    }
}

module.exports = {
    siteParser
}
