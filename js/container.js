module.exports = function()
{
    return {
        "app": {
            "callable": "./app.js",
            "arguments": [
                "@app.controller.todo",
                "@app.model.storage",
                "@app.template.header",
                "@app.template.main",
                "@app.template.footer",
                "@hyperhtml"
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
        "app.template.header": {
            "callable": "./views/header.js",
            "arguments": [
                "@app.controller.todo"
            ]
        },
        "app.template.main": {
            "callable": "./views/main.js",
            "arguments": [
                "@app.controller.todo",
                "@hyperhtml"
            ]
        },
        "app.template.footer": {
            "callable": "./views/footer.js",
            "arguments": [
                "@app.controller.todo"
            ]
        },
        "hyperhtml": {
            "object": "hyperhtml/hyperhtml",
            "version": "0.11.7"
        }
    };
}
