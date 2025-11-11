"use client";
import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    institution: "",
    gender: "",
    address: "",
    district: "",
    thana: "",
    postalCode: "",
    fatherName: "",
    motherName: "",
    guardianContact: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

const [isSubmitting, setIsSubmitting] = useState(false);

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
  const target = e.target;

  if (target instanceof HTMLInputElement) {
    const { name, value, type, checked } = target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  } else if (target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement) {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  }
};

  const validatePassword = (password: string) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}[\]|:;"'<>,.?/]).{8,}$/.test(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.agree) {alert("You must agree to the terms and conditions."); setIsSubmitting(false); return;}
    if (!validatePassword(formData.password)) {alert("Password must contain uppercase, lowercase, number, special character, and at least 8 chars."); setIsSubmitting(false); return;}
    if (formData.password !== formData.confirmPassword) {alert("Passwords do not match!"); setIsSubmitting(false); return;}

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Registration successful!");
        setFormData({
          firstName: "",
          lastName: "",
          dob: "",
          institution: "",
          gender: "",
          address: "",
          district: "",
          thana: "",
          postalCode: "",
          fatherName: "",
          motherName: "",
          guardianContact: "",
          email: "",
          password: "",
          confirmPassword: "",
          agree: false,
        });
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      alert("❌ Failed to submit form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-[#0d002e]/60 border border-[#a200ff33] text-[#d4bfff] rounded-xl p-8 backdrop-blur-md shadow-neon">
      <h2 className="text-3xl font-bold mb-6 text-center">Science Theatre Registration</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="form-input"/>
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="form-input"/>
        </div>

        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="form-input"/>

        <select name="institution" value={formData.institution} onChange={handleChange} required className="form-input">
          <option value="">Select Institution</option>
          <option value="BRAC University">BRAC University</option>
          <option value="BUET">BUET</option>
          <option value="DU">University of Dhaka</option>
          <option value="Other">Other</option>
        </select>

        <select name="gender" value={formData.gender} onChange={handleChange} required className="form-input">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <textarea name="address" placeholder="Present Address" value={formData.address} onChange={handleChange} required className="form-input h-20"></textarea>

        <div className="grid sm:grid-cols-2 gap-4">
          <input type="text" name="district" placeholder="District" value={formData.district} onChange={handleChange} required className="form-input"/>
          <input type="text" name="thana" placeholder="Thana / Upazila" value={formData.thana} onChange={handleChange} className="form-input"/>
        </div>

        <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} className="form-input"/>
        <input type="text" name="fatherName" placeholder="Father's Name" value={formData.fatherName} onChange={handleChange} className="form-input"/>
        <input type="text" name="motherName" placeholder="Mother's Name" value={formData.motherName} onChange={handleChange} className="form-input"/>
        <input type="text" name="guardianContact" placeholder="Guardian Contact Number" value={formData.guardianContact} onChange={handleChange} required className="form-input"/>
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="form-input"/>

        <div className="grid sm:grid-cols-2 gap-4">
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="form-input"/>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required className="form-input"/>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} className="w-4 h-4 accent-[#a200ff]"/>
          <label className="text-sm">I agree to the <a href="#" className="text-[#a200ff] underline">Terms and Conditions</a></label>
        </div>

        <button type="submit" className="w-full py-3 rounded-lg neon-btn text-lg font-bold tracking-widest uppercase mt-4">Register</button>
      </form>

      <style jsx>{`
        .form-input {
          width: 100%;
          padding: 0.6rem 1rem;
          border-radius: 0.5rem;
          background: rgba(26, 0, 51, 0.5);
          border: 1px solid rgba(162,0,255,0.4);
          color: #d4bfff;
          outline: none;
          transition: 0.2s;
        }
        .form-input:focus {
          border-color: #a200ff;
          box-shadow: 0 0 8px #a200ff;
        }
        .neon-btn {
          background: linear-gradient(90deg, #a200ff, #ff0099);
          color: #fff;
          transition: 0.3s;
        }
        .neon-btn:hover {
          filter: brightness(1.2);
          box-shadow: 0 0 10px #ff00ff;
        }
      `}</style>
    </div>
  );
}
