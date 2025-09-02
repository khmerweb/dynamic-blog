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
            orderBy: { date: "desc" }
        })

        return categories
    }

    async deleteCategory(params){
        await prisma.category.delete({ where: {id: params.id } })
    }

    async getAllItems(){
        const categories = await prisma.category.findMany({  
            orderBy: { date: "desc" }
        })

        return categories
    }

    async getCategory(params){
        return await prisma.category.findUnique({ where: {id: params.id }})
    }

    async updateCategory(category, params){
        const updatedCategory = {
            title: category.title,
            thumb: category.thumb,
            date: category.date,
        }
        
        await prisma.category.update({ where: {id: params.id }, data: updatedCategory })
        
    }

    async paginate(page, amount){
        const categories = await prisma.category.findMany({ 
            orderBy: { date: "desc" },
            skip: amount*(page-1),
            take: amount
        })

        return categories
    }
}


export default new Category()