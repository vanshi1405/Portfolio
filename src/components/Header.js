import React from 'react';

function useTheme() {
  const [theme, setTheme] = React.useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('theme') || 'dark';
  });

  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = React.useCallback(() => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  }, []);

  return { theme, toggle };
}

function Header() {
  const { theme, toggle } = useTheme();
  return (
    <header className="site-header">
      <div className="container ">
        
      {/* <div class="logo"> */}
            {/* <img src="profile.jpeg" alt="Vanshita" class="logo-image"/> */}
      {/* </div> */}
        <h1 className="brand">Vanshita Shah</h1>
        <nav className="nav">
        
          <a href="#about">Summary</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          {/* <a href="#contact">Contact</a> */}
          <button className="btn" onClick={toggle} aria-label="Toggle theme">
            {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;


