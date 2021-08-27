import React from 'react'

export const VndaTableHeader = (props) => {
    return (
        <div id='table-header'>
        <table border="0">
          <thead >
            <tr>
                {props.headers.map((header, index)=>{
                    return <th id='th' key={index}>{header}</th>
                })}
            </tr>
          </thead>
        </table>
      </div>
    )
}
