import React from "react";
import BarChart from "./BarChart";
import dataModel from "./dataModel"
import formGroup from "./Functions/formGroup";
import callToShowGraph from "./Functions/callToShowGraph";
import callToShowFilter from "./Functions/callToShowFilter";


function GraphLayout({ dataUsingAPI }) {

    const [group, setGroup] = React.useState(dataModel);
    const [dataToShow, setDataToShow] = React.useState([]);
    const [filter, setFilter] = React.useState([])
    const [filterForGraph, setFilterForGraph] = React.useState([{ positive: [], negative: [] }]);
    const [bloodGroup, setBloodGroup] = React.useState("");

    React.useEffect(() => {
        formGroup(group, dataUsingAPI, setGroup);

        setDataToShow(group.map((element) => {
            return element.total;
        }));

        setFilterForGraph({
            positive: group.map((e) => { return e.positive; }),
            negative: group.map((e) => { return e.negative })
        })

    }, [dataUsingAPI, group]);


    return <div>
        <nav>
            <select onChange={(event) => {
                callToShowGraph(event.target.value, group, setDataToShow, setFilterForGraph, setFilter, setBloodGroup)
            }}>
                <option value="all">All</option>
                {group.map((e) => {
                    return <option value={e.type}>{e.type}</option>
                })}
            </select>

            <select onChange={(event) => {
                callToShowFilter(event.target.value, group, bloodGroup, setFilterForGraph)
            }}>
                <option>-----</option>
                <option value="+">{filter[0]}</option>
                <option value="-">{filter[1]}</option>
            </select>
        </nav>

        <div className="barGraphLayout">
            <BarChart
                data1={dataToShow}
                name1="People"
            />

            <BarChart
                data1={filterForGraph.positive}
                data2={filterForGraph.negative}
                name1="Positive"
                name2="Negative"
            />
        </div>

        {/* {console.log(group)} */}
    </div>
}

export default GraphLayout;