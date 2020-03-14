/// <reference types="cypress" />
const currencies = ['EUR', 'CAD', 'HKD', 'ISK', 'PHP', 'DKK', 'HUF', 'CZK', 'AUD', 'RON', 'SEK', 'IDR', 'INR', 'BRL', 'RUB', 'HRK', 'JPY', 'THB', 'CHF', 'SGD', 'PLN', 'BGN', 'TRY', 'CNY', 'NOK', 'NZD', 'ZAR', 'USD', 'MXN', 'ILS', 'GBP', 'KRW', 'MYR'];

describe('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Assert elements on the page', () => {
        cy.get('h1')
            .should('have.text', "Currency exchange")
            .should('have.css', 'color', 'rgb(10, 113, 191)')
            .should('have.css', 'font-weight', '800')
            .should('have.css', 'font-family', '-apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif')
            .should('have.css', 'font-weight', '800')

    });
    it('Check the default elements on the selectors', () => {
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
            .should('have.value', '1')
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
            .should('have.value', '1')
        cy.get(':nth-child(3) > .MuiInputBase-root > .MuiSelect-root').focus()
            .should('have.text', 'EUR')
        cy.get(':nth-child(4) > .MuiInputBase-root > .MuiSelect-root').focus()
            .should('have.text', 'EUR')
    })

    it('Make sure the user can only input numbers', () => {
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear()
            .type('lalalalla{enter}')
            .should('have.value', '')
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear()
            .type('-=/?.,~!\]=r+bhjj{enter}')
            .should('have.value', '')
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear()
            .type('23abc5{enter}')
            .should('have.value', '235')
    });

    it('The dropdown is showing currency list', () => {
        cy.get(':nth-child(3) > .MuiInputBase-root > .MuiSelect-root', { force: true }).click();
        currencies.forEach(currency => {
            cy.get('.MuiList-root', { force: true }).scrollIntoView()
                .get(`[data-value=${currency}]`)
        });
    });

});