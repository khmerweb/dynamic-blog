// src/models/page.js
import prisma from './prisma.js'

class Page{
    async count(){
        return await prisma.page.count()
    }

    async getPages(amount){
        return await prisma.page.findMany({ 
            take: amount, 
            orderBy: [{ date: "desc" }, { id: "desc" }]
        })
    }

    async createPage(page){
        const new_page = {
            id: crypto.randomUUID(),
            title: page.title,
            content: page.content,
            thumb: page.thumb,
            date: page.date
        }
        
        await prisma.page.create({ data: new_page })
    }

    async getPage(params){
        return await prisma.page.findUnique({ where: {id: params.id }})
    }

    async updatePage(page, params){
        let newvalue = {
            title: page.title,
            content: page.content,
            thumb: page.thumb,
            date: page.date,
        }
     
        await prisma.page.update({ where: {id: params.id }, data: newvalue })
    }

    async deletePage(params){
        await prisma.page.delete({ where: {id: params.id } })
    }

    async paginatePages(page, amount){
        const pages = await prisma.page.findMany({ 
            orderBy: { date: "desc" },
            skip: amount * (page-1),
            take: amount
        })

        return pages
    }
}

export default new Page()