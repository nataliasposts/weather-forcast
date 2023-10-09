import { Routes, Route } from 'react-router-dom';
import MainPage from 'src/pages/MainPage/MainPage';
import RoutingPath from './routing';

const RootRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutingPath.DefaultPage} element={<MainPage />} />
    </Routes>
  );
};

export default RootRouter;
