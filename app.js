Array.prototype.clone = function () {
    return this.slice(0);
};

const URL_PARAM_REGEX = /\{:(.*)\}/;

let ICONS_SVG = {
    popcorn: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
</svg>`,
    like: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 58 58" preserveAspectRatio="none" xml:space="preserve">
<g>
	<path d="M9.5,43c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S12.257,43,9.5,43z M9.5,51c-1.654,0-3-1.346-3-3s1.346-3,3-3
		s3,1.346,3,3S11.154,51,9.5,51z"/>
	<path d="M56.5,35c0-2.495-1.375-3.662-2.715-4.233C54.835,29.85,55.5,28.501,55.5,27c0-2.757-2.243-5-5-5H36.134l0.729-3.41
		c0.973-4.549,0.334-9.716,0.116-11.191C36.461,3.906,33.372,0,30.013,0h-0.239C28.178,0,25.5,0.909,25.5,7
		c0,8.023-2.002,11.694-3.681,13.36c-1.647,1.634-3.231,1.616-3.319,1.64h-1v-2h-16v38h16v-2h28c2.757,0,5-2.243,5-5
		c0-1.164-0.4-2.236-1.069-3.087C51.745,47.476,53.5,45.439,53.5,43c0-1.164-0.4-2.236-1.069-3.087
		C54.745,39.476,56.5,37.439,56.5,35z M3.5,56V22h12v34H3.5z M51.5,38h-3h-8c-0.552,0-1,0.447-1,1s0.448,1,1,1h8
		c1.654,0,3,1.346,3,3s-1.346,3-3,3h-2h-1h-7c-0.552,0-1,0.447-1,1s0.448,1,1,1h7c1.654,0,3,1.346,3,3s-1.346,3-3,3h-28V24
		l0.969-0.001c0.097,0.019,2.42,0.05,4.682-2.144C26.037,19.059,27.5,14.061,27.5,7c0-1.867,0.295-5,2.274-5h0.239
		C32.244,2,34.621,5.13,35,7.691c0.207,1.392,0.81,6.26-0.093,10.48L33.662,24H50.5c1.654,0,3,1.346,3,3s-1.346,3-3,3h-2h-1h-7
		c-0.552,0-1,0.447-1,1s0.448,1,1,1h7c0.883,0,2.825,0.04,3.854,0.193C53.965,32.58,54.5,33.595,54.5,35
		C54.5,36.654,53.154,38,51.5,38z"/>
</g>
</svg>`,
    arrow: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	  viewBox="0 0 44.236 44.236" preserveAspectRatio="none"  xml:space="preserve">
<g>
	<g>
		<path d="M22.118,44.236C9.922,44.236,0,34.314,0,22.118S9.922,0,22.118,0s22.118,9.922,22.118,22.118S34.314,44.236,22.118,44.236
			z M22.118,1.5C10.75,1.5,1.5,10.749,1.5,22.118c0,11.368,9.25,20.618,20.618,20.618c11.37,0,20.618-9.25,20.618-20.618
			C42.736,10.749,33.488,1.5,22.118,1.5z"/>
		<path d="M19.341,29.884c-0.192,0-0.384-0.073-0.53-0.22c-0.293-0.292-0.293-0.768,0-1.061l6.796-6.804l-6.796-6.803
			c-0.292-0.293-0.292-0.769,0-1.061c0.293-0.293,0.768-0.293,1.061,0l7.325,7.333c0.293,0.293,0.293,0.768,0,1.061l-7.325,7.333
			C19.725,29.811,19.533,29.884,19.341,29.884z"/>
	</g>
</g>`,
    home: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" preserveAspectRatio="none" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<g>
		<path d="M506.555,208.064L263.859,30.367c-4.68-3.426-11.038-3.426-15.716,0L5.445,208.064
			c-5.928,4.341-7.216,12.665-2.875,18.593s12.666,7.214,18.593,2.875L256,57.588l234.837,171.943c2.368,1.735,5.12,2.57,7.848,2.57
			c4.096,0,8.138-1.885,10.744-5.445C513.771,220.729,512.483,212.405,506.555,208.064z"/>
	</g>
</g>
<g>
	<g>
		<path d="M442.246,232.543c-7.346,0-13.303,5.956-13.303,13.303v211.749H322.521V342.009c0-36.68-29.842-66.52-66.52-66.52
			s-66.52,29.842-66.52,66.52v115.587H83.058V245.847c0-7.347-5.957-13.303-13.303-13.303s-13.303,5.956-13.303,13.303v225.053
			c0,7.347,5.957,13.303,13.303,13.303h133.029c6.996,0,12.721-5.405,13.251-12.267c0.032-0.311,0.052-0.651,0.052-1.036v-128.89
			c0-22.009,17.905-39.914,39.914-39.914s39.914,17.906,39.914,39.914v128.89c0,0.383,0.02,0.717,0.052,1.024
			c0.524,6.867,6.251,12.279,13.251,12.279h133.029c7.347,0,13.303-5.956,13.303-13.303V245.847
			C455.549,238.499,449.593,232.543,442.246,232.543z"/>
	</g>
</g>
</svg>`
};

