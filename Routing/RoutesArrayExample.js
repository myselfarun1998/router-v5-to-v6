import React from 'react';
import { Route,NavLink,Redirect } from "react-router-dom";

import Login, {fakeAuth} from './Login'
import HomePage from './HomePage'
import Products from './Products'
import Admin from './Admin'
import AboutUs from './AboutUs'
import PrivateRoute from './PrivateRoute'

const RoutesArrayExample = () => {
  const routes = [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/",
      exact: true,
      component: HomePage
    },
    {
      path: "/products",
      component: Products
    },
    {	
      routename: PrivateRoute,
      path: "/admin",
      component: Admin
    },
    {	
      path: "/aboutus",
      component: AboutUs
    },
    {
      redirect: "/"
    }
  ];

  const routeComponents = routes.map((route, index) => 
    {
      if (route.routename) {
        const CompName = route.routename;
        return (<CompName path={route.path} component={route.component} key={index} /> )
      }
      if (route.redirect) {
        return (<Route key={index}> <Redirect to={route.redirect} /> </Route>)
      }
      if (route.exact === true) {
        console.dir('route exact true: ' + route.exact)
        return (<Route exact path={route.path} component={route.component} key={index} />)
      }
      if (route.path) {
        return (<Route path={route.path} component={route.component} key={index} />)
      }
      return null;
    }
  )
  

    return (
    <div>
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li>
              <NavLink to="/login" activeStyle={{color:'blue'}}> {fakeAuth.isAuthenticated === false?'Login':'Logout'}</NavLink>
            </li>
            <li>
              <NavLink to="/" exact activeStyle={{color:'blue'}}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/products" activeStyle={{color:'blue'}}>Products</NavLink>
            </li>
            <li>
              <NavLink to="/admin" activeStyle={{color:'blue'}}>Admin</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" activeStyle={{color:'blue'}}>About Us</NavLink>
            </li>
          </ul>
        </nav>
        {routeComponents}
    </div>
    
    
   

    );
}

export default RoutesArrayExample;