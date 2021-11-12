import { render, screen } from '@testing-library/react'
import App from '../containers/App'

test('renders App', () => {
  render(<App />)
  const textCard = screen.getByText(/Result/i)
  expect(textCard).toBeInTheDocument()
})
