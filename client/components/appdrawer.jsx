import React from 'react';
import AppContext from '../lib/app-context';

export default class AppDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClicked: false
    };
  }

  handleMessage() {
    const { user } = this.context;
    if (!user) {
      return (
        <div className='sub-heading'>Please Sign In</div>
      );
    } else {
      const { username } = user;
      const userName = username.charAt(0).toUpperCase() + username.slice(1);
      return (
        <div className='sub-heading'>Welcome, <span className='user-name'>{userName}</span>!</div>
      );
    }
  }

  handleClick() {
    const isClicked = this.state.isClicked;
    if (!isClicked) {
      this.setState({ isClicked: true });
    } else {
      this.setState({ isClicked: false });

    }
  }

  hideButton() {
    const isClicked = this.state.isClicked;
    if (!isClicked) {
      return 'icon';
    } else {
      return 'button hidden';
    }
  }

  hideModal() {
    const isClicked = this.state.isClicked;
    if (!isClicked) {
      return 'modal-hidden';
    } else {
      return 'modal';
    }
  }

  hideMenu() {
    const isClicked = this.state.isClicked;
    if (!isClicked) {
      return 'menu hidden';
    } else {
      return 'menu';
    }
  }

  overlay() {
    const isClicked = this.state.isClicked;
    if (!isClicked) {
      return 'menu-icon';
    } else {
      return 'overlay';
    }
  }

  render() {
    const buttonClass = this.hideButton();
    const modalClass = this.hideModal();
    const nonModalClass = this.overlay();
    const { user, handleSignOut } = this.context;
    return (
      <div className={nonModalClass} onClick={this.handleClick}>
        <a className={buttonClass} onClick={this.handleClick}><i className="fas fa-bars fa-3x"></i></a>
        <div className="modal-container">
          <div className={modalClass} onClick={this.handleClick}>
            <div className={this.hideMenu()}>
              <div className='menu-heading-container'>
                <div className="sign-menu-container">

                  <div className='sign-in-heading'>
                    {this.handleMessage()}
                  </div>

                </div>
                <div className="menu-heading">Menu</div>
              </div>
              <div className="menu-list">
                <a href="#search-page">
                  <div className="menu-item">Search</div>
                </a>
                <a href="#library">
                  <div className="menu-item">Library</div>
                </a>
                <a href="#reading-list">
                  <div className="menu-item">Reading List</div>
                </a>
              </div>
              <div className='sign-in-button-container'>
                {user !== null &&
                  <a href='' >
                    <button className="sign-button" onClick={handleSignOut}>Sign out</button>
                  </a>
                }
                {user === null &&
                  <>
                    <a href="#sign-in">
                      <button className='sign-button'>  Sign In</button>
                    </a>
                    <a href="#sign-up" >
                      <button className="sign-button">Sign Up</button>
                    </a>
                  </>
                }
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
AppDrawer.contextType = AppContext;
