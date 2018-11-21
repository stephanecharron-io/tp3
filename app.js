const v3ApiKey = "71dddde08106498e1c93152088391560";
const v4ApiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWRkZGRlMDgxMDY0OThlMWM5MzE1MjA4ODM5MTU2MCIsInN1YiI6IjViZWNmOTAzYzNhMzY4MTJmMzAwY2YyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0FTwqDrzXxRhHcjQnquX6gKOCt1RumxgtGMjjRSOoZA";
const apiurl = "https://api.themoviedb.org/3/movie/550?api_key=71dddde08106498e1c93152088391560";
//https://codepen.io/kunalkamble/pen/XXbWwN
//https://developers.google.com/web/fundamentals/web-components/
//https://uigradients.com/#MoonlitAsteroid
//http://image.tmdb.org/t/p/w185/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg

let iconSvg = {
    popcorn : `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 preserveAspectRatio="none" viewBox="0 0 53.029 53.029" 
	 xml:space="preserve">
<g>
	<g>
		<ellipse cx="19.256" cy="29.372" rx="7.11" ry="10.047"/>
		<polygon points="32.956,52.219 34.429,52.219 37.36,8.931 35.18,8.675 		"/>
		<polygon points="45.878,9.928 44.09,9.719 39.134,52.219 41.505,52.219 		"/>
		<polygon points="41.468,9.412 40.23,9.267 36.032,52.219 37.523,52.219 		"/>
		<path d="M42.871,5.65c-0.059,0-0.113,0.012-0.171,0.018c-0.286-0.217-0.642-0.352-1.028-0.352c-0.529,0-0.995,0.244-1.31,0.621
			c-0.169-1.156-1.156-2.048-2.363-2.048c-0.679,0-1.289,0.284-1.724,0.738c-0.088-0.862-0.805-1.539-1.693-1.539
			c-0.517,0-0.976,0.234-1.286,0.597c-0.379-0.381-0.904-0.62-1.484-0.62c-0.18,0-0.353,0.031-0.52,0.073
			c0.02-0.099,0.031-0.197,0.031-0.301c0-0.944-0.767-1.709-1.71-1.709c-0.563,0-1.06,0.277-1.37,0.698
			C27.833,0.759,26.811,0,25.601,0c-1.152,0-2.142,0.692-2.584,1.678c-0.038-0.002-0.073-0.01-0.11-0.01
			c-0.717,0-1.343,0.369-1.709,0.923c-0.022,0-0.043-0.006-0.064-0.006c-0.973,0-1.772,0.71-1.927,1.638
			c-0.35-0.753-1.109-1.279-1.996-1.279c-0.709,0-1.332,0.34-1.737,0.861c-0.236-0.124-0.5-0.201-0.788-0.201
			c-0.759,0-1.396,0.499-1.619,1.184c-0.369-0.178-0.779-0.285-1.218-0.285c-1.565,0-2.835,1.27-2.835,2.835
			c0,0.775,0.297,1.659,0.803,2.171l19.835-2.081l14.909,1.703V7.103h-0.017C44.422,6.282,43.725,5.65,42.871,5.65z"/>
		<path d="M10.573,10.221l-3.421,0.354l4.051,42.455l2.972-0.137l-1.381-16.357c-1.184-1.955-1.896-4.447-1.896-7.163
			c0-1.794,0.319-3.485,0.87-4.995L10.573,10.221z"/>
		<path d="M26.932,52.306l1.932-0.087h1.974L32.46,8.357l-1.812-0.212l-2.942,0.303l-0.338,19.186
			c0.065,0.567,0.108,1.146,0.108,1.737c0,0.8-0.063,1.581-0.181,2.336L26.932,52.306z"/>
		<path d="M23.944,8.838l-3.381,0.349l0.236,9.042c1.203,0.303,2.316,0.952,3.281,1.87L23.944,8.838z"/>
		<path d="M21.701,52.547l2.772-0.128l-0.17-13.998c-0.861,0.878-1.849,1.532-2.923,1.913L21.701,52.547z"/>
		<path d="M17.497,9.504l-2.871,0.296l0.446,9.747c0.845-0.66,1.782-1.121,2.779-1.349L17.497,9.504z"/>
		<path d="M16.591,52.78l2.667-0.122l-0.489-11.979c-0.977-0.074-1.911-0.364-2.77-0.852L16.591,52.78z"/>
	</g>
</g>
</svg>`

};

