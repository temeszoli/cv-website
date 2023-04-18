import cvPic from '../assets/cvPic.jpg';
import CV from '../assets/temesvari_zoltan_interncv.pdf'

export default function Header(){
    return(
        <header className='text-center text-white'>
            <div className='header-text'>
                <h1 className='text-5xl'>Zoltan Temesvari</h1>
                <h2 className='text-2xl mt-2'>Junior Engineer</h2>
            </div>

            <div className="img-container"><img src={cvPic} alt="" /></div>

            <button className='btn-left'>
            <a href={CV} download className='btn'>Download CV</a>
            </button>
            
            <button className='btn-right'>
                <a href="#contact">Contact Me</a>
            </button>
        </header>
    );
}