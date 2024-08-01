import { render } from '@testing-library/react'
import Label from './index.js'
import { LABEL_VARIANT } from './constants.js'

describe('<Label>', () => {
  it('should render the default component (gray)', () => {
    const { container, getByText } = render(<Label>No variant passed</Label>)

    expect(getByText(/No variant passed/i)).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should render the gray variant component with custom text', () => {
    const { container, getByText } = render(
      <Label variant={LABEL_VARIANT.GRAY}>Label content</Label>
    )

    expect(getByText(/Label content/i)).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should render the red variant component with custom text', () => {
    const { container, getByText } = render(
      <Label variant={LABEL_VARIANT.RED}>Red variant</Label>
    )

    expect(getByText(/Red variant/i)).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
