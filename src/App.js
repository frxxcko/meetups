import { Route, Switch } from 'react-router-dom';

import AllMeetUps from './pages/AllMeetups'
import Favorites from './pages/Favorites'
import NewMeetUp from './pages/NewMeetup'

import Layout from './components/layout/Layout';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetUps />
        </Route>

        <Route path='/new-meetup'>
          <NewMeetUp />
        </Route>

        <Route path='/favorites'>
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
