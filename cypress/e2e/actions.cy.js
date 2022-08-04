import data from "../fixtures/data.json"

describe("Actions test suite", () => {
  beforeEach(() => {
    // cy.visit("/" + "login.html")
    cy.fixture("data").as("data")
  })
  it("Doubleclick test case", () => {
    cy.visit("/" + "double-click.html")
    cy.get("#double-click-btn").click()
    cy.get("#double-click-result").should(
      "not.have.text",
      data.actions.doubleClickMessage
    )

    cy.get("#double-click-btn").dblclick()
    cy.get("#double-click-result").should(
      "have.text",
      data.actions.doubleClickMessage
    )
  })
  it.only("Schould scrolling down", () => {
    cy.visit("/" + "scroll.html")
    cy.scrollTo("bottom")
    cy.get("#the-end").should("be.visible").and("have.text", data.actions.end)
  })
  it.only("Mouse hover", () => {
    cy.visit("/" + "mouse-hover.html")

    cy.get("#button-hover-over").trigger("mouseover")
    cy.get(".hide")
      .invoke("show")
      .click()
      .should("be.visible")
      .and("contain", data.actions.hoverText)
  })
})
