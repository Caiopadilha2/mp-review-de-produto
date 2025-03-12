import { useEffect, useState } from "react";
import "./CardReview.css"
import starFilled from '../assets/green-star.svg'
import starEmpty from '../assets/gray-star.svg'
export default function CardReview () {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('https://apis.codante.io/api/reviews-api/reviews')
      .then(response => response.json())
      .then(data => setData(data.data))
    }, [])
    return (
        <ul className="comentarios">
        {data.length === 0 ? (
          <p>Sem avaliações até o momento.</p>
        ) : data
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map(review => (
            <>
              <li key={review.id}>
              <p className="nome">{review.name}</p>
              <p className="data-postagem">
                {
                  new Date(review.created_at).toLocaleString(
                    'pt-BR',
                    { day: 'numeric', month: 'long', year: 'numeric' }
                  )
                }
              </p>
              <div>
                {Array.from({ length: review.stars}).map((_, index) =>  (
                  <img src={starFilled} alt="Green star" key={index} />
                ))}
                {Array.from({ length: 5 - review.stars}).map((_, index) =>  (
                  <img src={starEmpty} alt="Gray star" key={index}/> 
                ))}
              </div>
              <p className="descricao">{review.description}</p>
              </li>
            </>
        ))}
      </ul>       
    )
}