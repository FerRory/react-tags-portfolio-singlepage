import React, { Component } from 'react';
import { tags } from './data/Tags';
import { links } from './data/Links';
import { text } from './data/Text';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tagText: text.defaultTagText,
    }
    this.renderTag = this.renderTag.bind(this);
  }

  renderTag(tag, tagId) {
    return (
      <li className="tag" key={tagId} onClick={() => { this.setState({ tagText: tag.text }) }}>
        #{tag.tag}
      </li>
    )
  }
  
  renderLink(link, linkId) {
    return (
      <li className="Link" key={linkId}>
        <a target="_blank" rel="noopener noreferrer" href={link.url}>{link.name}</a>
      </li>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{text.title}</h1>
        </header>
        <div className="Light-Row">
          <ul>{tags.map(this.renderTag)}</ul>
        </div>
        <div className="Dark-Row">
          <p>{this.state.tagText}</p>
        </div>
        <div className="Light-Row">
          <p>{text.contact}</p>
        </div>
        <div className="Dark-Row">
          <ul>{links.map(this.renderLink)}</ul>
        </div>
        <div className="Light-Row">
          <p>{text.extra}</p>
        </div>
        <footer className="App-footer">
          <p>{text.copyright}</p>
        </footer>
      </div>
    );
  }
}

export default App;