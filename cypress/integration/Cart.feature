Feature: Carrinho de Compras 
    Sendo um visitante do site 
    Quero fazer a pesquisa do produto
    Para que eu possa adicionar ao meu carrinho
    
    Scenario: Adicionar produto ao carrinho
        Given acesso o site
        When pesquiso produto 
        Then devo visualizar produto adicionado ao carrinho
