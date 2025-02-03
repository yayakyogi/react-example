import { ThemeProvider } from "./theme";
import ThemeSwitcher from "./switcher";

const ExampleUseContext = () => {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      {/*  */}
    </ThemeProvider>
  );
};

export default ExampleUseContext;
