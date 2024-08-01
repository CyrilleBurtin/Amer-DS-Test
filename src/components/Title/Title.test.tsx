import { render } from '@testing-library/react';
import Title from './index.js';
import { TITLE_VARIANT } from './constants';

describe('<Title>', () => {
  it('should render the default component with custom text', () => {
    const { container, getByText } = render(
      <Title is="h2" variant={TITLE_VARIANT.RED}>
        Custom Title
      </Title>
    );

    expect(container.firstChild).toHaveClass('slm-title');
    expect(getByText(/Custom title/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render the default component with custom text and custom class', () => {
    const { container, getByText } = render(
      <Title is="h1" className="p-4">
        Custom title
      </Title>
    );

    expect(container.firstChild).toHaveClass('slm-title p-4');
    expect(getByText(/Custom title/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
