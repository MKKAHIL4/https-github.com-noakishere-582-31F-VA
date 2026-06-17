class usercard extends HTMLElement {
    connectedCallback() {
        this.innerHTML=`
        <div>
            <h2>Alice</h2>
            <p>Role: student</p>
        </div>
        `;
    }
}

customElements.define("user-card", UserCard);

// ^^ this works, but:

// 1. what if page-wide CSS changes the inside of this component?
// 2. what if the component's own styles affect other parts of the page?
// 3. what if we want a reusable element that behaves more like an isolated widget?

// Shadow DOM
//creates a separate internal DOM tree for an element.
// a component can have:
// - its own internal HTML structure
// - its own internal styles
// - better protection from outside styling and markup conflicts

// Light DOM -- > regular page DOM outside the component
// Shadow DOM -- > the interanl DOM attached to a custom element.

class HelloShadow extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({mode: "open"});

        shadow.innerHTML = `
        <div>
        <h2> hello from Shadow DOM</h2>
        <p> This content lives inside the shadow root.</p>
        </div>
        `;
    }
}
//we are still rendering the elemnt, but its internal straucture belongs to its own DOM

customElements.define("helo-shadow", HellowShadow);