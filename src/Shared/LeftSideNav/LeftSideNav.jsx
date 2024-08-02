import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from '../../assets/Imges/1.png';
import img2 from '../../assets/Imges/2.png';
import img3 from '../../assets/Imges/3.png';
import { FaRegCalendar } from "react-icons/fa6";

const LeftSideNav = () => {
  const [categoris, setCategoris] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategoris(data));
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl">All Caterogy {categoris.length}</h2>
      <button className="p-3 w-60 ml-3 bg-slate-600 ">National News</button>
      {categoris.map((category) => (
        <Link className="block ml-4 text-xl font-medium"
         key={category.id}
         to={`/category/${category.id}`}
        >{category.name}</Link>
      ))}
      <div>
        <h2 className="text-2xl p-4">All News</h2>
        <img className="w-60 h-36 ml-3" src={img1} alt="" />
        <h4 className="mt-3 font-semibold text-xs ml-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
        <div className="flex gap-3 items-center ml-3 mt-5">
          <p>Sports</p><FaRegCalendar></FaRegCalendar>
          <p>Jan 4, 2022</p>
        </div>
        <img className="w-60 h-36 ml-3" src={img2} alt="" />
        <h4 className="mt-3 font-semibold text-xs ml-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
        <div className="flex gap-3 items-center ml-3 mt-5">
          <p>Sports</p><FaRegCalendar></FaRegCalendar>
          <p>Jan 4, 2022</p>
        </div>
        <img className="w-60 h-36 ml-3" src={img3} alt="" />
        <h4 className="mt-3 font-semibold text-xs ml-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
        <div className="flex gap-3 items-center ml-3 mt-5">
          <p>Sports</p><FaRegCalendar></FaRegCalendar> 
          <p>Jan 4, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
