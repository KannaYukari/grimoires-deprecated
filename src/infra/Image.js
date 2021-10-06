import NextImage from 'next/image'

export default function Image(props) {
    let layout = 'intrinsic';
    if (props.layout != 'undefined') {
        layout = props.layout
    }
    return (
        <NextImage 
        src={props.src} 
        alt={props.alt} 
        width={props.width} 
        height={props.height}
        />
    )
}