const notAvailableImg = 'data:image/jpeg;base64,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';

const movieService = {
    v3ApiKey: '71dddde08106498e1c93152088391560',
    baseUrl: 'https://api.themoviedb.org/3',
    getTrending: (page) => {
        return fetch(`${movieService.baseUrl}/trending/movie/day?api_key=${movieService.v3ApiKey}&page=${page || 1}`);
    },
    search: (searchString, page) => {
        return fetch(`${movieService.baseUrl}/search/movie?api_key=${movieService.v3ApiKey}&language=en-US&query=${searchString}&page=${page || 1}&include_adult=false`);
    },
    getMovie: (movieId) => {
        return fetch(`${movieService.baseUrl}/movie/${movieId}?api_key=71dddde08106498e1c93152088391560`);
    },
    getReviews: (movieId) => {
        return fetch(`${movieService.baseUrl}/movie/${movieId}/reviews?api_key=${movieService.v3ApiKey}`);
    }
};

class Util {
    static applyWildcardToDecomposedPath(decomposedPath, wildcards) {
        wildcards.forEach(function (wildcard) {
            decomposedPath[wildcard.index] = wildcard.name;
        });
        return decomposedPath;
    }

    static getWildcards(decomposedPath) {
        let wildcards = [];
        decomposedPath.forEach((value, index) => {
            if (URL_PARAM_REGEX.test(value)) {
                wildcards.push({
                    index: index,
                    name: URL_PARAM_REGEX.exec(value)[1]

                });
            }
        });
        return wildcards;
    }
}

class Router {
    constructor() {
        this.routes = [];
        this.defaultPath = "";
        this.current = '';
        window.addEventListener("hashchange", function (data) {
            app.router.route(window.location.hash);
        }, false);
    }

    addRoute(route) {
        this.routes.push(route);
        return this;
    }

    setBasePath(pathNoPage) {
        this.pathNoPage = pathNoPage;
    }

    route(hash) {
        let route = this.getRoute(hash);
        this.current = route;
        route.ctrl();
    }

    routeDefault() {
        window.location.hash = this.defaultPath;
    }

    getRoute(path) {
        let decomposedPath = Route.decomposedPath(path);
        if (!decomposedPath.length) {
            return this.getRoute(this.defaultPath);
        }

        let routes = this.routes;
        let foundRoute;

        routes.forEach(function (route) {
            if (decomposedPath.length === route.decomposedPath.length) {
                if (Util.applyWildcardToDecomposedPath(decomposedPath.clone(), route.wildcards).join('') === Util.applyWildcardToDecomposedPath(route.decomposedPath.clone(), route.wildcards).join('')) {
                    foundRoute = route;
                }
            }
        });

        return foundRoute || this.getRoute(this.defaultPath);
    }

