import { useTheme } from '@emotion/react'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { IconButton, Theme } from '@mui/material'
import { useContext } from 'react'
import ColorModeContext from '../color-mode-context'

const ThemeToggle = () => {
  const theme = useTheme() as Theme
  const colorMode = useContext(ColorModeContext)

  return (
    <>
      {theme.palette.mode} mode
      <IconButton
        onClick={() => {
          console.log('toggleColorMode', theme.palette.mode)
          colorMode.toggleColorMode()
        }}
        color='inherit'
      >
        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </>
  )
}

export default ThemeToggle
