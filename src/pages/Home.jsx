function Home({ setActivePage }) {
  return (
    <section className="home-page">
      <div className="home-hero">
        <h2>React Activity Portal</h2>
        <p>
          Four interactive React activities demonstrating state, events,
          conditional logic, validation, and calculations.
        </p>
      </div>

      <div className="activity-grid">
        <article className="activity-card">
          <span className="activity-number">1</span>
          <h3>Login Authentication</h3>
          <p>Validate a username and password against sample credentials and manage login/logout state.</p>
          <button type="button" onClick={() => setActivePage("login")}>Open Activity</button>
        </article>

        <article className="activity-card">
          <span className="activity-number">2</span>
          <h3>Student Grade Evaluation</h3>
          <p>Enter a student's score and get an automatic remark based on grade ranges.</p>
          <button type="button" onClick={() => setActivePage("grades")}>Open Activity</button>
        </article>

        <article className="activity-card">
          <span className="activity-number">3</span>
          <h3>Password Strength Checker</h3>
          <p>Check password length and receive live feedback on how strong it is.</p>
          <button type="button" onClick={() => setActivePage("password")}>Open Activity</button>
        </article>

        <article className="activity-card">
          <span className="activity-number">4</span>
          <h3>Electricity Bill Calculator</h3>
          <p>Calculate a customer's electricity bill based on kWh consumption and tiered rates.</p>
          <button type="button" onClick={() => setActivePage("electricity")}>Open Activity</button>
        </article>
      </div>
    </section>
  );
}

export default Home;
