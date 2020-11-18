import Vue from 'vue'
import App from '@/App.vue'
import router from './router.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Subscriber from './services/subsriber'
import BrokerListener from './services/brokerListener'
import {mqttVariables} from "@/config/mqttVariables";

Vue.use(BootstrapVue)

const subscriber = new Subscriber();
const brokerListener = new BrokerListener();
subscriber.connectToBroker();
subscriber.subscribeToTopic(mqttVariables.DENTISTTOPIC);
brokerListener.listenForMessage();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

