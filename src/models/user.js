//models/user.js
//npm install bcryptjs

import bcrypt from "bcryptjs"
import prisma from './prisma.js'

class User{
    async count(){
        return await prisma.user.count()
    }
    async createRootUser(){
        const hashPassword = bcrypt.hashSync("password", 8)
        await prisma.user.create({
            data: {
                id: crypto.randomUUID(),
                email: "sokhavuth@khmerweb.app",
                title: "Sokhavuth",
                password: hashPassword,
                role: "Admin",
                thumb: "",
                content: "",
                date: "",
            }
        })
    }

    async checkUser(Email){
        return await prisma.user.findUnique({ where: { email: Email }})
    }
/*
    async getUsers(req, amount){
        return await req.prisma.user.findMany({ 
            take: amount, 
            orderBy: [{ date: "desc" }, { id: "desc" }],
        })
    }

    async createUser(req){
        const hashedPassword = bcrypt.hashSync(req.body.password, 8)

        const user = {
            id: randomUUID(),
            title: req.body.title,
            password: hashedPassword,
            email: req.body.email,
            role: req.body.role,
            thumb: req.body.thumb,
            content: req.body.content,
            date: req.body.datetime,
        }

        await req.prisma.user.create({ data: user })
    }

    async getUser(req){
        return await req.prisma.user.findUnique({ where: {id: req.params.id }})
    }

    async updateUser(req){
        const user = await this.getUser(req)
        let hashedPassword
        if(req.body.password !== user.password){
            hashedPassword = bcrypt.hashSync(req.body.password, 8)
        }else{
            hashedPassword = req.body.password
        }

        const newUser = {
            title: req.body.title,
            password: hashedPassword,
            email: req.body.email,
            thumb: req.body.thumb,
            content: req.body.content,
            date: req.body.datetime,
        }
     
        await req.prisma.user.update({ where: {id: req.params.id }, data: newUser })
    }

    async deleteUser(req){
        await req.prisma.user.delete({ where: {id: req.params.id } })
    }

    async paginateUsers(req, amount){
        const users = await req.prisma.user.findMany({ 
            orderBy: [{ date: "desc" }, { id: "desc" }],
            skip: amount * (parseInt(req.body.page)-1),
            take: amount,
        })

        return users
    }
*/
}

export default new User()