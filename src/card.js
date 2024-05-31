import React, { useState } from 'react'
const image = require("./head-of-a-chicken1.jpg");








const Card = (props) => {




    const [content, setContent] = useState("name");
    const [value, setValue] = useState(props.data.name.first + " " + props.data.name.last);



    return (
        <div className='mt-16 flex flex-col justify-center items-center gap-8'>
            <div className=' w-[40%]  bg-gray-100 flex flex-col p-12 gap-5 border-gray-200 border-2 shadow-slate-200 shadow-xl rounded-lg'>



                <div className='flex justify-center '>
                    <img src={props.data.picture.medium} alt="Placeholder Image" className='w-36 h-36 border-4 border-white rounded-full' />
                </div>
                <div className='text-center'>
                    <div className='text-slate-400 text-lg'>My {content} is</div>
                    <div className='font-bold text-3xl mt-4'>{value}</div>
                </div>
                <div className='flex justify-around text-lg text-slate-400 mt-5'>
                    <div onMouseOver={() => { setContent("Name"); setValue(props.data.name.first + " " + props.data.name.last) }}>profile</div>
                    <div onMouseOver={() => { setContent("Email"); setValue(props.data.email) }}>email</div>
                    <div onMouseOver={() => {
                        setContent("Birthday");
                        const dateString = '1998-09-30T00:50:03.412Z';

                        // Split the string by 'T' to separate date and time
                        const parts = dateString.split('T');

                        // First part is the date
                        const datePart = parts[0]; // '1998-09-30'

                        // Split the date part by '-' to get individual components
                        const [year, month, day] = datePart.split('-').map(Number);

                        setValue(day + "/" + month + "/" + year);


                    }}>birthday</div>
                    <div onMouseOver={() => { setContent("Address"); setValue(props.data.location.street.number + " , " + props.data.location.street.name + " , " + props.data.location.city + " , " + props.data.location.country) }}>address</div>
                    <div onMouseOver={() => { setContent("Phone Number"); setValue(props.data.phone) }}>phone</div>

                </div>

            </div>




        </div>

    )
}

export default Card;
