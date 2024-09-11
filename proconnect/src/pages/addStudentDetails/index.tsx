import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const AddStudentDetails = () => {
    const [userDetails, setUserDetails]: any = useState({
        email: "",
        registrationNumber: "",
        department: "",
        year: "",
        skills: [],
        interestDomain: [],
        filled: true
    });
    const [alumniDetails, setAlumniDetails]: any = useState({
        company: "",
        designation: "",
        yearsOfExperience: "",
        degree: "",
        skills: [],
        filled: true
    });
    const { data: session, status: sessionStatus }: any = useSession();

    const addStudentDetails = async () => {
        try {
            const res = await axios.post("../api/addUserDetails?userId" + session?.user?._id, userDetails);
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
            const res = await axios.post("../api/addUserDetails?userId" + session?.user?._id, alumniDetails );
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
        if (session?.user?.role === "student") {
            await addStudentDetails();
        } else if (session?.user?.role === "alumni") {
            await addAlumniDetails();
        }
    };

    console.log(session, sessionStatus, session?.user?.role);

    return (
        <>
            {sessionStatus === "authenticated" && session?.user?.role === "student" && (
                <>
                    <p>Student Details: {JSON.stringify(userDetails)}</p>
                    <input
                        type="text"
                        value={userDetails.email}
                        onChange={(e) =>
                            setUserDetails({ ...userDetails, email: e.target.value })
                        }
                        placeholder="Email"
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
                        placeholder="Registration Number"
                    />
                    <input
                        type="text"
                        value={userDetails.department}
                        onChange={(e) =>
                            setUserDetails({ ...userDetails, department: e.target.value })
                        }
                        placeholder="Department"
                    />
                    <input
                        type="text"
                        value={userDetails.year}
                        onChange={(e) =>
                            setUserDetails({ ...userDetails, year: e.target.value })
                        }
                        placeholder="Year"
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
                        className="w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        className="w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="ML">ML</option>
                        <option value="AI">AI</option>
                        <option value="WEB3">WEB3</option>
                    </select>
                    <button onClick={onSubmit} className="px-4 py-2 mt-4 font-semibold text-white bg-indigo-500 rounded hover:bg-indigo-600">
                        Submit
                    </button>
                </>
            )}

            {sessionStatus === "authenticated" && session?.user?.role === "alumni" && (
                <>
                    <p>Alumni Details: {JSON.stringify(alumniDetails)}</p>
                    <input
                        type="text"
                        value={alumniDetails.company}
                        onChange={(e) =>
                            setAlumniDetails({ ...alumniDetails, company: e.target.value })
                        }
                        placeholder="Company"
                    />
                    <input
                        type="text"
                        value={alumniDetails.designation}
                        onChange={(e) =>
                            setAlumniDetails({ ...alumniDetails, designation: e.target.value })
                        }
                        placeholder="Designation"
                    />
                    <input
                        type="text"
                        value={alumniDetails.yearsOfExperience}
                        onChange={(e) =>
                            setAlumniDetails({ ...alumniDetails, yearsOfExperience: e.target.value })
                        }
                        placeholder="Years of Experience"
                    />
                    <input
                        type="text"
                        value={alumniDetails.degree}
                        onChange={(e) =>
                            setAlumniDetails({ ...alumniDetails, degree: e.target.value })
                        }
                        placeholder="Degree"
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
                        className="w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="JavaScript">JavaScript</option>
                    </select>
                    <button onClick={onSubmit} className="px-4 py-2 mt-4 font-semibold text-white bg-indigo-500 rounded hover:bg-indigo-600">
                        Submit
                    </button>
                </>
            )}
        </>
    );
};

export default AddStudentDetails;
