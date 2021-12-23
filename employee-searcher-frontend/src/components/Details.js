import React, { useState, useEffect } from "react";



function Details(props) {
    const [data, setData] = useState(
        { 
            location: {
                city: "",
                state: "",
            },
            img: {
                url: "",
                title: "",
            },
            contact: {
                phone: "",
                email: "",
            },
            availability: {
                "mon": null,
                "tue": null,
                "wed": null,
                "thu": null,
                "fri": null,
                "sat": null,
                "sun": null
            },
            name: "Neal",
            age: 26,
            skills: [""],
            workHistory: [
                {
                    title: "",
                    company: "",
                    _id: ""
                }
            ],
            openForWork: true,
            rating: 5,
            }
    );
    const url = `http://localhost:8000/api/employee/${props.match.params._id}`
    console.log(url)

    // Function to get data from API
    const getData = () => {
        fetch (url)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setData(res)
            })
    }

    // Call getData function inside of UseEffect
    useEffect(() => {
        getData()
    }, [])
    console.log(data.name)
    console.log(data)

    console.log(data.availability.mon)

  const daysArr = [
        data.availability.mon ? "Monday" : "no",
        data.availability.tue ? "Tuesday" : "no", 
        data.availability.wed ? "Wednesday" : "no",
        data.availability.thu ? "Thursday" : "no",
        data.availability.fri ? "Friday" : "no", 
        data.availability.sat ? "Saturday" : "no",
        data.availability.sun ? "Sunday" : "no"
]
   const availableDays = daysArr.filter(i => i !== "no")

   const jobs = (data.workHistory ? data.workHistory.map(job => <p className = "jobTitle">{job.title} at {job.company}</p>) : null)

    return (
        <section className = "detailsContainer">
            <h2>Employee Profile</h2>
            <div className="profile">
            <div className="availableDays">
                <h3>Available to work:</h3>
            {availableDays.map((day) => <p>{day}</p>)}
            </div>
            <div>
            <p className = "profileName">{data.name}, {data.age}</p>
            <p className = "profileLocation">{data.location.city ? data.location.city : null}, {data.location.state ? data.location.state : null}</p>
            <img className = "profileImage"
                src= {data.img.url}
                alt={data.title ? data.title : null}
             />
            <p>{data.contact.phone ? data.contact.phone : null}</p>
            <p>{data.contact.email ? data.contact.email : null}</p>
            </div>
            <div className="skills">
            <h3>Work Experience:</h3>
            {jobs}
            <h3>Skills:</h3>
            {data.skills ? data.skills.map(skill => <p>{skill}</p>) : null}
            </div>
            </div>
    
        </section>
    );
}

export default Details;