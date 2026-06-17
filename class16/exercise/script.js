class MovieBox extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({mode: "open"});
        this.render();
    }

    getMovieData() {
        return {
            title: this.getAttribute("title") || "Unknown Movie",
            year: this.getAttribute("year") || "N/A",
            director: this.getAttribute("director") || "Uknow Director",
            poster: this.getAttribute("poster-url") || "" 
        };
    }

    getTemplate() {

       const movie = this.getMovieData();
    return `
    <style>
        .card {
             width: 250px;
             height: 520px;
             display: flex;
             flex-direction: column;
            border-radius:10px;
            border: 1px solid #ccc;
            overflow: hidden;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
            font-family: Arial, Helvetica, sans-serif;
            background: wheat;  
        }

        img {
            width: 100%;
            height: 350px;
            object-fit: cover;
            flex-shrink: 0;
        }

        .content {
            padding: 15px
            flex: 1;
            display: flex;
            flex-direction: column;
        }
        h2 {
            margin: 0 0 10px 0;
        }
        p {
            margin: 5px 0;
        }
        .content p:last-child {
        margin-top: auto;
        }
 </style>

    <div class="card">
        <img src="${movie.poster}" alt="${movie.title}">
        <div class="content">
            <h2>${movie.title}</h2>
            <p><strong> Year: </strong>${movie.year}</p>
            <p><strong> Director: </strong>${movie.director}</p>
        </div>
    </div>
    `;
    }
    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }
}
customElements.define("movie-box", MovieBox);
         
        