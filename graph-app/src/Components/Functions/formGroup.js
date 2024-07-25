function formGroup(group, dataUsingAPI, setGroup) 
{

    dataUsingAPI.forEach(person => {
        // console.log(person);
        if (person.type === 'A') {
            if (person.rh_factor === '+') group[0].positive++;
            else group[0].negative++;
            group[0].total++;
        }
        else if (person.type === 'B') {
            if (person.rh_factor === '+') group[1].positive++;
            else group[1].negative++;
            group[1].total++;
        }
        else if (person.type === 'AB') {
            if (person.rh_factor === '+') group[2].positive++;
            else group[2].negative++;
            group[2].total++;
        }
        else if (person.type === 'O') {
            if (person.rh_factor === '+') group[3].positive++;
            else group[3].negative++;
            group[3].total++;
        }

    });
    setGroup(group);
    console.log(group)
}

export default formGroup;