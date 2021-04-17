import React from 'react';
import parseRoute from './lib/parse-route';
import SearchPage from './pages/search-page';
import AdvancedSearch from './pages/advanced-search';
import AppDrawer from './components/appdrawer';
import Results from './pages/results';
import AppContext from './lib/app-context';
import PageContainer from './components/page-container';
import Details from './pages/details';
import Library from './pages/library';
import ReadingList from './pages/reading-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuthorizing: true,
      route: parseRoute(window.location.hash),
      data: null
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: parseRoute(window.location.hash) });
    }
    );
    // const token = window.localStorage.getItem('react-context-jwt');
    // const user = token ? decodeToken(token) : null;
    // this.setState({ user, isAuthorizing: false });
  }

  handleSignIn(result) {
    const { user, token } = result;
    window.localStorage.setItem('react-context-jwt', token);
    this.setState({ user });
  }

  handleSignOut() {
    window.localStorage.removeItem('react-context-jwt');
    this.setState({ user: null });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === 'search-page' || route.path === '') {
      return <SearchPage />;
    }
    if (route.path === 'advanced-search') {
      return <AdvancedSearch />;
    }
    if (route.path === 'results') {
      return <Results />;
    }
    if (route.path === 'details') {
      return <Details />;
    }
    if (route.path === 'library') {
      return <Library />;
    }
    if (route.path === 'reading-list') {
      return <ReadingList />;
    }
  }

  render() {
    // if (this.state.isAuthorizing) return null;
    const { user, route } = this.state;
    const { handleSignIn, handleSignOut } = this;
    const contextValue = { user, route, handleSignIn, handleSignOut };
    return (
      <AppContext.Provider value={contextValue}>
        <>
          <AppDrawer />
          <PageContainer>
            {this.renderPage()}
          </PageContainer>
        </>
      </AppContext.Provider>
    );
  }
}
App.contextType = AppContext;
