import { shallowMount } from '@vue/test-utils'
import ConfirmationModal from '@/components/ConfirmationModal'

describe('ConfirmationModal.vue', () => {
    it('Renders Confirmation modal', () => {
        const wrapper = shallowMount(ConfirmationModal)
        expect(wrapper.exists()).toBe(true);
    })
})