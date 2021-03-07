import styled from "styled-components";
import { colors } from "../../utils";
const { darkColor, whitish } = colors;

export const ContactContainer = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  /* margin: 0 auto; */
  justify-content: center;
  align-items: center;

  .background {
    object-fit: cover;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
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
      background-color: rgba(249, 35, 9, 0.6);
      border-radius: 25px 0 0 0;
      display: flex;
      justify-content: center;
      align-items: center;

      h2 {
        font-family: "Acme", sans-serif;
        font-size: 2vw;
        margin: 0;
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
      grid-gap: 2%;
    }

    .field {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .label {
      color: rgba(200, 200, 200);
      font-family: "Acme", sans-serif;
      font-size: 1.1rem;
      padding-bottom: 0.5rem;
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
        border: 1.5px solid ${whitish};
        background-color: rgba(39, 39, 39, 0.5);
      }
    }
    .error {
      height: 0;
      font-size: 0.9vw;
      color: #f97777;
    }
    .errorLight {
      height: 0;
      font-size: 0.9vw;
      color: #ab0f0f;
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
      height: 100%;
      background-color: rgba(236, 36, 11, 0.8);
      color: ${whitish};
      border: none;
      border-radius: 15px 0;
      padding: 0.5rem;
      cursor: pointer;
      transition: 0.3s;
      font-family: "Acme", sans-serif;
      font-size: 1.3vw;
      &:hover {
        background-color: rgba(134, 30, 17, 0.6);
        color: ${whitish};
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
  .backgroundLight {
    object-fit: cover;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.75);
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: flex-end;
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
    height: 100%;
    background-color: rgba(236, 12, 12, 0.85);
    color: ${whitish};
    border: none;
    border-radius: 15px 0;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.3s;
    font-family: "Acme", sans-serif;
    font-size: 1.3vw;
    &:hover {
      background-color: rgba(134, 30, 17, 0.6);
      color: ${whitish};
    }
  }
  .h2Light {
    font-family: "Acme", sans-serif;
    font-size: 2vw;
    margin: 0;
    color: ${whitish};
    width: 40%;
    font-weight: normal;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .labelLight {
    color: rgba(39, 39, 39, 0.95);
    font-family: "Acme", sans-serif;
    font-size: 1.1rem;
    padding-bottom: 0.5rem;
  }
.footer{
  display: none
}
  @media screen and (max-width: 1024px) {
    .background, .backgroundLight{
      align-items: center;
    }
    .contact_form {
      margin-top: 1%;
      .title, .titleLight {
        padding: 2% 0.5%;
        width: 87vw;
        font-size: 5vw;

        h2, .h2Light {
          font-size: 4vw;
        }
      }
      .form_container, .form_containerLight {
        width: 87vw;
        height: 72vh;
        padding: 2% 0.5%;
      grid-template:
        " _name   lastname" 2fr
        " phone   email   " 2fr
        "   msg   msg     " 3fr
        "submit   submit  " 1fr/
        1fr 1fr;
        grid-gap: 1%;
      }

      .submit_btnLight, .submit_btn {
    height: 80%;
    padding: 0.5rem;
    font-size: 5vw;
  }
     
      .label, .labelLight {
        font-family: "Sanchez";
        font-size: 4vw;
      }
      .input, .inputLight {
        height: 40%;
        font-size: 4vw;
        padding: 3%;
      }
      .error, .errorLight {
        font-size: 2.5vw;
      }

      .input.textarea {
        height: 55%;
      }
    }
  }
  @media screen and (max-width: 500px) {

    .background, .backgroundLight{
      flex-direction: column;
      align-items: center;
    }
    .contact_form {
      margin-top: 1%;
      .title, .titleLight {
        padding: 2% 0.5%;
        width: 87vw;

        h2, .h2Light {
          font-size: 100%;
        }
      }
      .form_container, .form_containerLight {
        width: 87vw;
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

      .submit_btnLight, .submit_btn {
    height: 80%;
    padding: 0.5rem;
    font-size: 5vw;
  }
     
      .label, .labelLight {
        font-family: "Sanchez";
        font-size: 100%;
      }
      .input, .inputLight {
        height: 40%;
        font-size: 100%;
        padding: 3%;
      }
      .error, .errorLight {
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
