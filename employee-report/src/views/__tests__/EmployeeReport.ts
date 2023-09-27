import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import EmployeeReport from '../EmployeeReport.vue'

describe('EmployeeReport', () => {
  it('renders properly', () => {
    const wrapper = mount(EmployeeReport, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