    getUrlParams() {
        let params = {};
        let route = this.current;
        let wildcars = route.wildcards;
        let decomposedPath = Route.decomposedPath(window.location.hash);

        wildcars.forEach((wildcard) => {
            params[wildcard.name] = decomposedPath[wildcard.index];
        });

        return params;
    }
}

class Route {
    constructor(path, ctrl) {
        this.path = path;
        this.ctrl = ctrl;
        this.decomposedPath = Route.decomposedPath(path);
        this.wildcards = [];
        this.setWildCard();
    }

    setWildCard() {
        this.wildcards = Util.getWildcards(this.decomposedPath);
    }

    static decomposedPath(path) {
        if (path === '') {
            return [''];
        } else {
            try {
                return path.match(/[^/]+/g).slice(1);
            } catch (e) {
                return [];
            }
        }
    }
}

class App {
    constructor() {
        this.modules = {};
        this.router = new Router();
    }

    addModule(name, module) {
        this.modules[name] = module;
        document.getElementById(module.target).appendChild(module.composant);
    }

    getModule(name) {
        return this.modules[name];
    }

    run() {
        this.router.route(window.location.hash);
    }

}

class Module {
    constructor(target, composant) {
        this.target = target;
        this.composant = composant;
    }
}

class MovieElement extends HTMLElement {

    constructor(movie) {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(this.getStyle());
        this.shadow.appendChild(this.getHtmlNode(movie));
    }

    getHtmlNode(movie) {
        let el = document.createElement('div');
        let step = movie.vote_average * 10;
        let color = step > 75 ? 'green' : (() => {
            return step > 50 ? 'orange' : 'red'
        })();
        let rotate = step > 50 ? 0 : 180;
        let posterUrl = movie.poster_path ? `http://image.tmdb.org/t/p/w185${movie.poster_path}` : notAvailableImg;
        el.innerHTML = `<a href="#/movie/${movie.id}">
                            <h2 class="title">${movie.original_title}</h2>
                            <div class="poster"><img width="200" height="303" src="${posterUrl}"/></div>
                            <div class="rating">
                                <div class="chart"><chart-element data-option-scale="0.3" data-option-step="${step}"></chart-element></div>
                                <logo-element name="popcorn" color="#ccc"></logo-element>
                                <div class="popularity">${movie.popularity}</div>
                                <logo-element name="like" rotate="${rotate}" color="${color}"></logo-element>
                            </div>
                            <div style="clear: both"></div>
                        </a>`;
        return el.firstChild;
    }

    getStyle() {
        let tmpElem = document.createElement('div');
        tmpElem.innerHTML =
            `<style type="text/css">
                .title {
                    color: white;
                }  
                a{
                    display: block;
                    color: white;
                    text-decoration: none;
                    height: 100%;
                    width: 100%;
                    padding: 10px;
                }
                
                logo-element[name='popcorn']{
                    display: block;
                    width: 35px;  
                    margin-top: 20px;
                    margin-left: 57px;                 
                } 
                
                logo-element[name='like']{
                    display: block;
                    width: 35px;  
                    margin-top: 20px;
                    margin-left: 57px;                 
                } 
                
                .popularity {
                    color: white;
                    font-weight: bold;
                    text-align: center;
                }
                .rating {
                    width: 147px;
                    padding-top: 40px;
                }                                    
                .poster {
                    float:left;
                    
                }
                
                .poster img{
                    width: 200px;
                    height: 303px;
                    float:left;
                    border-radius: 5px;
                    border-right: 3px solid rgba(255,255,255, 0.3);
                    border-bottom: 3px solid rgba(255,255,255, 0.2);
                    
                }
                .rating {
                    float: right;
                }
                h2 {
                    height: 58px;
                    overflow: hidden;
                    text-align: center;
                    width: 330px;              
                }

                :host {
                    border: 1px solid #666666;
                    border-radius: 3px;
                    width: 350px;
                    height: 424px;
                    float: left;
                    margin-left: 5px;
                    margin-right: 5px;
                    margin-bottom: 10px;                 
                }
                :host:hover {
                    border: 1px solid #ffffff;
                                
                }
                .chart {
                    margin-left: 43px;
                }
            </style>`;

        return tmpElem.firstChild;
    }
}


