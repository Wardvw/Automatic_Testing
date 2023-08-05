describe("Basic Auth functionality", () => {
    it('Login basic auth', () => {
        cy.log('Handle basic authentication with the credentials in the URL like this: https://username:password@www.example.com/'); //clarification
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth'); // Visiting the page with basic authentication
        cy.contains('Congratulations! You must have the proper credentials.').should('be.visible'); // Verifying the successful authentication message
    });

    it('Logout basic auth', () => {
        cy.log('Simulate logout by clearing cookies and re-authenticating'); //clarification
        cy.clearCookies(); // Clearing cookies
        cy.clearLocalStorage(); // Clearing local storage
        cy.visit('https://the-internet.herokuapp.com');
        cy.contains("Basic Auth").click(); // Clicking the "Basic Auth" link to trigger re-authentication
    });
});

describe("Horizontal Slider functionality", () => {
    it('Should verify all possible slider states', () => {
        cy.visit('https://the-internet.herokuapp.com/horizontal_slider');
        cy.get('input[type="range"]').as('slider'); // Getting the slider input element and giving it an alias

        for (let value = 0; value <= 5; value++) {
            cy.get('@slider').invoke('val', value).trigger('input'); // Changing slider value //* Instead of sliding the slider, which changes the sliders value, we manipulate the value, causing it to slide
            cy.get('@slider').should('have.value', value.toString()); // Verifying slider value
        }
    });
});

describe("Key Presses functionality", () => {
    it('Should verify displayed key on key press', () => {
        cy.visit('https://the-internet.herokuapp.com/key_presses');
        cy.get('#target').as('inputField'); // Getting the input element for typing and giving it an alias
        cy.get('@inputField').type('a'); // Typing the key 'a' into the input field
        cy.get('#result').should('have.text', `You entered: A`); // Verifying that the displayed key matches the pressed key
    });
});
