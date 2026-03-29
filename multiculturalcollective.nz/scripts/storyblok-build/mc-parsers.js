const { imageParser, linkParser } = require('./generic-parsers')

const cardParser = (cardRef, rels) => {
    const card = rels.find((rel) => cardRef === rel.uuid)
    const { name, image, title, description, action } = card.content

    return {
        name,
        image: imageParser(image),
        title,
        description,
        action: action?.length ? linkParser(action[0]) : false
    }
}

const sectionParser = (section, rels) => {
    const { name, title, description, cards } = section

    return {
        name,
        title: title.trim() || false,
        description,
        cards: cards?.length ? cards.map((cardRef) => cardParser(cardRef, rels)) : false
    }
}

const pageParser = (page, rels) => {
    const { header, sections, ...rest } = page

    return {
        ...rest,
        header: header?.filename ? imageParser(header) : false,
        sections: sections.map((section) => sectionParser(section, rels))
    }
}

const siteParser = (site, rels) => {
    const { title, logo, navbar, socials, pages } = site.content

    return {
        title,
        logo: imageParser(logo),
        navbar: navbar.map(linkParser),
        socials: socials.map(linkParser),
        pages: pages.map((page) => pageParser(page, rels))
    }
}

module.exports = {
    siteParser
}
