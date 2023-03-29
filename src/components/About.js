import { aboutText } from "../data/about-content";

export default function About(){
    return(
        <div className='about-container'>
            <h1 className='text-center mt-10 mb-10 text-4xl rounded bg-blue-500 px-3 py-2'>Bemutatkozás</h1>
            {aboutText.map(item => (
                <div key={item}>
                    <p>{item}</p>
                    <br />
                </div> 
            ))}
        </div>
    );
}