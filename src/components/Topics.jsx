import React, { useState } from 'react';
import '../Topics.css';

export function Topics() {
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => {
    setShowContent(true);
  };

  const handleHideContent = () => {
    setShowContent(false);
  };

  return (
    <>
      <div className='my-3'>
        <h2 className="h1">Topics</h2>
      </div>

      {showContent ? (
        <div>
          <h1>Contenido adicional mostrado</h1>
          <button onClick={handleHideContent}>Ocultar Contenido</button>
        </div>
      ) : (
        <div id="home_quicklinks">
          <div>
            <button className="quicklink link3" onClick={handleShowContent}>
              <span className="ql_caption">
                <span className="outer">
                  <span className="inner">
                    <h2>Relations</h2>
                  </span>
                </span>
              </span>
              <span className="ql_top"></span>
              <span className="ql_bottom"></span>
            </button>

            <button className="quicklink link3" onClick={handleShowContent}>
              <span className="ql_caption">
                <span className="outer">
                  <span className="inner">
                    <h2>Pointers</h2>
                  </span>
                </span>
              </span>
              <span className="ql_top"></span>
              <span className="ql_bottom"></span>
            </button>

            <button className="quicklink link3" onClick={handleShowContent}>
              <span className="ql_caption">
                <span className="outer">
                  <span className="inner">
                    <h2>Arrays</h2>
                  </span>
                </span>
              </span>
              <span className="ql_top"></span>
              <span className="ql_bottom"></span>
            </button>
          </div>

          <div className='my-5'>
            <button className="quicklink link3" onClick={handleShowContent}>
              <span className="ql_caption">
                <span className="outer">
                  <span className="inner">
                    <h2>Lists</h2>
                  </span>
                </span>
              </span>
              <span className="ql_top"></span>
              <span className="ql_bottom"></span>
            </button>

            <button className="quicklink link3" onClick={handleShowContent}>
              <span className="ql_caption">
                <span className="outer">
                  <span className="inner">
                    <h2>Inheritance</h2>
                  </span>
                </span>
              </span>
              <span className="ql_top"></span>
              <span className="ql_bottom"></span>
            </button>

            <button className="quicklink link3" onClick={handleShowContent}>
              <span className="ql_caption">
                <span className="outer">
                  <span className="inner">
                    <h2>Diagrams</h2>
                  </span>
                </span>
              </span>
              <span className="ql_top"></span>
              <span className="ql_bottom"></span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}