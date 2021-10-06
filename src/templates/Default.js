import Head from '../infra/Head';
import Header from '../patterns/Header'
import Footer from '../patterns/Footer'

export default function Default(props) {
  return(
    <div className='flex flex-col h-screen justify-between'>
      <Head title={props.title}>{props.head}</Head>
      <Header></Header>
      <main className='w-3/5 mx-auto mb-auto bg-white'>
        {props.children}
      </main>
      <Footer></Footer>
    </div>
  )
}