class userCard extends HTMLElement {
    connectedCallback() {
        this.innerHTML=`
        <div>
            <h2>Alice</h2>
            <p>Role: student</p>
        </div>
        `;
    }
}

customElements.define("user-card", userCard);

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

customElements.define("hello-shadow", HelloShadow);

//without shadow DOM:
//-outisde page styles may change your component unexpectedly
//- your components styles may leak into the rest of the page

// with shadow DOM:
//-internal styles stay scoped to the component
//- component structure becomes more slef-contained!

/*
*Scoped styles inside Shadow DOM
*/
class Fancycard extends HTMLElement {
    connectedCallback(){
        const shadow = this.attachShadow({mode: "open"});

        shadow.innerHTML= `
        <style>
            .card{
                border: 2px solid purple;
                padding 1rem;
                background:#f1e3ff;
            }
            
            h2{
                color:purple;
                margin-top: 0;
            }
        </style>

        <div class="card">
            <h2>Shadow card</h2>
            <p> This is scoped inside the component.</p>
        </div>
        `;
    }
}
customElements.define("fancy-card", Fancycard);

// **
//* Using attributes with Shadow DOM
//*/

class PlayerCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const name = this.getAttribute("name");
    const goals = this.getAttribute("goals");
    const imgUrl = this.getAttribute("image-url");

    shadow.innerHTML = `
    <style>
     .card {
        border: 1px solid #333;
        padding: 1rem; 
        margin-top: 1rem;
        background: #111;
        color: white;
        border-radius: 8px;
     }

     img {
      border: 1px;
      border-radius: 95%;
     }
    </style>
    
    <div class="card">
        <h2>${name}</h2>
        <p>Goals: ${goals}</h2>
        <img src="${imgUrl}">
    </div>
    `;
  }
}
customElements.define("player-card", PlayerCard);

class PaintingCard extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    getArtist() {
        return this.getAttribute("artist") || "Unknown";
    }
    getImgURL() {
        return this.getAttribute("image-url") || "";    
    }
    render() {
        const shadow = this.attachShadow({ mode: "open" });
       

shadow.innerHTML =`
    <style>
        .card {
            border: 1px solid #333;
            padding: 1rem;
            background: #4e4e4e;
            color: white;
            border-radius: 8px;
            margin-top: 1rem;
        }
        img {
            max-width: 640px;
            max-height: 380px;
        }
    </style>
    `;
    }
  // handles the output
  render() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
        ${this.renderStyle()}

        <div class="card">
            <h2>${this.getArtist()}</h2>
            <img src="${this.getImgURL()}">
        </div>
        `;
  }
}
customElements.define("painting-card, PaintingCard");