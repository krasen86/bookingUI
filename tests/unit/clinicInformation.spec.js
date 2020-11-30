import {shallowMount} from "@vue/test-utils";
import ClinicInformation from "@/components/ClinicInformation";

const clinicInformation = {
    "owner": "Test Owner",
    "address": "Test Address",
    "city": "Test City"
}
describe('ClinicInformation.vue', () => {

    it('Renders clinic information', () => {
        const wrapper = shallowMount(ClinicInformation, {
            propsData:  {
                clinicInformation: clinicInformation
            }
        })
        expect(wrapper.exists()).toBe(true);
    })
})