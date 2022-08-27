/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface HillCard {
        "details": string;
    }
    interface HillNavbar {
        "bgColor": any;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLHillCardElement extends Components.HillCard, HTMLStencilElement {
    }
    var HTMLHillCardElement: {
        prototype: HTMLHillCardElement;
        new (): HTMLHillCardElement;
    };
    interface HTMLHillNavbarElement extends Components.HillNavbar, HTMLStencilElement {
    }
    var HTMLHillNavbarElement: {
        prototype: HTMLHillNavbarElement;
        new (): HTMLHillNavbarElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "hill-card": HTMLHillCardElement;
        "hill-navbar": HTMLHillNavbarElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface HillCard {
        "details"?: string;
    }
    interface HillNavbar {
        "bgColor"?: any;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "hill-card": HillCard;
        "hill-navbar": HillNavbar;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "hill-card": LocalJSX.HillCard & JSXBase.HTMLAttributes<HTMLHillCardElement>;
            "hill-navbar": LocalJSX.HillNavbar & JSXBase.HTMLAttributes<HTMLHillNavbarElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
