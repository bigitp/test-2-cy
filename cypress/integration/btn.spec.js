/// <reference types="cypress" />

describe('buttons functionality', () => {
    beforeEach(() => {
 
      cy.visit("")
    })

    it('check is opening a new event modal', () => {

        cy.get('.currentDay').click()

        cy.contains('New Event').should('exist')
      })

    it('check is opening a new event modal', () => {

        cy.contains('14').click()

        cy.contains('New Event').should('exist')
      })

    it('change a month ', () => {

        cy.contains('Next').click()

            const d1 = new Date();
            d1.setMonth(d1.getMonth()+1);
            let nextMonth = d1.toLocaleString('default', { month: 'long' })

        cy.contains(nextMonth).should('exist')
      })

      it('check is saveing new event', () => {

        cy.get('.currentDay').click()

        cy.get('#eventTitleInput').type('Have to go to meeting')
        cy.contains('Save').click()

        cy.get('.currentDay').click()
        cy.contains('Delete').should('exist')

      })

      it('check is Cancel btn closing a new event modal', () => {

        cy.get('.currentDay').click()
        cy.contains('Cancel').click()

        cy.contains('New Event').should('not.exist')
      })

      it('check is padding day is not clicable', () => {

        cy.get('.padding').click({ multiple: true })

        cy.contains('New Event').should('not.exist')
      })



})