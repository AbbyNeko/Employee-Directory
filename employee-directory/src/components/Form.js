import React, {useRef, useState} from "react";
import Directory from "./Directory";

const Filter = () => {

    const allEmployees = [
        {
          name: "Jake Gyllenhal",
          title: "Software Engineer",
          phone: "952-452-2390",
          email: "jake@designzillas.com",
          department: "IT"
        },
        {
          name: "Edward Cullen",
          title: "HR Manager",
          phone: "349-433-2320",
          email: "edward@designzillas.com",
          department: "Human Resources"
        },
        {
          name: "Bella Thorne",
          title: "HR Representative",
          phone: "934-390-8492",
          email: "bella@designzillas.com",
          department: "Human Resources"
        },
        {
          name: "Allison Hargreeves",
          title: "Test Engineer",
          phone: "954-204-9140",
          email: "allison@designzillas.com",
          department: "Development"
        },
        {
          name: "Harry Potter",
          title:"Back-End Developer",
          phone: "939-290-4782",
          email: "harry@designzillas.com",
          department: "Development"
        },
        {
          name: "Hermione Granger",
          title: "Back-End Developer",
          phone: "934-452-2591",
          email: "hermione@designzillas.com",
          department: "Development"
        },
        {
          name: "Hayley Williams",
          title: "Office Puppy",
          phone: "952-452-2390",
          email: "supportpup@designzillas.com",
          department: "Human Resources"
        },
        {
          name: "Taylor Swift",
          title: "Web Designer",
          phone: "324-390-1049",
          email: "taylor@designzillas.com",
          department: "Design"
        },
        {
          name: "Lisa Simpson",
          title: "UX Designer",
          phone: "342-134-5032",
          email: "lisa@designzillas.com",
          department: "Design"
        },
        {
          name: "Thomas Black",
          title: "Software Engineer",
          phone: "324-547-2492",
          email: "tom@designzillas.com",
          department: "IT"
        }
      ];

    const FilterType = useRef();
    const FilterValue = useRef();

    const [currentEmployees, setCurrentEmployees] = useState(allEmployees);

    const handleSubmit = event => {

        event.preventDefault();
        const type = FilterType.current.value;
        const value = FilterValue.current.value;

        if(type === "name") {
            setCurrentEmployees(allEmployees.filter(x => x.name === value));
        } else if(type === "email") {
            setCurrentEmployees(allEmployees.filter(x => x.email === value));
        } else {
            alert("Select a Filter Type");
        }

        //console.log(`all employees - ${JSON.stringify(allEmployees)}`);

    };

    const sortByName = event => {
        event.preventDefault();
        //console.log("sorting")

        const newEmployeeArr = allEmployees.sort(function(a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });

          setCurrentEmployees(newEmployeeArr);

          console.log(`new employee arr - ${JSON.stringify(newEmployeeArr)}`)

    }

        return (
            <form onSubmit={handleSubmit}>
                <label>Filter By</label>
                <select name="filter-type" ref={FilterType}>
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                </select>
                <input type="text" name="filter-value" ref={FilterValue}/>
                <input type="submit" value="Filter Employees"/>

                <Directory allEmployees={currentEmployees} onClick={sortByName}/>

            </form>
        )

}

export default Filter;