import Default from '../../src/templates/Default';
import getPost from '../../scripts/blog/getPost';
import getAllPostsByCategory from '../../scripts/blog/getAllPostsByCategory';

export default function Post({params, post}) {
  return(
    <Default title={post.title}>
      <section className='m-4 p-2'>
        <h1 className='text-3xl'>{post.title}</h1>
        <article className='border' dangerouslySetInnerHTML={{__html: post.content}}/>        
      </section>
    </Default>
  )
}

export async function getStaticProps({params}) {
  const post = getPost(params.slug);
  return {
    props: {
      params: params,
      post: {
        title: post.metadata.title,
        date: post.metadata.date,
        source: post.metadata.source,
        content: post.content
      }
    }
  }
}

export async function getStaticPaths(){
  const posts = getAllPostsByCategory('all');
  const paths = posts.map(
    (post)=>(
      {
        params: {
          category: post.metadata.category,
          slug: post.metadata.slug,
        }
      }
    )
  )

  return {
    paths: paths,
    fallback: false
  }
}