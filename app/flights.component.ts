import {ILocationService, IScope} from "angular";

export const flightsComponent: angular.IComponentOptions = {
    controller: [function () {
        this.title = 'Arriving flight ';
        this.flights = [
            {flightNumber: 'FN333', from: 'Amsterdam Schiphol', to: 'Brussels airport', date: new Date() },
            {flightNumber: 'FN444', from: 'Paris Orly', to: 'Brussels airport', date: new Date() },
            {flightNumber: 'FN555', from: 'Barajas', to: 'Brussels Airport', date: new Date() }
        ];
    }],
    template: `
    <div class="container">
    
        <img src="assets/img/angularjs.png" height="50">

        <div class="card">

            <div class="header">
                <h2 class="title">{{$ctrl.title}}</h2>
            </div>
            <div class="content">
    
                <ul ng-repeat="b in $ctrl.flights" class="list-group">
                    <li class="list-group-item">
                        <a ng-click="$ctrl.select(b)">{{b.flightNumber}}, {{b.from}} - {{b.to}}, {{b.date | date:'short'}}</a>
                    </li>
                </ul>

            </div>
        </div>
    </div>  
    `
}