import { Routes, Route } from 'react-router-dom';
import RoutingPath from './routing';
import MainPage from 'src/pages/MainPage/MainPage';

const RootRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutingPath.DefaultPage} element={<MainPage />} />
    </Routes>
  );
};

export default RootRouter;