class MovielistElement extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    updateWithList(callback) {
        callback.then((response) => {

            if (!response.ok) {
                app.router.routeDefault();
                return;
            }
            response.json().then((data) => {
                let results = data.results;
                let tmpElem = document.createElement('div');

                let shadow = this.shadowRoot;
                Array.from(shadow.childNodes).forEach((elem) => {
                    elem.remove();
                });

                this.shadow.appendChild(this.getStyle());

                if (!data.total_results) {
                    tmpElem.innerHTML = "<div class='noResult'>No movie found</div>"
                    this.shadow.appendChild(tmpElem.firstChild);
                    return;
                }
                this.shadow.appendChild(this.getNavigation(data));
                for (let i = 0; i < results.length; i++) {
                    this.shadow.appendChild(new MovieElement(results[i]));
                }
                tmpElem.innerHTML = "<div class='bottom'></div>"
                this.shadow.appendChild(tmpElem.firstChild);
            })
        });
    }

    updateWithMovieDetails(callback) {
        callback.then((response) => {

            if (!response.ok) {
                app.router.routeDefault();
                return;
            }
            response.json().then((data) => {

                let tmpElem = document.createElement('div');

                let shadow = this.shadowRoot;
                Array.from(shadow.childNodes).forEach((elem) => {
                    elem.remove();
                });

                localStorage.setItem(data.id, JSON.stringify(data));
                tmpElem.innerHTML =
                    `<movie-details-element data-movie='${data.id}'></movie-details-element>
                    <div class='bottom'></div>`;
                this.shadow.appendChild(tmpElem.firstChild);
            })
        });


    }

    getStyle() {
        let tmpElem = document.createElement('div');
        tmpElem.innerHTML =
            `<style type="text/css">
                .noResult {
                    font-size: 30px;
                    color: red;
                    text-align: center;
                    font-weight: bold;
                }
                .navigation{
                    text-align: center;
                    color: white;
                    font-size:24px;
                    font-weight: bold;
                    margin-bottom: 30px;
                    position: relative;
                    padding-left: 22px;
                }
                
                .navigation.hidden {
                    visibility: hidden;
                }
                logo-element[name="arrow"] {
                    display: block;
                    width: 40px; 
                }
                .logoWrap {
                    display: inline-block;
                }
                .left {
                    position: absolute;
                    left: -60px;
                    top:-5px
                }
                .right {
                    right: -60px;
                    position: absolute;
                    top:-5px

                }
                span {
                    position: relative;
                }  
                .bottom {
                    height: 30px;
                    width: 100%;
                    clear: both;
                }       
              
            </style>`;

        return tmpElem.firstChild;
    }

    getNavigation(data) {

        let arrowLeftColor = 'yellow';
        let arrowRightColor = 'yellow';
        let disableColor = '#444444';

        let hrefDown = (() => {
            if (data.page > 1 && data.total_pages > 1) {
                return `href="${app.router.pathNoPage}${data.page - 1}"`;
            } else {
                arrowLeftColor = disableColor;
                return "disable";
            }
        })();

        let hrefUp = (() => {
            if (data.page < data.total_pages) {
                return `href="${app.router.pathNoPage}${data.page + 1}"`;
            } else {
                arrowRightColor = disableColor;
                return "disable";
            }
        })();

        let tmpElem = document.createElement('div');
        tmpElem.innerHTML =
            `<div class="navigation ${data.total_pages === 1 ? 'hidden' : ''}">
                <span><a ${hrefDown} class="logoWrap">
                    <logo-element rotate="180" class="left" name="arrow" color="${arrowLeftColor}" ></logo-element>
                 </a> 
                    page ${data.page} of ${data.total_pages}
                <a ${hrefUp} class="logoWrap">
                    <logo-element rotate="0" class="right" name="arrow" color="${arrowRightColor}" ></logo-element>
                 </a>    </span> 
             </div>`;

        return tmpElem.firstChild;
    }
}

