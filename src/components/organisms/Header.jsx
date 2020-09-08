import React, { useState } from "react";

const LNBMenuItem = ({ title, index }) => {
  const Devider = () => (
    <div
      style={{
        width: "100%",
        height: "1px",
        background: index === 0 ? "rgba(0,0,0,0)" : "#aeaeae",
        marginBottom: "10px",
      }}
    />
  );
  return (
    <div
      style={{
        padding: "5px 5px 5px 5px",
        margin: "0px 5px 0px",
      }}
    >
      <Devider />
      <span
        style={{
          fontSize: "1.2rem",
        }}
      >
        {title}
      </span>
    </div>
  );
};
const LNB = ({ top, mode, clickMenu }) => {
  const is_hide = mode === "hide";
  const shadow = is_hide ? "unset" : "10px 0px 10px -10px rgba(0,0,0,0.75)";
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: is_hide ? "none" : "block",
          position: "fixed",
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.5)",
          top,
        }}
        onClick={clickMenu}
      />
      <div
        style={{
          top,
          position: "fixed",
          background: "white",
          minWidth: "50vw",
          height: "100%",
          transition: "300ms",
          left: is_hide ? "-50vw" : "0",
          color: "black",
          WebkitBoxShadow: shadow,
          MozBoxShadow: shadow,
          BoxShadow: shadow,
        }}
      >
        {[
          "메뉴1메뉴1",
          "메뉴2메뉴2",
          "메뉴3메뉴3",
          "메뉴4메뉴4",
          "메뉴5메뉴5",
          "메뉴6메뉴6",
          "메뉴7메뉴7",
        ].map((e, i) => (
          <LNBMenuItem top={"0px"} title={e} index={i} />
        ))}
      </div>
    </div>
  );
};
const Menu = () => {
  const [mode, setMode] = useState("hide");
  const clickMenu = () => {
    if (mode === "hide") {
      setMode("show");
    } else {
      setMode("hide");
    }
  };
  return (
    <div>
      <div style={{ minHeight: "50px", background: "beige" }}>
        <img
          src="//raw.githubusercontent.com/CreatiCoding/creco-ui/master/icon/menu.svg"
          style={{
            width: "40px",
            padding: "5px",
            background: "beige",
            display: "block",
            cursor: "pointer",
          }}
          alt=""
          onClick={clickMenu}
        />
      </div>
      <LNB mode={mode} clickMenu={clickMenu} />
    </div>
  );
};
export default () => (
  <header className="App-header">
    <Menu />
    <h1>Learn React</h1>
  </header>
);
