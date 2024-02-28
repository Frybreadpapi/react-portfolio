export default function Resume() {
    const proficiencies = [
      'HTML', 
      'CSS', 
      'JavaScript', 
      'Web APIs', 
      'Third Party APIs', 
      'Server Side APIs', 
      'NodeJS', 
      'Object-Relational Mapping', 
      'Model-Viewer-Controller', 
      'Express', 
      'SQL', 
      'NoSQL', 
      'Progressive Web Applications', 
      'React', 
      'MERN', 
      'State', 
      'Markdown', 
      'Git', 
      'Github Repo Managment'
    ];
    return (
      <section className="resume">
        <h2>Resume</h2>
        <div className="resume-content">
          <div className="resume-section">
            <h3>Download Resume</h3>
            {/* reference: https://www.codeease.net/programming/javascript/Make-a-file-downloadable-in-React */}
            <p>Click the link below to download my resume:</p>
            <a href="" download>Download Resume</a>
          </div>
        </div>
        <div className="resume-section">
            <h3>My skills and proficiencies include:</h3>
            <ul>
              {/* Maps through the proficiencies array to display each proficiency */}
              {proficiencies.map((proficiency, index) => (
                <li key={index}>{proficiency}</li>
              ))}
            </ul>
          </div>
      </section>
    );
  }