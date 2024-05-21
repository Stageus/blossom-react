import React from "react";

// ===== styles import =====
import { Label, Span } from "../../styles/TextStyle";
import { Input } from "../../styles/InputStyle";
import FlexBox from "../../styles/FlexStyle";

// ===== component =====
const InputField = ({
  fontSize,
  width,
  margin,
  hasLabel,
  labelMessage,
  inputType,
  inputRef,
  type = "text",
  placeholderMessage,
  onBlur,
  disabled,
  onValidateAndSend,
  autoFocus,
  defaultValue,
}) => {
  // === ref ===
  const numbersRef = Array(3)
    .fill()
    ?.map(() => React.createRef());

  // Set Current Date
  const currentDate = new Date().toISOString().split("T")[0];

  // Update input value
  const updateValueEvent = (e) => {
    const value = e.target.value;
    inputRef.current.value = value;
  };

  // Set Changed Phone Number and Send that
  const handleChangePhonenumber = (e) => {
    const refIndex = numbersRef.findIndex((ref) => ref.current === e.target);
    const phoneNumber = numbersRef.map((ref) => ref.current.value).join("-");

    e.target.value = e.target.value.replace(/\s|\D/g, ""); // 공백 및 숫자 이외의 문자 제거

    if (
      (refIndex === 0 && e.target.value.length === 3) ||
      (refIndex === 1 && e.target.value.length === 4)
    ) {
      const nextInput = numbersRef[refIndex + 1].current;

      if (nextInput) {
        nextInput.focus();
      }
    }

    if (refIndex === 2 && e.target.value.length > 4) {
      e.target.value = e.target.value.slice(0, 4);
    }

    onValidateAndSend(phoneNumber);
  };

  return (
    <>
      {/* haeLabel : true or false */}
      {/* labelMessage : String */}
      {hasLabel && <Label $fontSize={fontSize}>{labelMessage}</Label>}

      {/* inputType : phone or else */}
      {/* type : text, password or email, etc. */}
      {/* placeholderMessage : String */}
      {/* disabled : true or false */}
      {/* onChane, onBlur : Funtion */}
      {inputType === "phone" ? (
        <FlexBox
          $row="between"
          $col="center"
          $width="100%"
          onChange={handleChangePhonenumber}
          onBlur={onBlur}
        >
          <Input type="text" placeholder="010" ref={numbersRef[0]} />
          <Span $margin="0 10px 0 10px">-</Span>
          <Input type="text" placeholder="1234" ref={numbersRef[1]} />
          <Span $margin="0 10px 0 10px">-</Span>
          <Input type="text" placeholder="5678" ref={numbersRef[2]} />
        </FlexBox>
      ) : (
        <Input
          $width={width}
          $margin={margin}
          ref={inputRef}
          type={type}
          placeholder={placeholderMessage}
          onChange={updateValueEvent}
          onBlur={onBlur}
          disabled={disabled}
          max={currentDate}
          autoFocus={autoFocus}
          defaultValue={defaultValue}
        />
      )}
    </>
  );
};

export default InputField;
