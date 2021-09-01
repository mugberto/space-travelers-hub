import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import MyProfile from './components/myProfile/MyProfile';
import logo from './assets/planet.svg';
import Missions from './components/mission/Missions';
import Rockets from './components/rocket/Rockets';
import store from './redux/configStore';

const routes = [
  {
    path: '/',
    name: 'Rockets',
    component: <Rockets />,
  },
  {
    path: '/missions',
    name: 'Missions',
    component: <Missions />,
  },
  {
    path: '/my-profile',
    name: 'My Profile',
    component: <MyProfile />,
  },
];

const App = () => (
  <Provider store={store}>
    <Router>
      <Header logo={logo} routes={routes} />
      <Switch>
        {routes.map(({ path, component }) => (
          <Route path={path} exact key={path}>{component}</Route>
        ))}
      </Switch>
    </Router>
  </Provider>
);

export default App;
