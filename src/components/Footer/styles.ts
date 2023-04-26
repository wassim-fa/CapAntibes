import { getMargin } from '@/utils'
import styled from 'styled-components'

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;

  &.mobile::after {
    content: '';
    display: block;
    height: 67px;
  }

  img {
    width: auto;
  }

  .footer-btn {
    > * {
      margin: 0;
    }
  }

  .large-form {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;

    > *:first-child {
      flex: 1;
      margin-right: 20px;
    }
    > *:last-child {
      flex: 1;
      margin-left: 20px;
    }

    > *:not(:first-child):not(:last-child) {
      flex: 3;
    }
  }
`

export const Section = styled.div`
  display: flex;
  &.mobile {
    flex-direction: column;
  }
  flex-direction: row;
  width: calc(100% - ${getMargin(2)});
  margin: 20px ${getMargin()};
  font-size: 12px;

  *.first {
    font-size: 14px;
  }
`

type PartProps = {
  direction: 'row' | 'column'
  align: 'space-between' | 'center' | 'space-around'
  fontSize: string
}
export const Part = styled.div<PartProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.align};
  font-size: ${(props) => props.fontSize};

  form {
    width: 100%;
    display: flex;
    flex-direction: ${(props) => props.direction};
    justify-content: ${(props) => props.align};
    font-size: ${(props) => props.fontSize};
  }
`
