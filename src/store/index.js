import Vue from 'vue'
import Vuex from 'vuex'

import { dentist } from './dentist.module'
import { selected } from './selected.module'
import {booking} from "./booking.module"
import {availability} from "./availability.module";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        dentist,
        selected,
        booking,
        availability
    }
})
