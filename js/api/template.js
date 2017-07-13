// only concerned with hiding the differences between
// our api that is available to `templates`, which is:
// All templates automatically have:
//
// - `dispatch("eventName")` fire an event
// - `fragment(obj)` add a DOM fragment
//
// each template is then a 'renderable' e.g.
// `template.render(vars)`
// vars being an object of whatever other variables should be
// available to the template

export default (templates, dispatch, fragmentFactory) => {
    const fragments = {
        header: fragmentFactory(),
        main: fragmentFactory(),
        footer: fragmentFactory()
    };
    const render = (template, fragment) => (vars = {}) => {
        return template.render(
            Object.assign(
                {},
                {
                    dispatch: dispatch,
                    fragment: fragmentFactory
                },
                vars
            ),
            fragment
        )
    }
    return Object.keys(templates).reduce(
        (prev, item) => {
            prev[item] = {
                render: render(templates[item], fragments[item])
            };
            return prev;
        },
        {}
    );
}
