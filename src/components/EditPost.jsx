import React, {useEffect, useState} from 'react'
import AddPost from './AddPost';
import appwriteService from '../apppwrite/config';
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {postId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (postId) {
            appwriteService.getPost(postId).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [postId, navigate])
  return post ? (
    <div className='py-8'>
       
            <AddPost post={post} />
        
    </div>
  ) : null
}

export default EditPost