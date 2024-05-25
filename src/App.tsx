/**
 * 
 * App component
 * @author - NA 
 * @date - 24th May, 2024
 * 
 */
// GENERIC IMPORT
import {ChakraBaseProvider, theme} from '@chakra-ui/react';
import {Provider} from 'react-redux';

// COMPONENTS
import ClockPage from './view/pages/clock';

// REDUX
import { store } from './redux/store';

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Provider store={store}>
        <ClockPage/>
      </Provider>
    </ChakraBaseProvider>
  );
}

export default App;
