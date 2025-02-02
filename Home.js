import React from 'react';

const Home = () => {
  return (
    <section className="content">
      <h2>Akshaya Services</h2>
      <div className="card-container">
        <a href="/ration" className="card">RationCard Certificates</a>
        <a href="/community" className="card">Community Certificates</a>
        <a href="/bill" className="card">Utility Bill Payments</a>
        <a href="/insurance" className="card">Insurance Services</a>
        <a href="/scholarship" className="card">Scholarship Applications</a>
        <a href="/vehicle" className="card">Motor Vehicle Services</a>
        <a href="/govtform" className="card">Government Form Services</a>
        <a href="/food" className="card">Food Safety Registration</a>
        <a href="/exam" className="card">Exam Registration Services</a>
      </div>
    </section>
  );
};

export default Home;