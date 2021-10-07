import Default from '../../src/templates/Default';
import getAllPostsByCategory from '../../scripts/blog/getAllPostsByCategory';
import PostsList from '../../src/patterns/PostsList';
import getCategories from '../../_data/categories'

const categories = [];
const categoriesInfo = getCategories();
categoriesInfo.forEach((category)=>{
  categories.push(category.slug)
})

export default function Category({category, posts}) {
  return(
    <Default title={category.title}>
      <section className='m-4 p-2' id='{category.slug}-section'>
        <h1 className='text-3xl'>Postagens da seção: {category.title}</h1>
        <PostsList id={category.slug} posts={posts}/>
      </section>
    </Default>
  )
}

export async function getStaticProps(context) {
  const categoryInfo = categoriesInfo.find( category => category.slug === context.params.category );
  let posts = getAllPostsByCategory(categoryInfo.slug);
  return {
    props: {
      category: categoryInfo,
      posts: posts.map((post)=>(
        {
          title: post.metadata.title,
          slug: post.metadata.slug,
          href: post.metadata.href,
          excerpt: post.metadata.excerpt,
        }
      ))
    },
  }
}

export async function getStaticPaths(){
  const paths = categories.map((category) => ({params: {category}}))

  return {
    paths: paths,
    fallback: false
  }
}