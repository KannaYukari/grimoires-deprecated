import Default from './../src/templates/Default';
import Card from './../src/patterns/Card';

export default function Sobre() {
  return(
    <Default>
      <h1>Sobre o projeto</h1>
      <Card>
        Grimoires é um projeto pessoal, onde eu posso guardar e registrar alguns
        conhecimentos, aprendizados e experiencias que tive em minha vida!          
      </Card>

      <Card>
        Sou uma lúnatica! (no bom sentido *risos*).
        
        Me chamo Kanna Yukari, nasci no dia 2 de agosto de 1999 e sou uma 
        amante do conhecimento e da tecnologia. Curso Ciência e Tecnologia 
        do mar na faculdade federal de São Paulo (UNIFESP), mas guardo como 
        hobby desenho, ilustração e edição de imagens, nas horas vagas também &quot;namoro&quot;
         meu violino, vejo animes e mangá e me desconecto do planeta Terra!
      </Card>
    </Default>
  )
}