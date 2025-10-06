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

app.get('/produtos/:id')

    const { id }  = req.params // Define o id como paramentro da requisicao, ou seja, ele vai substituir no ":id" da rota pelo id do produto 
    const produto = produtos.find(p => p.id === id);// Usa o metodo find() para procurar o produto correspondente ao ID passado na requisicao.

        if (!produto) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' });
        }
        res.status(200).json(produto);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})




