import React from 'react';

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
      <h5 className="section-title">Projects</h5>

        {/* <div className="panel">
        </div> */}
        <ul className="grid">
            <li className="card">
              <h3>To-Do Scheduler</h3>
              <p className="muted">Developed a secure RESTful API backend with Django REST Framework, integrated MySQL for scalable task management, and added CronJobs for automated email reminders.</p>
            </li>
            <li className="card">
              <h3>Trello</h3>
              <p className="muted">Built a multi-organization task management API with role-based access, board/card assignments, and Celery-powered email reminders.</p>
            </li>
          </ul>
      </div>
    </section>
  );
}

export default Projects;


