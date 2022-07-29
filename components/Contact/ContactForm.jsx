import { useRef } from "react";
import emailjs from "@emailjs/browser";

import Button from "../UI/Button";
import useInput from "../../hooks/useInput";

const letterRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const emailRegex =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const isNotEmpty = (value) => value.trim() !== "";
const isValidName = (value) =>
  letterRegex.test(value) && isNotEmpty && value.length >= 3;
const isValidEmail = (value) =>
  emailRegex.test(value) && isNotEmpty && value.length >= 6;
const isNotLongEnough = (value) => value.length >= 50;

const ContactForm = () => {
  const formRef = useRef();

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isValidName);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isValidEmail);
  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput(isNotLongEnough);

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );

    resetNameInput();
    resetEmailInput();
    resetMessageInput();
  };

  return (
    <form
      id="contact-form"
      ref={formRef}
      className="w-11/12 m-auto min-w-[300px]"
      onSubmit={submitFormHandler}
    >
      <div className="flex flex-col">
        <label htmlFor="fullname" className="text-white mb-1">
          Nom
        </label>
        <input
          type="text"
          className="h-14 pl-3 rounded-lg shadow-lg outline-0"
          name="fullname"
          placeholder="Votre nom complet"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="text-[#CF6679] font-bold">
            Veuillez renseigner un nom valide.
          </p>
        )}
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="email" className="text-white mb-1">
          Email
        </label>
        <input
          type="email"
          className="h-14 pl-3 rounded-lg outline-0"
          name="email"
          placeholder="exemple@mail.fr"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="text-[#CF6679] font-bold">
            Veuillez renseigner une adresse email valide.
          </p>
        )}
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="message" className="text-white mb-1">
          Message
        </label>
        <textarea
          className="resize-none h-[300px] rounded-lg p-4 outline-0"
          name="message"
          placeholder="Votre message"
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
          value={enteredMessage}
        />
        {messageInputHasError && (
          <p className="text-rederror font-bold">
            Le message doit contenir au moins 50 caractères.
          </p>
        )}
      </div>
      <Button type="submit" disabled={!formIsValid}>
        Envoyer
      </Button>
    </form>
  );
};

export default ContactForm;
