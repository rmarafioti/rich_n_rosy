"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ResponsiveImage from "../components/Responsive_Image";
import {
  icons,
  engagement_photos_mobile,
  feature_photos,
} from "../data/photos";

import styles from "../styling/auth_page.module.css";

export default function Auth() {
  const icon = icons.find((p) => p.id === 2);
  const iconMobile = icons.find((p) => p.id === 1);
  const headerPhoto = feature_photos.find((p) => p.id === 5);
  const headerPhotoMobile = engagement_photos_mobile.find((p) => p.id === 6);

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
      <div className={styles.content_wrapper}>
        <article className={styles.content}>
          <section className={styles.header_container}>
            <Image
              src={icon.photo}
              alt={icon.alt}
              height={icon.height}
              width={icon.width}
              className={styles.icon}
            />
            <p className={styles.tag}>Rosy & Rich Get Hitched!</p>
            <p className={styles.date}>July &#8226; 18th &#8226; 2026</p>
          </section>
          <section className={styles.passcode_container}>
            <h1 className={styles.welcome}>Welcome!</h1>
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
                <button
                  type="submit"
                  disabled={loading}
                  className={styles.submit}
                >
                  {loading ? "Verifying..." : "Submit"}
                </button>
              </div>
              {validationError.auth && (
                <p className={styles.error_message}>
                  *Invalid passcode. Please try again.
                </p>
              )}
            </form>
          </section>
        </article>
        <ResponsiveImage
          pcPhoto={headerPhoto}
          mobilePhoto={headerPhotoMobile}
          pcClass={styles.header_photo}
          mobileClass={styles.header_photo_mobile}
        />
      </div>
    </main>
  );
}
