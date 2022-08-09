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
  listToggle: HTMLDivElement;
  icon1: HTMLDivElement;
  icon2: HTMLDivElement;
  icon3: HTMLDivElement;
  listMenu: HTMLDivElement;
  // blue: Element;
  // componentWillLoad() {
  //   this.icon = document.getElementById("icon");
  //   this.icon1 = document.getElementById("a");
  //   this.icon2 = document.getElementById("b");
  //   this.icon3 = document.getElementById("c");
  //   this.listMenu = document.getElementById('list-menu');
  //   // this.blue = document.getElementById("blue");
  // }

  menuToggleClicked(event: Event) {
    event.preventDefault();
    this.icon1.classList.toggle('a');
    this.icon2.classList.toggle('c');
    this.icon3.classList.toggle('b');
    this.listMenu.classList.toggle('show');
    // this.blue.classList.toggle('slide');
  }

  render() {
    return (
      <Host>
        <nav id="hill-navbar">
          {/* <div id="hill-navbar__home">
            <div id="home-img-wrapper">
              <img id="home-img" src={this.homeLinkImageUrl} />
            </div>
            <a id="home-name" href={this.homeLinkUrl}>{this.homeLinkText}</a>
          </div> */}
          <div class="list-toggle" id="icon"  onClick={(ev) => this.menuToggleClicked(ev)} ref={(el) => this.listToggle = el as HTMLDivElement}>
            <div class="line-1" id="a" ref={(el) => this.icon1 = el as HTMLDivElement}></div>
            <div class="line-2" id="b" ref={(el) => this.icon2 = el as HTMLDivElement}></div>
            <div class="line-3" id="c" ref={(el) => this.icon3 = el as HTMLDivElement}></div>
          </div>
          <div id="list-menu" ref={(el) => this.listMenu = el as HTMLDivElement}>
            <ul>
                {this.menuList.map(text => <li class="list-item" id={`hill-navbar__${text.toLowerCase()}`}><a href={`/${text.toLowerCase()}`}>{text}</a></li>)}
            </ul>
          </div>
          {/* <div id="hill-navbar__list-wrapper">
            
          </div> */}
        </nav>
      </Host>
    );
  }

}
