import NextLink from 'next/link';

export default function Link (props) {
    let shallow = ''
    if (props.shallow == undefined) {
        shallow = true
    } else {
        shallow = props.shallow
    }
    return (
        <NextLink href={props.href} shallow={shallow}>
            <a>
                {props.children}
            </a>
        </NextLink>
    )
}