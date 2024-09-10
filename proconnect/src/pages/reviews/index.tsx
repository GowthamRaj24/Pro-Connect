import Nav from "@/components/Nav";
import axios from "axios";
import { set } from "mongoose";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BiUpvote } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { MdOutlineModeComment } from "react-icons/md";
const ShowSummarize = ({ text, setShowSummarize }) => {
  const [summarizedText, setSummarizedText]:any = useState(null);
  const [promt, setPromt] = useState("Summarize the following text");
  const formatText = (text) => {
    text = text.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
    text = text.replace(/_(.*?)_/g, "<em>$1</em>");
    text = text.replace(/\n/g, "<br>");
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };
  return (
    <div
      className="w-140 rounded-md bg-white fixed p-3 h-140 overflow-y-scroll no-scrollbar"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0px 0px 15px grey",
      }}
    >
      <button
        className="absolute right-2 top-2"
        onClick={() => {
          setShowSummarize(false);
        }}
      >
        <IoClose size={20} />
      </button>
      <div className="flex flex-row gap-3 items-center mb-4">
        <div className="w-1 h-10 bg-black rounded-lg"></div>
        <h1 className="text-xl">Summarized text</h1>
      </div>
      <div>
        <input
          type="text"
          value={promt}
          onChange={(e) => setPromt(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter your prompt"
        />
        <button
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 my-3"
          onClick={() => {
            const fetchSummarizedText = async () => {
              await axios
                .post("../api/aichatbot", {
                  prompt: promt,
                  message: JSON.stringify(text),
                })
                .then((res) => {
                  setSummarizedText(formatText(res?.data?.result || ""));
                })
                .catch((err) => {
                  console.log(err);
                });
            };
            fetchSummarizedText();
          }}
        >
          Submit
        </button>
      </div>
      <p>{summarizedText}</p>
    </div>
  );
};
const AddReview = ({ searchReviews, setAddReview }: any) => {
  const [reviewType, setReviewType] = useState("");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("../api/addReview", {
        reviewerId: "66e04cb3976e9371d8e5777c",
        type: reviewType,
        title,
        content: comment,
      })
      .then((res) => {
        console.log(res);
        setAddReview(false);
        searchReviews();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="w-140 h-auto rounded-md bg-white fixed p-3"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0px 0px 15px grey",
      }}
    >
      <button
        className="absolute right-2 top-2"
        onClick={() => {
          setAddReview(false);
        }}
      >
        <IoClose size={20} />
      </button>
      <div className="flex flex-row gap-3 items-center mb-4">
        <div className="w-1 h-10 bg-black rounded-lg"></div>
        <h1 className="text-xl">Add Review</h1>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Review Type Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Select Review Type
          </label>
          <select
            value={reviewType}
            onChange={(e) => setReviewType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="question">Question</option>
            <option value="companyreview">Company Review</option>
            <option value="discussion">Discussion</option>
            <option value="suggestion">Suggestion</option>
          </select>
        </div>

        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter title"
          />
        </div>

        {/* Comment Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md h-32"
            placeholder="Enter your comment"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
const ReviewItem = ({ review, searchReviews }) => {
  const [comment, setComment] = useState("");
  return (
    <div key={String(review._id)} className="m-2 relative p-3">
      <div className="flex flex-row gap-3">
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2CNpBwzHxcljl-ZBhjhsJzVJDoxF7BqaZQ&s"
          }
          width={100}
          height={100}
          objectFit="cover"
          alt="Donate for Good"
          className="rounded-full w-12 h-12"
        />
        <div>
          <p>Suhiteswar CH</p>
          <p>Full stack developer</p>
        </div>
      </div>
      {/* <h2>{String(review.type)}</h2> */}
      <p className="font-semibold font-sans">{review.title}</p>
      <p>{review.content}</p>
      <p className="absolute top-3 right-3 text-sm">
        {new Date(review.reviewDate).toDateString()}
      </p>
      <div className="flex flex-row gap-5 my-3">
        <div className="flex flex-row gap-2">
          <div>
            <BiUpvote size={20} />
          </div>
          <p>{review.upvotes}</p>
        </div>
        <div className="flex flex-row gap-2">
          <div>
            <MdOutlineModeComment size={20} />
          </div>
          <p>{review?.comments?.length}</p>
        </div>
      </div>
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Comment"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          className="p-2 rounded-md outline-none w-full"
          style={{
            border: "1px solid grey",
          }}
        />
        <button
          className="absolute"
          style={{
            top: "23%",
            right: 10,
          }}
          onClick={() => {
            const sendComment = async () => {
              await axios
                .post("../api/commentReviews", {
                  userId: "52137687",
                  comment,
                  reviewId: review._id,
                })
                .then((res) => {
                  console.log(res?.data);
                  searchReviews();
                })
                .catch((err) => {
                  console.log(err);
                });
            };
            sendComment();
          }}
        >
          Send
        </button>
      </div>
      <div className="ml-10">
        {review.comments.map((comment) => (
          <div key={String(comment._id)} className="my-3 relative">
            <div className="flex flex-row gap-3">
              <Image
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2CNpBwzHxcljl-ZBhjhsJzVJDoxF7BqaZQ&s"
                }
                width={100}
                height={100}
                objectFit="cover"
                alt="Donate for Good"
                className="rounded-full w-12 h-12"
              />
              <div>
                <p>Suhiteswar CH</p>
                <p>Full stack developer</p>
              </div>
            </div>
            <p className="mt-3">{comment.content}</p>
            <p className="absolute top-1 right-1 text-sm">
              {new Date(review.reviewDate).toDateString()}
            </p>
            <p>{comment.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
const Reviews = () => {
  const [filter, setFilter] = useState("");
  const [reviews, setReviews] = useState([]);
  const [addReview, setAddReview] = useState(false);
  const [showSummarize, setShowSummarize] = useState(false);
  const [summarizedText, setSummarizedText] = useState("");
  const searchReviews = async () => {
    await axios
      .get(`../api/searchReviews?filter=${filter}`)
      .then((res) => {
        console.log(res?.data);
        setReviews(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    searchReviews();
  }, []);
  useEffect(() => {
    searchReviews();
  }, [filter]);
  return (
    <>
      <Nav />
      <div className="w-256 mx-auto px-3">
        <input
          type="text"
          value={filter}
          placeholder="Search"
          onChange={(e) => setFilter(e.target.value)}
          className="w-full outline-none p-3 bg-white rounded-md"
          style={{
            boxShadow: "0px 0px 10px lightgrey",
          }}
        />
      </div>
      <div className="w-256 mx-auto my-5 relative p-3 py-5 grid grid-cols-12 gap-4">
        <div
          className="col-start-1 col-end-10 rounded-md "
          style={{
            boxShadow: "0px 0px 15px lightgrey",
          }}
        >
          {reviews.map((review: any) => (
            <ReviewItem review={review} searchReviews={searchReviews} />
          ))}
        </div>
        <div className="col-start-10 col-end-13 rounded-md h-44">
          <div
            className=" p-3"
            style={{
              boxShadow: "0px 0px 15px lightgrey",
            }}
          >
            <p>Want to share you're thoughts?</p>
            <button
              className="p-2 bg-black w-full text-center rounded-md text-white my-4"
              onClick={() => {
                setAddReview(true);
              }}
            >
              + Create post
            </button>
          </div>
          <button
            className="p-2 bg-black w-full text-center rounded-md text-white my-4"
            onClick={() => {
              setShowSummarize(true);
            }}
          >
            Summarize
          </button>
        </div>
      </div>
      {addReview && (
        <AddReview searchReviews={searchReviews} setAddReview={setAddReview} />
      )}
      {showSummarize && (
        <ShowSummarize text={reviews} setShowSummarize={setShowSummarize} />
      )}
    </>
  );
};

export default Reviews;
