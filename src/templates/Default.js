import Head from '../infra/Head';
import Header from '../patterns/Header'
import Footer from '../patterns/Footer'

export default function Default(props) {
  return(
    <div>
      <Head title={props.title}>{props.head}</Head>
      <Header></Header>
      <main className='max-w-md mx-auto'>
        {props.children}
      </main>
      <Footer></Footer>
    </div>
  )
}