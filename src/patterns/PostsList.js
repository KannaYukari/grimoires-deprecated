import PostItemList from './../patterns/PostItemList'

export default function PostsList({id, posts}) {
    const allPosts = posts.map((post) => (
        <PostItemList>{post}</PostItemList>
    ))
    
    return (
        <ul id={id}>
            {allPosts}
        </ul>
    )
}