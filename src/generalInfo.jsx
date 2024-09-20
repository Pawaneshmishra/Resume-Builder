import { useState } from "react";

function GeneralInfo ({isEditing}) {
    const [info, setInfo] = useState({name:'', email:'', phone: ''});

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setInfo(prevInfo => ({...prevInfo, [name]:value}));
    };

    if(isEditing){
        return(
            <div className="general-info">
                <h2>General Information</h2>
                <input 
                    type="text" 
                    name="name"
                    value={info.name}
                    onChange={handleChange}
                    placeholder="name"
                />
                <input
                    type="email"
                    name="email"
                    value={info.email}
                    onChange={handleChange}
                    placeholder="email"
                />
                <input 
                    type="tel"
                    name="phone"
                    value={info.phone}
                    onChange={handleChange}
                    placeholder="phone" 
                />            
            </div>
        );
    }

    else{
        return(
            <div className="general-info">
                <h2>General Information</h2>
                <p>Name : {info.name}</p>
                <p>Email : {info.email}</p>
                <p>Phone : {info.phone}</p>
            </div>
        );
    }
};

export default GeneralInfo;