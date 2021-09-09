import Thumbnail from "./Thumbnail";
import FlipMove from 'react-flip-move';

const Result = ({ result }) => {
    return (
        <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            {
                result.map(r => (
                    <Thumbnail key={r.id} data={r} />
                ))
            }
        </div>
    )
}

export default Result
