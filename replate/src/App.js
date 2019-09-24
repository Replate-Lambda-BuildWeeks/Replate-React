import React from 'react';
import { Route } from 'react-router-dom';
// import Private from './components/PrivateRoute';
import Login from './components/Login';

import './App.css';
import Home from './pages/Home';

/**
 *Step 1. Add all Dependecies, react-router-dom, and axios, formik, and wrap your index.js inside Router tags.
 *Step 2. create your links and your routes to the pages you need
  Step 3. create the components that you need for the Routes
  Step 4. create your axios instance file and function and export the function.
  Step 5. make sure your login page form is created and your form is wired up correctly, to create your login page. 
  Step 6. make sure you import your axios library into your login file and also your axios instance function.
  Step 7. The onSubmit function needs to be created and, you must make your axios call inside that function with a post, make sure you also pass the user credentials from state, or with formik the values prop and formikBag prop. 
  Step 8. Make sure you console.log your promise response and also the err from catch()
  Step 9. After you review your response is a success, set the toke into local storage with ('token', res.data....) when we click submit a token should now be stored in LS

  *************************************************************************************
  Step 10. Now we must set a redirect to the protected page when the token is confirmed by the server on submit inside the onSubmit function, we do this by using the props.history.push('/whatever page you want to redirect to') with formik it is using the formikBag prop inside the handleSubmit props, then insid the function you write formikBag.props.history.push('/whatever page you want to redirect to');

  Step 11. Now you must make the protected page a actual protected page by creating a private route, you do that by first creating a PrivateRoute.js file.

  Step 12. Import a PrivateRoute component into your App.js file or the file that is holding your Routes, then you change the route that is rendering your protected page component to show PrivateRoute, so any one of the pages that should be private will now render <PrivateRoute  path="/protected page" component={ProtectedPage}/>

  Step 13. Now create the PrivateRoute Component inside your app
  Step 14. Import Route from react-router-dom into this PrivateRoute component, and the Redirect Router. 
  step 15. Now we are going to do a conditional check inside this Private Route checking if the token is there and if it is return the protected page component.  And if it's not we <Redirect to="the page we want"/> the user back to the login or home page. We check if the token is there by checking local storage with the getItem('token') method.

  *************************************************************************************
  Step 16. Now once you are able to gain access to your private page you might need to use that token to fetch additional data from inside that protected page. This happens with an authenticator. An Authenticator is a function that is checking the token and running the next process or sending an error back. It basically intercepts the process to happening and has the power to do something else with the data flowing through or continues the process as normal. That is called a middleware.
  
  Step 17. making a get request with your Header, this is just using your axios instance you created and doing a regular get request for data from your protected page. Your header inside your dev tools will house the token used to authorize your ability to get that data. The data should return status 200 along with the data structure. 

 */

function App() {
  return (
    <div className="App">
      <Home />
      <Route exact path="/login" render={props => <Login {...props} />} />
      {/* <Route path="/sign-up" render={props => <RegisterPage {...props} />} /> */}
      {/* <PrivateRoute
        exact
        path="/business-dashboard"
        component={BusinessDashboard}
      /> */}

      {/* <PrivateRoute
        exact
        path="/volunteer-dashboard"
        component={VolunteerDashboard}
      /> */}
    </div>
  );
}

export default App;
