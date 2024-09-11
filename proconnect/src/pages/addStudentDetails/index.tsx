import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const AddStudentDetails = () => {
    const [popUp, setPopUp] = useState(true);
    const [userDetails, setUserDetails]: any = useState({
        email: "",
        registrationNumber: "",
        department: "",
        year: "",
        skills: [],
        interestDomain: [],
    });
    const [alumniDetails, setAlumniDetails]: any = useState({
        company: "",
        designation: "",
        yearsOfExperience: "",
        degree: "",
        skills: [],
    });
    const { data: session, status: sessionStatus }: any = useSession();

    const addStudentDetails = async () => {
        try {
            const res = await axios.post("../api/addUserDetails?userId" + session?.user.id, userDetails);
        if (res.status === 200) {
                console.log("Student details added successfully");
            } else {
                console.log("Error adding student details");
            }
        } catch (error) {
            console.log("Error adding student details:", error);
        }
    };

    const addAlumniDetails = async () => {
        try {
            const res = await axios.post("../api/addUserDetails?userId" + session?.user.Id, alumniDetails, {
                params: { userId: session?.user.id },
            });
            if (res.status === 200) {
                console.log("Alumni details added successfully");
            } else {
                console.log("Error adding alumni details");
            }
        } catch (error) {
            console.log("Error adding alumni details:", error);
        }
    };

    const onSubmit = async () => {
        if (session?.user.role === "student") {
            await addStudentDetails();
        } else if (session?.user.role === "alumni") {
            await addAlumniDetails();
        }
    };

    useEffect(() => {
        console.log(session)
    }, []);

    return (
        <>
            {sessionStatus && session?.user.role === "student" && (
                <>
                    <p>Student Details: {JSON.stringify(userDetails)}</p>
                    <input
                        type="text"
                        value={userDetails.email}
                        onChange={(e) =>
                            setUserDetails({ ...userDetails, email: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        value={userDetails.registrationNumber}
                        onChange={(e) =>
                            setUserDetails({
                                ...userDetails,
                                registrationNumber: e.target.value,
                            })
                        }
                    />
                    <input
                        type="text"
                        value={userDetails.department}
                        onChange={(e) =>
                            setUserDetails({ ...userDetails, department: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        value={userDetails.year}
                        onChange={(e) =>
                            setUserDetails({ ...userDetails, year: e.target.value })
                        }
                    />
                    <select
                        multiple
                        value={userDetails.skills}
                        onChange={(e) =>
                            setUserDetails({
                                ...userDetails,
                                skills: Array.from(e.target.selectedOptions, (option) => option.value),
                            })
                        }
                    >
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="JavaScript">JavaScript</option>
                    </select>
                    <select
                        multiple
                        value={userDetails.interestDomain}
                        onChange={(e) =>
                            setUserDetails({
                                ...userDetails,
                                interestDomain: Array.from(e.target.selectedOptions, (option) => option.value),
                            })
                        }
                    >
                        <option value="ML">ML</option>
                        <option value="AI">AI</option>
                        <option value="WEB3">WEB3</option>
                    </select>
                    <button onClick={onSubmit}>Submit</button>
                </>
            )}

            {sessionStatus && session?.user.role === "alumni" && (
                <>
                    <p>Alumni Details: {JSON.stringify(alumniDetails)}</p>
                    <input
                        type="text"
                        value={alumniDetails.company}
                        onChange={(e) =>
                            setAlumniDetails({ ...alumniDetails, company: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        value={alumniDetails.designation}
                        onChange={(e) =>
                            setAlumniDetails({ ...alumniDetails, designation: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        value={alumniDetails.yearsOfExperience}
                        onChange={(e) =>
                            setAlumniDetails({ ...alumniDetails, yearsOfExperience: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        value={alumniDetails.degree}
                        onChange={(e) =>
                            setAlumniDetails({ ...alumniDetails, degree: e.target.value })
                        }
                    />
                    <select
                        multiple
                        value={alumniDetails.skills}
                        onChange={(e) =>
                            setAlumniDetails({
                                ...alumniDetails,
                                skills: Array.from(e.target.selectedOptions, (option) => option.value),
                            })
                        }
                    >
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="JavaScript">JavaScript</option>
                    </select>
                    <button onClick={onSubmit}>Submit</button>
                </>
            )}
        </>
    );
};

export default AddStudentDetails;
