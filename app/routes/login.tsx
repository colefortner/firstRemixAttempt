import { Layout } from "../components/layout";

export default function Login() {
  return (
    <Layout>
      <div>
        <h2>Welcome to Kudos!</h2>
        <p>Log In To Give Some Praise!</p>

        <form method="post">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />

          <div className="w-full text-center">
            <input type="submit" value="Sign In" />
          </div>
        </form>
      </div>
    </Layout>
  );
}
