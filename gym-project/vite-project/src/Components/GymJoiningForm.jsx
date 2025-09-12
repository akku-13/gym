import React, { useState } from "react";
import axios from "axios";

const GymJoiningForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    trainingPreferences: [],
  });
  const [showAlert, setShowAlert] = useState(false);

  const trainingOptions = [
    "Body Building Training",
    "Weight Loss Training",
    "Strength Training",
    "Cardio Training",
    "Yoga and Flexibility Training",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      if (checked) {
        return {
          ...prevState,
          trainingPreferences: [...prevState.trainingPreferences, value],
        };
      } else {
        return {
          ...prevState,
          trainingPreferences: prevState.trainingPreferences.filter(
            (pref) => pref !== value
          ),
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to backend
      const response = await axios.post("http://localhost:5000/api/gymMembers", formData);
      
      // Show success alert
      console.log(response.data);
      setShowAlert(true);

      // Reset form after successful submission
      setFormData({
        name: "",
        age: "",
        gender: "",
        email: "",
        phone: "",
        trainingPreferences: [],
      });
    } catch (error) {
      console.error("Error saving form data:", error);
      alert("There was an error saving your data. Please try again.");
    }
  };

  return (
    <div className="container my-5 mx-5" style={{ maxWidth: "2000px" }}>
      <h2 className="text-center mb-4">Gym Joining Form</h2>

      {/* Success Alert */}
      {showAlert && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          Form submitted successfully!
          <button type="button" className="btn-close" onClick={() => setShowAlert(false)}></button>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Name and Age */}
        <div className="mb-3 row">
          <div className="col-12 col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              required
            />
          </div>
        </div>

        {/* Gender and Contact Information */}
        <div className="mb-3 row">
          <div className="col-12 col-md-6">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select
              className="form-select"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="mb-3 row">
          <div className="col-12 col-md-6">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>

        {/* Training Preferences (Checkboxes) */}
        <div className="mb-3">
          <label className="form-label">Training Preferences</label>
          <div>
            {trainingOptions.map((option) => (
              <div key={option} className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={option}
                  value={option}
                  checked={formData.trainingPreferences.includes(option)}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor={option}>
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Join Gym
          </button>
        </div>
      </form>
    </div>
  );
};

export default GymJoiningForm;
