import Default from '../../src/templates/Default';
import getAllPostsByCategory from '../../scripts/blog/getAllPostsByCategory';
import PostsList from '../../src/patterns/PostsList';

export default function Category({category, posts}) {
  return(
    <Default title={category}>
      <section className='m-4 p-2' id='{category}-section'>
        <h1 className='text-3xl'>Postagens da seção: {category}</h1>
        <PostsList id={category} posts={posts}/>
      </section>
    </Default>
  )
}

export async function getStaticProps(context) {
  const category = context.params.category
  let posts = getAllPostsByCategory(category);
  return {
    props: {
      category: category,
      posts: posts.map((post)=>(
        {
          title: post.metadata.title,
          slug: post.metadata.slug,
          href: post.metadata.href,
          excerpt: post.metadata.excerpt,
        }
      ))
    },
    // revalidate: 9999999
  }
}

export async function getStaticPaths(){
  let categories = ['novidades', 'diario', 'educativo', 'recomendacao']
  categories = categories.map((category) => ({params: {category}}))

  return {
    paths: categories,
    fallback: false
  }
}