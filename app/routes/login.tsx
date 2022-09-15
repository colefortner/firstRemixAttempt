import React, { useState } from "react";
import { Layout } from "../components/layout";
import { FormField } from "~/components/form-field";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Updates the form data when an input changes
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };
  return (
    <Layout>
      <div>
        <h2>Welcome to Kudos!</h2>
        <p>Log In To Give Some Praise!</p>

        <form method="post">
          <FormField
            htmlFor="email"
            label="Email"
            value={formData.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
          <FormField
            htmlFor="password"
            type="password"
            label="Password"
            value={formData.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
          <div className="w-full text-center">
            <input type="submit" value="Sign In" />
          </div>
        </form>
      </div>
    </Layout>
  );
}
