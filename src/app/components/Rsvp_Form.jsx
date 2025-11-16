"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Form_Modal from "./Form_Modal";
import useModal from "../hooks/useModal";

import styles from "../styling/rsvp_form.module.css";

export default function RSVP_Form() {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();

  const inputForm = {
    name: "",
    guest: "",
    attendance: "",
  };

  const [formValues, setFormValues] = useState(inputForm);

  const inputValidationError = {
    name: false,
    guest: false,
    attendance: false,
  };

  const [validationError, setValidationError] = useState(inputValidationError);

  const validateAllFields = () => {
    const errors = {
      name: formValues.name.trim() === "",
      guest: formValues.guest === "",
      attendance: formValues.attendance === "",
    };
    setValidationError(errors);
    return errors;
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
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_RSVP;

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey).then(
      () => {
        console.log("MESSAGE SENT!");
        setMessageStatus("success");
        setIsLoading(false);
        setValidationError({});
        formRef.current.reset();
        setFormValues(inputForm);
        openModal();
      },
      (error) => {
        console.error("MESSAGE FAILED", error?.text);
        setMessageStatus("error");
        setIsLoading(false);
      }
    );
  };

  return (
    <div className={styles.contact_form_container}>
      <h1 className={styles.page_name}>Early Bird RSVP</h1>
      <h2 className={styles.header}>Already know, fill out the form below!</h2>
      <form className={styles.form} ref={formRef} onSubmit={sendEmail}>
        <label className={styles.label}>Name*</label>
        <input
          className={styles.name}
          type="text"
          name="name"
          aria-label="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <label className={styles.label}>
          Were you invited with a guest guest?*
        </label>
        <div className={styles.radio_group}>
          <label className={styles.radio_label}>
            <input
              type="radio"
              name="guest"
              value="yes"
              checked={formValues.guest === "yes"}
              onChange={handleInputChange}
              className={styles.radio_button}
              aria-label="guest_yes"
            />
            Yes
          </label>
          <label className={styles.radio_label}>
            <input
              type="radio"
              name="guest"
              value="no"
              checked={formValues.guest === "no"}
              onChange={handleInputChange}
              className={styles.radio_button}
              aria-label="guest_no"
            />
            No
          </label>
        </div>
        <label className={styles.label}>
          Will you and your guest be attending?*
        </label>
        <div className={styles.radio_group}>
          <label className={styles.radio_label}>
            <input
              type="radio"
              name="attendance"
              value="yes"
              checked={formValues.attendance === "yes"}
              onChange={handleInputChange}
              className={styles.radio_button}
              aria-label="attendance_yes"
            />
            See you there!
          </label>
          <label className={styles.radio_label}>
            <input
              type="radio"
              name="attendance"
              value="no"
              checked={formValues.attendance === "no"}
              onChange={handleInputChange}
              className={styles.radio_button}
              aria-label="attendance_no"
            />
            Can't make it
          </label>
        </div>
        <p className={styles.required}>*Required</p>
        <input
          className={styles.send}
          type="submit"
          aria-label="form_submit_button"
          value={isLoading ? "Sending..." : "Send"}
          disabled={isLoading}
        />
      </form>
      <div className={styles.error_container}>
        {validationError.name && (
          <p className={styles.required_error}>*Please enter your name</p>
        )}
        {validationError.guest && (
          <p className={styles.required_error}>
            *Please specify if you were invited with a guest
          </p>
        )}
        {validationError.attendance && (
          <p className={styles.required_error}>
            *Please let us know if you and your gurst will be attending
          </p>
        )}
        {messageStatus === "error" && (
          <p className={styles.required_error}>
            *Message failed to send. Please try again
          </p>
        )}
      </div>
      <Form_Modal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}
