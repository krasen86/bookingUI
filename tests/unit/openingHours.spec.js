import { shallowMount } from '@vue/test-utils'
import OpeningHours from '@/components/OpeningHours'

const openingHoursMock =  {
    "monday": "9:00-17:00",
    "tuesday": "8:00-17:00",
    "wednesday": "7:00-16:00",
    "thursday": "9:00-17:00",
    "friday": "9:00-15:00"
}

describe('OpeningHours.vue', () => {

    it('Renders weekly openingHours component', () => {
        const wrapper = shallowMount(OpeningHours, {
            propsData:  {
                openingHours: openingHoursMock
            }
        });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('#hoursMonday').text()).toContain('Monday');
        expect(wrapper.find('#hoursTuesday').text()).toContain('Tuesday');
        expect(wrapper.find('#hoursWednesday').text()).toContain('Wednesday');
        expect(wrapper.find('#hoursThursday').text()).toContain('Thursday');
        expect(wrapper.find('#hoursFriday').text()).toContain('Friday');
        expect(wrapper.find('#hoursSaturday').text()).toContain('Saturday');
        expect(wrapper.find('#hoursSunday').text()).toContain('Sunday');
    })

    it('Should display opening hours',  () => {
        const wrapper = shallowMount(OpeningHours, {
            propsData:  {
                openingHours: openingHoursMock
            }
        });
        expect(wrapper.find('#hoursMonday').text()).toContain(openingHoursMock.monday);
        expect(wrapper.find('#hoursTuesday').text()).toContain(openingHoursMock.tuesday);
        expect(wrapper.find('#hoursWednesday').text()).toContain(openingHoursMock.wednesday);
        expect(wrapper.find('#hoursThursday').text()).toContain(openingHoursMock.thursday);
        expect(wrapper.find('#hoursFriday').text()).toContain(openingHoursMock.friday);
        expect(wrapper.find('#hoursSaturday').text()).toContain('Closed');
        expect(wrapper.find('#hoursSunday').text()).toContain('Closed');
    });

    it('Should display Closed Every day of the week', () => {
        const wrapper = shallowMount(OpeningHours, {
            propsData:  {
                openingHours: {}
            }
        });
        expect(wrapper.find('#hoursMonday').text()).toContain('Closed');
        expect(wrapper.find('#hoursTuesday').text()).toContain('Closed');
        expect(wrapper.find('#hoursWednesday').text()).toContain('Closed');
        expect(wrapper.find('#hoursThursday').text()).toContain('Closed');
        expect(wrapper.find('#hoursFriday').text()).toContain('Closed');
        expect(wrapper.find('#hoursSaturday').text()).toContain('Closed');
        expect(wrapper.find('#hoursSunday').text()).toContain('Closed');
    });

    it('Should display Closed on Tuesday and the weekend', () => {
        openingHoursMock.tuesday = null
        const wrapper = shallowMount(OpeningHours, {
            propsData:  {
                openingHours: openingHoursMock
            }
        });
        expect(wrapper.find('#hoursMonday').text()).toContain(openingHoursMock.monday);
        expect(wrapper.find('#hoursTuesday').text()).toContain('Closed');
        expect(wrapper.find('#hoursWednesday').text()).toContain(openingHoursMock.wednesday);
        expect(wrapper.find('#hoursThursday').text()).toContain(openingHoursMock.thursday);
        expect(wrapper.find('#hoursFriday').text()).toContain(openingHoursMock.friday);
        expect(wrapper.find('#hoursSaturday').text()).toContain('Closed');
        expect(wrapper.find('#hoursSunday').text()).toContain('Closed');
    });
})
