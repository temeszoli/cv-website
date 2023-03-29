import cvPic from '../assets/cvPic.jpg';

export default function Header(){
    return(
        <header className='text-center text-white'>
            <div className='header-text'>
                <h1 className='text-5xl'>Temesvári Zoltán</h1>
                <h2 className='text-2xl mt-2'>Pályakezdő fejlesztő</h2>
            </div>

            <div className="img-container"><img src={cvPic} alt="" /></div>

            <button className='btn-left'>
                Önéletrajz letöltése
            </button>
            
            <button className='btn-right'>
                <a href="#contact">Kapcsolatfelvétel</a>
            </button>
        </header>
    );
}