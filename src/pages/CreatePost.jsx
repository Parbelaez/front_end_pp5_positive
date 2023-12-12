import { useState, useEffect } from "react";
import { axiosReq } from "../api/axiosDefaults";
import { useNavigate } from "react-router-dom";


function CreatePost() {

    let history = useNavigate();

    const handleChange = (event) => {
        // handleChange for all fields
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        });
    };

    const [postData, setPostData] = useState({
        place_name: "",
        title: "",
        visit_date: "",
        content: "",
        image: "",
        image_filter: "",
        recommendaton: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const signUp = new signUp();

        signUp.append("place_name", postData.place_name);
        signUp.append("title", postData.title);
        signUp.append("visit_date", postData.visit_date);
        signUp.append("content", postData.content);
        signUp.append("image", postData.image);
        signUp.append("image_filter", postData.image_filter);
        signUp.append("recommendaton", postData.recommendaton);

        try {
            const { data } = await axiosReq.post("/posts/", signUp);
            history.push(`/posts/${data.id}`);
        } catch (err) {
            console.log(err);
        //     if (err.response?.status !== 401) {
        //     setErrors(err.response?.data);
        //     }
        }
    };

    return (
        <div>
            <h1>Create Post Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="place_name">Place Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="place_name"
                        name="place_name"
                        value={postData.place_name}
                        onChange={handleChange}
                    />
                    {/* {errors.place_name && (
                        <div className="alert alert-danger">
                            {errors.place_name}
                        </div>
                    )} */}
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={postData.title}
                        onChange={handleChange}
                    />
                    {/* {errors.place_type && (
                        <div className="alert alert-danger">
                            {errors.place_type}
                        </div>
                    )} */}
                </div>
                <div className="form-group">
                    <label htmlFor="visit_date">Visit Date</label>
                    <input
                        type="text"
                        className="form-control"
                        id="visit_date"
                        name="visit_date"
                        value={postData.visit_date}
                        onChange={handleChange}
                    />
                    {/* {errors.address && (
                        <div className="alert alert-danger">
                            {errors.address}
                        </div>
                    )} */}
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <input
                        type="text"
                        className="form-control"
                        id="content"
                        name="content"
                        value={postData.content}
                        onChange={handleChange}
                    />
                    {/* {errors.country && (
                        <div className="alert alert-danger">
                            {errors.country}
                        </div>
                    )} */}
                </div>
                // !Change to the form for uploading images!!!!!!!!!!!!!!
                // !Change to bootstrap!!!!!!!!!!!!!!
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        name="image"
                        value={postData.image}
                        onChange={handleChange}
                    />
                    {/* {errors.image && (
                        <div className="alert alert-danger">
                            {errors.image}
                        </div>
                    )} */}
                </div>
                <div className="form-group">
                    <label htmlFor="image_filter">Image Filter</label>
                    <input
                        type="text"
                        className="form-control"
                        id="image_filter"
                        name="image_filter"
                        value={postData.image_filter}
                        onChange={handleChange}
                    />
                    {/* {errors.place_name && (
                        <div className="alert alert-danger">
                            {errors.place_name}
                        </div>
                    )} */}
                </div>
                <div className="form-group">
                    <label htmlFor="recommendation">Recommendation</label>
                    <input
                        type="text"
                        className="form-control"
                        id="recommendation"
                        name="recommendation"
                        value={postData.recommendation}
                        onChange={handleChange}
                    />
                    {/* {errors.place_name && (
                        <div className="alert alert-danger">
                            {errors.place_name}
                        </div>
                    )} */}
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default CreatePost;
