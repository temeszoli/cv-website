import cvPic from '../assets/cvPic.jpg';
import CV from '../assets/temesvari_zoltan_cv.pdf'

export default function Header(){
    return(
        <header className='text-center text-white'>
            <div className='header-text'>
                <h1 className='text-5xl'>Temesvári Zoltán</h1>
                <h2 className='text-2xl mt-2'>Pályakezdő fejlesztő</h2>
            </div>

            <div className="img-container"><img src={cvPic} alt="" /></div>

            <button className='btn-left'>
            <a href={CV} download className='btn'>Önéletrajz letöltése</a>
            </button>
            
            <button className='btn-right'>
                <a href="#contact">Kapcsolatfelvétel</a>
            </button>
        </header>
    );
}