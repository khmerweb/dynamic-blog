// src/pages/admin/page/delete/[id].js
import pageDb from "../../../../models/page.js"

export async function GET({ params, redirect, session, cookies }){
    const user = await session.get('user')
    if(!user){return redirect('/login')}
    
        if(user.role === 'Admin'){
            await pageDb.deletePage(params)
            cookies.set('form', JSON.stringify({success:true, info:'លុប​បាន​ដោយ​ជោគជ័យ!'}), { path: '/' })
        }else{
            cookies.set('form', JSON.stringify({success:false, info:'អ្នក​គ្មាន​សិទ្ធិ​លុប​ទំព័រ​ស្តាទិក​ទេ!'}), { path: '/' })
        }
    
    return redirect('/admin/page')
}