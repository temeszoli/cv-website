import { education } from '../data/education-content.js';

export default function Education(){
    return(
        <div className="edu-container">
            <h1 className='text-center my-5 text-4xl bg-blue-500 rounded py-2'>Tanulmányok</h1>
            <ul>
                {education.map( school => (
                <table key={school.id}>
                    <tbody>
                        <tr>
                            <td className='px-5'><a href={school.website}><img className='schoolImg' src={school.img} alt="" /></a></td>
                            <td>
                                <ul className='schools'>
                                    <li className='rounded bg-gray-200 text-black font-bold px-3'>{school.schoolName}</li>
                                    <br />
                                    <li className='text-xl'>{school.note}</li>
                                </ul>
                            </td>
                        </tr> 
                    </tbody>
                </table>
                ))}
            </ul>
        </div>
        
    );
}