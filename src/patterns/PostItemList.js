import Link from '../infra/Link'

export default function PostItemList(props){
    const post = props.children; 
    return (
        <li key={post.slug}>
            <article className='p-4 m-2 space-y-2 border-2 border-darkSecundary border-dashed'>
                <h2 className='text-2xl'>
                <Link href={post.href}>
                    {post.title}
                </Link>
                </h2>
                <p>
                {post.excerpt}
                </p>
            </article>
        </li>
    )
}