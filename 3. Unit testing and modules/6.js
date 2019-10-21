let expect = require('chai').expect;

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

//Unit Tests

describe('rgbToHexColor', function () {
    // valid cases
    it('should return #000000 for input (0, 0, 0)', function () {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000");
    });
    it('should return #FFFFFF for input (0, 0, 0)', function () {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
    });
    it('should return #FFFFFF for input (192, 170, 0)', function () {
        expect(rgbToHexColor(192, 170, 0)).to.be.equal("#C0AA00");
    });

    // invalid cases
    it('should return undefined due to range error of parameters', function () {
        expect(rgbToHexColor(1922, 170, 0)).to.be.equal(undefined);
    });
    it('should return undefined due to range error of parameters', function () {
        expect(rgbToHexColor(-1, -2, -3)).to.be.equal(undefined);
    });
    it('should return undefined due to type of parameters', function () {
        expect(rgbToHexColor('1922', 170, 0)).to.be.equal(undefined);
    });
    it('should return undefined due to empty parameters', function () {
        expect(rgbToHexColor()).to.be.equal(undefined);
    });
    it('should return undefined for ("5", [3], {8:9})', function () {
        expect(rgbToHexColor("5", [3], {8:9})).to.be.equal(undefined);
    });
    it("should return undefined for (0,0,3.14)", function () {
        expect(rgbToHexColor(0, 0, 3.14)).to.be.equal(undefined);
    });
})

