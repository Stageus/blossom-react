import React from "react";

// ===== styles import =====
import P from "../../../styles/TextStyle";

// ===== component =====
const ErrorMessage = ({ message, margin }) => {
  return (
    <P $textColor="#FF6C6C" $fontSize="14px" $margin={margin}>
      {message}
    </P>
  );
};

export default ErrorMessage;
