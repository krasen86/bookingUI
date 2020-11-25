import { shallowMount } from '@vue/test-utils'
import MapSidebar from '@/components/MapSidebar'

const openingHoursMock =  {
    "monday": "9:00-17:00",
    "tuesday": "8:00-17:00",
    "wednesday": "7:00-16:00",
    "thursday": "9:00-17:00",
    "friday": "9:00-15:00"
}
const clinicMock = {
    "id": 1,
    "name": "Your Dentist",
    "owner": "Dan DAn",
    "dentists": 1,
    "address": "Spannmålsgatan 20",
    "city": "Gothenburg",
    "coordinate": {
        "latitude": 11.969388,
        "longitude": 57.707619
    }
}
describe('MapSidebar.vue', () => {

    it('Renders map sidebar', () => {
        const wrapper = shallowMount(MapSidebar, {
            computed: {
                selectedClinic(){
                    return clinicMock;
                },
                openingHours() {
                    return openingHoursMock;
                }
            }
        })
        expect(wrapper.exists()).toBe(true);
    })
})