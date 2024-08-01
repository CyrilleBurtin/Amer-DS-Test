import Label from './index.js';
import { render } from '@testing-library/react';
import { LABEL_VARIANT } from './constants.js';

describe('<Label>', () => {
  it('should render the default component (gray)', () => {
    const { container, getByText } = render(<Label>No variant passed</Label>);

    expect(container.firstChild).toHaveClass('--gray');
    expect(getByText(/No variant passed/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render the gray variant component with custom text', () => {
    const { container, getByText } = render(
      <Label variant={LABEL_VARIANT.GRAY}>Label content</Label>
    );
    expect(container.firstChild).toHaveClass('--gray');
    expect(getByText(/Label content/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render the red variant component with custom text', () => {
    const { container, getByText } = render(
      <Label variant={LABEL_VARIANT.RED}>Red variant</Label>
    );
    expect(container.firstChild).toHaveClass('--red');
    expect(getByText(/Red variant/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
