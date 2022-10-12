import React, { useState } from "react";
function FormHandel(){

    // const [userName , setName] =  useState("");

    // const handleInput = (event) => {
    //     setName(event.target.value);
    // }

    // const hanleSubmit = () => {
    //     console.log("Submitted", userName);
    //     setName("");
    // }

    // <label value={userName}> Name : </label>
    //         <input type="text" onChange={(e) => setName(e.target.value)} value={userName}/>
    //         <br/>
    //         <button onClick={hanleSubmit}>Submit</button>

    const [name, setName] = useState('');
    const [email , setEmail] = useState('');
    const [gender , setGender] = useState('');
    const [dob, setDob] = useState('');
    const [phone , setPhone] = useState(''); 
    const [address , setAddress] = useState('');
    const [zipcode , setZipcode] = useState('');
    const [hobby , setHobby] = useState([]);

    function handelSubmit(){

        if(name != "" && email != "" && gender != "" && dob != "" && phone != "" && address != "" && zipcode!= "" && hobby != ""){
            console.log(name , email, gender , dob , phone , address , zipcode , hobby);
        }else{
            alert("Fill all details");
        }

    }

    return (
        <div>
        {
            /*
                form
                - name
                - email
                - gender
                - dob
                - phone number
                - address
                - zipcode
                - hobby
                - city
            */
        }
           <div>
            <label>Name :  </label>
            <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} value={name} />
           </div>

           <div>
            <label>Email :  </label>
            <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email} />
           </div>

           <div>
            <label>Gender :  </label>
                <div>
                   <input type="radio" onChange={(e) => setGender('Male')} value={gender} name="gender"/>
                   <label>Male</label> 
                </div>
                <div>
                   <input type="radio" onChange={(e) => setGender('Female')} value={gender} name="gender"/>
                   <label>Female</label> 
                </div>
                <div>
                   <input type="radio" onChange={(e) => setGender('others')} value={gender} name="gender"/>
                   <label>Others</label> 
                </div>
           </div>

           <div>
            <label>DOB :  </label>
            <input type="date" placeholder="Enter your DOB" onChange={(e) => setDob(e.target.value)} value={dob} />
           </div>

           <div>
            <label>Phone :  </label>
            <input type="text" placeholder="Enter your Phone" onChange={(e) => setPhone(e.target.value)} value={phone} />
           </div>

           <div>
            <label>address :  </label>
            <input type="text" placeholder="Enter your address" onChange={(e) => setAddress(e.target.value)} value={address} />
           </div>

           <div>
            <label>zipcode :  </label>
            <input type="text" placeholder="Enter your zipcode" onChange={(e) => setZipcode(e.target.value)} value={zipcode} />
           </div>

           <div>
            <label>hobby :  </label>
            <input type="text" placeholder="Enter your hobby" onChange={(e) => setHobby(e.target.value)} value={hobby} />
           </div>

           <button onClick={handelSubmit}>Submit</button>
        </div>
    );
}

export default FormHandel;