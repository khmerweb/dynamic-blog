// src/pages/admin/post/paginate/[page].js
import categoryDb from "../../../../models/category.js"
import setup from "../../../../settings.js"

export async function GET({ params }) {
    const page = parseInt(params.page)
    const settings = await setup()
    const items = await categoryDb.paginate(page, settings.dashboard)
    
    return new Response(
        JSON.stringify(items)
    )
}