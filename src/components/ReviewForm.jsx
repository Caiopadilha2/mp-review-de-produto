import "./ReviewForm.css"

export default function ReviewForm() {
    return(
        <div className="container-review">
            <h1>Deixe seu review</h1>

            <form className="review-form">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="review">Review</label>
                <textarea id="review" name="review" required rows={6}></textarea>
                <div>
                    <p>Estrelas</p>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <>
                        <input type="radio" id={star} name="rating" value={star} required />
                        <label htmlFor={star}>{star}</label>   
                        </>
                    ))}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}