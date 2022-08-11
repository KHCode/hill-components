import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hill-card',
  styleUrl: 'hill-card.css',
  shadow: true,
})
export class HillCard {

  render() {
    return (
      <Host>
        <div id="hill-card">
          <div id="card-main">            
            <div id="card-banner">
              <div id="card-avatar">
                <img id="avatar-image" src="https://picsum.photos/200"></img>
              </div>
              <div id="card-title">Lumavate</div>
            </div>
            <div id="card-text"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>
            <div id="card-list">
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              </ul>
            </div>
          </div>
          <div id="card-bonus">
            <ul>
              <li>Javascript</li>
              <li>Jira</li>
              <li>Linux</li>
              <li>Github</li>
              <li>Python</li>
              <li>HTML</li>
              <li>StencilJS</li>
              <li>Sass</li>
            </ul>
          </div>
        </div>
      </Host>
    );
  }

}
