import project1 from './pr1.png';
import project2 from './pr2.png';
import project3 from './pr3.png';
import './Projects.css';

const Projects=()=>{
   
    return(
        <div className='project_container'>
            <div className='project_head'><h3>Projects</h3></div>
            <div className='img_con'>
                <div className='image_container1'>
                     <div className='pro_img1'><img src={project1} /></div>
                </div>
                <div className='image_container2'>
                    <div className='pro_img2'><img src={project2} /></div>
                </div>
                <div className='image_container3'>
                    <div className='pro_img3'><img src={project3} /></div>
                </div>
            
            </div>
            

        </div>
    );
}

export default Projects;