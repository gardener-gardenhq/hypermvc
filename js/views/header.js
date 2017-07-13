

export default (controller) => (render, todos) => render`
	<header class="header">
		<h1>todos</h1>
		<input
			onkeypress="${controller.create}"
			class="new-todo"
			placeholder="What needs to be done?"
			autofocus>
	</header>`;
