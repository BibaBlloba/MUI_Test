import { useContext } from "react"
import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, IconButton, ThemeProvider } from "@mui/material"
import SidebarPro from "./components/SidebarPro"

function App() {

  const [theme, colorMode] = useMode()
  const setColorMode = useContext(ColorModeContext)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='flex flex-row'>
          <SidebarPro />
          <main className="flex h-screen">
            <IconButton onClick={colorMode.toggleColorMode}>aa</IconButton>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
