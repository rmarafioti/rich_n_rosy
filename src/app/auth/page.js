"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ResponsiveImage from "../components/Responsive_Image";
import { icons, feature_photos } from "../data/photos";

import styles from "../styling/auth_page.module.css";

export default function Auth() {
  const icon = icons.find((p) => p.id === 2);
  const iconMobile = icons.find((p) => p.id === 1);
  const headerPhoto = feature_photos.find((p) => p.id === 5);

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
        router.push("/"); // Redirect to homepage after successful auth
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
        <div className={styles.icon_container}>
          <ResponsiveImage
            pcPhoto={icon}
            mobilePhoto={iconMobile}
            pcClass={styles.icon}
            mobileClass={styles.icon_mobile}
          />
          <p className={styles.date}>July &#8226; 18th &#8226; 2026</p>
        </div>
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
