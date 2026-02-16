import { AppRouterProvider } from "./providers/router-provider/ui/router-provider";
import { ThemeProvider } from "./providers/theme-provider/ui/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <AppRouterProvider />
    </ThemeProvider>
  );
}

export default App;
