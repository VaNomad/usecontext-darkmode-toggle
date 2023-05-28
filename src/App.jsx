import Context from "./context/Context";
import { ThemeProvider } from "./context/ThemeContext";

function App() {

  return (
    <ThemeProvider>
      <Context />
    </ThemeProvider>
  )
}

export default App
