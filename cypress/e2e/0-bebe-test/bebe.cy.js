describe("My first test", () => {
  it("Finds an element", () => {
    cy.visit("https://example.cypress.io");

    // cy.pause();

    cy.contains("type").click();

    cy.url().should("include", "/commands");

    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
