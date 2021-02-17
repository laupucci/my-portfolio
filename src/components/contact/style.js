import styled from "styled-components";
import { colors } from "../../utils";
const { secondaryDark, darkColor, whitish } = colors;

export const ContactContainer = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  
  .background {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contact_form {
    margin-top: 3%;
    left: 50%;
    right: 50%;
    height: 75vh;
    color: ${darkColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      padding: 1rem 1.5rem;
      width: 50vw;
      background-color: rgba(249, 35, 9, 0.6);
      border-radius: 25px 0 0 0;
      display: flex;
      justify-content: center;
      align-items: center;

      h2 {
        font-family: "Sanchez", sans-serif;
        font-size: 100%;
        color: ${whitish};
        width: 40%;
        font-weight: normal;
        display: flex;
      justify-content: center;
      align-items: center;
      }
    }
    .form_container {
      background-color: rgba(107, 107, 107, 0.6);
      width: 50vw;
      height: 80%;
      padding: 1.5rem;
      display: grid;
     // align-items:center;
      justify-items: center;
      border-radius: 0 0 25px 0;
      grid-template:
        " _name   lastname" 2fr
        " phone   email   " 2fr
        "   msg   msg     " 4fr
        "submit   submit  " 1fr/
        1fr 1fr;
      grid-gap: 1.2rem;
    }

    .field {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .label {
      color:  rgba(200, 200, 200);
      font-family: "Sanchez";
      font-size: 1.1rem;
      padding-bottom: 0.5rem;
    }
    .input {
      width: 87%;
      height: 60%;
      padding: 1rem;
      background-color: rgba(39, 39, 39, 0.6);
      color: #e4e4e4;
      font-family: "Sanchez";
      font-size: 1.1rem;
      border: 1.5px solid transparent;
      border-radius: 5px;
      transition: 0.3s;
      outline: none;

      &:focus {
        border: 1.5px solid ${whitish};
        background-color: rgba(39, 39, 39, 0.5);
      }
    }
    .error {
      height: 0;
      font-size: 0.8rem;
      color: ${secondaryDark};
    }

    .input.textarea {
      grid-area: msg;
      height: 100%;
      width: 94.5%;
    }
    .input::placeholder {
      color: rgba(228, 228, 228, 0.6);
    }
    .submit_btn {
      grid-area: submit;
      width: 95%;
      height: 120%;
      background-color: rgba(236, 36, 11, 0.87);
      color: ${whitish};
      border: none;
      border-radius: 15px 0;
      padding: 0.5rem;
      cursor: pointer;
      transition: 0.3s;
      font-family: "Sanchez";

      &:hover {
        background-color: rgba(134, 30, 17, 0.6);
        color: ${whitish};
      }
    }
    .name_field {
      grid-area: _name;
      width: 89%
    }
    .lastname_field {
      grid-area: lastname;
      width: 89%
    }
    .phone_field {
      grid-area: phone;
      width: 89%
    }
    .email_field {
      grid-area: email;
      width: 89%
    }
    .message_field {
      grid-area: msg;
      width: 94%
    }
  }
  .backgroundLight {
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.75);
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form_containerLight {
      background-color: rgba(249, 35, 9, 0.4);
      width: 50vw;
      height: 80%;
      padding: 1.5rem;
      display: grid;
     // align-items:center;
      justify-items: center;
      border-radius: 0 0 25px 0;
      grid-template:
        " _name   lastname" 2fr
        " phone   email   " 2fr
        "   msg   msg     " 4fr
        "submit   submit  " 1fr/
        1fr 1fr;
      grid-gap: 1.2rem;
    }
  
  .titleLight {
      padding: 1rem 1.5rem;
      width: 50vw;
      background-color: rgba(236, 12, 12, 0.85);
      border-radius: 25px 0 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .submit_btnLight {
      grid-area: submit;
      width: 95%;
      height: 120%;
      background-color: rgba(236, 12, 12, 0.85);
      color: ${whitish};
      border: none;
      border-radius: 15px 0;
      padding: 0.5rem;
      cursor: pointer;
      transition: 0.3s;
      font-family: "Sanchez";

      &:hover {
        background-color: rgba(134, 30, 17, 0.6);
        color: ${whitish};
      }
    }
  .h2Light {
        font-family: "Sanchez", sans-serif;
        font-size: 120%;
        color:  rgba(200, 200, 200);
        width: 40%;
        font-weight: normal;
        display: flex;
      justify-content: center;
      align-items: center;
      }
      .labelLight{
        color:  rgba(39, 39, 39, 0.95);
      font-family: "Sanchez";
      font-size: 1.1rem;
      padding-bottom: 0.5rem;

      }

  @media (max-width: 500px) {
    .contact_form {
      .title {
        padding: 2.5%;
        margin: 0;
        width: 80vw;

        h2 {
          font-size: 100%;
        }
      }
      .form_container {
        width: 80vw;
        height: 55%;
        padding: 0.5%;
        grid-gap: 0.85rem;
      }

      label {
        color: #272727;
        font-family: "Sanchez";
        font-size: 75%;
      }
      .input {
        height: 50%;
        font-size: 75%;
        padding: 3%;
      }
      .error {
        font-size: 0.7rem;
      }

      .input.textarea {
        height: 65%;
      }
      }

    }
`;
