import { useState } from "react"
import "./ReviewForm.css"
import StarsRating from "./StarsRating"
import { createReview } from '../services/ReviewService'
export default function ReviewForm() {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [stars, setStars] = useState(5)

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(name, review)
        const review2 = await createReview({name, description, stars})

        if (review2) {
            setName('');
            setDescription('')
            setStars(5)
        }
    }

    return(
        <div className="container-review">
            <h3>Deixe seu review</h3>

            <form className="review-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="review">Review</label>
                <textarea id="review" name="review" required rows={6} className="text-area" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <div className="form-group">
                    <label htmlFor="stars">Estrelas</label>
                    <StarsRating value={stars} onChange={setStars}/>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}