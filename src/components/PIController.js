import React from 'react';
import Gist from 'react-gist';
import PidFormula from '../images/pid-formula.png'
import PidDirectory from '../images/pid-directory.png'
import PidLineFollower from '../images/pid_sine_follower.gif'
import './picontroller.css'

const PIController = () => {
    return (
        <div>
            <strong className="display-3">PI Controller</strong>
            <p>A discrete Proportional Integral (PI) controller</p>
            <div id="directory" className='mb-3'>
                <p className='subheading'>Directory</p>
                <p className='mb-4'>The snippets fit into the directory shown here. All snippets except waves.py are combined into <a>pid_v2.py (see the full GitHub repo here).</a></p>
                <img src={PidDirectory} className='pid' />
            </div>
            <div id="setup.py" className='mb-3 mt-5'>
                <p className='subheading'>Setup</p>
                <p className='mb-4'>Imports, Parameters, and Initial Process/Set Variables.</p>
                <Gist id='563b8fe814e7dab968966afb579d1c12' file="setup.py" />
            </div>
            <div className='text-center'>
                <hr/>
            </div>
            <div id="animated-plot.py" className='mb-3 mt-5'>
                <p className='subheading'>Animated Plot</p>
                <p className='mb-4'>A plt.figure in a for loop. Nothing fancy.</p>
                <Gist id='563b8fe814e7dab968966afb579d1c12' file="animated-plot.py" />
            </div>
            <div className='text-center'>
                <hr/>
            </div>
            <div id="waves.py" className='mb-3 mt-5'>
                <p className='subheading'>Wave Generators</p>
                <p className='mb-4'>wave swave</p>
                <Gist id='563b8fe814e7dab968966afb579d1c12' file="waves.py" />
            </div>
            <div className='text-center'>
                <hr/>
            </div>
            <div id="update-state.py" className='mb-3 mt-5'>
                <p className='subheading'>Updating the Set and Process Variables</p>
                <p className='mb-4'>The set and process variables are set in the <a href="#setup.py">setup.py</a>. Each plot loop the set variable is updated with a sine wave from <a href="#waves.py">waves.py</a>, and the discrete PI controller from <a href="#pi-controller.py">py-controller.py</a></p>
                <Gist id='563b8fe814e7dab968966afb579d1c12' file="update-state.py" />
            </div>
            <div className='text-center'>
                <hr/>
            </div>
            <div id="pi-controller.py" className='mb-3 mt-5'>
                <p className='subheading'>PI Controller</p>
                <p className='mb-4'>A discrete PI controller combines e(t) and it's integral. e(t) is the difference between the set and process variables, and the integral is more simply computed as the sum of previous errors. For those interested, the full formula is:</p>
                <img className='pid' src={PidFormula}></img>
                <Gist id='563b8fe814e7dab968966afb579d1c12' file="pi-controller.py" />
            </div>
            <div className='text-center'>
                <hr/>
            </div>
            <div id="save-gif.py" className='mb-3 mt-5'>
                <p className='subheading'>Save as GIF</p>
                <p className='mb-4'>Set the fps, title parameters, and the gen_gif to True in <a href="#setup.py">setup.py</a>. Don't forget to create the frames <a href="#directory">directory.</a></p>
                <Gist id='563b8fe814e7dab968966afb579d1c12' file="save-gif.py" />
            </div>
            <div id="save-gif.py" className='mb-1 mt-5'>
                <p className='subheading'>Conclusion</p>
                <p className='mb-4'>It works! As a web developer I don't do a lot of signal processing in my daily grind, so this was cool. I've got some parts on order and 3D prints in the works to give this controller a little robot body to balance. This is all preliminary learning for eventually implementing a drone controller. I'll probably buy a cheap drone from harbor freight or walmart and swap out it's controller with an arduino or esp-32.</p>
                <img src={PidLineFollower} />
            </div>
        </div>
    )
}

export default PIController