import { shallowMount } from '@vue/test-utils'
import BookingModal from '@/components/BookingModal'
import { ValidationObserver } from 'vee-validate'

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
describe('BookingModal.vue', () => {
    it('Renders booking modal', () => {
        const wrapper = shallowMount(BookingModal, {
            computed: {
                selectedClinic() {
                    return clinicMock;
                }
            },
            components: {
                ValidationObserver
            },
        })
        expect(wrapper.exists()).toBe(true);
    })
})
