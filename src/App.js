import { Routes, Route, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import Navbar from "./routes/navbar/navbar.component";
import Page1 from "./routes/page-1/page-1.component";
import Page2 from "./routes/page-2/page-2.component";
import Page3 from "./routes/page-3/page-3.component";

import "./App.scss";

// Pages require an absolute position. Otherwise they stack in the flex flow.
// Overflow of the root container needs to be hidden, for translate animations
// Elements that are not animated in or out as the navbar, have to be outside the animated element

function App() {
  const location = useLocation();
  const transition = useTransition(location, {
    from: { transform: 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' }
  });

  return (
    <div className="app">
      <Navbar />
      <div className="routes-container">
        {transition((style, item) => (
          <animated.div style={style}>
            <Routes location={item}>
              <Route
                index
                element={<Page1 />}
              />
              <Route
                path="2"
                element={<Page2 />}
              />
              <Route
                path="3"
                element={<Page3 />}
              />
            </Routes>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default App;
