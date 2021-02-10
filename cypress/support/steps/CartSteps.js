const { Given, When, Then} = require("cypress-cucumber-preprocessor/steps")

import CartPage from '../pageobjects/CartPage';
const cartPage = CartPage

Given("acesso o site", () => {
    cartPage.acessarSite();
})

When("pesquiso produto", () => {
    cartPage.pesquisarProduto();
})

Then("devo visualizar produto adicionado ao carrinho", () => {
    cartPage.adicionarCarrinho();
})