/* Task 1: No Parameters: Activate Hyperdrive */
// TODO: Write an arrow function named `activateHyperdrive` with no parameters that print `"Hyperdrive activated!"` to the console. Call `activateHyperdrive` to test it.

let activateHyperdrive = () => {
     console.log("Hyperdrive Activated!");
};

activateHyperdrive();

/* Task 2: Implicit Return: Scan for Lifeforms */
// TODO: Create an arrow function named `scanForLife` that implicitly returns `"No lifeforms detected"` without using curly braces. Print the result of calling `scanForLife`.

let scanForLife = () => console.log("No lifeforms detected.");

scanForLife();

/* Task 3: Implicit Return with Objects: Log Coordinates */
// TODO: Write an arrow function named `currentCoordinates` that returns an object with properties `x`, `y`, and `z`, representing coordinates in space. Use implicit return. Print the returned object from `currentCoordinates`.

const currentCoordinates = () => ({
     x: 15,
     y: 150,
     z: 48,
});
console.log(currentCoordinates);

/* Task 4: Understanding `this`: Message from Home Base */
// TODO: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax. This method should log `"Message received: "` followed by a message it receives as a parameter. Directly call `receiveMessage` within `spacecraft` and observe. Observe and explain the behavior of `this` in this context as a comment.

const spacecraft = {
     recieveMessage: (message) => {
          console.log(`Message recieved: ${message}`);
     },
};

spacecraft.recieveMessage("test");

/*
 * Observations:
 * TODO: Explain here.
 * The console.log returns the test message succesfully. I did not have to use this for it? But I know that this does not work with arrow functions due to scoping issues.
 */
