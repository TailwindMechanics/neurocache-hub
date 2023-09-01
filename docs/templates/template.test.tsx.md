
```tsx
// Import necessary modules
import { render, screen } from '@testing-library/react';
import Component from './Component';
import React from 'react';

// Start describing the test suite
describe('Component', () => {
    // Test for initial rendering
    it('renders without crashing', () => {
        render(<Component />);
        // Use 'getBy' methods when the element you're looking for 
        // is expected to be in the document.
        // If it isn't, the test will fail.
        expect(screen.getByText('Expected text')).toBeInTheDocument();
    });

    // Test for the presence of a specific class in an element
    it('has correct styles', () => {
        render(<Component />);
        const element = screen.getByText('Expected text');
        // 'toHaveClass' will check if the element has a specific class.
        // You can check for multiple classes by passing them as separate arguments.
        expect(element).toHaveClass('expected-class-1', 'expected-class-2');
    });

    // Test for the absence of a specific class in an element
    it('does not have incorrect styles', () => {
        render(<Component />);
        const element = screen.getByText('Expected text');
        // 'not.toHaveClass' will check that the element does not have a specific class.
        expect(element).not.toHaveClass('unexpected-class');
    });

    // Test for specific inline styles
    it('has correct inline styles', () => {
        render(<Component />);
        const element = screen.getByText('Expected text');
        // 'toHaveStyle' will check if the element has the specified inline styles.
        expect(element).toHaveStyle(`color: expected-color`);
    });
});
```