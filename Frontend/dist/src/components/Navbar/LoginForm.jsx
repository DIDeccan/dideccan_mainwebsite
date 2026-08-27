import React, { useState, useEffect, useContext } from "react";
import "../../styles/Navbar/LoginForm.css";
import { X } from "react-feather";
import { RegistrationContext } from "../../Contextapi/RegistrationContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm({ alwaysOpen = false }) {
  const [isOpen, setIsOpen] = useState(alwaysOpen);

  useEffect(() => {
    if (alwaysOpen) setIsOpen(true);
  }, [alwaysOpen]);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    course: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const { submitRegistration, loading } = useContext(RegistrationContext) || {};

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      switch (name) {
        case "fullname":
          if (!value.trim()) newErrors.fullname = "Full name is required";
          else if (!/^[A-Za-z\s]+$/.test(value)) newErrors.fullname = "Enter a valid fullname";
          else if (value.length > 50) newErrors.fullname = "Full name must be under 50 characters";
          else delete newErrors.fullname;
          break;

        case "email":
          if (!value.trim()) newErrors.email = "Email is required";
          else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) newErrors.email = "Enter a valid email";
          else delete newErrors.email;
          break;

        case "phone":
          if (!value.trim()) newErrors.phone = "Phone number is required";
          else if (!/^\d{10}$/.test(value)) newErrors.phone = "Phone number must be 10 digits";
          else delete newErrors.phone;
          break;

        case "course":
          if (!value.trim()) newErrors.course = "Please select a course";
          else delete newErrors.course;
          break;

        default:
          break;
      }

      return newErrors;
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] ?? null;
    setFormData((p) => ({ ...p, resume: file }));

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (!file) newErrors.resume = "Resume is required";
      else delete newErrors.resume;
      return newErrors;
    });
  };

  
  const validate = () => {
    const newErrors = {};

    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required";
    else if (!/^[A-Za-z\s]+$/.test(formData.fullname)) newErrors.fullname = "Enter a valid fullname";
    else if (formData.fullname.length > 50) newErrors.fullname = "Full name must be under 50 characters";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone number must be 10 digits";

    if (!formData.course.trim()) newErrors.course = "Please select a course";

    if (!formData.resume) newErrors.resume = "Resume is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = new FormData();
    data.append("fullname", formData.fullname);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("course", formData.course);
    if (formData.resume) data.append("resume", formData.resume);

    try {
      if (!submitRegistration) {
        toast.warning("Submit function not available");
      } else {
        await submitRegistration(data);
        toast.success("Registration successful!");
        setFormData({ fullname: "", email: "", phone: "", course: "", resume: null });
        setErrors({});
        if (!alwaysOpen) setIsOpen(false);
      }
    } catch (err) {
      toast.error("Failed to register: " + (err?.message || "Unknown error"));
    }
  };

  const renderForm = () => (
    <div className={`registration-wrapper ${alwaysOpen ? "inline" : "modal-mode"}`}>
      {!alwaysOpen && (
        <div className="form-header">
          <h2>Register</h2>
          <button className="close-btn" onClick={() => setIsOpen(false)} type="button">
            <X size={20} />
          </button>
        </div>
      )}

      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <label>Full Name</label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
        {errors.fullname && <span className="error">{errors.fullname}</span>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          required
        />
        {errors.phone && <span className="error">{errors.phone}</span>}

        <label>Courses</label>
        <select name="course" value={formData.course} onChange={handleChange}>
          <option value="">Select a course</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile Development">Mobile Development</option>
          <option value="Software Testing">Software Testing</option>
          <option value="AI & Data Science">AI & Data Science</option>
          <option value="DevOps">DevOps</option>
        </select>
        {errors.course && <span className="error">{errors.course}</span>}

        <label>Resume</label>
        <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
        {errors.resume && <span className="error">{errors.resume}</span>}

        <button type="submit" className="register-btn" disabled={loading}>
          {loading ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );

  return (
    <>
      {!alwaysOpen && (
        <button className="login-btn" onClick={() => setIsOpen(true)} type="button">
          Apply Now
        </button>
      )}

      {isOpen && !alwaysOpen && (
        <div className="form-overlay" onClick={() => setIsOpen(false)}>
          <div className="form-content" onClick={(e) => e.stopPropagation()}>
            {renderForm()}
          </div>
        </div>
      )}

      {alwaysOpen && renderForm()}

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default LoginForm;
