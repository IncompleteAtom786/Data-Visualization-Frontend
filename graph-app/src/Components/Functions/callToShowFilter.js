function callToShowFilter(value, group, bloodGroup, setFilterForGraph) {
    if (value === "+") setFilterForGraph({
        positive: group.map((e) => { if (bloodGroup === e.type) return e.positive; return 0 }),
        negative: []
    });

    else setFilterForGraph({
        positive: [],
        negative: group.map((e) => { if (bloodGroup === e.type) return e.negative; return 0 })
    });
}

export default callToShowFilter;