import "./ReviewForm.css"

export default function ReviewForm() {
    return(
        <div className="container-review">
            <h3>Deixe seu review</h3>

            <form className="review-form">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="review">Review</label>
                <textarea id="review" name="review" required rows={6} className="text-area"></textarea>
                <div className="form-group">
                    <label htmlFor="stars">Estrelas</label>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}