const v3ApiKey = "71dddde08106498e1c93152088391560";
const v4ApiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWRkZGRlMDgxMDY0OThlMWM5MzE1MjA4ODM5MTU2MCIsInN1YiI6IjViZWNmOTAzYzNhMzY4MTJmMzAwY2YyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0FTwqDrzXxRhHcjQnquX6gKOCt1RumxgtGMjjRSOoZA";
const apiurl = "https://api.themoviedb.org/3/movie/550?api_key=71dddde08106498e1c93152088391560";
//https://codepen.io/kunalkamble/pen/XXbWwN
//https://developers.google.com/web/fundamentals/web-components/
//https://uigradients.com/#MoonlitAsteroid

let DomData = {

};

class App {
    constructor(){
        this.modules = {};
    }

    addModule (name, module){
        this.modules[name] = module;
        document.getElementById(module.target).appendChild(module.composant);
    }

    getModule (name) {
        return this.modules[name];
    }
}

class Module {
    constructor(target, composant){
        this.target = target;
        this.composant = composant;
    }
};

class MovieElement extends HTMLElement {

    constructor(title) {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(this.getStyle());
        this.shadow.appendChild(this.getMovieElem(title));
        this.addEventListener("click", () => {
            alert('click');
        });

        MovieElement.count = MovieElement.count ||  0;
        this.setAttribute('id', "movie-"+ MovieElement.count++);
    }

    getMovieElem(title) {
        let el = document.createElement('div');
        el.innerHTML = `<div class="title">${title}</div>`;
        return el.firstChild;
    }

    getStyle() {
        let tmpElem = document.createElement('div');
        tmpElem.innerHTML =
            `<style type="text/css">
                .title {
                    color: white;
                }   

                :host {
                    display: block;
                    border: 1px solid white;
                    padding: 10px;
                    margin-bottom: 2px;
                    border-radius: 3px;
                }
            </style>`;

        return tmpElem.firstChild;
    }
}
customElements.define('movie-element', MovieElement);


class MovielistElement extends HTMLElement {

    constructor(){
        super ();
        this.shadow = this.attachShadow({mode: 'open'});
        this.setAttribute('data-list', "[]");
        MovielistElement.count = MovieElement.count ||  0;
        this.setAttribute('id', "movielist-"+ MovielistElement.count++);
    }

    update (list){
        for (let i = 0; i< list.length; i++){
            this.shadow.appendChild(new MovieElement(list[i]));
        }
    }
}
customElements.define('movielist-element', MovielistElement);




