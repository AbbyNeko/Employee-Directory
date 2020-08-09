import React, {useReducer} from 'react';
import './App.css';
import Form from './components/Form';

function App() {

  const employees = [
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
  ]

  const [allEmployees, dispatch] = useReducer((state, action) => {

    if(action.type === "sortByName") {

      return state.sort(function(a, b) {
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

    } 

  }, employees);

  return (
    <div className="container">
        <h1>Employee Directory</h1>
        <Form allEmployees={allEmployees} onClick={()=> dispatch({type:"sortByName"})}/>
    </div>
  );
}

export default App;
