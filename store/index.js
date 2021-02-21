import Vuex from "vuex";
import offices from '@/data/offices.json'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedOffices: []
    },
    mutations: {
      setOffices(state, officeList) {
        state.loadedOffices = officeList;
      },
      addOffice(state, office) {
		const max = state.loadedOffices.reduce(function(prev, current) {
			return (prev.id > current.id) ? prev.id : current.id
		})
		office.id = max + 1
        state.loadedOffices.push(office);
      },
      removeOffice(state, office) {
        state.loadedOffices = state.loadedOffices.filter(item => item !== office)
      },
      editOffice(state, office) {
		const index = state.loadedOffices.findIndex(item => item.id === office.id)
        state.loadedOffices.splice(index, 1, office)
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setOffices", offices);
            resolve();
          }, 1000);
        });
      },
      setOffices(vuexContext, officeList) {
        vuexContext.commit("setOffices", ...officeList);
      }
    },
    getters: {
      loadedOffices(state) {
        return state.loadedOffices;
      }
    }
  });
};

export default createStore;
