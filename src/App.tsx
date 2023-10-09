import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import RootRouter from './routes/RootRouter';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <MainLayout>
            <RootRouter />
            <ToastContainer />
          </MainLayout>
        </Provider>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
