import Text from './index.js';
import { render } from '@testing-library/react';

describe('<Text>', () => {
  it('should render the default component with custom text', () => {
    const { container, getByText } = render(<Text>Custom text</Text>);

    expect(container.firstChild).toHaveClass('slm-text');
    expect(getByText(/Custom text/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render the default component with custom text and custom class', () => {
    const { container, getByText } = render(
      <Text className="p-4">Custom text</Text>
    );

    expect(container.firstChild).toHaveClass('slm-text p-4');
    expect(getByText(/Custom text/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
