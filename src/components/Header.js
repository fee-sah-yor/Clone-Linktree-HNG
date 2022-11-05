import ProfilePhoto from '../assets/profile-img.png';
import ShareBtn from '../assets/share-btn.png';
import option from '../assets/mobile-share-btn.png';
import ImgHover from '../assets/img-hover.png';
const Header = () => {
  const twitter = 'https://twitter.com/fisayodoris';
    return(
       <>
        <header>
        <div className='profilePhoto'>
          <img src={ProfilePhoto} alt='profile' id='profile_img' />
          <img src={ImgHover} alt='profile' id='profile_img' className='hover' />
          <a href={twitter} id='twitter'>
            Fisayo Afowowe
          </a>
          <h1 className='hidden' id='slack'>
         Fisayo  Afowowe
          </h1>
        </div>
        <div className='share'>
          <img src={ShareBtn} alt='share' className='share_icon' />
          <img src={option} alt='option' className='option_icon' />
        </div>
      </header>
       </>
    )
}
export default Header;