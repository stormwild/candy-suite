import {
  createTheme,
  CssBaseline,
  darkScrollbar,
  ThemeProvider,
} from '@mui/material'
import { useMemo, useState } from 'react'
import { ColorModeContext } from './color-mode-context.tsx'
import App from './app.tsx'

type ColorMode = 'light' | 'dark'

export const Root = () => {
  const [mode, setMode] = useState<ColorMode>('dark')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((mode) => (mode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: (themeParam) => ({
              body: themeParam.palette.mode === 'dark' ? darkScrollbar() : null,
            }),
          },
        },
      }),
    [mode]
  )

  console.log('theme.palette.mode', theme.palette.mode)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default Root

//     (localStorage.getItem('color-mode') as ColorMode) ??
// const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
// prefersDarkMode ? 'dark' : 'light'
