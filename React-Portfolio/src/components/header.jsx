// 2 props for header section of the webpage
export default function Header({ currentSection, handleNavigationClick }) {
    // structure of header
  return (
    <header className="header">
      <h1>Jon Hall</h1>
      <h2>Professional Portfolio</h2>
      {/* navigation bar */}
      <nav>
        <ul>
            {/* if the corresponding section matches the current section prop, then it will be active, handler function is called with specific section */}
          <li className={currentSection === 'About Me' ? 'active' : ''} onClick={() => handleNavigationClick('About Me')}>About Me</li>
          <li className={currentSection === 'Portfolio' ? 'active' : ''} onClick={() => handleNavigationClick('Portfolio')}>Portfolio</li>
          <li className={currentSection === 'Contact' ? 'active' : ''} onClick={() => handleNavigationClick('Contact')}>Contact</li>
          <li className={currentSection === 'Resume' ? 'active' : ''} onClick={() => handleNavigationClick('Resume')}>Resume</li>
        </ul>
      </nav>
    </header>
  );
}