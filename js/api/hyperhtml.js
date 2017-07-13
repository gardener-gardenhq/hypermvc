// hyperhtml specific implementation of
// our api
export default () => {
    return {
        "app.render": {
            "callable": "./api/render.js",
            "arguments": [
                "@hyperhtml",
                ".todoapp"
            ]
        },
        "app.template.api": {
            "callable": "./api/template.js",
            "arguments": [
                "@app.templates",
                "@app.dispatch",
                "@hyperhtml:wire"
            ]
        },
        "hyperhtml": {
            "object": "hyperhtml/hyperhtml",
            "version": "0.11.7"
        }
    }
}
