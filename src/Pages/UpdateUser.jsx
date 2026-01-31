import React, { useEffect, useState } from "react"
import "../Styles/UpdateUser.css"
import { getSingleChar, updateChar } from "../API/API_Call"



function UpdateUser({ HandleUpdateUserPopup, Userid }) {

    const [updateData, setUpdateData] = useState({
        name: "",
        village: "",
        orgin: ""
    })

    async function getSingleCharData() {
        if (!Userid) {
            console.log("User ID Not Valid ", Userid)
            return
        }
        const response = await getSingleChar(Userid)
        setUpdateData({
            name: response.user.name,
            village: response.user.village,
            orgin: response.user.orgin,
        })
    }

    useEffect(() => {
        getSingleCharData()
    }, [])

    function UpdateOnchange(e) {
        setUpdateData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        console.log(e.target.value)
    }

    async function HandleUpdateUser(e) {
        e.preventDefault()
        try {
            const response = await updateChar(Userid, updateData)
            console.log(response.data.message, ":", updateData.name)
            HandleUpdateUserPopup()
            alert(response.data.message)
        } catch (error) {
            alert("Something Went Wrong... Try Again")
            console.log(error)
        }
    }


    return (
        <>
            <div id="UpdateUser">


                <form onSubmit={HandleUpdateUser} id="Updateform">

                    <div id="Name" className="DivGroup">
                        <label className="label">Name :</label><br />
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            value={updateData.name}
                            onChange={(e) => { UpdateOnchange(e) }}
                            required
                        />
                    </div>

                    <div className="DivGroup">
                        <label className='label'>Village : </label><br />
                        <input
                            type="text"
                            name='village'
                            value={updateData.village}
                            placeholder='Enter The Village'
                            onChange={(e) => { UpdateOnchange(e) }}
                            required
                        />
                    </div>

                    <div className="DivGroup">
                        <label className='label'>Orgin : </label><br />
                        <input
                            type="text"
                            name='orgin'
                            value={updateData.orgin}
                            placeholder='Enter The Orgin'
                            onChange={(e) => { UpdateOnchange(e) }}
                            required
                        />
                    </div>

                    <div id='Buttons'>
                        <button type="submit" id='SubmitButton'>Update</button>

                        <button onClick={HandleUpdateUserPopup}
                            id="CloseButton"
                        >Close</button>
                    </div>


                </form>

            </div>
        </>
    )
}

export default UpdateUser;
