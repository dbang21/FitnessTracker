import { Link } from 'react-router-dom';
import React from 'react';

function Navigation() {
  return (
    <>
      <Link to="/" exact> HOME</Link>
      <Link to="/create-exercise"> CREATE</Link>
    </>
  );
}
  
export default Navigation;