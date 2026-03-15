const imageParser = ({ id, alt, filename: src }) => ({ id, alt, src })

const linkParser = ({ _uid: id, name, title, url: href }) => ({ id, name, title, href })

module.exports = {
    imageParser,
    linkParser
}
