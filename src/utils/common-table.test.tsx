import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CommonTable } from './common-table';
import { BeerType } from '../types/beer_type';
import { COLUMNS_BEER } from './constants';

const MOCK_BEERS: BeerType[] = [
  {
    id: '1',
    name: 'Buzz',
    brand: 'BrewDog',
    image: '/images/buzz.jpg',
    style: 'IPA',
    abv: '4.5',
    price: '5',
    description: 'A light, crisp and bitter IPA.',
    tagline: 'A Real Bitter Experience!',
    tips: 'Pair with spicy food',
    attenuation: '75',
    rating: '4',
  },
  {
    id: '2',
    name: 'Storm',
    brand: 'BrewDog',
    image: '/images/storm.jpg',
    style: 'Stout',
    abv: '5.0',
    price: '8',
    description: 'A strong, dark stout.',
    tagline: 'Bold and Dark',
    tips: 'Enjoy with dessert',
    attenuation: '80',
    rating: '5',
  },
  {
    id: '3',
    name: 'Amber',
    brand: 'BrewDog',
    image: '/images/amber.jpg',
    style: 'Amber Ale',
    abv: '4.8',
    price: '7',
    description: 'Smooth and malty with caramel notes.',
    tagline: 'Rich and Smooth',
    tips: 'Great with grilled meat',
    attenuation: '78',
    rating: '3',
  },
];

const onEditMock = jest.fn();
const onDeleteMock = jest.fn();

describe('CommonTable Component with BeerType Data', () => {
  beforeEach(() => {
    onEditMock.mockClear();
    onDeleteMock.mockClear();
  });

  it('renders table headers and rows with beer data correctly', () => {
    render(
      <CommonTable
        columns={COLUMNS_BEER}
        data={MOCK_BEERS}
        onEdit={onEditMock}
        onDelete={onDeleteMock}
      />
    );

    // Check headers
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Brand')).toBeInTheDocument();
    expect(screen.getByText('Style')).toBeInTheDocument();
    expect(screen.getByText('ABV')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();

    // Check data rows
    expect(screen.getByText('Buzz')).toBeInTheDocument();
    expect(screen.getByText('IPA')).toBeInTheDocument();
    expect(screen.getByText('4.5')).toBeInTheDocument();
  });

  it('displays only a limited number of items per page', () => {
    render(
      <CommonTable
        columns={COLUMNS_BEER}
        data={MOCK_BEERS}
        onEdit={onEditMock}
        onDelete={onDeleteMock}
      />
    );

    // Check that only up to 7 items are displayed per page (7 is set as a item per page in pagination)
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(4); // 1 header row + 3 data rows (for MOCK_BEERS)
  });

  it('navigates to the next page', () => {
    const mockLargeData = Array.from({ length: 15 }, (_, i) => ({
      ...MOCK_BEERS[i % 3],
      id: i.toString(),
    }));

    render(
      <CommonTable
        columns={COLUMNS_BEER}
        data={mockLargeData}
        onEdit={onEditMock}
        onDelete={onDeleteMock}
      />
    );

    // Check initial pagination display
    expect(screen.getByText('Page 1 of 3')).toBeInTheDocument();

    // Navigate to the next page
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    expect(screen.getByText('Page 2 of 3')).toBeInTheDocument();
  });

  it('calls onEdit when the Edit button is clicked', () => {
    render(
      <CommonTable
        columns={COLUMNS_BEER}
        data={MOCK_BEERS}
        onEdit={onEditMock}
        onDelete={onDeleteMock}
      />
    );

    // Click the Edit button for the first row
    const editButton = screen.getAllByText('Edit')[0];
    fireEvent.click(editButton);

    // Check that onEdit was called with the correct item
    expect(onEditMock).toHaveBeenCalledWith(MOCK_BEERS[0]);
  });

  it('calls onDelete when the Delete button is clicked', () => {
    render(
      <CommonTable
        columns={COLUMNS_BEER}
        data={MOCK_BEERS}
        onEdit={onEditMock}
        onDelete={onDeleteMock}
      />
    );

    // Click the Delete button for the first row
    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);

    // Check that onDelete was called with the correct item
    expect(onDeleteMock).toHaveBeenCalledWith(MOCK_BEERS[0]);
  });
});
