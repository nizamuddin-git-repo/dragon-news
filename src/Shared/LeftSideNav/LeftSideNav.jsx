import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      {categoris.map((category) => (
        <Link className="block ml-4 text-xl font-medium"
         key={category.id}
         to={`/category/${category.id}`}
        >{category.name}</Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
