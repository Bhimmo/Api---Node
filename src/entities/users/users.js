const database = require('../../infra/models');

module.exports = class User{

    static async pegarTodosUsers(){
        try{
            const todosUsers = await database.User.findAll();
            return todosUsers;
        }catch(e){
            throw new Error(e.message)
        }
    }

    static async pegarUmUsers(IdParam){
        try{
            const {id} = IdParam;
            const UmUser = await database.User.findOne({
                where: {
                    id: Number(id)
                }
            });
            if(!UmUser){
                throw new Error("Usuário não existe")
            }else{
                return UmUser;
            }
        }catch(e){
            throw new Error(e);
        }
    }

    static async criarUsers(dados){
        try{
            const criaUsers = await database.User.create(dados);
            return criaUsers;
        }catch(e){
            throw new Error(e);
        }
    }

    static async atualizarUsers(IdParam,dados){
        const {id} = IdParam;
        const dadosUser = dados;
        try{
            const criaUsers = await database.User.update(dadosUser, {
                where: {
                    id: Number(id)
                }
            });
            const pegarAtualizado = await database.User.findOne({
                where: {
                    id: Number(id)
                }
            })
            if(!pegarAtualizado){
                throw new Error("Id do Usuário não existe")
            }else{
                return pegarAtualizado;
            }
        }catch(e){
            throw new Error(e.message);
        }
    }

    static async deletarUsers(IdParams,res){
        const {id} = IdParams;
        try{
            const AntesDeDeletar = await database.User.findOne({
                where: {
                    id: Number(id)
                }
            })
            const deletarUsers = await database.User.destroy({
                where: {
                    id: Number(id)
                }
            });
            if(!AntesDeDeletar){
                throw new Error("Id do Usuário não existe")
            }else{
                return AntesDeDeletar;
            }
        }catch(e){
            throw new Error(e)
        }
    }

}