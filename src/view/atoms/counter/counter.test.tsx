/**
 * 
 * Counter component test cases
 * @author - NA 
 * @date - 25th May, 2024
 * 
 */
// GENERIC IMPORT
import {act} from 'react';
import {render, screen} from '@testing-library/react';

// COMPONENT 
import Counter from './';

describe('Counter component', () => {
    it("should render label and count value correctly", () => {
        const label = "No. Work";
        const count = 3;
        act(() => {
            render(<Counter label={label} count={count} />);
        });

        expect(screen.getByTestId("counter-label-id").textContent).toBe(label);
        expect(screen.getByTestId("counter-count-id").textContent).toBe(count.toString());
    })
});