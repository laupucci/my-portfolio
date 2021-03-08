import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { ContactContainer } from "./style";
import { languages } from "./languages";
import Swal from 'sweetalert2'
import FooterMedia from "../footer/footerMedia"
import { init, send } from "emailjs-com";
init(process.env.REACT_APP_USER_ID);

export default function Contact({ language, theme }) {
  const validationSchema = Yup.object({
    name: Yup.string().required("Ingrese su nombre."),
    lastname: Yup.string().required("Ingrese su apellido."),
    email: Yup.string().email().required("Ingrese su email."),
    phone: Yup.number(),
    message: Yup.string().required("Ingrese su mensaje."),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        var templateParams = {
          from_name: "Laura Puccinelli",
          to_name: values.name + " " + values.lastname,
          message: values.message,
          to_email: values.email,
        };
        console.log(templateParams);

        send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams
        ).then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: language === "en" ? "Message send!" : "Mensaje enviado!",
              text: language === "en" ? "Thank you, I will contact you!" : "Gracias, te estaré contactando!",
              showConfirmButton: false,
              timer: 2500
            })
            resetForm({})
            
          },
          function (error) {
            console.log("FAILED...", error);
               Swal.fire({
                icon: 'error',
                title: language === "en" ? 'Oops...' : 'Ups...',
                text: language === "en" ? 'Something went wrong, try again!' : 'Hubo un error, volvé a intentarlo!'
              })
      })
    }}
    >
      {({ values, errors, touched }) => (
        <ContactContainer id="contacto">
            <div className="background">
              <div className="contact_form">
                <div className="title">
                  <h2>{languages[language]?.write}</h2>
                </div>
                <Form className="form_container">
                  <div className="field name_field">
                    <label className="label">{languages[language]?.name}</label>
                    <Field
                      className="input"
                      type="text"
                      name="name"
                      placeholder={languages[language]?.name}
                    />
                    <div className="error">
                      {touched.name && errors.name ? errors.name : null}
                    </div>
                  </div>
                  <div className="field lastname_field">
                    <label className="label">
                      {languages[language]?.lastname}
                    </label>
                    <Field
                      className="input"
                      type="text"
                      name="lastname"
                      placeholder={languages[language]?.lastname}
                    />
                    <div className="error">
                      {touched.lastname && errors.lastname
                        ? errors.lastname
                        : null}
                    </div>
                  </div>
                  <div className="field phone_field">
                    <label className="label">
                      {languages[language]?.phone}
                    </label>
                    <Field
                      name="phone"
                      type="text"
                      className="input"
                      placeholder={languages[language]?.phone}
                    />
                    <div className="error">
                      {touched.phone && errors.phone ? errors.phone : null}
                    </div>
                  </div>
                  <div className="field email_field">
                    <label className="label">
                      {languages[language]?.email}
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className="input"
                      placeholder={languages[language]?.email}
                    />
                    <div className="error">
                      {touched.email && errors.email ? errors.email : null}
                    </div>
                  </div>
                  <div className="field message_field">
                    <label className="label message">
                      {languages[language]?.message}
                    </label>
                    <Field
                      component="textarea"
                      type="text"
                      name="message"
                      placeholder={languages[language]?.message}
                      className="input textarea"
                    />
                    <div className="error">
                      {touched.message && errors.message
                        ? errors.message
                        : null}
                    </div>
                  </div>
                  <button className="submit_btn" type="submit">
                    {languages[language]?.send}
                  </button>
                </Form>
              </div>
              <div className="footer">
            <FooterMedia
              theme={theme}
              language={language}
              text={languages[language]?.tecnologies}
              to="tecnologias"
              className="footer"
            />
          </div>
            </div>
        </ContactContainer>
      )}
    </Formik>
  );
}
