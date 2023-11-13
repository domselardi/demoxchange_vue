import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CurrencySelectorCpt from '../CurrencySelectorCpt.vue'

describe('CurrencySelectorCpt', () => {
  it('renders properly', () => {
    const wrapper = mount(CurrencySelectorCpt, { props: { labelText: 'fromCurrency' } })
    expect(wrapper.text()).toContain('fromCurrency')
  })
})
