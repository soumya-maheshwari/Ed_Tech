import React, { useState, useEffect } from 'react';
import image1 from "./ag3.png";
import image2 from "./video2.png";
import image3 from "./mock1.png";
import image4 from "./qeu1.png";

function useCounterAnimation(initialCount, targetCount, intervalTime) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        if (count < targetCount) {
            const interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, intervalTime);

            return () => clearInterval(interval);
        }
    }, [count, targetCount, intervalTime]);

    return count;
}



    function Count() {
        const count = useCounterAnimation(0, 650, 2);
        const count1 = useCounterAnimation(0, 200, 10);
        const count2 = useCounterAnimation(0, 150, 10);
        const count3 = useCounterAnimation(0, 500, 2);
        return (
            <div>

                <div className="text-white m-0 p-0 mx-auto  font-sans" style={{ backgroundColor: '#0d6efd' }}>
                    <div class="container text-center flex flex-row place-content-center my-0 mx-auto">


                        <div className=" px-5 py-10 mx-auto flex flex-wrap">
                            <div className="flex flex-wrap -mx-4 mt-auto mb-auto  justify-center sm:pr-10">
                                <div className="w-full sm:p-4 px-4 mb-6">
                                    <h1 className="title-font font-bold text-2xl mb-2 text-white">India's most Loved Educational Platform</h1>
                                    <div className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</div>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <img src={image1} alt="Happy Students" className="w-16 h-16 mb-4 mx-auto" />
                                    <h2 className="title-font font-bold text-3xl text-white">{count}</h2>
                                    <p className="leading-relaxed">Happy Students</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <img src={image2} alt="Video Lectures" className="w-16 h-16 mb-4 mx-auto" />
                                    <h2 className="title-font font-bold text-3xl text-white">{count1}</h2>
                                    <p className="leading-relaxed">Video Lectures</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <img src={image3} alt="Mock Tests" className="w-16 h-16 mb-4 mx-auto" />
                                    <h2 className="title-font font-bold text-3xl text-white">{count2}</h2>
                                    <p className="leading-relaxed">Mock Tests</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <img src={image4} alt="Questions" className="w-16 h-16 mb-4 mx-auto" />
                                    <h2 className="title-font font-bold text-3xl text-white">{count3}</h2>
                                    <p className="leading-relaxed">Questions</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }


export default Count;
