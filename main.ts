import * as graphviz from "@ts-graphviz/node";

(async function test() {
    await graphviz.exportToFile('digraph g { a -> b }', {
        format: "png",
        output: 'example.png',
    });
})()
