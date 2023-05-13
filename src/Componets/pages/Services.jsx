import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {


    let data = useLoaderData()


    console.log(data.length);

    let delete1 = (id) => {

        fetch(`http://localhost:5000/posts/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);


                alert("you want to delete it")

            })




    }


    return (
        <div className='grid grid-cols-2 mt-10 ml-10'>


            {
                data.map(res => <div key={res._id} className='w-[400px] h-[300px]'>

                    <h1>{res.name}</h1>
                    <h1>{res.email}</h1>
                    <h1>{res.number}</h1>
                    <div>
                        <button onClick={() => delete1(res._id)} className='btn border-2 py-3 px-4  mt-4 ml-4'>
                            x
                        </button>
                    </div>
                </div>)



            }
        </div>
    );
};

export default Services;