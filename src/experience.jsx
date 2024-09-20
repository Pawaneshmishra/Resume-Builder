import { useState } from "react";

function Experience({ isEditing }) {

    const [experiences, setExperiences] = useState([]);
    const [currentExperience, setCurrentExperience] = useState({
        company: '', position: '', responsibility: '', startDate: '', endDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentExperience(prev => ({ ...prev, [name]: value }));
    }

    const handleAdd = () => {
        setExperiences(prev => [...prev, currentExperience]);
        setCurrentExperience({
            company: '', position: '', responsibility: '', startDate: '', endDate: ''
        });
    }

    if (isEditing) {
        return (
            <div className="experience">
                <h2>Work Experience</h2>
                <input
                    type="text"
                    name="company"
                    value={currentExperience.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                />
                <input
                    type="text"
                    name="position"
                    value={currentExperience.position}
                    onChange={handleChange}
                    placeholder="Position Title"
                />
                <input
                    type="text"
                    name="responsibility"
                    value={currentExperience.responsibility}
                    onChange={handleChange}
                    placeholder="Responsibilites Held"
                />
                <input
                    type="date"
                    name="startDate"
                    value={currentExperience.startDate}
                    onChange={handleChange}
                />
                <input
                    type="date"
                    name="endDate"
                    value={currentExperience.endDate}
                    onChange={handleChange}
                />
                <button onClick={handleAdd}>Add Experience</button>

                {
                    experiences.map((exp, index) => (
                        <div key={index}>
                            <p>{exp.company} {exp.position}</p>
                            <p>{exp.startDate} {exp.endDate}</p>
                            <p>{exp.responsibility}</p>
                        </div>
                    ))
                }
            </div>
        );
    }

    else{
        return(
            <div className="experience">
                <h2>Work Experience</h2>
                {
                    experiences.map((exp, index) => (
                        <div key={index}>
                            <p>{exp.company} {exp.position}</p>
                            <p>{exp.startDate} {exp.endDate}</p>
                            <p>{exp.responsibility}</p>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Experience;