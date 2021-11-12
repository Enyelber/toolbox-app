import { render, screen } from '@testing-library/react'
import Button from '../components/utils/Button'

test('Tests to Check to render a component', () => {
  render(<Button />)
  const button = screen.getByText(/Send/i)
  expect(button).toBeInTheDocument()
})
