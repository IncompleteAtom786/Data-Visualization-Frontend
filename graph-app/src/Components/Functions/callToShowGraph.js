function callToShowGraph(value, group, setDataToShow, setFilterForGraph, setFilter, setBloodGroup) {
    if (value !== "all") {
        setDataToShow(group.map((element) => {
            if (value === element.type) {
                setFilter([value + "+", value + "-"])
                return element.total;
            }
            return 0;
        }));
        setFilterForGraph({
            positive: group.map((e) => { if (value === e.type) return e.positive; return 0 }),
            negative: group.map((e) => { if (value === e.type) return e.negative; return 0 })
        });
        setBloodGroup(value);
    }
    else {
        setDataToShow(group.map((e) => { return e.total }));
        setFilterForGraph({ positive: group.map((e) => { return e.positive }), negative: group.map((e) => { return e.negative }) })
        setFilter([])
    }
};

export default callToShowGraph;