import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';


function CharacterDropdown(){
    const[chars, setChars] = useState(null);
    const [user, setUser] = useState("Any");


    return(
        <div>
            <Dropdown value={user} options={user} onChange={(e)=>setUser(e.value)} optionLabel="name" placeholder='Any'/>
        </div>
    );
}
    

export default CharacterDropdown;