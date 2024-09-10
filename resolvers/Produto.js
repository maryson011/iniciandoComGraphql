export default {
    Produto:{
        precoComDesconto(parent){
            const {preco,desconto} = parent
            return preco * ( 1- desconto )
        }
    },
}