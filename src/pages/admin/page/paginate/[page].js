// src/pages/admin/page/paginate/[page].js
import pageDb from "../../../../models/page.js"
import setup from "../../../../settings.js"

export async function GET({ params, session, redirect }){
    const user = await session?.get('user')
    if(!user){return redirect('/login')}

    const settings = await setup()
    const items = await pageDb.paginatePages(params.page, settings.dashboard)
    
    return new Response(
        JSON.stringify(items)
    )
}