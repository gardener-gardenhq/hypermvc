

module.exports = function(controller, storage, updateHeader, updateMain, updateFooter, hyperHTML, doc)
{
    doc = doc || document;
    const appRender = hyperHTML.bind(doc.querySelector('.todoapp'));

    const header = hyperHTML.wire();
    const main = hyperHTML.wire();
    const footer = hyperHTML.wire();

    controller.init(storage, todos => {
	    appRender`${[
		    updateHeader(header, todos),
		    updateMain(main, todos),
		    updateFooter(footer, todos)
	    ]}`;
    });
    controller.update();
}
