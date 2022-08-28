import { Component, Host, h, Prop, Watch, State } from '@stencil/core';

@Component({
  tag: 'hill-card',
  styleUrl: 'hill-card.css',
  shadow: true,
})
export class HillCard {

  @Prop() headlineText: string;
  @Prop() bodyText: string;
  @Prop() details: string;
  @State() detailsArray: Array<string>;
  @Prop() bonusDetails: string;
  @State() bonusDetailsArray: Array<string>;
  moreInfo: HTMLDivElement;
  detailsList: HTMLDivElement;
  detailsOpen: boolean = false;
  detailsClose: boolean = true;

  @Watch('details')
  parseDetails(){
    this.detailsArray = this.details ? JSON.parse(this.details) : [];
  }

  @Watch('bonusDetails')
  parseBonusDetails(){
    this.bonusDetailsArray = this.bonusDetails ? JSON.parse(this.bonusDetails) : [];
  }

  componentWillLoad(){
    this.parseDetails();
    this.parseBonusDetails();
  }

  handleClick = (event: Event) => {
    event.preventDefault();
    this.detailsOpen = !this.detailsOpen;
    this.detailsClose = !this.detailsClose;
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

  getListItemStyle = (itemNum: number) => {
    let delay: number;
    if(this.detailsOpen){
      delay = itemNum*.9;
      return {
        animationName: "fade-in",
        animationDuration: "2s",
        animationFillMode: "backwards",
        animationDelay: `${delay}s`,
        animationDirection: "normal"
      }
    }
    // else{
    //   delay = 3/itemNum;
    //   return {
    //     animationName: "fade-out",
    //     animationDuration: "2s",
    //     animationDelay: `${delay}s`,
    //     animationDirection: "normal"
    //   }
    // }
    
  }

  getDetailsList = () => {
    //**TODO: create property to select either <ul> or <ol>**
    return(
      <ul>
        {this.detailsArray?.map((deet, index) => {
          return (<li style={this.getListItemStyle(index)} key={index}>
                    {deet}
                  </li>)
        })}
      </ul>
    )
  }

  getBonusDetailsList = () => {
    return (
      <ul>
        {this.bonusDetailsArray?.map((bonusDeet, index) => {
          return (<li key={index}>
                    {bonusDeet}
                  </li>)
        })}
      </ul>
    )
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
              <div id="card-title">{this.headlineText}</div>
            </div>
            <div id="card-text"><span>{this.bodyText}</span></div>
            <div id="card-list" ref={el => this.detailsList = el as HTMLDivElement}>
              {this.getDetailsList()}
            </div>
            <div id="card-more" onClick={this.handleClick} ref={el => this.moreInfo = el as HTMLDivElement}><img src="./assets/iconmonstr-caret-down-lined.svg"></img></div>
          </div>
          <div id="card-bonus">
            {this.getBonusDetailsList()}
          </div>
        </div>
      </Host>
    );
  }

}
/**/