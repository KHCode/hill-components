import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hill-navbar',
  styleUrl: 'hill-navbar.scss',
  shadow: true,
})
export class HillNavbar {
  @Prop() bgColor;

  
  render() {
    return (
      <Host>
        <div id="hill-navbar">

        </div>
      </Host>
    );
  }

}
