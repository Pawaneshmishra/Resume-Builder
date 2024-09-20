import { useState } from "react";

function Education({ isEditing }) {
    const [educations, setEducations] = useState([]);
    const [currentEducation, setCurrentEducation] = useState({ school: '', study: '', date: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentEducation(prev => ({ ...prev, [name]: value }));
    }

    const handleAdd = () => {
        setEducations(prev => [...prev, currentEducation]);
        setCurrentEducation({ school: '', study: '', date: '' });
    }

    if (isEditing) {
        return (
            <div className="education">
                <h2>Education</h2>
                <input
                    type="text"
                    name="school"
                    value={currentEducation.school}
                    onChange={handleChange}
                    placeholder="School Name"
                />
                <input
                    type="text"
                    name="study"
                    value={currentEducation.study}
                    onChange={handleChange}
                    placeholder="Course Name"
                />
                <input
                    type="date"
                    name="date"
                    value={currentEducation.date}
                    onChange={handleChange}
                    placeholder="Date of Study"
                />
                <button onClick={handleAdd}>Add Education</button>
                {
                    educations.map((education, index) => (
                        <div key={index}>
                            <p>{education.school} - {education.study} ({education.date})</p>
                        </div>
                    ))
                }
            </div>
        );
    }

    else {
        return (
            <div className="education">
                <h2>Educations</h2>
                {
                    educations.map((education, index) => (
                        <div key={index}>
                            <p>{education.school} - {education.study} ({education.date})</p>
                        </div>
                    ))
                }
            </div>
        );
    }
}


export default Education;