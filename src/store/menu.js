import store from "@/store/store";
import getMenus from "@/api/getMenus";

store.registerModule("menu", {
  namespaced: true,
  state: {
    navList: 123
  },
  actions: {
    getMenus(context) {
      getMenus.getMenus().then(rsf => {
        context.commit("newMenu", rsf.data.content);
      });
    }
  },
  mutations: {
    newMenu(state, newMenu) {
      state.navList = newMenu;
    }
  }
});
