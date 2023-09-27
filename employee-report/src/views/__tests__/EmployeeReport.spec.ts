import {describe, expect, it} from 'vitest'
import EmployeeReport from '../EmployeeReport.vue'
import {render, screen} from "@testing-library/vue";

describe('EmployeeReport', () => {
    it('renders properly', () => {
        render(EmployeeReport);
        screen.getByText('Max');
        screen.getByText('Sepp');
        screen.getByText('Nina');
        screen.getByText('Mike');
        expect(screen.getByTestId('employee-table').getElementsByTagName('tbody')[0]
            .getElementsByTagName('tr')).toHaveLength(4);
    });

    it('should display getAllowedToWorkOnSundayEmployees button when component is rendered', () => {
        render(EmployeeReport);
        screen.getByText('Embauchable le dimanche');
    });
    it('should display list of employee who can work on sunday when I click on "Embauchable le dimanche" button', () => {
        render(EmployeeReport);

        screen.getByText('Embauchable le dimanche').click()

        screen.getByText('Sepp');
        screen.getByText('Mike');
        expect(screen.getByTestId('employee-table').getElementsByTagName('tbody')[0]
            .getElementsByTagName('tr')).toHaveLength(2);
    });
});
