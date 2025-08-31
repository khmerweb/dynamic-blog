// src/pages/admin/post/delete/[id].js
import postDb from "../../../../models/post.js"

export async function GET({ session, params, redirect, cookies }){
    const user = await session.get('user')
    const post = await postDb.getPost(params)

    if(user.role !== 'Admin'){
        if(post.author === user.id){
            await postDb.deletePost(params)
            cookies.set('form', JSON.stringify({success:true, info:'លុប​បាន​ដោយ​ជោគជ័យ!'}), { path: '/' })
        }else{
            cookies.set('form', JSON.stringify({success:false, info:'អ្នក​មិន​អាច​លុប​ការផ្សាយ​របស់​អ្នក​ផ្សេង​បាន​ឡើយ​!'}), { path: '/' })
        }
    }else if(user.role === 'Admin'){
        await postDb.deletePost(params)
        cookies.set('form', JSON.stringify({success:true, info:'លុប​បាន​ដោយ​ជោគជ័យ!'}), { path: '/' })
    }

    return redirect('/admin/post')
}