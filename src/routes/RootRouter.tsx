import { Routes, Route } from 'react-router-dom';
import RoutingPath from './routing';
import MainLayout from 'src/layouts/MainLayout';

const RootRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutingPath.DefaultPage} element={<MainLayout />} />
    </Routes>
  );
};

export default RootRouter;
