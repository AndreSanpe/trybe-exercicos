var TV = /** @class */ (function () {
    function TV(b, s, r, c) {
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connetions = c;
    }
    TV.prototype.turnOn = function () {
        console.log("The tv brand is ".concat(this.brand, " your size ").concat(this.size, ", your resolution ").concat(this.resolution, ", your connected to ").concat(this.connectedTo));
    };
    return TV;
}());
;
var newTv = new TV('lg', 55, 4, 'all tvs');
newTv.turnOn();
