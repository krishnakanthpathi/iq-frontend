import axios from "axios";
import React, { useState, useEffect } from "react";
const DoubtForm = (props) => {
    const cur_location = window.location.pathname.split("/");
    const problemId = cur_location[cur_location.length - 1];

    // Initialize state properly
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        problemId: problemId || "",  // Ensure it's never undefined
        userId: props.user?._id || "" // Ensure it's never undefined
    });
    const [loader, setLoader] = useState(false);

    // Update state if props.user changes (important for async data)
    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
            userId: props.user?._id || "",
            problemId: problemId || "",
        }));
    }, [props.user, problemId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form data:", formData);
        setLoader(true);
        try {
            const response = await axios.post(`${props.url}/doubts/create` , {...formData});
            const data = response.data;
            console.log("Doubt submitted successfully:", data);
        } catch (error) {
            console.log("Error submitting doubt:", error);
        } finally {
            setLoader(false);
        }
    };

    return (
        <div className="container mt-5" data-bs-theme={props.theme}>
            <h2>Create a Doubt</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        rows="3"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="problemId" className="form-label">Problem ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="problemId"
                        name="problemId"
                        value={formData.problemId}
                        readOnly
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">User ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="userId"
                        name="userId"
                        value={formData.userId}
                        readOnly
                        required
                    />
                </div>
                {!loader && <button type="submit" className="btn btn-primary">Submit</button>}
                {loader && <button type="submit" className="btn btn-primary" disabled>Loading...</button>}
            </form>
        </div>
    );
};

export default DoubtForm;
