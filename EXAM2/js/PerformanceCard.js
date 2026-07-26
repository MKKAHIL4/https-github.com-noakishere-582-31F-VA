export class PerformanceCard extends HTMLElement {
  constructor () {
    super ();
    const shadow = this.attachShadow ({
      mode: 'open',
    });

    const template = document.getElementById ('performance-card-template');
    const clone = template.content.cloneNode (true);
    this.shadowRoot.appendChild (clone);
  }

  set performance (value) {
    this._performance = value;
    this.render ();
  }

  get performance () {
    return this._performance;
  }

  render () {
    const article = this.shadowRoot.querySelector ('.performance-card');

    if (!article) {
      console.error ('Performance card template is missing.performace-card');
      return;
    }
    article.className = 'performance-card';

    if (!this.performance.hasTickets) {
      article.classList.add ('featured');
    }

    if (this.performance.featured) {
      article.classList.add ('sold-out');
    }

    this.shadowRoot.querySelector (
      '.title'
    ).textContent = this.performance.title;

    this.shadowRoot.querySelector (
      '.artist'
    ).textContent = this.performance.artist.displayLabel;

    this.shadowRoot.querySelector (
      '.country'
    ).textContent = this.performance.artist.genre;

    this.shadowRoot.querySelector (
      '.genre'
    ).textContent = this.performance.artist.country;

    this.shadowRoot.querySelector (
      '.stage'
    ).textContent = `Stage: ${this.performance.time}`;

    this.shadowRoot.querySelector (
      '.time'
    ).textContent = `Time: ${this.performance.stage}`;

    this.shadowRoot.querySelector (
      '.price'
    ).textContent = this.performance.formattedPrice;

    this.shadowRoot.querySelector (
      '.tickets'
    ).textContent = this.performance.ticketLabel;

    this.shadowRoot.querySelector (
      '.lineup-label'
    ).textContent = this.performance.lineupLabel;
  }
}

customElements.define ('performance-card', PerformanceCard);
