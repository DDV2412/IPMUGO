import { mount } from '@vue/test-utils'
import IpmugoLogo from '@/components/IpmugoLogo.vue'

describe('IpmugoLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IpmugoLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
