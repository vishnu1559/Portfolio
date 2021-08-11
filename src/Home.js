import logo from './animated.jpg';
import './Home.css';
const Home=()=>{
 return(
    <div className='home'>
        <div className='left_home'><img src={logo} alt="img" /></div>
        <div className='right_home'>
            <h1>Hello, I'm Vishnu</h1>
            <p>I am a Mechanical Engineering undergraduate from Hi-Tech Institute of Technology. I am also a front end web developer. I love designing websites and I am looking for more opportunities to work in coding and make full time carrier in this field. This portfolio shows one of my skill.</p>
        </div>
    </div>

 );
}

export default Home;