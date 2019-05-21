import * as angular from 'angular';
import {flightsComponent} from "./flights.component";

export default angular
    .module('app', [])
    .component('flights', flightsComponent)
    .config(($locationProvider: angular.ILocationProvider) => {
        $locationProvider.hashPrefix('');
    }).name;