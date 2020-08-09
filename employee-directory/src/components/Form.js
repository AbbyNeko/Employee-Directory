import React, {useRef} from "react";
import Directory from "./Directory";

const Filter = ({onClick, allEmployees}) => {

    const FilterType = useRef();
    const FilterValue = useRef();

    const handleSubmit = event => {

        event.preventDefault();
        const type = FilterType.current.value;
        const value = FilterValue.current.value;

        if(type === "name") {
            allEmployees = allEmployees.filter(x => x.name === value);
        } else if(type === "email") {
            allEmployees = allEmployees.filter(x => x.email === value);
        } else {
            alert("Select a Filter Type");
        }

    };

        return (
            <form onSubmit={handleSubmit}>
                <label>Filter By</label>
                <select name="filter-type" ref={FilterType}>
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                </select>
                <input type="text" name="filter-value" ref={FilterValue}/>
                <input type="submit" value="Filter Employees"/>

                <Directory allEmployees={allEmployees} onClick={onClick}/>

            </form>
        )

}

export default Filter;