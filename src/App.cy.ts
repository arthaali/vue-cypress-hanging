import App from "./App.vue";

describe("<App />", () => {
    it("renders page", () => {
        // cy.on("uncaught:exception", (err) => {
        //     console.log("errrrrrrrrr", err);
        //     // returning false here prevents Cypress from failing the test
        //     return false;
        // });
        cy.mount(App);
        cy.get('input').click()
       
       
    });
    it("another test", () => {
        cy.mount(App);
        // By default the media mode is screen
        cy.get('input').click()

    });
});
