import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card">
        <h3>FREE</h3>
        <h4>$0/month</h4>
        <ul>
          <li>Single User</li>
          <li>5GB Storage</li>
          <li>Unlimited Public Projects</li>
          <li>Community Access</li>
          <li className="text-muted">Unlimited Private Projects</li>
          <li className="text-muted">Dedicated Phone Support</li>
          <li className="text-muted">Free Subdomain</li>
          <li className="text-muted">Monthly Status Reports</li>
        </ul>
        <button>BUTTON</button>
      </div>

      <div className="card">
        <h3>PLUS</h3>
        <h4>$9/month</h4>
        <ul>
          <li><strong>5 Users</strong></li>
          <li>50GB Storage</li>
          <li>Unlimited Public Projects</li>
          <li>Community Access</li>
          <li>Unlimited Private Projects</li>
          <li>Dedicated Phone Support</li>
          <li>Free Subdomain</li>
          <li className="text-muted">Monthly Status Reports</li>
        </ul>
        <button>BUTTON</button>
      </div>

      <div className="card">
        <h3>PRO</h3>
        <h4>$49/month</h4>
        <ul>
          <li><strong>Unlimited Users</strong></li>
          <li>150GB Storage</li>
          <li>Unlimited Public Projects</li>
          <li>Community Access</li>
          <li>Unlimited Private Projects</li>
          <li>Dedicated Phone Support</li>
          <li><strong>Unlimited</strong> Free Subdomains</li>
          <li>Monthly Status Reports</li>
        </ul>
        <button>BUTTON</button>
      </div>
    </div>
  );
};

export default Pricing;