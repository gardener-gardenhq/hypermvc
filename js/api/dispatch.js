// simplified dispatch implementation just for this project
// within a template call:
// `dispatch("eventname")`
// to dispatch and event
export default (controller) => {
    function dblClick2Edit(event) {
	    const li = event.currentTarget.closest('li');
	    li.classList.add('editing');
	    li.querySelector('.edit').focus();
    }

    function blur2Save(event) {
	    event.currentTarget.closest('li').classList.remove('edit');
	    controller.edit(event);
    }
    function escape2Reset(event) {
		if (event.keyCode === controller.ESC_KEY) {
			event.currentTarget.value = todo.title;
			event.currentTarget.blur();
		}
	}
	return (name) => {
        switch(name) {
            case "input":
                return controller['input'];
            case "save":
                return blur2Save;
            case "reset.ESC_KEY":
                return escape2Reset;
            case "edit":
                return dblClick2Edit;
            default:
                return controller[name];
        }
	}
    
}
