import React from "react";

// ===== style import =====
import { Label } from "../../styles/TextStyle";
import { Input } from "../../styles/InputStyle";

const InputField = ({
  hasLabel,
  labelMessage,
  inputRef,
  type = "text",
  placeholderMessage,
  disabled,
}) => {
  const updateValueEvent = (e) => {
    const value = e.target.value;
    inputRef.current.value = value;

    console.log(value);
  };

  return (
    <>
      {/* haeLabel : true or false */}
      {/* labelMessage : String */}
      {hasLabel && <Label>{labelMessage}</Label>}

      {/* type : text, password or email, etc. */}
      {/* placeholderMessage : String */}
      {/* disabled : true or false */}
      <Input
        ref={inputRef}
        type={type}
        placeholder={placeholderMessage}
        onChange={updateValueEvent}
        disabled={disabled}
      ></Input>
    </>
  );
};

export default InputField;
