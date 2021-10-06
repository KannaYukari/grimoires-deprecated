import NavbarItem from './NavbarItem';
import Logo from '../../components/Logo'
import Link from '../../infra/Link'

export default function Header(props){
    return (
        <header className='container mx-auto flex justify-around bg-darkPrimary'>
            <Link href='/' className='inline-flex'>
                <Logo></Logo>
                <p className='text-4xl'>
                    Grimoires
                </p>
            </Link>
            <nav>
                <ul className='flex mx-4'>
                    <NavbarItem link='/novidades'>Novidades!</NavbarItem>
                    <NavbarItem link='/diario'>Diário</NavbarItem>
                    <NavbarItem link='/educativo'>Educativo</NavbarItem>
                    <NavbarItem link='/recomendacao'>Recomendações</NavbarItem>
                    <NavbarItem link='/sobre'>Sobre</NavbarItem>
                </ul>
            </nav>
        </header>
    )
}