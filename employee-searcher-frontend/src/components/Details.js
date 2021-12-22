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
    console.log(data.img)

    return (
        <section className = "detailsContainer">
            <h3>Employee Profile</h3>
            <p className = "profileName">{data.name}, {data.age}</p>
            <p className = "profileLocation">{data.location.city}, {data.location.state}</p>
            <img className = "profileImage"
                src= {data.img.url}
                alt={data.title}
             />
            <p className = "jobTitle">{data.workHistory.title}</p>
            <p className = "company">{data.workHistory.company}</p>
            <p className = "availability">{data.availability.mon}</p>

        </section>
    );
}

export default Details;