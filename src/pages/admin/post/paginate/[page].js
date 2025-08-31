// src/pages/admin/post/paginate/[page].js
import postDb from "../../../../models/post.js"
import setup from "../../../../settings.js"

export async function GET({ params }) {
    const page = parseInt(params.page)
    const settings = await setup()
    const items = await postDb.paginatePosts(page, settings.dashboard)
    
    return new Response(
        JSON.stringify(items)
    )
}