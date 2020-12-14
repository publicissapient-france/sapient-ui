/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SuiButton {
    }
    interface SuiTitle1 {
    }
    interface SuiFoo {
        "name": string;
    }
}
declare global {
    interface HTMLSuiButtonElement extends Components.SuiButton, HTMLStencilElement {
    }
    var HTMLSuiButtonElement: {
        prototype: HTMLSuiButtonElement;
        new (): HTMLSuiButtonElement;
    };
    interface HTMLSuiTitle1Element extends Components.SuiTitle1, HTMLStencilElement {
    }
    var HTMLSuiTitle1Element: {
        prototype: HTMLSuiTitle1Element;
        new (): HTMLSuiTitle1Element;
    };
    interface HTMLElementTagNameMap {
        "sui-button": HTMLSuiButtonElement;
        "sui-title1": HTMLSuiTitle1Element;
    interface HTMLSuiFooElement extends Components.SuiFoo, HTMLStencilElement {
    }
    var HTMLSuiFooElement: {
        prototype: HTMLSuiFooElement;
        new (): HTMLSuiFooElement;
    };
    interface HTMLElementTagNameMap {
        "sui-button": HTMLSuiButtonElement;
        "sui-foo": HTMLSuiFooElement;
    }
}
declare namespace LocalJSX {
    interface SuiButton {
    }
    interface SuiTitle1 {
    }
    interface IntrinsicElements {
        "sui-button": SuiButton;
        "sui-title1": SuiTitle1;
    }
    interface SuiFoo {
        "name"?: string;
        "onClicked"?: (event: CustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "sui-button": SuiButton;
        "sui-foo": SuiFoo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sui-button": LocalJSX.SuiButton & JSXBase.HTMLAttributes<HTMLSuiButtonElement>;
            "sui-title1": LocalJSX.SuiTitle1 & JSXBase.HTMLAttributes<HTMLSuiTitle1Element>;
            "sui-foo": LocalJSX.SuiFoo & JSXBase.HTMLAttributes<HTMLSuiFooElement>;
        }
    }
}
