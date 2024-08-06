import App from "./App.vue";

describe("<App />", () => {
    it("renders page", () => {
        cy.mount(App);
        cy.get('input').click()
       
       
    });
    it("another test", () => {
        cy.mount(App);
        // By default the media mode is screen
        cy.get('input').click()

    });
});
