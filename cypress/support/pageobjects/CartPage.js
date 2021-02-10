/// <reference types="Cypress" />

const cart = require('../elements/CartElements').ELEMENTS;
const url = Cypress.config("baseUrl");

class CartPage {
    acessarSite(){
        cy.visit(url);
    }
    
    pesquisarProduto(){
        cy.get(cart.pesquisar).type('Faded Short Sleeve');
        cy.get(cart.botaoPesquisar).click();
    }

    adicionarCarrinho(){
        cy.get(cart.escolherProduto).click();
        cy.get(cart.confirmaEscolha).click();
        cy.get(cart.confirmaProduto).contains('Faded Short Sleeve T-shirts');
    }

}
export default new CartPage();


