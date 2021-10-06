import Link from '../infra/Link';

export default function NavbarItem(props) {

    return (
        <li className='text-2xl rounded mx-1 p-2 hover:bg-secundary hover:bg-opacity-25'>
            <Link href={props.href} shallow={false}>
                {props.children}                
            </Link>
        </li>
    )
}