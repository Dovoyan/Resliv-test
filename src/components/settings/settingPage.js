import { useEffect, useRef, useState } from "react";
import './settingPage.css'


function deleteEmployee(data, item, setUpdate) {
    const array = data.filter(e => e.id != item.id)
    setUpdate(array)
}

function addPlacemark(data, setUpdate, inputNameRef, inputLastNameRef) {
    setUpdate([...data, { first_name: inputNameRef, id: data[data.length - 1].id + 1, last_name: inputLastNameRef }])
}

function SettingPage(props) {

    const inputNameRef = useRef(null);
    const inputLastNameRef = useRef(null);

    if (props.data === undefined) props.data = []

    return (
        <div>
            Name<input ref={inputNameRef}></input>
            Last name<input ref={inputLastNameRef}></input>
            <button onClick={() => addPlacemark(props.data, props.setData, inputNameRef.current.value, inputLastNameRef.current.value)}>Add</button>
            {
                props.data.map(item => (
                    <div className="Employee" key={item.id}>
                        <div className="Name">{item.first_name} {item.last_name}</div>  <button onClick={() => deleteEmployee(props.data, item, props.setData)}>delete</button>
                    </div>
                ))
            }
        </div>
    );

}

export default SettingPage;