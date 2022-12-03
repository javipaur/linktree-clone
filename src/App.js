
import './App.scss';
import {brands} from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  ButtonLink  from './components/ButtonLink/ButtonLink';
function App() {
  return (
    <>
      <header>
        <div className="share-button"></div>
      </header>
      <div className="container">
        <div className="image-container">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHNKAY3pyo-ng/profile-displayphoto-shrink_200_200/0/1595274895331?e=1675296000&v=beta&t=cRtXM0E7h2xmhzjDTefemY-SyjLtBSEXP6KXR9eE2Hg" 
          alt="Javier Palacio"/>
        </div>
        <h1>@Javipaur</h1>

        <ButtonLink text={'Strava'} link={''} icon={<FontAwesomeIcon icon={brands('strava')} />}/>
        <ButtonLink text={'Github'} link={''} icon={<FontAwesomeIcon icon={brands('github')} />}/>
        <ButtonLink text={'LinkedIn'} link={''} icon={<FontAwesomeIcon icon={brands('linkedin')} />}/>

        {/* <a className="title" href='#'>
           <div className='icon'></div>
           <p>Strava</p>
           <div className='title-img'><FontAwesomeIcon icon={brands('strava')} /></div> 
        </a>
        <a className="title" href='#'>
        <div className='icon'></div>
           <p>Github</p>
           <div className='title-img'><FontAwesomeIcon icon={brands('github')} /></div> 
        </a>
        <a className="title" href='#'>
        <div className='icon'></div>
           <p>LinkedIn</p>
           <div className='title-img'><FontAwesomeIcon icon={brands('linkedin')} /></div> 
        </a> */}
      </div>
    </>
  );
}

export default App;