class ChartElement extends HTMLElement {

    //  pris de https://codepen.io/kunalkamble/pen/XXbWwN

    constructor(options) {
        super();
        options = options || {
            scale: this.getAttribute('data-option-scale'),
            step: this.getAttribute('data-option-step')
        };
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(this.getStyle(options));
        this.shadow.appendChild(this.getHtmlNode());
    }

    getHtmlNode() {
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

        let step = Math.round(100 * pourcent);
        let stroke = 580.9 * pourcent;
        let frame = -250 * pourcent;
        let time = 1 * pourcent;
        let dimensionWidth = options.scale * 100 * 2;
        let dimensionHeight = options.scale * 100 * 2.7;
        let position = (1 - options.scale) * 100;

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
                                    width: ${dimensionWidth}px;
                                    height: ${dimensionHeight}px;
                                }
                                
                                figure {
                                    position: absolute;
                                    top:-${position}px;
                                    left: -${position}px;
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
        if (!ICONS_SVG[this.getAttribute('name')]) return;

        let icon = this.getHtmlNode(this.getAttribute('name'));
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(this.getStyle({
            color: this.getAttribute('color') || 'white',
            rotate: this.getAttribute('rotate') || 0
        }));
        this.shadow.appendChild(icon);
    }

    getHtmlNode(name) {
        let el = document.createElement('div');
        el.innerHTML = ICONS_SVG[name];
        return el.firstChild;
    }

    getStyle(options) {
        let tmpElem = document.createElement('div');
        tmpElem.innerHTML =
            `<style type="text/css">
          
            :host svg{
                fill: ${options.color};
                transform: rotate(${options.rotate}deg);
            }
            </style>`;

        return tmpElem.firstChild;
    }
}

class FooterElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(this.getStyle());
        this.shadow.appendChild(this.getHtmlNode());
    }

    getStyle() {
        let tmpElem = document.createElement('div');
        tmpElem.innerHTML =
            `<style type="text/css">
                footer {
                    margin-top: -15px;
                    position: relative;
                } 
                h2 {
                  text-align: center;
                  color: #cccccc;
                  text-shadow: 1px 1px rgba(255,255,255, 0.2),
                  2px 2px rgba(255,255,255, 0.2),
                  3px 3px rgba(255,255,255, 0.2);
                }
                
                logo-element[name="arrow"]{
                    display: block;
                    width: 25px;
                    position: absolute;
                    top:2px;
                    left: 10px;              
                }
                .back {
                    position: absolute;
                    font-size: 20px;
                    font-weight: bold;
                    color: yellow;
                    top:4px;
                    left: 50px;
                    display: block;                
                }
                
                @media (max-width: 620px) {
                    .back {
                        display:none;    
                    }
                }
                
            </style>`;
        return tmpElem.firstChild;
    }

    getHtmlNode(text) {
        let footer = document.createElement('footer');
        footer.innerHTML =
            `<a href="javascript:window.history.back()"><logo-element name="arrow" rotate="180" color="yellow"></logo-element>
                <span class="back">BACK</span>
            </a>
               <h2>${text}</h2>`;
        return footer;
    }

    setH2(text) {
        let shadow = this.shadowRoot;
        Array.from(shadow.childNodes).forEach((elem) => {
            elem.remove();
        });

        this.shadow.appendChild(this.getStyle());
        this.shadow.appendChild(this.getHtmlNode(text));

    }
}

class SearchElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(this.getStyle());
        this.shadow.appendChild(this.getHtmlNode());
    }

    getStyle() {
        let tmpElem = document.createElement('div');
        tmpElem.innerHTML =
            `<style type="text/css">
                :host input{
                  width: 50%;
                  height: 30px;
                  border-radius: 10px;
                  font-size: 15px;
                  font-weight: bold;
                  background-color: white;
                  margin-top: 20px;
                  border: 1px solid #cccccc;
                  padding-left: 8px;
                }
            </style>`;
        return tmpElem.firstChild;
    }

    getHtmlNode(text) {
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Search by title');
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                window.location.hash = `#/search/${encodeURI(event.currentTarget.value)}`;
                event.currentTarget.value = '';
            }
        });
        return input;
    }
}

class MovieDetailsElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(this.getStyle());
        this.shadow.appendChild(this.getHtmlNode(JSON.parse(localStorage.getItem(this.getAttribute('data-movie')))));
        localStorage.removeItem(this.getAttribute('data-movie'));
    }

    getStyle() {
        let tmpElem = document.createElement('div');
        tmpElem.innerHTML =
            `<style type="text/css">
                :host {
                    display: block;
                    width: 100%;
                    margin: auto;
                }
                
                @media (min-width: 1146px) {
                    :host{
                        width: 1000px;
                    }
                  }
                
                p {
                    font-size: 17px;
                }
                
                .description {
                    padding-left: 10px;
                    width: 65%;
                    float: right;
                    color: white;
                }
                .description h2 {
                    font-size: 30px;
                    padding-bottom: 30px;
                }
                
                logo-element[name='popcorn']{
                    display: block;
                    width: 55px;  
                    margin-left: 12px;
                } 
                
                logo-element[name='like']{
                    display: block;
                    width: 50px; 
                    margin-left: 15px;
                    margin-top: 10px; 
                } 
               
                
                .popularity {
                    color: white;
                    text-align: center;
                    font-size: 12px;
                    padding-top: 10px;
                }
                
                .description .overview {
                    color: #aaaaaa;
                    font-weight: bold;
                    clear: both;
                    padding-top: 40px;
                }
                
                .overview {
                    font-size: 20px;
                }
                
                .poster {
                    width: 32%;
                    padding-right: 10px;
                    float: left;                  
                }
                .poster img{
                    width: 100%;
                    float:left;
                    border-radius: 5px;
                    border-right: 3px solid rgba(255,255,255, 0.3);
                    border-bottom: 3px solid rgba(255,255,255, 0.2);                
                }
                
                .chart {
                    float: left;                
               
                }
                .popularityWrap {
                    float: left;
                    width: 80px;
                    height: 80px;
                    margin-left: 20px;    
                }
                .likeWrap {
                   float: left;
                   width: 80px;
                   height: 80px;
                   margin-left: 20px;
                }
                
                @media (max-width: 763px) {
                    .poster, .description{
                        width: 100%;
                    }
                  }
                
            </style>`;
        return tmpElem.firstChild;
    }

    getHtmlNode(movie) {

        let step = movie.vote_average * 10;
        let color = step > 75 ? 'green' : (() => {
            return step > 50 ? 'orange' : 'red'
        })();
        let rotate = step > 50 ? 0 : 180;

        let tmpElem = document.createElement('div');
        let posterUrl = movie.poster_path ? `http://image.tmdb.org/t/p/w780${movie.poster_path}` : notAvailableImg;

        tmpElem.innerHTML =
            `<div class="wrap">
                <div class="poster">
                    <img src="${posterUrl}" />
                </div>
                <div class="description">
                    <h2>${movie.original_title}</h2>
                    <div class="rating">
                        <div class="chart"><chart-element data-option-scale="0.3" data-option-step="${step}"></chart-element></div>
                        <div class="popularityWrap"><logo-element name="popcorn" color="#ccc"></logo-element><div class="popularity">${movie.popularity}</div></div>
                        <div class="likeWrap"><logo-element name="like" rotate="${rotate}" color="${color}"></logo-element></div>
                     </div>
                    <p class="overview">Overview</p>
                    <p>${movie.overview}</p>
                    <p class="overview">Reviews</p>
                    <movie-reviews-element data-movieid="${movie.id}"></movie-reviews-element>
                    
                </div>
            </div>`;

        return tmpElem.firstChild;
    }
}

class MovieReviewsElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(this.getStyle());
        this.showReviews(this.getAttribute('data-movieid'));
    }

    getStyle() {
        let tmpElem = document.createElement('div');
        tmpElem.innerHTML =
            `<style type="text/css">
                :host {
                    color:white; 
                } 
                .author {
                    text-align: right;
                    font-weight: bold;
                }   
                hr {
                    color: red;
                }
                
                .reviews:last-child hr{
                    display: none;
                }
                
                .reviews:last-child   {
                    padding-bottom: 60px;
                }
                      
            </style>`;
        return tmpElem.firstChild;
    }

    showReviews(movieId) {

        movieService.getReviews(movieId).then((response) => {
            response.json().then((data) => {

                if (!data.results.length) {
                    data.results = [{content: 'No reviews', author: ''}];
                }

                data.results.forEach((review) => {
                    let tmpElem = document.createElement('div');
                    tmpElem.classList.add('reviews');
                    tmpElem.innerHTML = `<p class="content">${review.content}</p>
                                         <p class="author"><i>${review.author}</i></p>
                                         <hr/>`;
                    this.shadow.appendChild(tmpElem);
                });
            });

        });
    }
}

customElements.define('footer-element', FooterElement);
customElements.define('logo-element', LogoElement);
customElements.define('chart-element', ChartElement);
customElements.define('movie-element', MovieElement);
customElements.define('movielist-element', MovielistElement);
customElements.define('search-element', SearchElement);
customElements.define('movie-details-element', MovieDetailsElement);
customElements.define('movie-reviews-element', MovieReviewsElement);












const app = new App();
app.addModule('movieList', new Module('movielist-container', new MovielistElement()));
app.addModule('footer', new Module('footer-container', new FooterElement()));
app.addModule('search', new Module('header', new SearchElement()));


app.router.addRoute(new Route('', () => {
    app.getModule('movieList').composant.updateWithList(
        (() => {
            app.getModule('footer').composant.setH2('Trending - Home Page');
            app.router.setBasePath('#/trending/');
            return movieService.getTrending();
        })());
}))
    .addRoute(new Route('#/trending/{:page}', () => {
        app.getModule('movieList').composant.updateWithList(
            (() => {
                let params = app.router.getUrlParams();
                app.getModule('footer').composant.setH2('Trending');
                app.router.setBasePath('#/trending/');
                return movieService.getTrending(params.page);
            })());
    }))
    .addRoute(new Route('#/search/{:moviesearch}/', () => {
        app.getModule('movieList').composant.updateWithList(
            (() => {
                let params = app.router.getUrlParams();
                app.getModule('footer').composant.setH2(`Search : ${decodeURI(params.moviesearch)}`);
                app.router.setBasePath(`#/search/${params.moviesearch}/`);
                return movieService.search(params.moviesearch);
            })());
    }))
    .addRoute(new Route('#/search/{:moviesearch}/{:page}', () => {
        app.getModule('movieList').composant.updateWithList(
            (() => {
                let params = app.router.getUrlParams();
                app.getModule('footer').composant.setH2(`Search : ${decodeURI(params.moviesearch)}`);
                app.router.setBasePath(`#/search/${params.moviesearch}/`);
                return movieService.search(params.moviesearch, params.page);
            })())
    }))
    .addRoute(new Route('#/movie/{:movieid}', () => {
        app.getModule('movieList').composant.updateWithMovieDetails(
            (() => {
                let params = app.router.getUrlParams();
                app.getModule('footer').composant.setH2("Movie Details");
                return movieService.getMovie(params.movieid);
            })());
    }));

app.run();







