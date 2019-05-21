import * as angular from 'angular';
import appModule from './app';

class ArrivingFlights extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.render();
    }

    render(){
        const bootstrapCss = require('!to-string-loader!css-loader!../assets/css/bootstrap.min.css');

        this.shadowRoot.innerHTML=`
            <style>${bootstrapCss}</style>
        <div id="component">
            <flights></flights>
        </div>
        `;
        const component = this.shadowRoot.getElementById('component');
        angular.bootstrap(component, [appModule])
    }
}

customElements.define('arriving-flights', ArrivingFlights);