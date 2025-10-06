const express = require('express')
const { v4: uuidv4 } = require('uuid');

const app = express()

const PORT = 3000

app.use(express.json())

// Armazena produtos (simulando banco de dados)
let produtos = []

// Criar produto 
app.post('/produtos', (req,res)=>{
    const {nome, descricao, preco, categoria} = req.body  // Colocando informacoes necessarias dentro do corpo de requisicao para serem consumidas
    if (!nome || !descricao || !preco || !categoria){
        res.status(400).json({mensagem: 'Todos os campos sao obrigatorios'})

    }
    const novoProduto ={
        id: uuidv4(),
        nome,
        descricao,
        preco,
        categoria,
    }
    produtos.push(novoProduto)
    res.status(201).json(novoProduto)
})

// Buscar todos produtos

app.get('/produtos', (req,res)=>{
    res.status(200).json(novoProduto)
})

// Busca o produto atraves do ID 

app.get('/produtos/:id', (req,res)=>{

    const { id }  = req.params // Define o id como paramentro da requisicao, ou seja, ele vai substituir no ":id" da rota pelo id do produto 
    const produto = produtos.find(p => p.id === id)// Usa o metodo find() para procurar o produto correspondente ao ID passado na requisicao.

        if (!produto) {
            return res.status(404).json({ mensagem: 'Produto nao encontrado' });
        }
        res.status(200).json(produto)
    })

// Editar produto 
// Porque usamos o put em vez do path , o put ao longo prazo vale mais a pena pois nao a chance de ter chaves e valores duplicados
app.put('/produtos/:id', (req,res)=>{
    const { id }  = req.params
    const {nome, descricao, preco, categoria} = req.body  // O usuario vai ter que editar preencher todos os campos de novo 
    // Busca a posicao (indice) do produto no array, comparando os IDs
    const produtoIndex = produtos.findIndex(p => p.id === id)
        // -1 e usando quando a funcao findindex nao retorna nada 
     if (produtoIndex === -1) {
        return res.status(404).json({ mensagem: 'Produto nao encontrado' })
    }
    // Cria um novo objeto combinando o objeto original com o novo
    produtos[produtoIndex] = Object.assign(
        {}, 
    produtos[produtoIndex], 
    { 
        nome: nome || produtos[produtoIndex].nome,
        descricao: descricao || produtos[produtoIndex].descricao,
        preco: preco || produtos[produtoIndex].preco,
        categoria: categoria || produtos[produtoIndex].categoria
    }
)
}) 

// Deletar produto
app.delete('/produtos/:id', (req, res)=>{
    const { id } = req.params
    const produtoIndex = produtos.findIndex(p => p.id === id)

     if (produtoIndex === -1) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }
    // splice serve para excluir um produto de um array e os parametros (produtoindex = serve para localizar o indice do produto |1 = serve para especificar quantos elementos vao ser removidos
    produtos.splice(produtoIndex, 1);
    res.status(204).send('Produto deletado com sucesso');

})
     

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})





