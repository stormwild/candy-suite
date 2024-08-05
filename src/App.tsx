import { useState } from 'react'
import candySuiteLogo from '/candy-suite-logo.svg'
import ThemeToggle from './components/theme-toggle'
import { Box } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <header>
        <a href=''>
          <img src={candySuiteLogo} alt='Candy Suite Logo' />
        </a>
      </header>
      <ThemeToggle />
      <h1>Candy Suite</h1>
      <p>
        <a href='#'>Some link</a>
      </p>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </Box>
  )
}

export default App
