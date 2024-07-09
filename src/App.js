import React from "react";
import { useState, useEffect } from "react";
import "./Form.css"; // Giả sử bạn có một file CSS để định dạng form

// import "./App.css";
// import "./BTnhom-phancuavuong/staff.css";
// import "./BTnhom-phancuavuong/cauvong.css";
// import Event1 from "./BTnhom-phancuavuong/event1";
// import Event2 from "./BTnhom-phancuavuong/event2";
// import Test from "./test";
// import ProductList from "./Productlist/ProductList";
// import Event7 from "./BTnhom-phancuavuong/event7";
// import { useRef, useEffect } from "react";
// import Event6 from "./BTnhom-phancuavuong/event6";
// const App = () => {
// return (
// <div>
//  <div className='Staffservicepage'>
{
  /* <Event6 /> */
}
{
  /* <Event1 />;

   <Test />

  <Event2 /> */
}

{
  /* <ProductList /> */
}

{
  /* <Event7 /> */
}
{
  /* <div className='Staffservicepage'> */
}
// </div>
// </div>
//  );
//  }
// export default App;

// import React, { useState, useEffect } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    foundUs: "",
    helpWith: "",
    email: "",
    phone: "",
    projectInfo: "",
    agree: false,
    captchaInput: "",
  });

  const [captcha, setCaptcha] = useState({
    num1: 0,
    num2: 0,
  });

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 50) + 1;
    const num2 = Math.floor(Math.random() * 50) + 1;
    setCaptcha({ num1, num2 });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const captchaAnswer = captcha.num1 + captcha.num2;
    if (parseInt(formData.captchaInput) !== captchaAnswer) {
      alert("Captcha không đúng!");
      generateCaptcha();
    } else {
      // Xử lý dữ liệu form ở đây
      console.log(formData);
    }
  };

  return (
    <div className="row justify-content-center event8">
      <div className="col-10">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="Customerinformation">
            <p>
              <strong>Hi! My name is</strong>
            </p>
            <input
              type="text"
              name="fullName"
              placeholder="Type your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
            <p>
              <strong>and I work in</strong>
            </p>
            <input
              type="text"
              name="companyName"
              placeholder="Type a company name"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className="luachon">
            <p>
              <strong>I found Code Labs using</strong>
            </p>
            <div className="cacluachon">
              {["Google search", "Word of mouth", "Clutch", "Other"].map(
                (option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="foundUs"
                      value={option}
                      checked={formData.foundUs === option}
                      onChange={handleChange}
                    />
                    {option}
                  </label>
                )
              )}
            </div>
          </div>
          <span>
            <p>I'm looking for help with:</p>
            <div className="radio-group">
              {["Staff Augmentation", "Development", "UX/UI", "Other"].map(
                (option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="helpWith"
                      value={option}
                      checked={formData.helpWith === option}
                      onChange={handleChange}
                    />
                    {option}
                  </label>
                )
              )}
            </div>
          </span>
          <span>
            <h1>Feel free to email me at</h1>
            <input
              type="email"
              name="email"
              placeholder="Type your contact email"
              value={formData.email}
              onChange={handleChange}
            />
            <h1>Or call me on</h1>
            <div className="phone-input">
              <select>
                <option value="+84">🇻🇳 Việt Nam +84</option>
                <option value="+62">🇮🇩 Indonesia +62</option>
                <option value="+60">🇲🇾 Malaysia +60</option>
                <option value="+66">🇹🇭 Thái Lan +66</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </span>
          <span>
            <h1>Here is more information about the project:</h1>
            <textarea
              name="projectInfo"
              placeholder="Type your project details"
              value={formData.projectInfo}
              onChange={handleChange}
            ></textarea>
          </span>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              I agree with the <a href="/privacy-policy">Privacy policy</a>
            </label>
          </div>
          <div className="captcha-group">
            <label>
              Captcha: What is {captcha.num1} + {captcha.num2}?
              <input
                type="text"
                name="captchaInput"
                value={formData.captchaInput}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
