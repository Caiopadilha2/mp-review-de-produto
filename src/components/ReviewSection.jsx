import CardReview from "./CardReview";
import ReviewForm from "./ReviewForm";
import "./ReviewSection.css";


export default function ReviewSection() {
  return (
    <section className="reviews">
      <h3>O que nossos clientes dizem</h3>
      <CardReview />
      <ReviewForm />
    </section>
  );
}
