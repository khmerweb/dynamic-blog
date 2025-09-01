// models/category.js

import prisma from './prisma.js'

class Category{
    async count(){
        return await prisma.category.count()
    }

    async createCategory(category){
        await prisma.category.create({
            data: {
                id: crypto.randomUUID(),
                title: category.title,
                thumb: category.thumb,
                date: category.date,
            }
        })
    }

    async getCategories(amount){
        const categories = await prisma.category.findMany({ 
            take: amount, 
            orderBy: [{ date: "desc" }, { id: "desc" }]
        })

        return categories
    }

    async getAllItems(){
        const categories = await prisma.category.findMany({  
            orderBy: [{ date: "desc" }, { id: "desc" }]
        })

        return categories
    }

    async getCategory(req){
        return await req.prisma.category.findUnique({ where: {id: req.params.id }})
    }

    async updateCategory(req){
        const updatedCategory = {
            title: req.body.label,
            thumb: req.body.thumb,
            date: req.body.datetime,
        }
        
        await req.prisma.category.update({ where: {id: req.params.id }, data: updatedCategory })
    }

    async deleteCategory(req){
        await req.prisma.category.delete({ where: {id: req.params.id } })
    }

    async paginate(req, amount){
        const categories = await req.prisma.category.findMany({ 
            orderBy: [{ date: "desc" }, { id: "desc" }],
            skip: amount*(parseInt(req.body.page-1)),
            take: amount
        })

        return categories
    }
}


export default new Category()