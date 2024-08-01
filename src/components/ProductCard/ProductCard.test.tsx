import { render, screen } from '@testing-library/react';
import ProductCard from './';
import { describe } from 'vitest';

describe('<ProductCard>', () => {
  const mockProduct = {
    id: '12345ABD',
    img: 'image/test.jpeg',
    title: 'Ski de rando',
    description: 'Pour les skieur confirmés',
    time: 10,
    label: 'Promo'
  };

  it('should render the component with all props', () => {
    render(<ProductCard {...mockProduct} />);

    const img = screen.getByAltText(mockProduct.description);
    expect(img).toHaveAttribute('src', mockProduct.img);

    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent(mockProduct.title);

    const description = screen.getByText(mockProduct.description);
    expect(description).toBeInTheDocument();

    const time = screen.getByText(`${mockProduct.time} min`);
    expect(time).toBeInTheDocument();

    const label = screen.getByText(mockProduct.label);
    expect(label).toBeInTheDocument();
  });

  it('should render the component and create a snapshot', () => {
    const { container } = render(<ProductCard {...mockProduct} />);

    expect(container).toMatchSnapshot();
  });
});
