export default () => {
    return {
        "imports": [
            // we are using @gardenhq/tick-control to enable us to 
            // load/keep our templates separate, and keep them
            // almost javascript free, see end of file
            "@gardenhq/tick-control/container.js",
            "./api/hyperhtml.js" // hyperhtml implementation, could be swapped for one of the many many other renderers
        ],
        // our app, and only our app
        "app": {
            "callable": "./app.js",
            "arguments": [
                "@app.controller.todo",
                "@app.render",
                "@app.template.api",
                "@app.model.storage"
            ]
        },
        "app.controller.todo": {
            "callable": "./controllers/todo.js",
            "arguments": [
                "@app.model.todo"
            ]
        },
        "app.model.todo": {
            "object": "./models/todo.js"
        },
        "app.model.storage": {
            "object": "./models/storage.js"
        },
        // end of our app
        // templates 
        "app.template.header": {
            "object": "./templates/header.html",
            "tags": [
                { "name": "app.template", "key": "header" }
            ]
        },
        "app.template.main": {
            "object": "./templates/main.html",
            "tags": [
                { "name": "app.template", "key": "main" }
            ]
        },
        "app.template.footer": {
            "object": "./templates/footer.html",
            "tags": [
                { "name": "app.template", "key": "footer" }
            ]
        },
        // our quick dispatch implementation for this project
        // we don't want to use ours yet
        "app.dispatch": {
            "callable": "./api/dispatch.js",
            "arguments": [
                "@app.controller.todo"
            ]
        },
        // use tick-control to load up our templates
        "app.templates": {
            "iterator": "@gardenhq.tick-control.iterator",
            "arguments": [
                "#app.template"
            ]
        }
    };
}
