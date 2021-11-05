import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Echarts from './plugins/echarts'
import '../node_modules/echarts/map/js/china'
import '../node_modules/echarts/map/js/world'

Vue.config.productionTip = false

Vue.use(Echarts);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')