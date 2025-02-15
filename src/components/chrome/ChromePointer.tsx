import React from "react";

export default function ChromePointer() {
  const styles: Record<string, React.CSSProperties> = {
    picker: {
      width: "12px",
      height: "12px",
      borderRadius: "6px",
      transform: "translate(-6px, -1px)",
      backgroundColor: "rgb(248, 248, 248)",
      boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
    },
  };

  return <div style={styles.picker} />;
}
