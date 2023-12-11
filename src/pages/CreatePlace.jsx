import { useState, useEffect } from "react";
import { axiosReq } from "../api/axiosDefaults";
import { useNavigate } from "react-router-dom";


function CreatePlace() {
    // const [errors, setErrors] = useState({});
    const [countries, setCountry] = useState([]);
    const [cities, setCity] = useState([]);
    var cityCountries = {};
    const [countryAndCity, setCountryAndCity] = useState({});
    let history = useNavigate();

    // Fetches all countries and their cities fro the API
    useEffect(() => {
        fetch("https://countriesnow.space/api/v0.1/countries")
            .then((res) => res.json())
            .then((data) => {
                setCountry(data.data);
                data.data.forEach((country) => {
                    // !Change to the one in the API!!!!!!!!!!!!!!
                    cityCountries[country.country] = country.cities;
                });
                // data.data.forEach((country) => {
                //     setCountryAndCity({...countryAndCity, [country.country]: country.cities})
                //         });
            })
            // Used to avoid the error of the city field being empty when the country is selected
            .then(() => {
                setCountryAndCity(cityCountries);
            })
            },
        [[],[]]);
    

    

    const handleChange = (event) => {
        // handleChange for all fields
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        });
        // handleChange for country field... city field is updated based on country
        if (event.target.name === "country") {
            console.log('campo event.target.value');
            console.log(event.target.value);
            console.log('campo cityCountries');
            console.log(countryAndCity);

            setCity(countryAndCity[event.target.value]);
        }
    };

    const [postData, setPostData] = useState({
        place_name: "",
        place_type: "",
        address: "",
        country: "",
        city: "",
        website: "",
        phone_number: "",
        description: "",
        image: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const signUp = new signUp();

        signUp.append("place_name", postData.place_name);
        signUp.append("place_type", postData.place_type);
        signUp.append("address", postData.address);
        signUp.append("country", postData.country);
        signUp.append("city", postData.city);
        signUp.append("website", postData.website);
        signUp.append("phone_number", postData.phone_number);
        signUp.append("description", postData.description);
        signUp.append("image", postData.imageInput.current.files[0]);

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
            <h1>Create Place Page</h1>
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
                    <label htmlFor="place_type">Place Type</label>
                    <input
                        type="text"
                        className="form-control"
                        id="place_type"
                        name="place_type"
                        value={postData.place_type}
                        onChange={handleChange}
                    />
                    {/* {errors.place_type && (
                        <div className="alert alert-danger">
                            {errors.place_type}
                        </div>
                    )} */}
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={postData.address}
                        onChange={handleChange}
                    />
                    {/* {errors.address && (
                        <div className="alert alert-danger">
                            {errors.address}
                        </div>
                    )} */}
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select
                        className="form-control"
                        id="country"
                        name="country"
                        value={postData.country}
                        onChange={handleChange}
                    >
                        <option value="">Select a country</option>
                        {countries.map((country) => (
                            <option value={country.country}>
                                {country.country}
                            </option>
                        ))}
                    </select>
                    {/* {errors.country && (
                        <div className="alert alert-danger">
                            {errors.country}
                        </div>
                    )} */}
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <select
                        className="form-control"
                        id="city"
                        name="city"
                        value={postData.city}
                        onChange={handleChange}
                    >
                        <option value="">Select a city</option>
                        {cities.map((city) => (
                            <option value={city}>{city}</option>
                        ))}
                    </select>
                    {/* {errors.city && (
                        <div className="alert alert-danger">
                            {errors.city}
                        </div>
                    )} */}
                </div>
                <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input
                        type="text"
                        className="form-control"
                        id="website"
                        name="website"
                        value={postData.website}
                        onChange={handleChange}
                    />
                    {/* {errors.website && (
                        <div className="alert alert-danger">
                            {errors.website}
                        </div>
                    )} */}
                </div>
                <div className="form-group">
                    <label htmlFor="phone_number">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone_number"
                        name="phone_number"
                        value={postData.phone_number}
                        onChange={handleChange}
                    />
                    {/* {errors.phone_number && (
                        <div className="alert alert-danger">
                            {errors.phone_number}
                        </div>
                    )} */}
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={postData.description}
                        onChange={handleChange}
                    />
                    {/* {errors.description && (
                        <div className="alert alert-danger">
                            {errors.description}
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
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default CreatePlace;
