import React from 'react';
import { 
  Switch,
  Route,
} from 'react-router-dom';
import MainSite from '../sites/mainSite';
import Notfound from '../sites/notfound';
import SecondSite from '../sites/secondSite';
import ThirdSite from '../sites/thirdSite';

type MainRouterProps = {

}

const MainRouter: React.FC<MainRouterProps> = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainSite} />
      <Route exact path='/second' component={SecondSite} />
      <Route exact path='/third' component={ThirdSite} />
      <Route component={Notfound} />
    </Switch>
  )
}

export default MainRouter;
