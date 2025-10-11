const express = require('express')
const { v4: uuidv4 } = require('uuid');
const cors = require('cors')

const app = express()

const PORT = 3000

app.use(cors());

app.use(express.json())

// Armazena produtos (simulando banco de dados)
let produtos = []

app.get('/', (req, res)=>{
    res.status(200).json({message: "Codigo funcionando"})
})

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
    res.status(200).json(produtos)
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
app.put('/produtos/:id', (req, res) => {
    const { id } = req.params
    const { nome, descricao, preco, categoria } = req.body
    const produtoIndex = produtos.findIndex(p => p.id === id)
    
    if (produtoIndex === -1) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' })
    }

    // Atualiza o produto mantendo o ID original
    produtos[produtoIndex] = {
        ...produtos[produtoIndex], // Mantém os dados existentes
        nome: nome !== undefined ? nome : produtos[produtoIndex].nome,
        descricao: descricao !== undefined ? descricao : produtos[produtoIndex].descricao,
        preco: preco !== undefined ? preco : produtos[produtoIndex].preco,
        categoria: categoria !== undefined ? categoria : produtos[produtoIndex].categoria
    }

    res.status(200).json(produtos[produtoIndex]) // ← ADICIONE ESTA LINHA
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





