import { useEffect, useState } from 'react'
import candySuiteLogo from '/candy-suite-logo.svg'
import { Box, SnackbarCloseReason, Typography } from '@mui/material'
import { Snackbar, Alert } from '@mui/material'
import ThemeToggle from './components/theme-toggle'

type Message = { title: string; url: string }

type HandlerType = (params: Message) => void

const displayTitle = (callback: HandlerType) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id as number,
      { action: 'getTitle' },
      callback
    )
  })
}

const copyToClipboard = (text: string, callback: (open: boolean) => void) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log('Text copied to clipboard')
      showSnackbar(callback)
    })
    .catch((err) => {
      console.error('Failed to copy text: ', err)
    })
}

const showSnackbar = (callback: (open: boolean) => void) => {
  callback(true)
}

function App() {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const [open, setOpen] = useState(false)

  // Is there another hook I could use when the page is first mounted?
  useEffect(() => {
    // Code to run when the component is first mounted
    console.log('Component mounted')

    displayTitle(({ title, url }) => {
      setTitle(title)
      setUrl(url)
    })

    // Optional: Cleanup function to run when the component is unmounted
    return () => {
      console.log('Component unmounted')
    }
  }, [])

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
      <p>Title: {title}</p>
      <p>Url: {url}</p>
      <Box>
        <Typography component='pre'>
          <Typography
            component='code'
            onClick={() => copyToClipboard(`[${title}](${url})`, setOpen)}
          >
            [{title}]({url})
          </Typography>
        </Typography>
      </Box>
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
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={(
          _event?: Event | React.SyntheticEvent,
          reason?: SnackbarCloseReason
        ) => {
          if (reason === 'clickaway') {
            return
          }
          setOpen(false)
        }}
      >
        <Alert severity='success' sx={{ width: '100%' }}>
          Text copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default App
