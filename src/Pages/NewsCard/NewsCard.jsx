import { Link } from "react-router-dom";
import user from "../../assets/Imges/user.png";
import { FaRegBookmark } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";



const NewsCard = ({ news }) => {
  const { title, image_url, details, _id } = news;
  return (
    <div>
      <h3 className="mb-4">Dragon News Home</h3>
      <div>
        <div className=" bg-slate-600 p-4 rounded-md mb-4 flex gap-3">
          <img className="w-10 rounded-full" src={user} alt="" />
          <div className="flex items-center gap-80">
            <div>
            <p className="text-sm font-semibold">Awlad Hossain</p>
            <p className="text-sm font-semibold">2022-08-21</p>
            </div>
            <div className="flex gap-3">
            <FaRegBookmark></FaRegBookmark>
            <FiShare2></FiShare2>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className="card bg-base-100 mb-16">
        <figure>
          <img src={image_url} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link to={`/news/${_id}`} className="text-blue-600">
                Read More...
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
