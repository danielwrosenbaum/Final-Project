import React from 'react';
import Redirect from '../components/redirect';
import AuthForm from '../components/auth-form';
import AppContext from '../lib/app-context';

export default class AuthPage extends React.Component {
  render() {

    const { user, route, handleSignIn } = this.context;

    if (user) return <Redirect to="" />;

    const weclomeMessage = (
      (route.path === 'sign-in')
        ? 'Please sign in to continue'
        : 'Create an account to get started!'
    );
    return (
      <div className="sign-in-page">
        {/* <img className='sign-in-page-img' src="https://www.detroitlabs.com/wp-content/uploads/2018/02/alfons-morales-YLSwjSy7stw-unsplash.jpg" alt="books"></img> */}
        <div className="sign-in-container">
          <div className="title">
            <div className="title-heading one-blue">
              Book Shelf
            </div>
          </div>
          <div className='sign-in-box sub-col'>
            <div className="heading three">{weclomeMessage}</div>
            <div className="sub-col">
              <AuthForm
                key={route.path}
                action={route.path}
                onSignIn={handleSignIn} />
            </div>
          </div>

        </div>
      </div>
    );
  }
}
AuthPage.contextType = AppContext;