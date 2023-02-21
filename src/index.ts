function printCoordinates(pt: {x: number, y: number}) {
    console.log(`x: ${pt.x} , y: ${pt.y}`);
}

// printCoordinates({x: 5, y:10});

function welcomePeople(names: string[] | string) {
    if (Array.isArray(names)) {
        console.log(`Welcome ${names.join(" and ")}`);
    }
    else {
        console.log(`Welcome Mr/Mrs/Miss ${names}`);
    }
}

// welcomePeople(["Soumaila", "Issac", "Hamilton"]);
// welcomePeople("Moussa");

