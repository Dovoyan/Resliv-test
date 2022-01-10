import { useEffect, useState } from "react";
import SettingPage from "../settings/settingPage";

function GetData() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [update, setUpdate] = useState('qwe1');


    useEffect(() => {
        fetch("https://reqres.in/api/users?per_page=12")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.data);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        setUpdate(false)
    }, [update])



    return <SettingPage data={items} setData={setItems} update={update} setUpdate={setUpdate} />;
}

export default GetData;