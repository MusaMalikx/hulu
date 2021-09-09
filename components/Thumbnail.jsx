import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';

const Thumbnail = ({ data }) => {

    //console.log(data);

    return (
        <div className='group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-95 hover:z-50'>
            <Image
                layout="responsive"
                alt="backdrop"
                src={
                    `https://image.tmdb.org/t/p/original${data.backdrop_path || data.poster_path}`
                }
                width={1920}
                height={1080}
            />
            <div className='p-2'>
                <p className='truncate max-w-md'>{data.overview}</p>

                <h2
                className='filter sm:drop-shadow my-2 text-xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'
                >{data.title || data.original_title || data.original_name || data.name}</h2>
                
                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {data.media_type && `${data.media_type} • `}{" "}
                    {`${data.release_date || data.first_air_date} •` }{" "}
                    <ThumbUpIcon className='h-5 mx-2' />{data.vote_count}
                </p>
            </div>
        </div>
    )
}

export default Thumbnail
