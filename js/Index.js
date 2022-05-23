const listaProdutos = document.querySelector('.listaProdutos')

const todos = document.querySelector('.todos')
todos.addEventListener('click', adicionarTodos)
function adicionarTodos(){
    listaProdutos.innerHTML = ''
    const produtosSelecionados = []
        for(let i = 0; i < data.length; i++){
            if(data[i].tag == 'Acessórios' || 'Calçados' || 'Camisetas'){
                produtosSelecionados.push(data[i])
            }
        }
        listarProdutos(produtosSelecionados)
}

const acessorios = document.querySelector('.acessorios')
acessorios.addEventListener('click', adicionarAcessorios)
function adicionarAcessorios(){
    listaProdutos.innerHTML = ''
    const produtosSelecionados = []
        for(let i = 0; i < data.length; i++){
            if(data[i].tag == 'Acessórios'){
                produtosSelecionados.push(data[i])
            }
        }
        listarProdutos(produtosSelecionados)
}

const calcados = document.querySelector('.calcados')
calcados.addEventListener('click', adicionarCalcados)
function adicionarCalcados(){
    listaProdutos.innerHTML = ''
    const produtosSelecionados = []
        for(let i = 0; i < data.length; i++){
            if(data[i].tag == 'Calçados'){
                produtosSelecionados.push(data[i])
            }
        }
        listarProdutos(produtosSelecionados)
}

const camisetas = document.querySelector('.camisetas')
camisetas.addEventListener('click', adicionarCamisetas)
function adicionarCamisetas(){
    listaProdutos.innerHTML = ''
    const produtosSelecionados = []
        for(let i = 0; i < data.length; i++){
            if(data[i].tag == 'Camisetas'){
                produtosSelecionados.push(data[i])
            }
        }
        listarProdutos(produtosSelecionados)
}

function criarCardProduto (produtos){
    let{img, tag, nameItem, description, value, addCart} = produtos

    const tagLi               = document.createElement('li')
    const tagImg              = document.createElement('img')
    const tagDiv              = document.createElement('div')
    const tagTipoProduto      = document.createElement('p')
    const tagNomeProduto      = document.createElement('p')
    const tagProdutoDescricao = document.createElement('p')
    const tagProdutoPreco     = document.createElement('p')
    const tagButton           = document.createElement('button')

    tagLi.classList.add('produto')
    tagImg.classList.add('imagemProduto')
    tagDiv.classList.add('especificacao')
    tagTipoProduto.classList.add('tipoProduto')
    tagNomeProduto.classList.add('nomeProduto')
    tagProdutoDescricao.classList.add('produtoDescricao')
    tagProdutoPreco.classList.add('produtoPreco')
    tagButton.classList.add('adicionar')

    tagImg.src                    = img
    tagImg.alt                    = nameItem
    tagTipoProduto.innerText      = tag 
    tagNomeProduto.innerText      = nameItem
    tagProdutoDescricao.innerText = description
    tagProdutoPreco.innerText     = `R$ ${value}`
    tagButton.innerText           = addCart
    tagButton.addEventListener('click', () =>{
        adicionar(produtos);
        listaProdutosAdicionados(produtosCarrinho)
    })

    tagDiv.append(tagTipoProduto, tagNomeProduto, tagProdutoDescricao, tagProdutoPreco, tagButton)
    tagLi.append(tagImg, tagDiv)

    return tagLi
}

let totalColocado = 0
let totalSomado = 0

const produtosCarrinho = []
function adicionar(produtos) {
    produtosCarrinho.push(produtos)
    atualiza()
}

function atualiza(){
    totalColocado = 0
    totalSomado = 0
    for(let i = 0; i < produtosCarrinho.length; i++) {
        totalColocado += 1
        totalSomado += produtosCarrinho[i].value
    }
}

function listarProdutos(arrayDeProdutos){
    if(arrayDeProdutos.length == 0){
        const tagP = document.createElement('p')
        tagP.classList.add('semProdutos')
        tagP.innerText = 'Produto Indisponível :('
        listaProdutos.appendChild(tagP)
    } else {
        for(let i = 0; i < arrayDeProdutos.length; i++){
            const produto = arrayDeProdutos[i]
    
            const cardProduto = criarCardProduto(produto)
            listaProdutos.appendChild(cardProduto)
        }
    }
}

function criarProdutosAdicionados(produtos, i){
    let{img, nameItem, value} = produtos

    const tagDivs     = document.createElement('div')
    const tagImagem   = document.createElement('img')
    const tagDivDois  = document.createElement('div')
    const tagNameItem = document.createElement('p')
    const tagValue    = document.createElement('p')
    const tagBotao    = document.createElement('button')

    tagDivs.classList.add('produtosCarrinho')
    tagImagem.classList.add('fotoNoCarrinho')
    tagNameItem.classList.add('nomeCarrinho')
    tagValue.classList.add('precoCarrinho')
    tagBotao.classList.add('remover')

    tagImagem.src         = img
    tagImagem.alt         = nameItem
    tagNameItem.innerText = nameItem
    tagValue.innerText    = `R$ ${value}`
    tagBotao.innerText    = 'Remover Produto'
    tagBotao.addEventListener('click', function () {
        produtosCarrinho.splice(i, 1);
        atualiza()
        listaProdutosAdicionados(produtosCarrinho);
      });

    tagDivDois.append(tagNameItem, tagValue, tagBotao)
    tagDivs.append(tagImagem, tagDivDois)

    return tagDivs
}

function listaProdutosAdicionados(listaProduto){
const produtosAdicionados = document.querySelector('.produtosAdicionados')
    produtosAdicionados.innerHTML = ''

    if(listaProduto.length > 0){
        for(let i = 0; i < listaProduto.length; i++){
            const adicionado = listaProduto[i]
    
            const criacao = criarProdutosAdicionados(adicionado, i)
            produtosAdicionados.appendChild(criacao)
        }
    } else {
      const tagDivisoria = document.createElement('div')
      tagDivisoria.classList.add('mensagem')

      const tagH2 = document.createElement('h2')
      tagH2.classList.add('carrinhoVazio')
      tagH2.innerText = "Carrinho Vazio"
      tagDivisoria.appendChild(tagH2)

      const tagH3 = document.createElement('h3')
      tagH3.classList.add('adicioneItens')
      tagH3.innerText = "Adicione Itens"
      tagDivisoria.appendChild(tagH3)

      produtosAdicionados.appendChild(tagDivisoria)

    }

    const quantAdicionada = document.querySelector('.quantAdicionada')
    quantAdicionada.innerText = `${totalColocado}`
    if(quantAdicionada.innerText == '0'){
        quantAdicionada.innerText = '-'
    }
    const totSomado = document.querySelector('.totSomado')
    totSomado.innerText = `R$ ${totalSomado}`
    if(totSomado.innerText == 'R$ 0'){
        totSomado.innerText = '-'
    }
}
listaProdutosAdicionados(produtosCarrinho)
listarProdutos(data)




