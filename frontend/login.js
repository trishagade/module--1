import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', role: 'Customer' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name: formData.email.split('@')[0], email: formData.email, role: formData.role };
    localStorage.setItem('currentUser', JSON.stringify(user));
    navigate(formData.role === 'Admin' ? '/admin' : '/workers');
  };

  return (
    <div className="container" style={{ maxWidth: '500px', marginTop: '3rem' }}>
      <div className="card">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#667eea' }}>Login to SkillConnect</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-input" placeholder="Enter your email" 
              value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-input" placeholder="Enter your password" 
              value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} required />
          </div>
          <div className="form-group">
            <label className="form-label">Login As</label>
            <select name="role" className="form-input" value={formData.role} 
              onChange={(e) => setFormData({...formData, role: e.target.value})}>
              <option value="Customer">Customer</option>
              <option value="Worker">Worker</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          Don't have an account? <Link to="/signup" style={{ color: '#667eea', fontWeight: 'bold' }}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
