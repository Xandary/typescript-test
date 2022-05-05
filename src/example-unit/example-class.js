"use strict";
exports.__esModule = true;
exports.MyClass = void 0;
var MyClass = /** @class */ (function () {
    function MyClass(aNumber) {
        this.aNumber = aNumber;
    }
    MyClass.prototype.get = function () {
        return this.aNumber;
    };
    return MyClass;
}());
exports.MyClass = MyClass;
