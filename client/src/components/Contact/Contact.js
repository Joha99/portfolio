import "./Contact.scss";
import { useFormik } from "formik";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="contact">
      <div className="contact__section">
        <div className="form">
          <h2 className="form__header">Subscribe</h2>
          <form onSubmit={formik.handleSubmit} className="form__formik">
            <div className="form__input">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </div>

            <div className="form__input">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
            </div>

            <div className="form__input">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>

            <button type="form__submit" className="form__btn">Submit</button>
          </form>
        </div>
      </div>

      <div className="contact__section">
        <div className="detail">
          <h2 className="form__header">Contacts</h2>
          <div className="detail__item">
            Phone: <span>+1 678 662 7629</span>
          </div>
          <div className="detail__item">
            Email: <span>johakim9936@gmail.com</span>
          </div>
          <div className="detail__item">
            GitHub:{" "}
            <a
              href="https://github.com/Joha99"
              target="_blank"
              rel="noreferrer"
            >
              Joha99
            </a>
          </div>
          <div className="detail__item">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/joha-kim/"
              target="_blank"
              rel="noreferrer"
            >
              joha-kim
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
