function test() {

    this.name = "test";
    this.getName = function () {
        return this.name;
    }

    this.getName = function () {
        return this.name;
    }
}