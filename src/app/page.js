"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Auth() {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

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
        setError("Invalid passcode. Please try again.");
        setPasscode("");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div>
        <h1>Auth Page</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            placeholder="Enter passcode"
            disabled={loading}
            required
          />
          {error && <p>{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? "Verifying..." : "Submit"}
          </button>
        </form>
      </div>
    </main>
  );
}