let movieService = {
    v3ApiKey: "71dddde08106498e1c93152088391560",
    getTendence: async () => {
        return await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${movieService.v3ApiKey}`);

    }
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

    constructor(movie) {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(this.getStyle());
        this.shadow.appendChild(this.getMovieElem(movie));
        this.addEventListener("click", () => {
            alert('click');
        });

        MovieElement.count = MovieElement.count ||  0;
        this.setAttribute('id', "movie-"+ MovieElement.count++);
    }

    getMovieElem(movie) {
        let el = document.createElement('div');
        let step = movie.vote_average *10;
        el.innerHTML = `<div>
                            <div class="poster"><img width="200" src="http://image.tmdb.org/t/p/w185/${movie.poster_path}"/></div>
                            <div class="rating" v><chart-element data-option-scale="0.3" data-option-step="${step}"></chart-element>
                            <logo-element name="popcorn" color="#ccc"></logo-element></divv>
                            <h2 class="title">${movie.original_title}</h2>
                        </div>`;
        return el.firstChild;
    }

    getStyle() {
        let tmpElem = document.createElement('div');
        tmpElem.innerHTML =
            `<style type="text/css">
                .title {
                    color: white;
                }  
                logo-element[name='popcorn']{
                    display: block;
                    width: 50px;
                } 
                
                .title {
                    clear:both;
                    
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
        MovielistElement.count = MovieElement.count ||  0;
        this.setAttribute('id', "movielist-"+ MovielistElement.count++);
    }

    update (callback){
        let _this = this;
        callback.then( (response) =>  {
            response.json().then( (data) => {
                let results = data.results;
                for (let i = 0; i< results.length; i++){
                    this.shadow.appendChild(new MovieElement(results[i]));
                }
            })
        });
    }
}
customElements.define('movielist-element', MovielistElement);

class ChartElement extends HTMLElement {

    // Idée prise de https://codepen.io/kunalkamble/pen/XXbWwN

    constructor(options){
        super ();
        options = options || {scale: this.getAttribute('data-option-scale'), step:this.getAttribute('data-option-step')}
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(this.getStyle(options));
        this.shadow.appendChild(this.getChartElem());
        ChartElement.count = ChartElement.count ||  0;
        this.setAttribute('id', "chart-"+ ChartElement.count++);
    }

    getChartElem() {
        let el = document.createElement('div');
        el.innerHTML = `<div class="figureWrap">
                            <figure class="chart-two animate">
                                <svg role="img" xmlns="http://www.w3.org/2000/svg">
                                    <circle class="circle-background"/>
                                    <circle class="circle-foreground"/>
                                </svg>
                                <figcaption></figcaption>
                                 <desc>Score</desc>
                            </figure>
                        </div>`;
        return el.firstChild;
    }

    getStyle(options) {

        let pourcent = options.step / 100;

        let step = 100 * pourcent;
        let stroke = 580.9 * pourcent;
        let frame = -250 * pourcent;
        let time = 3 * pourcent;
        let contentAfter = "";

        let tmpElem = document.createElement('div');
        tmpElem.innerHTML = `<style type="text/css">
                                :host {
                                    font-family: Arial,Helvetica Neue,Helvetica,sans-serif; 
                                    width: fit-content;
                                }
                                desc{
                                    text-align: center;
                                    color: white;
                                    font-size: 40px;
                                    display: block;
                                    padding-top: 20px;
                                }
                                
                                .figureWrap {
                                    width: 60px;
                                    height: 60px;
                                    background-color: red;
                                }
                                
                                figure {
                                    position: absolute;
                                    top:-70px;
                                    left: -70px;
                                }
                              
                                .chart-two {
                                    width: 200px;
                                    height: 200px;
                                    margin: 0;
                                    position: relative;
                                    transform: scale(${options.scale});
                                }
                                .chart-two.animate svg .circle-foreground {
                                    animation: offset ${time}s ease-in-out forwards;
                                    animation-delay: 0.2s;
                                }
                                .chart-two.animate figcaption:after {
                                    animation: chart-two-label ${time}s steps(${step}) forwards;
                                    animation-delay: 0.2s;
                                }
                                .chart-two svg {
                                    width: 100%;
                                    height: 100%;
                                }
                                .chart-two svg .circle-background, .chart-two svg .circle-foreground {
                                    r: 92.5px;
                                    cx: 50%;
                                    cy: 50%;
                                    fill: none;
                                    stroke: #305556;
                                    stroke-width: 15px;
                                }
                                .chart-two svg .circle-foreground {
                                    stroke: #d0f09e;
                                    stroke-dasharray: ${stroke}px 580.9px;
                                    stroke-dashoffset: ${stroke}px;
                                    stroke-linecap: round;
                                    transform-origin: 50% 50%;
                                    transform: rotate(-90deg);
                                }
                                .chart-two figcaption {
                                    display: inline-block;
                                    width: 100%;
                                    height: 2.5rem;
                                    overflow: hidden;
                                    text-align: center;
                                    color: #c6e8d7;
                                    position: absolute;
                                    top: calc(50% - 1.25rem);
                                    left: 0;
                                    font-size: 0;
                                }
                                .chart-two figcaption:after {
                                    display: inline-block;
                                    content: "0%\\a 1%\\a 2%\\a 3%\\a 4%\\a 5%\\a 6%\\a 7%\\a 8%\\a 9%\\a 10%\\a 11%\\a 12%\\a 13%\\a 14%\\a 15%\\a 16%\\a 17%\\a 18%\\a 19%\\a 20%\\a 21%\\a 22%\\a 23%\\a 24%\\a 25%\\a 26%\\a 27%\\a 28%\\a 29%\\a 30%\\a 31%\\a 32%\\a 33%\\a 34%\\a 35%\\a 36%\\a 37%\\a 38%\\a 39%\\a 40%\\a 41%\\a 42%\\a 43%\\a 44%\\a 45%\\a 46%\\a 47%\\a 48%\\a 49%\\a 50%\\a 51%\\a 52%\\a 53%\\a 54%\\a 55%\\a 56%\\a 57%\\a 58%\\a 59%\\a 60%\\a 61%\\a 62%\\a 63%\\a 64%\\a 65%\\a 66%\\a 67%\\a 68%\\a 69%\\a 70%\\a 71%\\a 72%\\a 73%\\a 74%\\a 75%\\a 76%\\a 77%\\a 78%\\a 79%\\a 80%\\a 81%\\a 82%\\a 83%\\a 84%\\a 85%\\a 86%\\a 87%\\a 88%\\a 89%\\a 90%\\a 91%\\a 92%\\a 93%\\a 94%\\a 95%\\a 96%\\a 97%\\a 98%\\a 99%\\a 100%\\a";
                                    white-space: pre;
                                    font-size: 2.5rem;
                                    line-height: 2.5rem;
                                }
                                
                                @keyframes chart-two-label {
                                    100% {
                                        transform: translateY(${frame}rem);
                                    }
                                }
                                @keyframes offset {
                                    100% {
                                        stroke-dashoffset: 0;
                                    }
                                }
                                figure {
                                    margin: 0;
                                    padding: 0;
                                }
                           </style>`;

        return tmpElem.firstChild;
    }

}

class LogoElement extends HTMLElement {
    constructor() {
        super();
        if(!iconSvg[this.getAttribute('name')]) return;

        let icon = this.getIconElem(this.getAttribute('name'));
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(this.getStyle( {color: this.getAttribute('color') || 'white'}));
        this.shadow.appendChild(icon);
        this.addEventListener("click", () => {
            alert('click');
        });

        LogoElement.count = LogoElement.count ||  0;
        this.setAttribute('id', "logo-"+ LogoElement.count++);
    }

    getIconElem(name) {
        let el = document.createElement('div');
        el.innerHTML = iconSvg[name];
        return el.firstChild;
    }

    getStyle(options) {
        let tmpElem = document.createElement('div');
        tmpElem.innerHTML =
            `<style type="text/css">
          
            :host svg{
            fill: ${options.color};
            }
            </style>`;

        return tmpElem.firstChild;
    }
}
customElements.define('logo-element', LogoElement);
customElements.define('chart-element', ChartElement);




