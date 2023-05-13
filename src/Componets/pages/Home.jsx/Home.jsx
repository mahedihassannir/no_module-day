import React from 'react';

const Home = () => {


    let handleSubmit = (e) => {
        e.preventDefault()

        let from = e.target

        let name = from.name.value
        let email = from.email.value
        let number = from.number.value
        let code = from.code.value
        let photoUrl = from.photoUrl.value


        let total = { name, email, number, code, photoUrl }

        console.log(total);

        fetch(`http://localhost:5000/posts`, {

            method: "POST",
            headers: {

                "content-type": "application/json"
            },

            body: JSON.stringify(total)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }




    return (
        <div>

            <h1 className='text-3xl font-bold text-center'>you can post here</h1>



            <form onSubmit={handleSubmit} className='w-1/2 mx-auto'>
                <div>
                    <input type="text" name='name' className=' py-4 border-2 pl-2 w-11/12 rounded-md ' placeholder='name' />
                </div>
                <div className='my-4'>
                    <input type="text" name='number' className=' py-4 border-2 pl-2 w-11/12 rounded-md ' placeholder='number' />
                </div>
                <div className='my-5'>
                    <input type="email" name='email' className=' py-4 border-2 pl-2 w-11/12 rounded-md ' placeholder='email' />
                </div>
                <div>
                    <input type="text" name='code' className=' py-4 border-2 pl-2 w-11/12 rounded-md ' placeholder='code' />
                </div>

                <div className='my-5'>
                    <input type="url" name='photoUrl' className=' py-4 border-2 pl-2 w-11/12 rounded-md ' placeholder='photo' />
                </div>
                <div className='text-center'>
                    <input type="submit" className=' cursor-pointer border-2 w-1/2 mx-auto my-5' value='post' />
                </div>



            </form>



        </div>
    );
};

export default Home;