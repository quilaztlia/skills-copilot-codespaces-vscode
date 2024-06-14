function skillsMember() {
  const skills = document.querySelector('.skills');
  if (skills) {
    skills.innerHTML = `
      <div class="skills-list">
        <h4>Frontend</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Vue</li>
          <li>Angular</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div class="skills-list">
        <h4>Backend</h4>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>PHP</li>
          <li>Python</li>
          <li>Java</li>
          <li>Ruby</li>
        </ul>
      </div>
      <div class="skills-list">
        <h4>Database</h4>
        <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>SQLite</li>
          <li>Oracle</li>
        </ul>
      </div>
    `;
  }
}