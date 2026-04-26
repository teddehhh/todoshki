import { AuthProvider } from "./providers/auth-provider/ui/auth-provider";
import { AppRouterProvider } from "./providers/router-provider/ui/router-provider";
import { ThemeProvider } from "./providers/theme-provider/ui/theme-provider";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppRouterProvider />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
