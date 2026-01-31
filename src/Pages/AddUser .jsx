import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import "../Styles/AddUser.css"
import { createChar } from '../API/API_Call';



function AddUser() {

    const [data, setData] = useState({
        name: "",
        nickname: "",
        village: "",
        orgin: ""
    })

    function handleOnChange(e) {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        // console.log("Name ", e.target.name)
        // console.log("Value ", e.target.value)
    }

    async function HandleSubmit(e) {
        e.preventDefault()
        try {
            const result = await createChar(data)
            alert(result.message)
            setData({
                name: "",
                nickname: "",
                village: "",
                orgin: ""
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (

        <div id='AddUser'>

            <div
                style={{ display: "flex", justifyContent: "end" }}
            >
                <Link to={"/"} ><button id='HomeBtn'>Home</button></Link>
            </div>

            <form onSubmit={HandleSubmit} id='form'>
                <div id="Name" className="DivGroup">
                    <label className="label">Name :</label><br />
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={data.name}
                        onChange={(e) => { handleOnChange(e) }}
                        required
                    />
                </div>

                <div className="DivGroup">
                    <label className='label'>Nick Name : </label><br />
                    <input
                        type="text"
                        name='nickname'
                        value={data.nickname}
                        placeholder='Enter The Nick Name'
                        onChange={(e) => { handleOnChange(e) }}
                        required
                    />
                </div>

                <div className="DivGroup">
                    <label className='label'>Village : </label><br />
                    <input
                        type="text"
                        name='village'
                        value={data.village}
                        placeholder='Enter The Village'
                        onChange={(e) => { handleOnChange(e) }}
                        required
                    />
                </div>

                <div className="DivGroup">
                    <label className='label'>Orgin : </label><br />
                    <input
                        type="text"
                        name='orgin'
                        value={data.orgin}
                        placeholder='Enter The Orgin'
                        onChange={(e) => { handleOnChange(e) }}
                        required
                    />
                </div>
                <div id='Buttons'>
                    <button type="submit" id='SubmitButton'>Create</button>
                </div>

            </form>

        </div>
    )
}

export default AddUser 