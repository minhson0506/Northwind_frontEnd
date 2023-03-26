import { render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
    it('should render', () => {
        render(<SearchBar />);
        expect(screen.getByText('Filter orders by product name')).toBeInTheDocument();
        expect(screen.getByText('Show only shipped orders')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).not.toBeChecked();
        expect(screen.getByRole('textbox')).toHaveValue('');
    });
});
