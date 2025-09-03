// src/models/page.js
import prisma from './prisma.js'

class Page{
    async count(){
        return await prisma.page.count()
    }

    async getPages(req, amount){
        return await req.prisma.page.findMany({ 
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

    async getPage(req){
        return await req.prisma.page.findUnique({ where: {id: req.params.id }})
    }

    async updatePage(req){
        let newvalue = {
            title: req.body.title,
            content: req.body.content,
            thumb: req.body.thumb,
            date: req.body.datetime,
        }
     
        await req.prisma.page.update({ where: {id: req.params.id }, data: newvalue })
    }

    async deletePage(req){
        await req.prisma.page.delete({ where: {id: req.params.id } })
    }

    async paginatePages(req, amount){
        const pages = await req.prisma.page.findMany({ 
            orderBy: [{ date: "desc" }, { id: "desc" }],
            skip: amount * (parseInt(req.body.page)-1),
            take: amount
        })

        return pages
    }
}

export default new Page()