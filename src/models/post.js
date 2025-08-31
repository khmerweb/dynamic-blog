// src/models/post.js
import prisma from './prisma.js'

class Post{
    async createPost(post, user){
        let new_post = {}
        const expireTime = 1000 * 60 * 60 * 24 * 30 * 3

        if(post.categories.includes('news')){
            new_post = {
                id: crypto.randomUUID(),
                title: post.title,
                content: post.content,
                categories: post.categories,
                thumb: post.thumb,
                date: post.datetime,
                videos: post.videos,
                author: user.id,
                expiration: new Date(new Date().getTime() + expireTime),
            }
       
        }else{ 
            new_post = {
                id: crypto.randomUUID(),
                title: post.title,
                content: post.content,
                categories: post.categories,
                thumb: post.thumb,
                date: post.datetime,
                videos: post.videos,
                author: user.id,
            }
        }
        
        await prisma.post.create({ data: new_post })
    }

    async count(query={}){
        return await prisma.post.count(query)
    }

    async getPosts(amount){
        return await prisma.post.findMany({ 
            take: amount, 
            orderBy: { date: "desc" }
        })
    }

    async getPost(params){
        return await prisma.post.findUnique({ where: {id: params.id }})
    }

    async deletePost(params){
        await prisma.post.delete({ where: {id: params.id } })
    }

    async updatePost(newPost, params){
        await prisma.post.update({ where: {id: params.id }, data: newPost })
    }
}

export default new Post()