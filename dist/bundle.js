!function(t){!function(e){e.then(function(n){e=t=void 0,function(t){return Promise.all([t("/js/api/dispatch.js",function(t,e,n,r,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){function e(t){var e=t.currentTarget.closest("li");e.classList.add("editing"),e.querySelector(".edit").focus()}function n(e){e.currentTarget.closest("li").classList.remove("edit"),t.edit(e)}function r(e){e.keyCode===t.ESC_KEY&&(e.currentTarget.value=todo.title,e.currentTarget.blur())}return function(i){switch(i){case"input":return t.input;case"save":return n;case"reset.ESC_KEY":return r;case"edit":return e;default:return t[i]}}}}),t("/js/api/hyperhtml.js",function(t,e,n,r,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return{"app.render":{callable:"./api/render.js",arguments:["@hyperhtml",".todoapp"]},"app.template.api":{callable:"./api/template.js",arguments:["@app.templates","@app.dispatch","@hyperhtml:wire"]},hyperhtml:{object:"hyperhtml/hyperhtml",version:"0.11.7"}}}}),t("/js/api/render.js",function(t,e,n,r,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){return n=n||document,t.bind(n.querySelector(e))}}),t("/js/api/template.js",function(t,e,n,r,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){var r={header:n(),main:n(),footer:n()},i=function(t,r){return function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.render(Object.assign({},{dispatch:e,fragment:n},i),r)}};return Object.keys(t).reduce(function(e,n){return e[n]={render:i(t[n],r[n])},e},{})}}),t("/js/app.js",function(t,e,n,r,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t,e){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["",""],["",""]);e.default=function(t,e,n,r){var i=function(e){return t.hash()===e?"selected":""};t.init(r,function(r){e(o,[].concat(n.header.render(),n.main.render({items:t.items,filteredItems:r}),n.footer.render({selected:i,canViewFooter:t.todosSize()>0,remaining:t.todosLeft(),hash:t.hash(),canClearCompleted:t.todosLeft()<t.todosSize()})))}),t.update()}}),t("/js/container.js",function(t,e,n,r,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return{imports:["@gardenhq/tick-control/container.js","./api/hyperhtml.js"],app:{callable:"./app.js",arguments:["@app.controller.todo","@app.render","@app.template.api","@app.model.storage"]},"app.controller.todo":{callable:"./controllers/todo.js",arguments:["@app.model.todo"]},"app.model.todo":{object:"./models/todo.js"},"app.model.storage":{object:"./models/storage.js"},"app.template.header":{object:"./templates/header.html",tags:[{name:"app.template",key:"header"}]},"app.template.main":{object:"./templates/main.html",tags:[{name:"app.template",key:"main"}]},"app.template.footer":{object:"./templates/footer.html",tags:[{name:"app.template",key:"footer"}]},"app.dispatch":{callable:"./api/dispatch.js",arguments:["@app.controller.todo"]},"app.templates":{iterator:"@gardenhq.tick-control.iterator",arguments:["#app.template"]}}}}),t("/js/controllers/todo.js",function(t,e,n,r,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){e=e||window;var n={ENTER_KEY:13,ESC_KEY:27,init:function(t,r){var i=this;this.items=t.get(),this.update=function(){var e=n.hash(),o=i.items;"all"!==e&&(o=o.filter("active"===e?function(t){return!t.completed}:function(t){return t.completed})),r(o),t.set(i.items)},e.onhashchange=this.update},clear:function(){n.items=n.items.filter(function(t){return!t.completed}),n.update()},complete:function(t){var e=t.target.closest("li").dataset.index,r=n.items[e];r.completed=!r.completed,n.update()},create:function(e){var r=e.target,i=r.value.trim();e.keyCode===n.ENTER_KEY&&i.length&&(n.items.push(t(i)),r.value="",n.update())},destroy:function(t){var e=t.target.closest("li").dataset.index;n.items.splice(e,1),n.update()},edit:function(t){if("blur"===t.type||t.keyCode===n.ENTER_KEY){var e=t.target.value.trim();if(e.length){var r=t.target.closest("li").dataset.index;n.items[r].title=e,n.update()}else"blur"===t.type?n.destroy(t):t.target.blur()}},hash:function(){var t=location.hash.slice(2);return"completed"!==t&&"active"!==t?"all":t},todosLeft:function(){return n.items.filter(function(t){return!t.completed}).length},todosSize:function(){return n.items.length},toggleAll:function(t){n.items.forEach(function(e){e.completed=t.target.checked}),n.update()}};return n}}),t("/js/models/storage.js",function(t,e,n,r,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="todos-hyperHTML";e.default={get:function(){return JSON.parse(localStorage.getItem(o)||"[]")},set:function(t){return localStorage.setItem(o,JSON.stringify(t))}}}),t("/js/models/todo.js",function(t,e,n,r,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=0;e.default=function(t){return{title:t,id:o++,completed:!1}}}),t("/js/templates/footer.html",function(t,e,n,r,i){t.exports='<footer class="footer" style="${canViewFooter ? \'\' : \'display:none\'}">\n\t<span class="todo-count">\n\t\t<strong> ${ remaining } </strong> item${~-remaining ? \'s\' : \'\'} left\n\t</span>\n\t<ul class="filters">\n\t\t<li><a class="${selected(\'all\')}" href="#/">All</a></li>\n\t\t<li><a class="${selected(\'active\')}" href="#/active">Active</a></li>\n\t\t<li><a class="${selected(\'completed\')}" href="#/completed">Completed</a></li>\n\t</ul>\n\t<button class="clear-completed" onclick="${ dispatch(\'clear\') }" style="${ canClearCompleted ? \'\' : \'display:none\'}">Clear completed</button>\n</footer>\n\n\x3c!--# sourceURL=/js/templates/footer.html --\x3e'}),t("/js/templates/header.html",function(t,e,n,r,i){t.exports='<header class="header">\n\t<h1>todos</h1>\n\t<input\n\t\tonkeypress="${ dispatch(\'create\') }"\n\t\tclass="new-todo"\n\t\tplaceholder="What needs to be done?"\n\t\tautofocus>\n</header>\n\x3c!--# sourceURL=/js/templates/header.html --\x3e'}),t("/js/templates/main.html",function(t,e,n,r,i){t.exports='<section class="main" style="${filteredItems.length ? \'\' : \'display:none\'}">\n\t<input\n\t\tclass="toggle-all"\n\t\ttype="checkbox"\n\t\tonclick="${ dispatch(\'toggleAll\') }"\n\t\tchecked="${filteredItems.every(item => item.completed)}">\n\t<label for="toggle-all">Mark all as complete</label>\n\t<ul class="todo-list">${filteredItems.map(item => fragment(item)`\n\t\t<li\n\t\t\tdata-index="${items.indexOf(item)}"\n\t\t\tclass="${item.completed ? \'completed\' : \'\'}"\n\t\t>\n\t\t\t<div class="view">\n\t\t\t\t<input\n\t\t\t\t\tclass="toggle"\n\t\t\t\t\ttype="checkbox"\n\t\t\t\t\tchecked="${item.completed}"\n\t\t\t\t\tonclick="${ dispatch(\'complete\') }">\n\t\t\t\t<label ondblclick="${ dispatch(\'edit\') }">\n\t\t\t\t\t${item.title}\n\t\t\t\t</label>\n\t\t\t\t<button class="destroy" onclick="${ dispatch(\'destroy\')}"></button>\n\t\t\t</div>\n\t\t\t<input\n\t\t\t\tclass="edit"\n\t\t\t\tvalue="${ item.title }"\n\t            onblur="${ dispatch(\'save\') }"\n\t\t\t\tonkeypress="${ dispatch(\'input\') }"\n\t\t\t\tonkeydown="${ dispatch(\'reset.ESC_KEY\') }">\n\t\t</li>\n`)}</ul>\n</section>\n\x3c!--# sourceURL=/js/templates/main.html --\x3e'}),t("https://unpkg.com/@gardenhq/o@7.1.2/b.js",function(t,e,n,r,i){"use strict";t.exports=function(t){return t.then(function(t){var e,n;return null!=t.registerDynamic&&(e=t.registerDynamic.bind(t)),null!=t.resolve&&(n=t.resolve.bind(t)),t.import("@gardenhq/willow/index.js#@6.2.0").then(function(r){return r(t.import.bind(t),n,e,"@gardenhq/willow/conf/javascript.js#@6.2.0")}).then(function(e){var n=t.getConfig(),r=n.hash;if(!r&&"undefined"!=typeof document){var i=document.getElementsByTagName("script"),o=i[i.length-1];if(o.hasAttribute("src")){var s=o.getAttribute("src");(l=s.split("#")).length>1?r=t.resolve(l[1],location.pathname):o.hasAttribute("data-container")&&(l=(s=o.getAttribute("data-container")).split("#")).length>1&&(r=t.resolve(l[0],location.pathname)+":"+l[1])}}if(r){var l=r.split(":");return n.basepath||t.config({baseURL:l[0]}),e.build(l[0]).run(l[1]||"main")}return e}).catch(function(t){console.error(t)})})}}),t("https://unpkg.com/@gardenhq/tick-control/container.js",function(t,e,n,r,i){"use strict";t.exports=function(){var t=void 0!==String.raw;return{"gardenhq.tick-control.engine":{object:i+"/engine.js"},"gardenhq.tick-control.renderer.native":{callable:i+"/renderer/native.js"},"gardenhq.tick-control.renderer.non-native":{callable:i+"/renderer/non-native.js",bundle:!1},"gardenhq.tick-control.parser":{callable:i+"/parser/javascript.js",arguments:["@gardenhq.tick-control.parser.untick"],bundle:!1},"gardenhq.tick-control.parser.untick":{object:i+"/parser/untick.js"},"gardenhq.tick-control.raw":{resolve:t?[]:["@gardenhq.tick-control.polyfill.raw"],service:function(e){return t||(String.raw=e),String.raw}},"gardenhq.tick-control.polyfill.raw":{object:i+"/tag/raw.js",bundle:!1},"gardenhq.tick-control":{callable:i+"/factory.js",arguments:["@gardenhq.tick-control.engine",t?"@gardenhq.tick-control.renderer.native":"@gardenhq.tick-control.renderer.non-native","@gardenhq.tick-control.raw",t?null:"@gardenhq.tick-control.parser"]},"gardenhq.tick-control.template-literal":{object:"@gardenhq.tick-control"},"gardenhq.tick-control.iterator":{callable:i+"/iterator.js",arguments:["@gardenhq.tick-control.engine",t?"@gardenhq.tick-control.renderer.native":"@gardenhq.tick-control.renderer.non-native","@gardenhq.tick-control.raw",t?null:"@gardenhq.tick-control.parser"]}}}}),t("https://unpkg.com/@gardenhq/tick-control/engine.js",function(t,e,n,r,i){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t,e,n){var r=function t(e,n,r,i){var s=this,l=this instanceof t;switch(l||(s=new t(e,n,r,i)),s._string="",s._shouldRefreshRenderer=!0,i&&s.parser(i),r&&s.transformer(r),void 0===e?"undefined":o(e)){case"function":return s.transformer(e),s;case"string":if(void 0!==n&&s.vars(n),s._template=s.compile(e),!l)return s._template.render(n,r);break;case"object":return function(t){return this.compile(t).render(e)}.bind(s)}return s},i=r.prototype;return i.toString=function(){return this._string},i.render=function(t,e){return this._template.render(t,e)},i.parser=function(t){return this._parser=t,this},i.parse=function(t){var e=this._parser||n;if(e)return e(t)},i.transformer=function(t){return this._transformer=t,this._shouldRefreshRenderer=!0,this},i.vars=function(t){return this._vars=t,this},i.compile=function(n,r,i,o){this._string=n,null!=r&&this.transformer(r);var s=this._transformer||e,l=t(n,this.parse(n)),u=this._template=l.renderable,a=l.transformer(s);this._shouldRefreshRenderer=!1;var c=this;return u.render=function(t,e){return this.apply(t||c._vars,[void 0!==e||c._shouldRefreshRenderer?l.transformer(e||c._transformer):a,c])},u},r}}),t("https://unpkg.com/@gardenhq/tick-control/iterator.js",function(t,e,n,r,i){"use strict";t.exports=function(t,e,n,r){var i=t(e,n,r);return function(t,e){var n=i();return n.compile(t,null,"template:"+e),n}}}),t("https://unpkg.com/@gardenhq/tick-control/renderer/native.js",function(t,e,n,r,i){"use strict";t.exports=function(t,e){return t=t||function(t,e,n){return["tag","template","with(this) {return tag`"+t+"`}"+("string"==typeof n?"//# sourceURL="+n:"")]},e=e||function(t){return t},function(n,r,i,o){return{renderable:Function.apply(null,t(n,r,i,o)),transformer:e}}}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/Builder.js",function(t,e,n,r,i){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(t,e){this.container=t,this.loading=null,this.import=e,this.clear()};Object.assign(s.prototype,{use:function(t){return"function"==typeof t&&(t=[t]),this.filters=this.filters.concat(t),this},clear:function(){return this.filters=[],this},get:function(t){var e,n=this.container;return(e=null!=this.loading?this.loading.then(function(){return n.get(t)}.bind(this)):n.get(t))instanceof Promise&&e.catch(function(e){e.message=e.message+"\n @"+t}),e},set:function(t,e){return this.container.set.apply(this.container,arguments),this},has:function(t){return this.container.has.apply(this.container,arguments)},tag:function(){return this.container.tag.apply(this.container,arguments),this},getTagged:function(t){return this.container.getTagged(t)},run:function(t,e){return this.get(t).then(function(t){if("function"==typeof t)return t.apply(null,e)})},build:function(t){return this.loading=this.load.apply(this,arguments).catch(function(t){throw t}),this},applyFilters:function(t,e,n){var r=this,i=void 0===t?"undefined":o(t);if(null==t||"object"!==i||t.constructor!=Object&&"imports"!=e)return this.container.set(e,function(){return Promise.resolve(t)}),Promise.resolve(n);if(0==this.filters.length)return Promise.resolve(n);var s=this.filters[0](r,t,e,n);return this.filters.reduce(function(t,i,o,s){return t.then(function(t){var o=i(r,(n=t||n)[e],e,n);return null==o?n:o})},s instanceof Promise?s:Promise.resolve(s))},processKey:function(t,e,n){return this.applyFilters(n[e],e,n).then(function(e){var n=Object.keys(e),r=t+1;return r<n.length?this.processKey(r,n[r],e):e}.bind(this))},_load:function(t){void 0!==t.__esModule&&!0===t.__esModule&&void 0!==t.default&&(t=t.default),"function"==typeof t&&(t=t(this));var e=function(t){if(null==t||"object"!==(void 0===t?"undefined":o(t)))throw Error("Service definitions should be an object, a function returning an object (or a !!promise resolving to an object!!)");var e=Object.keys(t)[0];return this.processKey(0,e,t).then(function(){return this}.bind(this))};return t instanceof Promise?t.then(e.bind(this)):e.bind(this)(t)},load:function(t){if("string"==typeof t){if("function"!=typeof this.import)throw Error("This builder doesn't know how to load");return this.import(t).then(function(t){return this._load(t)}.bind(this))}return this._load(t)},getContainer:function(){return this.container}}),t.exports=s}),t("https://unpkg.com/@gardenhq/willow@6.2.0/Container.js",function(t,e,n,r,i){"use strict";var o={isDefined:function(t){return void 0!==t},isCallable:function(t){return"function"==typeof t}},s=function(t){this._keys={},this._values={},this._factories=[],this._definitions={},this._tags={},t&&Object.keys(t).forEach(function(e){this.set(e,t[e])},this)};Object.assign(s.prototype,{set:function(t,e,n){if(o.isDefined(this._values[t]))throw Error('Cannot set "'+t+'", it is already set and has been instantiated');return o.isDefined(this._definitions[t])&&null!==this._definitions[t]&&this.removeTags(t),this._definitions[t]=e,this._keys[t]=!0,null!=n&&n.forEach(function(e,n,r){"string"==typeof e?this.tag(t,e):this.tag(t,e.name,e)},this),this},tag:function(t,e,n){return o.isDefined(this._keys[t])||this.set(t,null),o.isDefined(this._tags[e])||(this._tags[e]={}),o.isDefined(this._tags[e][t])||(this._tags[e][t]=[]),this._tags[e][t].push(n||{}),this},get:function(t){if(!this.has(t))throw Error('Cannot get "'+t+'", identifier is not defined');return o.isDefined(this._values[t])?this._values[t]:o.isDefined(this._factories[t])?this._factories[t](this,[]):(o.isCallable(this._definitions[t])?this._values[t]=this._definitions[t].apply(this,[]):this._values[t]=this._definitions[t],this._values[t])},has:function(t){return o.isDefined(this._keys[t])},factory:function(t,e){if(!o.isCallable(e))throw Error('Cannot set "'+t+'", service factories must be callable');return this._factories[t]=e,this._keys[t]=!0,this},removeTags:function(t){this.has(t)&&Object.keys(this._tags).forEach(function(e,n,r){null!=this._tags[e][t]&&delete this._tags[e][t]},this)},findTaggedIds:function(t){return o.isDefined(this._tags[t])?this._tags[t]:{}},getTagged:function(t){var e=this.findTaggedIds(t),n=[];return Object.keys(e).forEach(function(r,i,o){var s=this.get(r),l=e[r].reduce(function(e,n,r,i){return null!=n.name&&n.name==t?n.key:e},i);n[l]=s},this),n}}),t.exports=s}),t("https://unpkg.com/@gardenhq/willow@6.2.0/conf/index.js",function(t,e,n,r,i){"use strict";t.exports=function(){var t=i+"/..";return{"willow.filter.service":{filter:t+"/filters/service"},"willow.filter.factory":{filter:t+"/filters/factory"},"willow.filter.tags":{filter:t+"/filters/tags"}}}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/conf/javascript.js",function(t,e,n,r,i){"use strict";t.exports=function(){var t=i+"/..",e="willow";return{"willow.filter.class":{filter:t+"/filters/class",arguments:["@willow.loadAndEval","@willow.resolve.arguments","@willow.resolveIdentifier","@willow.traverse"],tags:[e+".filter"]},"willow.filter.object":{filter:t+"/filters/object",arguments:["@willow.loadAndEval"],tags:[e+".filter"]},"willow.filter.share":{filter:t+"/filters/shared"},"willow.filter.resolve":{filter:t+"/filters/resolve",arguments:["@willow.resolve.resolve"],tags:[e+".filter"]},"willow.filter.iterator":{filter:t+"/filters/iterator",arguments:["@willow.resolve.arguments"],tags:[e+".filter"]}}}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/filters/callable.js",function(t,e,n,r,i){"use strict";t.exports=function(t,e){return t("callable",function(t,n,r,i,o,s){return e(o,s).then(function(e){try{var o=r.apply(i,e)}catch(t){n(t)}t(o)})})}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/filters/class.js",function(t,e,n,r,i){"use strict";t.exports=function(t,e,n,r){return t("class",function(t,i,o,s,l,u){return e(l,u).then(function(e){var s=[];(u.calls||[]).forEach(function(t,e,i){var o=t[1]||[];r(o,function(t,e,r){return s.push(n(t,l)),s.length-1})}),Promise.all(s).then(function(n){var i=new(Function.prototype.bind.apply(o,[o].concat(e)));(u.calls||[]).forEach(function(t,e,o){var s=t[0],l=t[1]||[];r(l,function(t,e,r){return n[t]}),i[s].apply(i,l)}),t(i)}).catch(function(t){i(t)})})})}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/filters/factory.js",function(t,e,n,r,i){"use strict";t.exports=function(t){return t=t||"factory",function(e,n,r,i){void 0!==n[t]&&e.factory(r,n[t])}}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/filters/filter.js",function(t,e,n,r,i){"use strict";t.exports=function(t,e,n){return n=n||"filter",function(n,r,i,o){t("filter",function(t,n,r,i,o,s){return e(o,s).then(function(e){var n=r.apply(i,e);o.use(n),t(n)})})(n,r,i,o)}}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/filters/imports.js",function(t,e,n,r,i){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t,e){e=e||"imports";return function n(r,i,s,l){return s==e?Promise.all(i.map(function(e){var n=e;return"string"!=typeof n&&(n=e.resource),null!=e.version&&(n+="#@"+e.version),t(n)})).then(function(t){var i=t.map(function(t){if(void 0!==t.__esModule&&!0===t.__esModule&&void 0!==t.default&&(t=t.default),"function"==typeof t&&(t=t(r)),"object"!==(void 0===t?"undefined":o(t)))throw Error("That import doesn't return/resolve to an object");return Object.keys(t).forEach(function(n){n!=e&&(void 0!==l[n]&&l[n].constructor!=Object||(null==t[n]||t[n].constructor!==Object?l[n]=t[n]:l[n]=Object.assign(t[n],l[n])))}),void 0!==t[e]?n(r,t[e],e,l):l});return Promise.all(i).then(function(t){return t[0]})}):Promise.resolve(l)}}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/filters/index.js",function(t,e,n,r,i){"use strict";t.exports=function(t){var e="willow",n=t.get(e+".system.import"),r=t.get(e+".system.resolve"),o=t.get(e+".system.registerDynamic");return Promise.all(["/util/loader.js","/util/walkPath.js","/util/resolveIdentifier.js","/util/traverse.js","/util/resolver.js","/util/splitIdentifier.js","/util/findIdentifier.js","/util/weblikeJavascriptlessImport.js","/imports.js","/callable.js","/filter.js"].map(function(t){return i+t}).map(function(t){return n(t)})).then(function(i){return function(i,s,l,u,a,c,f,p,h,d,m){c=c(":"),f=f("@");var g=i(p=p(n),r,o,s,c,f),v=l(s,"@","#",c),y=a(v,u),b=y("arguments"),j=h(p),w=d(g,b),k=m(g,b);return t.set(e+".loadAndEval",function(){return g}),t.set(e+".require",function(){return n}),t.set(e+".walkPath",function(){return s}),t.set(e+".resolveIdentifier",function(){return v}),t.set(e+".resolver",function(){return y}),t.set(e+".traverse",function(){return u}),t.set(e+".resolve.arguments",function(){return b}),t.set(e+".filter.callable",function(){return w}),function(t,e,n,r){return j.apply(null,arguments).then(function(e){return r=e||r,w(t,r[n],n,r),k(t,r[n],n,r),r})}}.apply(null,i)})}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/filters/iterator.js",function(t,e,n,r,i){"use strict";t.exports=function(t,e){return e=e||"iterator",function(n,r,i,o){var s=n.getContainer();void 0!==r[e]&&s.set(i,function(){return t(n,r).then(function(t){return n.get(r[e].substr(1)).then(function(e){var n,r=t[0];return n=Array.isArray(r)?[]:{},Object.keys(r).forEach(function(t,i,o){n[t]=e(r[t],t)}),n})})})}}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/filters/object.js",function(t,e,n,r,i){"use strict";t.exports=function(t){return t("object",function(t,e,n,r,i,o){t(n)})}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/filters/resolve.js",function(t,e,n,r,i){"use strict";t.exports=function(t,e,n,r){return e=e||"resolve",n=n||"service",r=r||"@",function(i,o,s,l){if(null!=o[e]){var u=o[n];o[n]=null,i.set(s,function(){var n=this,i=o[e].filter(function(t,e,n){return 0===t.indexOf(r)});return t(n,o).then(function(t){var e=n.get.bind(n);return i=i.map(function(e,i,o){return n.has(e)||n.set(e,function(e){return t[i]}),e.substr(r.length)}),n.get=function(t){return-1!==i.indexOf(t)&&(t=r+t),e(t)},new Promise(function(t,e){try{t(u.apply(n,i.map(function(t){return n.get(t)})))}catch(t){e(t)}})})})}}}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/filters/service.js",function(t,e,n,r,i){"use strict";t.exports=function(t){return t=t||"service",function(e,n,r,i){void 0!==n[t]&&e.set(r,n[t])}}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/filters/tags.js",function(t,e,n,r,i){"use strict";t.exports=function(t){return t=t||"tags",function(e,n,r,i){(n[t]||[]).forEach(function(t,n,i){var o=t,s={};"string"!=typeof o&&(o=t.name,s=t),e.tag(r,o,s)})}}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/filters/util/findIdentifier.js",function(t,e,n,r,i){"use strict";t.exports=function(t){return t=t||"@",function(e){return!(-1!=e.file.indexOf("/")||0!==e.file.indexOf(t))&&e.file.substr(1)}}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/filters/util/loader.js",function(t,e,n,r,i){"use strict";t.exports=function(t,e,n,r,i,o){return function(s,l){return null==t?function(){}:function(u,a,c,f){if(null!=a[s]){u.set(c,function(){var c=this;return new Promise(function(f,p){var h,d=i(a[s]),m=o(d);if(m)(h=c.get(m))instanceof Promise||(h=Promise.resolve(h));else{var g={},v=d.file.split("#");v[1]&&(g["Content-Type"]=v[1]),!1===a.bundle&&(g["Cache-Control"]="private"),!0===a["ignore-require"]&&(g["Content-Type"]="application/javascript+bundle"),null!=a.version&&(g["X-Content-Version"]=a.version),Object.keys(g).length>0&&(d.file=v[0]+"#"+JSON.stringify(g));var y=a.requires||[];if(Array.isArray(y)){var b={};y.map(function(){b[item]="@require."+item}),y=b}var j=Object.keys(y);h=Promise.all(j.map(function(t){return c.get(y[t].substr(1))})).then(function(t){return j.forEach(function(r,i,o){n(e(r,d.file),[],!0,function(e,n,r,o,s){e.exports=t[i]})}),t}).then(function(e){return t(d.file)})}h.then(function(t){var e;return null!=d.path?(e=t,t=r(d.path,t)):void 0!==t.__esModule&&!0===t.__esModule&&void 0!==t.default&&(t=t.default),l(f,p,t,e,u,a)}).catch(function(t){p(t)})})})}}}}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/filters/util/resolveIdentifier.js",function(t,e,n,r,i){"use strict";function o(t,e,n){var r,i=t.split(":",2);if(2==i.length){if("function"==typeof(r=e.env[i[0]])&&(r=r()),"+"==i[1][0])r=r?i[1].substring(1):"";else if("-"==i[1][0])r=r||i[1].substring(1);else if("#"==i[1][0])r=void 0!==r?(r+"").length:0;else if("="==i[1][0])r||(r=i[1].substring(1),e.env[i[0]]=r);else if("?"==i[1][0]&&!r)throw i[1].length,Error()}else"function"==typeof(r=e.env[t])&&(r=r());return r}function s(t,e,n,r,i){if(-1!=e&&t){var l=t.indexOf("$",e);if(-1==l)return n+=t.substring(e),e=-1,n;var u,a;if(n+=t.substring(e,l),"{"==t.charAt(l+1)){if(-1==(a=t.indexOf("}",l))){if(!r.ignoreErrors)throw Error();u=t.substring(l+2)}else u=t.substring(l+2,a),a++;u||(n+="${}")}else{if(l++,a=-1,r.specialVars&&-1!=r.specialVars.indexOf(t[l]))u=t[l],a=l+1;else{for(var c=l,f=t.length;c<f;c++){var p=t.charCodeAt(c);if(!(p>47&&p<58||p>64&&p<91||95===p||p>96&&p<123)){a=c;break}}u=-1==a?t.substring(l):t.substring(l,a)}u||(n+="$")}return e=a,u?o(u,r,function(o,l){if(o&&!r.ignoreErrors)return i(o);null!==l&&void 0!==l&&(n+=l+""),s(t,e,n,r,i)}):s(t,e,n,r,i)}return n}t.exports=function(t,e,n,r){return function(i,o){if("string"!=typeof i)return i;if(0===i.indexOf(e)){var l=r(i),u=o.get(l.file.substr(e.length));return l.path?u.then(function(e){return t(l.path,e)}):u}if(0===i.indexOf(n)){var a=o.getTagged(i.substr(n.length)),c=[],f=Object.keys(a);return 0===f.length?Promise.resolve(c):(f.forEach(function(t,e,n){c.push(a[t])}),Promise.all(c).then(function(t){var e={};return 0==f[0]&&(e=[]),t.forEach(function(t,n,r){e[f[n]]=t}),e}))}if(0===i.indexOf("$"))return s(i,"",0,process);if(0===i.indexOf("--")){var p;return process.argv.forEach(function(t,e,n){var r=t.split("=");if(r[0]===i){var o=n[e+1]||"-";p=1===r.length&&0!==o.indexOf("-")?o:r[1]||!0}}),p}return i}}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/filters/util/resolver.js",function(t,e,n,r,i){"use strict";t.exports=function(t,e){return function(n){return n=n||"arguments",function(r,i){if(null==i[n])return Promise.resolve();var o=[];return e(i[n],function(e,n,i){return o.push(t(e,r)),o.length-1}),Promise.all(o).then(function(t){return e(i[n],function(e,n,r){return t[e]}),i[n]})}}}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/filters/util/splitIdentifier.js",function(t,e,n,r,i){"use strict";t.exports=function(t){return t=t||":",function(e){var n=e.lastIndexOf(t),r=e.indexOf("://");if(-1!==n){var i=e.split(t);return-1!==r?{file:i[0]+":"+i[1],path:i[2]}:{file:i[0],path:i[1]}}return{file:e,path:null}}}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/filters/util/traverse.js",function(t,e,n,r,i){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function t(e,n,r){r=r||[],Object.keys(e).forEach(function(i){var s=e[i];null!=s&&"object"===(void 0===s?"undefined":o(s))&&Object.getPrototypeOf(s)===Object.prototype?t(s,n,r.concat(i)):e[i]=n.call(e,s,i,r)})}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/filters/util/walkPath.js",function(t,e,n,r,i){"use strict";t.exports=function(t,e){return t.split(".").reduce(function(t,e,n,r){return t[e]},e)}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/filters/util/weblikeJavascriptlessImport.js",function(t,e,n,r,i){"use strict";t.exports=function(t){return function(e){e=(r=e.split("#"))[0];var n=null==r[1]?"":"#"+r[1];if("/"===e[e.length-1])e+="index.js";else{var r=e.split("/"),i=1;0===e.indexOf("@")&&(i=2),r.length>i&&-1===r.pop().indexOf(".")&&(e+=".js")}var o=[].slice.call(arguments);return o[0]=e+n,t.apply(null,o)}}}),t("https://unpkg.com/@gardenhq/willow@6.2.0/index.js",function(t,e,n,r,i){"use strict";t.exports=function(t,e,r,o,s){var l=i,u="willow.";if(o=l+"/conf/javascript.js",null==t){var a=n("./util/promised");t=a(function(t){return n(t.replace(l,"./"))})}var c=["Builder.js","filters/index.js","conf/index.js"];return null==s&&c.push("Container.js"),Promise.all(c.map(function(e){return t(l+"/"+e)})).then(function(n){var i=null==s?new n[3]:s;i.set(u+"system.import",function(){return t}),i.set(u+"system.resolve",function(){return e}),i.set(u+"system.registerDynamic",function(){return r});var l=new n[0](i,t);return n[1](i).then(function(t){return l.use(t).getContainer().set(u+"resolve.resolve",function(){return l.get(u+"resolver")("resolve")}),l}).then(function(t){var e=n[2]();return t.load(e).then(function(){return Promise.all(Object.keys(e).map(function(e,n,r){return t.get(e)})).then(function(e){return t})})}).then(function(t){return t.load(o)}).then(function(t){return Promise.all(t.getTagged(u+"filter")).then(function(){return t})})})}}),t("https://unpkg.com/hyperhtml@0.11.7/hyperhtml.js",function(t,e,n,r,i){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(){function t(t){return _ in this&&this[_].s===t?j.apply(this,arguments):w.apply(this,arguments)}function e(t,e){for(var n,r=E?O:q,o=E?f(t.attributes):T.call(t.attributes),s=0,l=o.length;s<l;s++)(n=o[s]).value===r&&e.push(i(t,E?t.getAttributeNode(k.shift()):n))}function n(t,i){for(var o,u,a=T.call(t.childNodes),c=a.length,f=0;f<c;f++)switch((o=a[f]).nodeType){case 1:e(o,i),n(o,i);break;case 8:o.textContent===O&&(1===c?(i.push(r(t)),t.removeChild(o)):!(f<1||1===a[f-1].nodeType)||f+1!==c&&1!==a[f+1].nodeType?(u=t.ownerDocument.createTextNode(""),i.push(l(u)),t.replaceChild(u,o)):i.push(s(o)));break;case 3:"STYLE"===t.nodeName&&o.textContent===q&&i.push(l(t))}}function r(t){return function e(n){switch(void 0===n?"undefined":o(n)){case"string":t.innerHTML=n;break;case"number":case"boolean":t.textContent=n;break;default:if(Array.isArray(n))if(1===n.length)e(n[0]);else if("string"==typeof n[0])e(n.join(""));else{var r=a(t.childNodes,n);-1<r&&g(t,n,r)}else p(t,n)}}}function i(t,e){var n,r=e.name,i="on"===r.slice(0,2),o=r in t&&!x.test(r);return o&&t.removeAttribute(r),o?function(e){n!==e&&(n=e,t[r]=i&&"handleEvent"in e?e.handleEvent.bind(e):e)}:function(t){n!==t&&(e.value=n=t)}}function s(t){var e=document.createDocumentFragment(),n=[];return function r(i){var s,l=t.parentNode;switch(void 0===i?"undefined":o(i)){case"string":case"number":case"boolean":h(n,0),c(e,i),n=T.call(e.childNodes),l.insertBefore(e,t);break;default:Array.isArray(i)?0===i.length?(h(n,0),n=[]):"string"==typeof i[0]?r(i.join("")):-1<(s=a(n,i))&&(h(n,s),i=i.slice(s),u(e,i),l.insertBefore(e,t),n.push.apply(n,i)):(h(n,0),n=11===i.nodeType?T.call(i.childNodes):[i],l.insertBefore(i,t))}}}function l(t){var e;return function(n){e!==n&&(t.textContent=e=n)}}function u(t,e){for(var n=0,r=e.length;n<r;n++)t.appendChild(e[n])}function a(t,e){for(var n=0,r=t.length,i=e.length;n<r;){if(!(n<i&&t[n]===e[n]))return n;n++}return n===i?-1:n}function c(t,e){var n=t.ownerDocument.createElement("template"),r=E&&!("content"in n)&&/^[^\S]*?<(t(?:head|body|foot|r|d|h))/i.test(e);n.innerHTML=r?"<table>"+e+"</table>":e,r&&(n={childNodes:n.querySelectorAll(RegExp.$1)}),u(t,T.call((n.content||n).childNodes))}function f(t){for(var e=[],n=t.length;n--;e[n]={name:t[n].name,value:t[n].value});return e}function p(t,e){switch(e.nodeType){case 1:var n=t.childNodes;if(0<n.length&&n[0]===e){h(n,1);break}d(t,e);break;case 11:-1<a(t.childNodes,e.childNodes)&&d(t,e);break;case 3:t.textContent=e.textContent}}function h(t,e){for(var n,r=t.length;e<r--;)(n=t[r]).parentNode.removeChild(n)}function d(t,e){t.textContent="",t.appendChild(e)}function m(t){for(var e,n=[],r=t.childNodes,i=0,o=r.length;i<o;i++)(1===(e=r[i]).nodeType||0<P.call(e.textContent).length)&&n.push(e);return o=n.length,o<2?(e=o<1?t:n[0],function(){return e}):function(){return n}}function g(t,e,n){var r=t.ownerDocument.createDocumentFragment();0<n?(h(t.childNodes,n),u(r,e.slice(n)),t.appendChild(r)):(u(r,e),d(t,r))}function v(e){var n,r,i,o,s,l;return function(a){return l!==a&&(s=!0,l=a,i=document.createDocumentFragment(),r="svg"===e?document.createElementNS("http://www.w3.org/2000/svg","svg"):i,o=t.bind(r)),o.apply(null,arguments),s&&(s=!1,"svg"===e&&u(i,T.call(r.childNodes)),n=m(i)),n()}}function y(t,e,n){return t[e]||(t[e]=v(n))}function b(t,e){var n=$.get(t)||($.set(t,n={}),n),r=e.indexOf(":");return r<0?y(n,e,e):y(n,e.slice(r+1),e.slice(0,r)||"html")}function j(){for(var t=1,e=arguments.length,n=this[_].u;t<e;t++)n[t-1](arguments[t]);return this}function w(t){var e=[],r=t.join(q);return E?(k=[],h(this.childNodes,0),c(this,r.replace(C,S))):1===this.nodeType?this.innerHTML=r:c(this,r),n(this,e),this[_]={s:t,u:e},j.apply(this,arguments)}t.wire=function(t,e){return arguments.length<1?v("html"):null==t?v(e||"html"):b(t,e||"html")};var k,x=/^style$/i,_="_hyper_html: ",O=_+(Math.random()*new Date|0)+";",q="\x3c!--"+O+"--\x3e",E=function(t){return t.innerHTML='<i data-i="" class=""></i>',/class/i.test(t.firstChild.attributes[0].name)}(document.createElement("p")),C=E&&RegExp("([^\\S][a-z]+[a-z0-9_-]*=)(['\"])"+q+"\\2","g"),S=E&&function(t,e,n){return k.push(e.slice(1,-1)),e+n+O+n},P=_.trim||function(){return this.replace(/^\s+|\s+$/g,"")},T=[].slice,$=("undefined"==typeof WeakMap?"undefined":o(WeakMap))===(void 0===$?"undefined":o($))?{get:function(t){return t[_]},set:function(t,e){Object.defineProperty(t,_,{configurable:!0,value:e})}}:new WeakMap;return t}();try{t.exports=s}catch(t){}})])}(function(t,e,r){return n.registerDynamic(t,[],!0,e,t+(r||""))}).then(function(){n("https://unpkg.com/@gardenhq/o@7.1.2/b.js").then(function(t){"function"==typeof t&&t(Promise.resolve(n))})})})}(t(function(t){return t(document)}))}(function(t){return function(e){return function(e){var n={},r=function(t,e){return function(t,n){if(null!=n["X-Content-Version"]){var r=t.split("/"),i=0;0===r[i].indexOf("@")&&(i=1),r[i]+="@"+n["X-Content-Version"],t=r.join("/")}return e(t,n)}},i=function(t){var e=o(t);return-1!==t.indexOf("://")?r(0,e):e},o=function(){return function(t,e){return{path:t,hash:Object.keys(e).length>0?"#"+JSON.stringify(e):""}}},s=function(t,e){var n=t.split("#");t=n[0];var r=n[1]||"";if(r){var i={};if(0===r.indexOf("{")?i=JSON.parse(r):0===r.indexOf("@")?i["X-Content-Version"]=r.substr(1):0!==r.indexOf(".")&&r.indexOf("/")>0&&(i["Content-Type"]=r),Object.keys(i).length>0)return e(t,i);r="#"+r}return{path:t,hash:r}},l=function(t,e){var n=t.split("/").filter(function(t){return""!==t});return"/"===t[0]&&(e=[n.shift()]),"."!==t[0]&&(n=["."].concat(n)),e.concat(n).reduce(function(t,e,n,r){return".."==e?t.slice(0,-1):"."==e?t:t.concat(e)},[]).join("/")},u=function(t,e){var n=i(t=t||"");return function(r,i){var o=s(r,n);r=o.path;var u=o.hash,a=r.substr(0,2);".."!=a&&"./"!=a&&"/"!=a[0]&&-1===r.indexOf("://")&&(r=t+"/"+r);var c=r.split("/");return-1!==r.indexOf("://")?c.slice(0,3).join("/")+l(c.slice(3).join("/"),[""])+u:(i=i||e,"/"!=(r=l(c.join("/"),i.split("/")))[0]&&-1===r.indexOf("://")&&(r="/"+r),r+u)}},a=function(t,e,n,r){this.id=t,this.filename=r||t,this.exports={},this.o=n},c=a.prototype;c._load=function(t){if(void 0!==this.o){var e=this.filename.split("/");e.pop();var n=this.o;this.o=void 0,n.bind(null)(this,this.exports,t,this.filename,e.join("/"))}return this.exports};var f=function(t){t=f.resolve(t).split("#")[0];var e=n[t],r=e.filename.split("/").slice(0,-1).join("/");return e._load(function(t){return f(0===t.indexOf("/")?t:f.resolve(t,r))})};(c=function(t){return Promise.resolve(f(t))}).registerDynamic=function(t,e,r,i,o){n[t]=new a(t,null,i,o)},c.import=function(t){return this.apply(null,arguments)};var p=t||{};return c.getConfig=function(){return Object.assign({},p)},c.config=function(t){t.baseURL!==p.baseURL&&(this.resolve=f.resolve=u(t.includepath||p.includepath,t.basepath)),p=Object.assign({},p,t)},c.resolve=f.resolve=u("https://unpkg.com","/js"),Promise.resolve(c)}}()}({src:"https://unpkg.com/@gardenhq/o@7.1.2/b.js",includepath:"https://unpkg.com",hash:"/js/container.js:app",baseURL:"https://unpkg.com/@gardenhq/o@7.1.2/b.js",basepath:"/js"}));
