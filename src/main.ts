import Vue from 'vue';

import './plugins';

import i18n from './lang/';
import router from './router';

import './styles/main.scss';
import './directives/register';
import './components/register';
import './views/register';
import './extensions/register';

Vue.config.productionTip = false;

const app = new Vue({
	render: h => h('router-view'),
	router,
	i18n
}).$mount('#app');

export default app;
