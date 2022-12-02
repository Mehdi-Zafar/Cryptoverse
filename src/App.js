import { ThemeProvider, createTheme } from '@mui/material/styles';
import {router} from './Routes/Routes'
import {RouterProvider} from "react-router-dom";


function App() {

  

  const Theme = createTheme({
    typography: {
     "fontFamily": `"Open Sans", sans-serif`,
    }
 });


  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
