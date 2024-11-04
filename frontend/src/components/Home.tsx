import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  return (
    <>
      <main>
        <section className="hero">
          <h2>Welcome to Our HR Management System</h2>
          <p>Your one-stop solution for efficient HR management.</p>
          <button onClick={() => nav("/contact")}>Get Started</button>
        </section>
      </main>
    </>
  );
}
