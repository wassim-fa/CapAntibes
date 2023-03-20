import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 95vh;
    position: relative;
    cursor: pointer;
    overflow: hidden;

    > * {
        z-index: 0;
        opacity: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    > .car-active {
        opacity: 1;
        transition: all 0.5s ease-in-out;
        left: 0;
        z-index: 1;
    }
    > .car-previous {
        opacity: 1;
        transition: all 0.5s ease-in-out;
        left: -100%;
        z-index: 1;
    }
    > .car-next {
        opacity: 1;
        transition: all 0.5s ease-in-out;
        left: 100%;
        z-index: 1;
    }
`
