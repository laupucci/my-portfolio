import { colors } from "../../utils";
import styled from "styled-components";
const { whitish } = colors;

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  font-family: "'Julius Sans One";
  background-color: rgba(4, 4, 4, 0.75);;
  height: 10vh;
  padding: 0em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  transition: background 0.5s ease;

  .logo {
    font-size: 1.5rem;
    font-family: "Julius Sans One";
    color: ${whitish};
    padding: 1em;
  }
  .icon {
    color: ${whitish};
   // padding: 1em;
    width: 2vw;
  }
  .menu {
    display: flex;
    flex-direction: "row";
    padding: 0 2em;
    justify-content: center;
    align-items: center
  }
  .en{
    color: rgba(228, 228, 228)
  }
  ul{
    padding: 2em;
  }
  li{
    margin-right: 4em;
  }
  button{
    margin-right: 2em;
    background-color: rgba(249, 35, 9, 0.4);
    border: none;
    margin-bottom: 4px;
    border-radius: 0 7px;
    &:hover {
      border-radius: 7px 0;
      background-color: red;
      cursor: pointer;
      color: red
      }
  }
  .p1{
    color: ${whitish};
    padding: 1em;
    font-size: 16px;
    font-family: "Sanchez";
  }
  .p2 {
    color: ${whitish};
    padding: 1em;
    font-size: 16px;
    font-family: "Sanchez";
    &:hover {
      background-color: rgba(249, 35, 9, 0.6);
      border-radius: 0 7px;
    }
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }

  .top {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 2px solid ${whitish};
    background: none;
    font-size: 3rem;
    font-weight: bold;
    display: ${({ active }) => (active ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    color: ${whitish};
    cursor: pointer;
    span {
      position: relative;
      top: 0.5rem;
    }
  }


  @media screen and (max-width: 500px) {
    width: 100%;
    justify-content: space-between;

    .logo {
      font-size: 4vw;
    }
    .menu {
      justify-content: flex-end;
      align-items: center;
    }

    .p2 {
      color: ${whitish};
      font-size: 2.6vw;
      font-family: "Sanchez";
      justify-content: flex-end;
      align-items: center;
      margin: 3%;
      &:hover {
        background-color: rgba(163, 189, 49, 0.6);
        border-radius: 7px;
        min-height: 7vh;
      }
    }
    .top {
      width: 8%;
      height: 6%;
    }
  }
  @media (max-width: 400px) {
    width: 100vw;
    padding: 0;
    justify-content: space-between;
    .top {
      width: 7.2%;
      height: 4.2%;
    }
  }
`;

export const LanguageCont = styled.li`
	position: relative;
	padding-bottom: .8em;
	margin-bottom: -.8em;
	cursor: default;
	.dropdown-columns{
		columns: 3;
		column-rule: 1px solid #ccc;
		padding: 1em;
		li {
			break-inside: avoid;
			-webkit-column-break-inside: avoid;
			page-break-inside: avoid;
			button{ border-radius: .4em }
			&:last-of-type button { border-radius: .4em }
		}
	}
	&:hover > ul {
		display:block;
		list-style: none;
	}
	& > ul {
		display: none;
		min-width: 150px;
		position: absolute;
		left: 50%;
		top: 100%;
		transform: translateX(-50%);
		padding-top: 1em;
		font-size: 0.9em;
		color: var(--clr-dark);
		background-color: var(--clr-white);
		box-shadow: 0 0 20px rgba(0,0,0,.7);
		border-radius: .4em;
		z-index: 10;
		&::before {
			content: '';
			width: 0px;
			height: 0px;
			position: absolute;
			top: -19px;
			left: 50%;
			transform: translateX(-50%);
			border: 10px solid transparent;
			border-bottom-color: var(--clr-white);
		}
		& li {
			margin: 0;
			width: 100%;
		
			&:last-of-type a {
				border-radius: 0 0 .3em .3em;
			}
		}
		button {
			text-align: center;
			display: block;
			width: 100%;
			padding: 1em 2em;
			text-decoration: none;
			color: currentColor;
			&:hover {
				background-color: var(--clr-middle);
				color: var(--clr-white)
			}
		}
		.dropdown__first-name {
			color: var(--clr-primary);
			font-size: 1.3em;
			font-family: Poppins, Raleway, sans-serif;
			font-weight: 900;
			border-bottom: 1px solid #CCC;
			padding-bottom: .5em;
			margin-bottom: .5em !important;
			text-align: center;
		}
	}
`