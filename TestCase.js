// Import Jasmine
const Jasmine = require('jasmine');
const jasmine = new Jasmine();

// Define the function to be tested
function add(a, b) {
  return a + b;
}

// Describe a test suite
describe('Addition function', () => {
  // Define a test case within the suite
  it('should add two numbers correctly', () => {
    // Arrange
    const num1 = 5;
    const num2 = 3;
    const expectedSum = 8;

    // Act
    const result = add(num1, num2);

    // Assert
    expect(result).toBe(expectedSum);
  });
});

// Run the tests
jasmine.execute();
In this test case:

We import the Jasmine testing framework and create an instance of it.
We define the add function that we want to test.
We use describe to create a test suite for the add function.
Within the suite, we use it to define a specific test case with an expectation.
In the test case, we arrange the inputs (num1 and num2), act by calling the add function, and then assert that the result matches the expected sum using expect.
To run this test case, you'll need to have Jasmine installed in your project, and you can execute it using a test runner or by running the Jasmine CLI.

Remember that this is just a basic example, and real-world test cases can become more complex depending on the functionality you're testing.




User
remove jasmine
ChatGPT
If you want to remove Jasmine from your JavaScript project, you can follow these steps:

Remove Jasmine Dependencies:

If you have Jasmine installed as a development dependency in your project, you can remove it using a package manager like npm or yarn. Run one of the following commands, depending on your package manager:

bash
Copy code
# Using npm
npm uninstall jasmine --save-dev

# Using yarn
yarn remove jasmine --dev
Remove Jasmine Configuration Files:

If you have Jasmine configuration files (such as jasmine.json or jasmine-config.js) in your project, you can delete them.
Remove Test Files:

Delete any test files and directories associated with Jasmine from your project. These are typically files with names ending in .spec.js or .spec.ts if you were using TypeScript.
Update Package Scripts:

If you had npm or yarn scripts for running Jasmine tests in your package.json file, you can remove those scripts or update them to use a different testing framework if needed.
Remove Jasmine-Related Code:

Remove any code related to Jasmine from your project, such as custom matchers or other Jasmine-specific functionality.
Update Build and CI/CD Pipelines:

If you were using Jasmine in your build or continuous integration/continuous deployment (CI/CD) pipelines, make sure to update those configurations to use your new testing framework, if applicable.
Cleanup and Test:

After removing Jasmine, make sure to thoroughly test your project to ensure that it still functions as expected. You may need to replace Jasmine-specific code with equivalent functionality if you're transitioning to a different testing framework.
Optional: Remove Unused Dependencies:

If you have any other dependencies that were only used for Jasmine testing, you can remove them as well to keep your project clean and minimize its size.
Remember that the specific steps may vary depending on your project's structure and the tools you were using alongside Jasmine. Be sure to back up your project or use version control (e.g., Git) to track changes during this process, so you can easily revert if needed.





