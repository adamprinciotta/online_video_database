import React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';


function testDropdown(){
    const divStyle = {
        margin: 100,
        width: 250
    }

    return(
        <div style={divStyle}>
            <DropDownListComponent></DropDownListComponent>
        </div>
    );
}
    

export default testDropdown;