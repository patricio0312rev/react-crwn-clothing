import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Auth from './pages/auth/auth.component';

import Header from './components/header/header.component';


import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {
  // unsubscribeFromAuth = null;

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  /* componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
    /* 
    const { setCurrentUser } = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    }, (error) => console.log(error)); 
    
  }*/

  /*componentWillUnmount() {
    this.unsubscribeFromAuth();
  }*/


  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/sign-in" render={() => currentUser ? (<Redirect to='/'/>) : (<Auth/>)} />
      </Switch>
    </div>
  );
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
  /*
  setCurrentUser: user => dispatch(setCurrentUser(user))

  export default connect(mapStateToProps, mapDispatchToProps)(App);
  */
});

export default connect(mapStateToProps, mapDispatchToProps)(App);