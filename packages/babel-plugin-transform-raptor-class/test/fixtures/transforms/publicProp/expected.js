import _tmpl from "./actual.html";
export default class Test {
    test = 1;
    string = "some value";

    foo() {}

    render() {
        return _tmpl;
    }

}
Test.publicProps = {
    test: {
        config: 3,
        type: "number"
    },
    string: {
        config: 3,
        type: "string"
    }
};
