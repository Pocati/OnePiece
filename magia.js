/*objetivo 1

QUando clicar no botao do personagem, marcar o botão selecionado
    passo 1 - pegar os botoes no js pra poder verificar quando o usuario clicar nele
    passo 2 adicionar a classe selecionado no botao que o usuário clicou
    passo 3 - verificar se já existe um botao selecionado, se sim, devemos remover a seleção dele

Objetivo 2

Quando clicar no botão do personagem, mostrar as informações do personagem

    passo 1 - pegar os personagens no JS pra mostrar ou esconder ele
    passo 2 - adicionar a classe selecionado no personagem que o usuario selecionou
    passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover ele*/


const botoes = document.querySelectorAll('.botao')
const personagens = document.querySelectorAll('.personagem')

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        
        const botaoSelecionado = document.querySelector(".botao.selecionado")

        botaoSelecionado.classList.remove("selecionado")

        botao.classList.add("selecionado")

        const personagemSelecionado = document.querySelector(".personagem.selecionado")

        personagemSelecionado.classList.remove("selecionado")

        personagens[indice].classList.add("selecionado")


    })
})