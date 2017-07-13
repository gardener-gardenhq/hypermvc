// only concerned with hiding the implementation of a
// `render`/`attach` function

export default (html, selector, doc) => {
    doc = doc || document;
    return html.bind(doc.querySelector(selector))
}
