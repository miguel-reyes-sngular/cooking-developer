import { createContext } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = props => {
  const { children } = props

  return (
    <ThemeContext.Provider value={{ color: 'blue' }}>
      {children}
    </ThemeContext.Provider>
  )
}