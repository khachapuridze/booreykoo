import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../api/';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		menu: [],
		serviceData: null,
		portfolio: null,
		portfolioInner: null,
	},
	mutations: {
		setState: function (state, data) {
			if (!data.key) return false;
			Vue.set(state, data.key, data.val);
		},
	},
	getters: {
		getMenu(state) {
			return state.menu;
		},
		getServiceData(state) {
			return state.serviceData;
		},
		getPortfolio(state) {
			return state.portfolio;
		},
		getPortfolioInner(state) {
			return state.portfolioInner;
		},
	},
	actions: {
		fethMenu({ commit }) {
			axios('menu')
				.then((res) => {
					commit('setState', {
						key: 'menu',
						val: res.data,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		},
		fetchServices({ commit }) {
			axios('services')
				.then((res) => {
					commit('setState', {
						key: 'serviceData',
						val: res.data,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		},
		fetchPortfolio({ commit }) {
			axios('portfolio')
				.then((res) => {
					commit('setState', {
						key: 'portfolio',
						val: res.data,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		},
		fetchPortfolioInner({ commit }, { id }) {
			axios(`portfolio/${id}`)
				.then((res) => {
					commit('setState', {
						key: 'portfolioInner',
						val: res.data,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	modules: {},
});
