"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import styles from "../styling/contact_form.module.css";

export default function Contact_Form() {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);

  const inputForm = {
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(inputForm);

  const inputValidationError = {
    first_name: false,
    last_name: false,
    email: false,
    message: false,
  };

  const [validationError, setValidationError] = useState(inputValidationError);

  const validateAllFields = () => {
    const errors = {};
    Object.entries(formValues).forEach(([field, value]) => {
      if (field === "email") {
        errors[field] = !isValidEmail(value);
      } else {
        errors[field] = value.trim() === "";
      }
    });
    setValidationError(errors);
    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const errors = validateAllFields();
    const isValid = Object.values(errors).every((error) => !error);

    if (!isValid) {
      console.log("Form validation failed:", validationError);
      return;
    }

    setIsLoading(true);

    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey).then(
      () => {
        console.log("MESSAGE SENT!");
        setMessageStatus("success");
        setIsLoading(false);
        setValidationError({});
        formRef.current.reset();
        setFormValues(inputForm);
        /* setIsModalVisible(true); */
      },
      (error) => {
        console.error("MESSAGE FAILED", error?.text);
        setMessageStatus("error");
        setIsLoading(false);
      }
    );
  };

  return (
    <>
      <p className={styles.header}>Are you excited for the wedding?!?</p>
      <p>Send us a message and let us know</p>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className={styles.name_section}>
          <div className={styles.name_container_one}>
            <label className={styles.label}>First name*</label>
            <input
              className={styles.name}
              type="text"
              name="first_name"
              aria-label="first_name"
              value={formValues.first_name}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.name_container_two}>
            <label className={styles.label}>Last name*</label>
            <input
              className={styles.name}
              type="text"
              name="last_name"
              aria-label="last_name"
              value={formValues.last_name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <label className={styles.label}>Email*</label>
        <input
          className={styles.email}
          type="email"
          name="email"
          aria-label="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <label className={styles.label}>Your message*</label>
        <textarea
          className={styles.message}
          name="message"
          aria-label="additional_information"
          value={formValues.message}
          onChange={handleInputChange}
        />
        <p>*Required</p>
        <input
          className={styles.send}
          type="submit"
          aria-label="form_submit_button"
          value={isLoading ? "Sending..." : "Send"}
          disabled={isLoading}
        />

        {validationError.first_name && <p>*Please enter your first name*</p>}
        {validationError.last_name && <p>*Please enter your last name*</p>}
        {validationError.email && <p>*Please enter your email*</p>}
        {validationError.message && <p>*Please leave us a message*</p>}
        {messageStatus === "error" && (
          <p>*Message failed to send. Please try again*</p>
        )}
        {/* leave for now but modal will look better */}
        {messageStatus === "success" && <p>Message Sent!</p>}
      </form>
      {/*<MessageSentModal
        isModalVisible={isModalVisible}
        closeModal={closeModal}
      />*/}
    </>
  );
}
