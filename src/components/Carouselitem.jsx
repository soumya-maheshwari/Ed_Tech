import React from 'react'
import profile from './profile-img.svg'

const Carouselitem = ({name, desc, img}) => {
    console.log(name, desc, img);
  return (
        <div className='border h-[25rem] xl:h-[22rem] mx-3 p-2 rounded-md m-8 shadow-md hover:shadow-2xl transition-all duration-300 ease-out'>
            <div className='flex p-3'>
                <img src={img ? img : profile} className="object-cover h-20 w-20 rounded-full" />
                <div className='p-2'>
                    <div>{name}</div>
                    <div className="rating rating-sm rating-half">
                        <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-1 h-4" />
                        <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-1" checked />
                        <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" className="bg-primary mask mask-star-2 mask-half-2" />
                    </div>
                </div>
            </div>
            <div className='p-3'>
                {desc} 
            </div>
        </div>
  )
}

export default Carouselitem