import Link from '../../infra/Link';

export default function NavbarItem(props) {

    return (
        <li className='text-2xl'>
            <Link href={props.link} shallow={false}>
                {props.children}                
            </Link>
        </li>
    )
}