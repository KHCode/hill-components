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
  homeImg: string = "src\assets\pexels-emiliano-arano-2127969.jpg";
  
  render() {
    return (
      <Host>
        <nav id="hill-navbar">
          <div id="hill-navbar__home">
            <a href={this.homeLinkUrl}>
              <img class="home-img" src={this.homeLinkImageUrl} />
              <span class="home-name">{this.homeLinkText}</span>
            </a>
          </div>
          <div id="hill-navbar__list-wrapper">
            <ul id="hill-navbar__list">
                {this.menuList.map(text => <li class="list-item" id={`hill-navbar__${text.toLowerCase()}`}><a href={`/${text.toLowerCase()}`}>{text}</a></li>)}
            </ul>
          </div>
        </nav>
      </Host>
    );
  }

}
