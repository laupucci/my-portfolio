import styled from "styled-components";
import { colors } from "../../utils";
const { darkColor, whitish } = colors;

export const ContactContainer = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

  .background {
    object-fit: cover;
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.body};
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .contact_form {
    left: 50%;
    right: 50%;
    height: 82vh;
    color: ${darkColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3%;

    .title {
      padding: 2% 5.1%;
      width: 50vw;
      background-color: ${({ theme }) => theme.formTitle};
      border-radius: 25px 0 0 0;
      display: flex;
      justify-content: center;
      align-items: center;

      h2 {
        font-family: "Acme", sans-serif;
        font-size: 2vw;
        margin: 0;
        color: #E8E8E8;
        width: 40%;
        font-weight: normal;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .form_container {
      background-color: ${({ theme }) => theme.form};
      width: 50vw;
      height: 80%;
      padding: 5%;
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
      grid-gap: 3%;
    }

    .field {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .label {
      color: ${({ theme }) => theme.label};
      font-family: "Acme", sans-serif;
      font-size: 1.1rem;
      padding-bottom: 0.5rem;
    }
    .label.message {
      margin-top: 2.2%
    }
    .input {
      width: 87%;
      height: 60%;
      padding: 1rem;
      background-color: rgba(39, 39, 39, 0.6);
      color: #e4e4e4;
      font-family: "Architects Daughter", sans-serif;
      font-size: 1.1rem;
      border: 1.5px solid transparent;
      border-radius: 5px;
      transition: 0.3s;
      outline: none;

      &:focus {
        border: 1.5px solid ${({ theme }) => theme.text};
        background-color: rgba(39, 39, 39, 0.5);
      }
    }
    .error {
      height: 0;
      font-size: 0.9vw;
      color: ${({ theme }) => theme.error};
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
      margin-top: 1.1%;
      grid-area: submit;
      width: 95%;
      height: 93%;
      background-color: rgba(236, 36, 11, 0.8);
      color: #E8E8E8;
      border: none;
      border-radius: 15px 0;
      padding: 0.5rem;
      cursor: pointer;
      transition: 0.3s;
      font-family: "Acme", sans-serif;
      font-size: 1.3vw;
      &:hover {
        background-color: rgba(134, 30, 17, 0.6);
        color: #E8E8E8;
      }
    }
    .name_field {
      grid-area: _name;
      width: 89%;
    }
    .lastname_field {
      grid-area: lastname;
      width: 89%;
    }
    .phone_field {
      grid-area: phone;
      width: 89%;
    }
    .email_field {
      grid-area: email;
      width: 89%;
    }
    .message_field {
      grid-area: msg;
      width: 94%;
    }
  }

.footer{
  display: none
}
  @media screen and (max-width: 1024px) {
    .background {
      align-items: center;
    }
    .contact_form {
      margin-top: 1%;
      .title {
        margin-top: 1%;
        padding: 1.5% 0.5%;
        width: 75vw;

        h2 {
          font-size: 130%;
        }
      }
      .form_container {
        width: 75vw;
        height: 66vh;
        padding: 2% 0.5%;
      grid-template:
        " _name   lastname" 2fr
        " phone   email   " 2fr
        "   msg   msg     " 3fr
        "submit   submit  " 1fr/
        1fr 1fr;
        grid-gap: 1%;
      }

      .submit_btn {
    height: 88%;
    padding: 0.5%;
    font-size: 98%;
  }
     
      .label {
        font-family: "Overpass";
        font-size: 100%;
      }
      .input {
        height: 40%;
        font-size: 100%;
        padding: 3%;
      }
      .error {
        font-size: 2.5vw;
      }

      .input.textarea {
        height: 55%;
      }
    }
  }
  @media screen and (max-width: 500px) {

    .background {
      flex-direction: column;
      align-items: center;
    }
    .contact_form {
      margin-top: 1%;
      .title {
        padding: 2% 0.5%;
        width: 82vw;

        h2 {
          font-size: 100%;
        }
      }
      .form_container {
        width: 82vw;
        height: 64vh;
        padding: 2% 0.5%;
      grid-template:
        " _name   lastname" 2fr
        " phone   email   " 2fr
        "   msg   msg     " 3fr
        "submit   submit  " 1fr/
        1fr 1fr;
        grid-gap: 1%;
      }

      .submit_btn {
    height: 80%;
    padding: 0.5rem;
    font-size: 3.2vw;
  }
     
      .label {
        font-family: "Sanchez";
        font-size: 100%;
      }
      .input {
        height: 40%;
        font-size: 100%;
        padding: 3%;
      }
      .error {
        font-size: 0.8rem;
      }

      .input.textarea {
        height: 55%;
      }
    }
    .footer{
      position: relative;
      display: flex;
      bottom: 0;
      margin: 0;
      width: 90vw;
    height: 5vh}
  }
`;
