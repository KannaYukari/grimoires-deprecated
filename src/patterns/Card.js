export default function Card(props) {
    const text = props.children;
    const title = props.title;
  
    return (
      <article className=''>
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
  
    )
}