let Parse = require('parse/react-native');
let moment = require('moment-timezone');

class Event extends Parse.Object {
    constructor() {
        super('Event');

        this.timeZone = 'GMT';
    }

    isToday() {
        let start = this.get('start');
        let end = this.get('end');

        return moment.tz(start, this.timeZone) < moment.tz(this.timeZone).add(1, 'days').hour(0);
    }

    hasStarted() {
        let start = this.get('start');
        return moment.tz(start, this.timeZone) < moment.tz(this.timeZone);
    }

    hasEnded() {
        let end = this.get('end');
        return moment.tz(end, this.timeZone) > moment.tz(this.timeZone);
    }

    isStartingSoon() {
        let start = this.get('start');
        return moment.tz(start, this.timeZone) > moment.tz(this.timeZone).add(3, 'hours') && !this.hasStarted();
    }

    getDistanceInMiles(lat1, lon1) {
        let lat2 = this.get('location').latitude;
        let lon2 = this.get('location').longitude;

        let R = 3961; // km (change this constant to get miles)
        //var R = 6371; // Radius of the earth in km
        var dLat = this._deg2rad(lat2-lat1);  // deg2rad below
        var dLon = this._deg2rad(lon2-lon1);
        var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(this._deg2rad(lat1)) * Math.cos(this._deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c; // Distance in km
        return d;
    }

    _deg2rad(deg) {
        return deg * (Math.PI/180)
    }
}

Parse.Object.registerSubclass('Event', Event);

module.exports = Event;
