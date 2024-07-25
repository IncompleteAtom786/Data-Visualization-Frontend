import React from "react";
import GraphLayout from "./GraphLayout";

function App() {

    const [dataUsingAPI, setData] = React.useState();

    React.useEffect(() => {

        fetch("https://random-data-api.com/api/v2/blood_types?size=100&response_type=json", {
            method: "GET"
        }).then(response => response.json()).then((data) => { setData(data); })
    }, []);

    return <div>
        {dataUsingAPI && <GraphLayout
            dataUsingAPI={dataUsingAPI}
        />}
    </div>
}

export default App;