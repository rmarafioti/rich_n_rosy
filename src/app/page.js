"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { feature_photos } from "./data/photos";

import styles from "./styling/auth_page.module.css";

export default function Auth() {
  const headerPhoto = feature_photos.find((p) => p.name === "full_theatre");
  const [passcode, setPasscode] = useState("");
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState({ auth: false });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setValidationError({ auth: false });

    try {
      const response = await fetch("/api/verify-passcode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode }),
      });

      const data = await response.json();

      if (data.success) {
        router.push("/home"); // Redirect to homepage after successful auth
      } else {
        setValidationError({ auth: true });
        setPasscode("");
      }
    } catch (err) {
      setValidationError({ auth: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div className={styles.header_container}>
        <Image
          src="https://res.cloudinary.com/dzpne110u/image/upload/v1761257555/wedding_website/icons/monogram_blush_xospub.svg"
          alt="website icon and home page button"
          width={179}
          height={118}
          className={styles.icon}
        />
        <p className={styles.date}>July &#8226; 18th &#8226; 2026</p>
        <h1 className={styles.header}>Welcome!</h1>
        <p className={styles.instructions}>
          Please enter passcode to access website
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.input_section}>
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Enter passcode"
              disabled={loading}
              className={styles.input}
              required
            />
            <button type="submit" disabled={loading} className={styles.submit}>
              {loading ? "Verifying..." : "Submit"}
            </button>
          </div>
          {validationError.auth && (
            <p className={styles.error_message}>
              *Invalid passcode. Please try again.
            </p>
          )}
        </form>
      </div>
      <Image
        src={headerPhoto.photo}
        alt={headerPhoto.alt}
        width={headerPhoto.width}
        height={headerPhoto.height}
        className={styles.header_photo}
      />
    </main>
  );
}
