import React, { Component } from 'react';
import { tags } from './Tags';
import { links } from './Links';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tagText: "Hit a #Tag!",
      showLinks: true
    }
    this.renderTag = this.renderTag.bind(this);
  }

  renderTag(tag, tagId) {
    return (
      <div className="tag" key={tagId} onClick={() => { this.setState({ tagText: tag.text }) }}>
        #{tag.tag}
      </div>
    )
  }
  renderLink(link, linkId) {
    return (
      <div className="Link" key={linkId}>
        <a target="_blank" href={link.url}>{link.name}</a>
      </div>
    )
  }

  renderLinks() {
    if (this.state.showLinks) {
      return (<div className="Links">{links.map(this.renderLink)} </div>);
    }
    else {
      return "";
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Rory (FerRory)</h1>
        </header>

        <div className="Tag-Cloud-Row">
          {tags.map(this.renderTag)}
        </div>
        <div className="Tag-Desc-Row">
          <p className="text">{this.state.tagText}</p>
        </div>
        <div className="Contact-Row">
        <p className="text">Contact: Rory @ FerRory .NET</p>
        </div>
        <div className="Links-Row">
          {this.renderLinks()}
        </div>

        <footer className="App-footer">
          <div className="Copyright">
            FerRory Networks ©2018
            </div>
        </footer>
      </div>
    );
  }
}

export default App;
