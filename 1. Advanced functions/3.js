function solve() {
    let str = '';
    return {
        append: (s) => str += s,
        removeStart: (n) => str = str.substring(n),
        removeEnd: (n) => str = str.substring(0, str.length - n),
        print: () => console.log(str)

    }
}

let manipulator = solve();
let secondManipulator = solve();
manipulator.append('Hello');
manipulator.print()
secondManipulator.append('Prependeasd')
secondManipulator.print()
