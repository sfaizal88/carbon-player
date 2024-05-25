/**
 * 
 * Logo component test cases
 * @author - NA 
 * @date - 25th May, 2024
 * 
 */
// GENERIC IMPORT
import {act} from 'react';
import {render, screen} from '@testing-library/react';

// COMPONENT 
import Logo from '.';

describe('Logo component', () => {
    it("should render logo name correctly", () => {
        act(() => {render(<Logo/>)});
        expect(screen.getByTestId("logo-id").textContent).toBe("Pomodoro Timer");
    });
});