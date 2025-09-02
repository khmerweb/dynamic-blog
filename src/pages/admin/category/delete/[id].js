// src/pages/admin/category/delete/[id].js
import categoryDb from "../../../../models/category.js"

export async function GET({ session, params, redirect, cookies }){
    const user = await session.get('user')

    if(user.role === 'Admin'){
        await categoryDb.deleteCategory(params)
        cookies.set('form', JSON.stringify({success:true, info:'លុប​បាន​ដោយ​ជោគជ័យ!'}), { path: '/' })
    }else{
        cookies.set('form', JSON.stringify({success:false, info:'អ្នក​គ្មាន​សិទ្ធិ​លុប​ជំពូក​បាន​ឡើយ​!'}), { path: '/' })
    }

    return redirect('/admin/category')
}