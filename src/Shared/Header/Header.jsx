import logo from '../../assets/Imges/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='p-10'>
            <img className='mx-auto' src={logo} alt="" />  
            <p className='text-center mt-4'>Journalism Without Fear or Favour</p>
            <p className='text-xl text-center mt-3'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;