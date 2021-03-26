it("User can create their first todo", () => {
  // ToDo description text should be present after creation of todo
  /**
   * 0. Visit main view
   * 1. Click some button "Create todo"
   * 2. Type in text field the description of the todo
   * 3. Click a button to save todo
   * 4. Confirm that the todo was created and is visible
   */
  cy.visit("/")

  cy.findByText("Buy milk").should("not.exist")

  cy.findByText("Create Todo").click()
  cy.findByPlaceholderText("Todo description...").type("Buy milk")
  cy.findByText("Save").click()
  cy.contains("Buy milk")
})
