import React, { Component } from 'react';
import {
  Route,
  NavLink,
  Routes,
  useNavigate,
  Navigate,
  useLocation,
  useParams,
  useMatch,
} from 'react-router-dom';
import Login, { fakeAuth } from './Login';
import HomePage from './HomePage';
import Products from './Products';
import Admin from './Admin';
import AboutUs from './AboutUs';
import PrivateRoute from './PrivateRoute';

function withRouter(Component) {
  function ComponentWithRouterProps(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const match = useMatch(location.pathname);

    return (
      <Component {...props} history={{ location, navigate, params, match }} />
    );
  }
  return ComponentWithRouterProps;
}

class WithRouterExample extends Component {
  componentDidMount() {
    console.log(this.props);
    // will trigger the callback function whenever a new Route renders a component(as long as this component stays mounted as routes change)
    // this.props.history.listen(() => {
    //   // URL
    //   console.log('URL : ', this.props.history.location.pathname);
    // });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li>
              <NavLink
                to="/login"
                style={({ isActive }) => ({ color: isActive ? 'blue' : '' })}
                // activeStyle={{ color: 'blue' }}
              >
                {' '}
                {fakeAuth.isAuthenticated === false ? 'Login' : 'Logout'}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/"
                // exact
                style={({ isActive }) => ({ color: isActive ? 'blue' : '' })}
                // activeStyle={{ color: 'blue' }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                style={({ isActive }) => ({ color: isActive ? 'blue' : '' })}
                // activeStyle={{ color: 'blue' }}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin"
                style={({ isActive }) => ({ color: isActive ? 'blue' : '' })}
                // activeStyle={{ color: 'blue' }}
              >
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                style={({ isActive }) => ({ color: isActive ? 'blue' : '' })}
                // activeStyle={{ color: 'blue' }}
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          {/* <PrivateRoute path="/admin" component={Admin} /> */}
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/aboutus"
            element={<AboutUs />}
            // render={(props) => {
            //   console.log(props);
            //   return <AboutUs {...props} />;
            // }}
          />
          {/* <Route path="*">
            <Navigate to="/" />
          </Route> */}
        </Routes>
      </div>
    );
  }
}

// export default WithRouter(WithRouterExample);
export default withRouter(WithRouterExample);
