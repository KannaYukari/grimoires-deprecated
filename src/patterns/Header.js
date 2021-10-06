import NavbarItem from '../components/NavbarItem';
import Logo from '../components/Logo'
import Link from '../infra/Link'

export default function Header(props){
    const categories = [
        { 
            name: 'Novidades!',
            href: '/novidades'
        }, {
            name: 'Diário', 
            href: '/diario'
        }, {
            name: 'Educativo', 
            href: '/educativo'
        }, {
            name: 'Recomendações', 
            href: '/recomendacao'
        },{
            name: 'Sobre',
            href: '/sobre'
        }
    ];

    const navbar = categories.map((item)=> (
        <NavbarItem href={item.href}>{item.name}</NavbarItem>
    ))
    return (
        <header className='flex justify-evenly py-2 bg-primary'>
            <Link href='/'>
                <Logo></Logo>
                <p className='inline mx-4 my-auto text-4xl'>
                    Grimoires
                </p>
            </Link>
            <nav className='my-auto'>
                <ul className='inline-flex'>
                    {navbar}
                </ul>
            </nav>
        </header>
    )
}