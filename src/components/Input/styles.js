import styled from 'styled-components';


    export const InputContainer = styled.div`
        width: 100%;
        background-color:rgb(202, 181, 181);
        height: 60px;
        border-radius: 4px;

        display: flex;
        align-items: center;
        justify-content: flex-end;      
        margin-bottom: 10px;

        input {
            width: 100%;
            height: 90%;
            background-color: transparent;
            border: none;
            outline: none;
            padding-right: 10px;
            color: #fafafa;
            font-family: 'Courier New', Courier, monospace;
            font-size: 1.4rem;
            text-align: right;
        }
    `;
