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

    it('chage a month ', () => {

        cy.contains('Next').click()

            const d1 = new Date();
            d1.setMonth(d1.getMonth()+1);
            let nextMonth = d1.toLocaleString('default', { month: 'long' })

        cy.contains(nextMonth).should('exist')
      })


})