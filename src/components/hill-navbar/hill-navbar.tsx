import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hill-navbar',
  styleUrl: 'hill-navbar.scss',
  shadow: true,
})
export class HillNavbar {
  @Prop() bgColor;
  @Prop() homeLinkText: string = 'Kris Hill';
  @Prop() homeLinkUrl: string = '/';
  @Prop() homeLinkImageUrl: string = '../../assets/pexels-emiliano-arano-2127969.jpg';
  @Prop() menuList: Array<string> = ['About', 'Resume', 'Play', 'Blog'];
  @Prop() hasRoundedCorners: boolean = true;
  @Prop() isNightMode: boolean = false;
  homeImg: string = "src\assets\pexels-emiliano-arano-2127969.jpg";
  
  render() {
    return (
      <Host>
        <nav id="hill-navbar">
          <div id="hill-navbar__home">
            <div id="home-img-wrapper">
              <img id="home-img" src={this.homeLinkImageUrl} />
            </div>
            <a id="home-name" href={this.homeLinkUrl}>{this.homeLinkText}</a>
          </div>
          <div id="hill-navbar__list-wrapper">
            <svg id="list-burger" viewBox='0 0 65 40'>
              <line x1="0" y1="0" x2="65" y2="0" stroke="black"></line>
              <line x1="0" y1="18" x2="65" y2="18" stroke="red"></line>
              <line x1="0" y1="36" x2="65" y2="36" stroke="green"></line>
            </svg>
            <ul id="list-menu">
                {this.menuList.map(text => <li class="list-item" id={`hill-navbar__${text.toLowerCase()}`}><a href={`/${text.toLowerCase()}`}>{text}</a></li>)}
            </ul>
          </div>
        </nav>
      </Host>
    );
  }

}
