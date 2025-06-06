import styled from 'styled-components';


   export const InfoContainer = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;        
        color: #333;        
        background-color:rgb(113, 235, 160);
        border-radius: 100px;
        padding: 10px;
        margin-bottom: 20px;
        box-shadow: 10 2px 10px rgba(150, 122, 122, 0.1);
        h3 {
            margin: 0;
            font-size: 24px;
        }
    }
    `
    export const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #f0f0f0;
        `
    export const Content = styled.div`
        width: 100%;
        max-width: 400px;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        
    `
    export const Row = styled.div`
        display: flex;
        flwex-direction: row;
        justify-content: space-between;
        margin-bottom: 2px;
    `

    
    ;