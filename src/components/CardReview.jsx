import { useEffect, useState } from "react";
import "./CardReview.css"
export default function CardReview () {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('https://apis.codante.io/api/reviews-api/reviews')
      .then(response => response.json())
      .then(data => setData(data.data))
    }, [])
    return (
        <ul className="comentarios">
        {data.map(review => (
            <>
              <li key={review.id}>
              <p className="nome">{review.name}</p>
              <p className="data-postagem">{review.created_at}</p>
              <p className="nota">Nota: {review.stars}</p>
              <p className="descricao">{review.description}</p>
              </li>
              <hr />
            </>

        ))}
      </ul>       
    )
}