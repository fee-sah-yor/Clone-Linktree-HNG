import './App.css';
import ProfilePhoto from './assets/profile-img.png';
import ShareBtn from './assets/share-btn.png';
import option from './assets/mobile-share-btn.png';
import github from './assets/github-logo.png';
import I4G from './assets/I4G-logo.png';
import intern from './assets/intern-logo.png';
import slack from './assets/slack-logo.png';
import ImgHover from './assets/img-hover.png';

function App() {
  const twitter = 'https://twitter.com/fisayodoris';
  const zuriBtn = 'https://training.zuri.team/';
  const zuriBooks = 'http://books.zuri.team/';
  const pitch = 'https://background.zuri.team/';
  const zuriDesign = 'https://books.zuri.team/design-rules';

  return (
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
      <main className='container'>
        <div className='buttons'>
          <a href={twitter} id='twitter'>
            Twitter Link
          </a>
          <a href={zuriBtn} id='btn__zuri'>
            Zuri Team
          </a>
          <a href={zuriBooks} id='books'>
            Zuri Books
          </a>
          <a href={zuriBooks} id='book__python'>
            Python Books
          </a>
          <a href={pitch} id='pitch'>
            Background Check for Coders
          </a>
          <a href={zuriDesign} id='book__design'>
            Design Books
          </a>
        </div>
        <div className='icons'>
          <img src={slack} alt='slack' />
          <img src={github} alt='github' />
        </div>
      </main>
      <footer>
        <img src={intern} alt='zuri logo' />
        <small>HNG Internship 9 Frontend Task</small>
        <img src={I4G} alt='I4G logo' />
      </footer>
    </>
  );
}

export default App;