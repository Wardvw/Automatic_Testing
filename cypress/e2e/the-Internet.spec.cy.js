describe("Basic Auth functionality", () => {
    it("Should log in using basic auth", () => {
        cy.log("Handle basic authentication with the credentials in the URL like this: https://username:password@www.example.com/");
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        cy.contains("Congratulations! You must have the proper credentials.").should("be.visible"); // Verifying the successful authentication message
    });

    it("Should log out of basic auth", () => {
        cy.log("Simulate logout by clearing cookies and re-authenticating");
        cy.clearCookies(); // Clearing cookies
        cy.clearLocalStorage(); // Clearing local storage
        cy.visit("https://the-internet.herokuapp.com");
        cy.contains("Basic Auth").click(); // Clicking the "Basic Auth" link to trigger re-authentication
    });
});

describe("Horizontal Slider functionality", () => {
    it("Should verify all possible slider states", () => {
        cy.visit("https://the-internet.herokuapp.com/horizontal_slider");
        cy.get("input[type='range']").as("slider"); // Getting the slider input element and giving it an alias

        for (let value = 0; value <= 5; value += 0.5) { // Loop through slider values from 0 to 5 with a step of 0.5
            cy.get("@slider").invoke("val", value).trigger("input"); // Changing slider value
            cy.get("@slider").should("have.value", value.toString()); // Verifying slider value
        }
    });
});

describe("Key Presses functionality", () => {
    it("Should verify displayed key on key press", () => {
        cy.visit("https://the-internet.herokuapp.com/key_presses");
        cy.get("#target").as("inputField"); // Getting the input element for typing and giving it an alias

        const keysToTest = [..."abcdefghijklmnopqrstuvwxyz0123456789"]; // List of keys to test
        keysToTest.forEach((key) => { // Loop through each key and type it, then verify the displayed result
            cy.get("@inputField").type(key); // Type the current key
            const capitalizedKey = key.toUpperCase(); //website only displays uppercase
            cy.get("#result").should("have.text", `You entered: ${capitalizedKey}`); // Verify the displayed key matches the pressed key
        });
    });
});