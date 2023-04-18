import { codingSkills, softSkills, otherSkills, univSkills, languages, jobs } from "../data/experience-content";
import { IoIosCheckmarkCircle } from 'react-icons/io'; 

export default function Experience(){
    return(
        <div className="experience-container">
            {/*Skills */}
            <h1 className='text-center my-5 text-4xl bg-blue-500 m-auto rounded py-2 w-1/3 mt-20'>Skills</h1>
            <div className="grid-container">
            <div className="grid-item">
                <h2 className="text-center bg-blue-500 rounded py-1 text-3xl my-5">Coding technologies</h2>
                {codingSkills.map(item =>(
                    <table key={item}>
                    <tbody>
                        <tr>
                            <td className="px-3"><IoIosCheckmarkCircle /></td>
                            <td>{item}</td>
                        </tr>
                    </tbody>
                    </table>
                ))}
            </div>
            <div className="grid-item">
                <h2 className="text-center bg-blue-500 rounded py-1 text-3xl my-5">Soft Skills</h2>
                {softSkills.map(item =>(
                    <table key={item}>
                    <tbody>
                        <tr>
                            <td className="px-3"><IoIosCheckmarkCircle /></td>
                            <td>{item}</td>
                        </tr>
                    </tbody>
                    </table>
                ))}
            </div>
            <div className="grid-item">
                <h2 className="text-center bg-blue-500 rounded py-1 text-3xl my-5">Beginner</h2>
                {otherSkills.map(item =>(
                    <table key={item}>
                    <tbody>
                        <tr>
                            <td className="px-3"><IoIosCheckmarkCircle /></td>
                            <td>{item}</td>
                        </tr>
                    </tbody>
                    </table>
                ))}
            </div>
            <div className="grid-item">
                <h2 className="text-center bg-blue-500 rounded py-1 text-3xl my-5">University basics</h2>
                {univSkills.map(item =>(
                    <table key={item}>
                    <tbody>
                        <tr>
                            <td className="px-3"><IoIosCheckmarkCircle /></td>
                            <td>{item}</td>
                        </tr>
                    </tbody>
                    </table>
                ))}
            </div>
            <div className="grid-item">
                <h2 className="text-center bg-blue-500 rounded py-1 text-3xl my-5">Spoken languages</h2>
                {languages.map(item =>(
                    <table key={item}>
                    <tbody>
                        <tr>
                            <td className="px-3"><IoIosCheckmarkCircle /></td>
                            <td>{item}</td>
                        </tr>
                    </tbody>
                    </table>
                ))}
            </div>
            </div>
            {/*End of Skills */}
            {/*Previous jobs */}
            <div className="jobs-container">
                <h1 className='text-center my-5 text-4xl bg-blue-500 m-auto rounded py-2 mt-10'>Work experiences</h1>
                {jobs.map(job => (
                    <ul key={job}>
                        <li className='rounded bg-gray-200 text-black font-bold px-3'>{job.job}</li>
                        <li className="py-3 text-2xl">{job.note}</li>
                    </ul>
                ))}
            </div>
        </div>
    );
}