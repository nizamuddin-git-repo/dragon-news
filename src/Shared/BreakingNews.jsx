import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn bg-gradient-to-br from-purple-600 to-blue-500 border-0">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-16" to="/">I can be a React component, multiple React components....</Link>
        <Link className="mr-16" to="/">I can be a React component, multiple React components....</Link>
        <Link className="mr-16" to="/">I can be a React component, multiple React components....</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
