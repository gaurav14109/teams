import React from 'react';

const Table =(props)=>{
    console.log(props.data.forEach(d=>{

        console.log(d.data().name)
    }))
    return(

        <tbody>
           
            {
                props.data.length   > 0 &&
                props.data.map(d=>(

                    <tr>
                        {console.log(d.data().name)}
                        <td>{d.data().name}</td>
                        <td>{d.data().company}</td>
                        <td>{d.data().status}</td>
                        <td>{d.data().last_updated}</td>
                        <td>{d.data().notes}</td>
                    </tr>
                ))
            }
            
        </tbody>
    )

}

export default Table