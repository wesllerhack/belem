import styled, { css } from "styled-components";




interface ContainerProps {
  selected?: Number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;

  ul {
    list-style: none;

        li {
      display: flex;
      align-items: center;
      font-size: 18px;
      margin-top: 30px;
      color: gray;
      cursor: pointer;

      a{
        display: flex;
        align-items: center;
        list-style: none;
        text-decoration: none;
        color: gray;

      }

    ${props =>
    props.selected === 1 &&
    css`
              &:nth-child(1){
                    svg  {
                    border-radius: 30%;
                    background: #25316D;
                    color: #fff;
                    box-shadow: 0px 0px 8px 4px rgba(0,0,0,0.45);

                  }

                  span {
                    color: #25316D;
                  }
                }
              `
  }

    ${props =>
    props.selected === 2 &&
    css`
                  &:nth-child(2){
                        svg  {
                        border-radius: 30%;
                        background: #25316D;
                        color: #fff;
                        box-shadow: 0px 0px 8px 4px rgba(0,0,0,0.45);
                      }

                      span {
                        color: #25316D;
                      }
                    }
                  `
  }





      svg  {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          padding: 8px;
        }

        span {
          margin-left: 20px;
        }

    }
  }



`;
