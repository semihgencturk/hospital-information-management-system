import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditPatient = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    passport_no: '',
    nationality: '',
    date_of_birth: '',
    gender: '',
    native_language: '',
    cell_phone: '',
    landline_phone: '',
    email: '',
    country: '',
    city: '',
    district: '',
    street: '',
    block: '',
    blood_group: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPatient();
  }, []);

  const fetchPatient = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/patients/${id}`);
      setFormData(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5001/patients/${id}`, formData);
      navigate('/');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h2>Edit Patient</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} required/>
        <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required/>
        <input type="text" name="passport_no" placeholder="Passport No" value={formData.passport_no} onChange={handleChange} required/>
        <input type="text" name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} required/>
        <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required/>
        <input type="text" name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} required/>
        <input type="text" name="native_language" placeholder="Native Language" value={formData.native_language} onChange={handleChange} required/>
        <input type="text" name="cell_phone" placeholder="Cell Phone" value={formData.cell_phone} onChange={handleChange} required/>
        <input type="text" name="landline_phone" placeholder="Landline Phone" value={formData.landline_phone} onChange={handleChange}/>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
        <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} required/>
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required/>
        <input type="text" name="district" placeholder="District" value={formData.district} onChange={handleChange} required/>
        <input type="text" name="street" placeholder="Street" value={formData.street} onChange={handleChange} required/>
        <input type="text" name="block" placeholder="Block" value={formData.block} onChange={handleChange} required/>
        <input type="text" name="blood_group" placeholder="Blood Group" value={formData.blood_group} onChange={handleChange} required/>
        <button type="submit">Update Patient</button>
      </form>
    </div>
  );
};

export default EditPatient;
