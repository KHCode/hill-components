import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hill-card',
  styleUrl: 'hill-card.css',
  shadow: true,
})
export class HillCard {

  moreInfo: HTMLDivElement;
  detailsList: HTMLDivElement;
  detailsOpen: boolean = false;

  handleClick = (event: Event) => {
    event.preventDefault();
    this.detailsOpen = !this.detailsOpen;
    if(this.detailsOpen){
      this.detailsList.classList.remove("close");
      this.detailsList.classList.add("open");
      this.moreInfo.classList.remove("fade-close");
      this.moreInfo.classList.add("fade-open");
    }else{
      this.detailsList.classList.toggle("open");
      this.detailsList.classList.toggle("close");
      this.moreInfo.classList.toggle("fade-open");
      this.moreInfo.classList.toggle("fade-close");
    }
  }

  

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
            <div id="card-list" ref={el => this.detailsList = el as HTMLDivElement}>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              </ul>
            </div>
            <div id="card-more" onClick={this.handleClick} ref={el => this.moreInfo = el as HTMLDivElement}><img src="./assets/iconmonstr-caret-down-lined.svg"></img></div>
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
