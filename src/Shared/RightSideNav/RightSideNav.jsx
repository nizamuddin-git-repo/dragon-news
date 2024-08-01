import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from '../../assets/Imges/qZone1.png';
import qzone2 from '../../assets/Imges/qZone2.png';
import qzone3 from '../../assets/Imges/qZone3.png';

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl ">Login With</h2>
        <button className=" btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className=" btn btn-outline w-full mt-3">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>
      <div className="p-4  mb-6">
        <h2 className="text-2xl mb-6">Find Us On </h2>
        <a className="p-4 flex items-center text-lg border rounded-t-lg" href="">
            <FaFacebook className="mr-3 "></FaFacebook>
            <span>Facebook</span>
        </a>
        <a className="p-4 flex items-center text-lg border-x rounded-x-lg" href="">
           <FaTwitter className="mr-3 "></FaTwitter>
           <span>Twitter</span>
        </a>
        <a className="p-4 flex items-center text-lg border rounded-b-lg" href="">
            <FaInstagram className="mr-3"></FaInstagram>
            <span>Instagram</span>
        </a>
      </div>
      {/* y zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl ">Q Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
