import axios from "axios";
import { useState , useEffect} from "react";
import { IReview } from "@/models/reviewsSchema";

const Reviews = () => {
    const [filter , setFilter] = useState("");
    const [reviews, setReviews] = useState([]);
    const searchReviews = async () => {
        await axios.get(`../api/searchReviews?filter=${filter}`)
        .then((res)=>{
            console.log(res?.data);
            setReviews(res?.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    };
    useEffect(()=>{
        searchReviews();
    }, []);
    useEffect(()=>{
        searchReviews();
    },[filter])
    return(<>
        <h1>Reviews</h1>
        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
        <div>
            {
                reviews.map((review: IReview) => (
                    <div key={String(review._id)}>
                        <h2>{String(review.type)}</h2>
                        <p>{review.title}</p>
                        <p>{review.content}</p>
                        <p>{String(review.reviewDate)}</p>
                        <p>{review.upvotes}</p>
                        {review.comments.map((comment) => (
                            <div key={String(comment._id)}>
                                <h3>{comment.title}</h3>
                                <p>{comment.content}</p>
                                <p>{String(comment.reviewDate)}</p>
                                <p>{comment.rating}</p>
                            </div>
                        ))}

                    </div>
                ))
            }
        </div>
    </>)
}

export default Reviews;