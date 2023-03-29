import {BsGithub} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {GrLinkedin} from 'react-icons/gr';

export default function Footer(){
    return(
        <footer id='contact'>
            <div>&copy;2023 | Temesvári Zoltán</div>
            <p className='mt-5'>Kapcsolatfelvétel: </p>
            <table className='my-2'>
                <tbody>
                    <tr className='text-4xl'>
                        <td className='px-2'><a href='https://github.com/temeszoli'><BsGithub /></a></td>
                        <td className='px-2'><a href="mailto:temeszoli18@gmail.com"><AiOutlineMail /></a></td>
                        <td className='px-2'><a href='https://www.linkedin.com/in/zoltán-temesvári-9635231a7/'><GrLinkedin /></a></td>
                    </tr>
                </tbody>
            </table>
        </footer>
    );
}