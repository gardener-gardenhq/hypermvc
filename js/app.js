export default (controller, render, templates, storage) => {
    const selected = (curr) => {
        return controller.hash() === curr ? 'selected' : '';
    }
    controller.init(
        storage,
        todos => {
	        render`${
	            [].concat(
	                templates.header.render(),
		            templates.main.render(
                        {
                            items: controller.items,
                            filteredItems: todos,
                        }
                    ),
		            templates.footer.render(
                        {
                            selected: selected,
                            canViewFooter: controller.todosSize() > 0,
                            remaining: controller.todosLeft(),
                            hash: controller.hash(),
                            canClearCompleted: controller.todosLeft() < controller.todosSize()
                        }
                    )
	            )
	        }`;
        }
    );
    controller.update();
}
