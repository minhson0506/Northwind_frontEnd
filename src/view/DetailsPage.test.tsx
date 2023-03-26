import { render, screen } from '@testing-library/react';
import { DetailsPage } from './DetailsPage';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

describe('DetailsPage', () => {
    it('should render', () => {
        render(<DetailsPage />);
        expect(screen.getByText('No data details')).toBeInTheDocument();
    });
});
