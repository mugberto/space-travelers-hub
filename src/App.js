import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import MyProfile from './components/myProfile/MyProfile';
import logo from './assets/planet.svg';
import Missions from './components/mission/Missions';
import Rockets from './components/rocket/Rockets';

const routes = [
  {
    path: '/',
    name: 'ROCKETS',
    component: <Rockets />,
  },
  {
    path: '/missions',
    name: 'MISSIONS',
    component: <Missions />,
  },
  {
    path: '/my-profile',
    name: 'My-PROFILE',
    component: <MyProfile />,
  },
];

const App = () => (
  <Router>

    <Header logo={logo} routes={routes} />
    <Switch>
      {routes.map(({ path, component }) => (
        <Route path={path} exact key={path}>{component}</Route>
      ))}
    </Switch>
  </Router>
);

export default App;
