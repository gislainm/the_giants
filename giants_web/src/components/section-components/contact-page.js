import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();
  let timer;

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { name, email, phone, service, event, date, info } = data;
    // console.log("Name: ", name);
    // console.log("Email: ", email);
    // console.log("Phone Number: ", phone);
    // console.log("Service: ", service);
    // console.log("Event: ", event);
    // console.log("Date: ", date);
    // console.log("Info: ", info);
    try {
      const templateParams = {
        name,
        email,
        phone,
        service,
        event,
        date,
        info,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      setShowSuccess(true);
      reset();
    } catch (e) {
      console.log(e);
    }
    timer = setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
    // reset();
  };
  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div>
      <section className="contact-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contact-two__content">
                <div className="contact-two__block">
                  <h3>Contact Us</h3>
                  <p>
                    If you are inquiring about our services, pricing and
                    availability, please reach out to us via our email or phone
                    number below.
                  </p>
                </div>
                {/* /.contact-two__block */}
                <ul className="list-unstyled contact-two__info-list">
                  <li>
                    <div className="contact-two__info-list-title">
                      <i className="far fa-map-marked" />
                      Address :
                    </div>
                    {/* /.contact-two__info-list-title */}
                    <p>
                      1914 SW 27th Street Lincoln
                      <br />
                      Nebraska 68522
                    </p>
                  </li>
                  <li>
                    <div className="contact-two__info-list-title">
                      <i className="far fa-phone" />
                      Call Us :
                    </div>
                    {/* /.contact-two__info-list-title */}
                    <p>
                      <a href="tel:4024506873">+1 (402) 450-6873</a>
                    </p>
                  </li>
                  <li>
                    <div className="contact-two__info-list-title">
                      <i className="far fa-envelope" />
                      Email Us :
                    </div>
                    {/* /.contact-two__info-list-title */}
                    <p>
                      <a href="mailto:thegiantspictures@gmail.com">
                        thegiantspictures@gmail.com
                      </a>
                    </p>
                  </li>
                </ul>
                {/* /.contact-two__info-list */}
              </div>
              {/* /.contact-two__content */}
            </div>
            {/* /.col-lg-5 */}
            <div className="col-lg-7">
              <form
                className="contact-two__form"
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div className="contact-two__block">
                  <h3>Book A Session</h3>
                  <p>
                    If you would like to book a session with us, fill out the
                    form below and we will get back to you in no longer than 48
                    hours.
                  </p>
                </div>
                {/* Row 1 of form */}
                <div className="row">
                  <div className="col-md-12">
                    {errors.name && (
                      <span className="errorMessage">
                        {errors.name.message}
                      </span>
                    )}
                    <input
                      type="text"
                      name="name"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                      placeholder="Full Name*"
                    ></input>
                  </div>
                  <div className="col-md-6">
                    {errors.email && (
                      <span className="errorMessage">
                        Please enter a valid email address
                      </span>
                    )}
                    <input
                      type="email"
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      placeholder="Email address*"
                    ></input>
                  </div>
                  <div className="col-md-6">
                    {errors.phone && (
                      <span className="errorMessage">
                        Please enter a valid phone number
                      </span>
                    )}
                    <input
                      type="tel"
                      name="phone"
                      {...register("phone", {
                        required: true,
                        minLength: 6,
                        maxLength: 12,
                      })}
                      placeholder="Phone Number*"
                    ></input>
                  </div>
                  <div className="col-md-6 radio-cont">
                    <label className="radio-tittle">Desired Service</label>
                    <div>
                      <input
                        id="video"
                        {...register("service")}
                        type="radio"
                        value="Videography"
                      />
                      <label htmlFor="video">Videography</label>
                    </div>
                    <div>
                      <input
                        id="photo"
                        {...register("service")}
                        type="radio"
                        value="Photography"
                      />
                      <label htmlFor="photo">Photography</label>
                    </div>
                    <div>
                      <input
                        id="both"
                        {...register("service")}
                        type="radio"
                        value="Both"
                      />
                      <label htmlFor="both">Both</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <select {...register("event")}>
                      <option value="">Event...</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Engagement">Engagement</option>
                      <option value="Graduation/Senior">
                        Graduation/Senior
                      </option>
                      <option value="Newborn">Newborn</option>
                      <option value="Baby Shower">Baby Shower</option>
                      <option value="Pre-Maternity">Pre-Maternity</option>
                      <option value="Corporate Marketing">
                        Corporate Marketing
                      </option>
                      <option value="Corporate Marketing">
                        Real-Estate/Aerial
                      </option>
                      <option value="Family Potraits">Family Potraits</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    {errors.date && (
                      <span className="errorMessage">
                        Please enter your desired date
                      </span>
                    )}
                    <input
                      type="date"
                      name="date"
                      min={today}
                      {...register("date", {
                        required: true,
                        valueAsDate: true,
                      })}
                      placeholder="Desired Date"
                    ></input>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      rows={3}
                      name="info"
                      placeholder="Event Information you want us to know"
                      {...register("info")}
                      defaultValue={""}
                    />
                    <button type="submit" className="thm-btn contact-two__btn">
                      Send <i className="fa fa-angle-double-right" />
                    </button>
                  </div>
                </div>
              </form>
              {showSuccess && (
                <label className="sent-message">
                  Your Request Sent Successfully
                </label>
              )}
              {/* /.contact-two__form */}
            </div>
            {/* /.col-lg-7 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.contact-two */}
    </div>
  );
};

export default Contact;
