import React from 'react';
import AdvancedSearch from './advanced-search';

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isClicked: false,
      data: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAdvancedButton = this.handleAdvancedButton.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    window.location.hash = 'results?search=' + this.state.inputValue;
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleAdvancedButton() {
    this.setState({ isClicked: true });
  }

  render() {
    if (this.state.isClicked) return <AdvancedSearch />;
    return (
      <div className="search-container home">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <label>
            <div className="heading one">Search</div>
            <input placeholder="Search Books" required className="text-box" type="text" name="search" onChange={this.handleChange} />
          </label>
          <input className="button submit" type="submit" value="Submit" />
        </form>
        <a href="#advanced-search" className='button-anchor'>
          <button onClick={this.handleAdvancedButton} className="button advanced-btn">Advanced Search</button>
        </a>
      </div>
    );
  }
}
