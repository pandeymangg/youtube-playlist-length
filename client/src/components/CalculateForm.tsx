import React, { useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../context/app";

interface IProps {
  calculateFormSubmit: { (arg: string): void };
}

const CalculateForm: React.FC<IProps> = ({ calculateFormSubmit }) => {
  const [inputTerm, setInputTerm] = useState("");

  const { theme } = useAppContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    calculateFormSubmit(inputTerm);
  };

  return (
    <Form onSubmit={handleSubmit} theme={theme}>
      <div className="form__container">
        <label className="input">
          <input
            className="input__field"
            type="text"
            placeholder=" "
            value={inputTerm}
            onChange={(e) => setInputTerm(e.target.value)}
          />
          <span className="input__label">PlayList Link / Id</span>
        </label>

        <button
          type="submit"
          className="form__submit__btn"
          disabled={!inputTerm}
        >
          <span>Calculate</span>
        </button>
      </div>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;

  & .form__container {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .input {
      position: relative;

      &__label {
        position: absolute;
        left: 0;
        top: 0;
        padding: 2px;
        margin: 16px;
        white-space: nowrap;
        transform: translate(0, 0);
        transform-origin: 0 0;
        background-color: ${({ theme }) =>
          theme === "dark" ? "#212121" : "#fff"};
        transition: transform 120ms ease-in;
        font-weight: 600;
        line-height: 1.2;
      }

      &__field {
        outline: none;
        box-sizing: border-box;
        display: block;
        width: 100%;
        border: 3px solid ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
        padding: 16px;
        color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
        background: transparent;
        border-radius: 5px;
        font-weight: 500;
        font-family: "Inter", sans-serif;
        font-size: 16px;

        &:focus,
        &:not(:placeholder-shown) {
          & + .input__label {
            transform: translate(0.25rem, -65%) scale(0.8);
            color: #ff0000;
            margin: 4px 8px;
          }
        }
      }
    }

    & .form__submit__btn {
      width: 7.5rem;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ff0000;
      color: #fff;
      font-weight: 500;
      font-family: "Inter", sans-serif;
      cursor: pointer;
      border-radius: 5px;
      font-size: 16px;
      outline: none;
      border: none;
    }
  }
`;

export default CalculateForm;
