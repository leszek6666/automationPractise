import data from "../fixtures/data.json"

describe("Login page spec", () => {
  beforeEach(() => {
    cy.visit("/" + "login.html")
    cy.fixture("data").as("data")
  })
  it("Should be not correct login without input data", () => {
    cy.get("#submitLoginBtn").click()
    cy.get("#message").should("contain", data.badLoginMessage)
  })
  it("Should be not correct login", () => {
    cy.get("#email").type(data.email)
    cy.get("#password").type("a")
    cy.get("#submitLoginBtn").click()
    cy.get("#message").should("contain", data.badLoginMessage)
  })
  it("Should be correct login", () => {
    cy.get("#email").type(data.email)
    cy.get("#password").type(data.password)
    cy.get("#submitLoginBtn").click()
    cy.get("#message").should("contain", data.email + data.correctLoginMessage)
  })
})
