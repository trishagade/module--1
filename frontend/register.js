import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'Customer' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name: formData.name, email: formData.email, role: formData.role };
    localStorage.setItem('currentUser', JSON.stringify(user));
    navigate('/workers');
  };

  return (
    <div className="container" style={{ maxWidth: '500px', marginTop: '3rem' }}>
      <div className="card">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#667eea' }}>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-input" placeholder="Enter your name" 
              value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" placeholder="Enter your email" 
              value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-input" placeholder="Create password" 
              value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} required />
          </div>
          <div className="form-group">
            <label className="form-label">Register As</label>
            <select className="form-input" value={formData.role} 
              onChange={(e) => setFormData({...formData, role: e.target.value})}>
              <option value="Customer">Customer</option>
              <option value="Worker">Worker</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Sign Up</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          Already have an account? <Link to="/login" style={{ color: '#667eea', fontWeight: 'bold' }}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
