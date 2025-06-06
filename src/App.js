
import Input from './components/Input';
import Button from './components/Button';

import { InfoContainer, Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  
  const [CurrentNumber, setCurrentNumber] = useState();
  const [firstNumber, setFirstNumber] = useState();

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${number}${prev === '0' ? '' : prev}`);
  }

  const handleSumNumbers = (number) => {
    if (firstNumber==='0') {
      setFirstNumber(CurrentNumber);
      
    } else {
      let sum = Number(firstNumber) + Number(CurrentNumber);
      setCurrentNumber(sum.toString());
      
    }
  } 
  useState(() => {
    document.title = 'React Calculator';
  }, []);
  return (
    <Container>
        <InfoContainer>
          <h3>React Calculator</h3>
        </InfoContainer>
        <Content>
          <Input value={CurrentNumber}></Input>
          <Row>
            <Button label="C" onClick={() => handleClear()}/>
            <Button label="%" onClick={() => handleAddNumber('%')}/>
            <Button label="/" onClick={() => handleAddNumber('/')}/>
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="x" onClick={() => handleAddNumber('x')}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="-" onClick={() => handleAddNumber('-')}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="+" onClick={handleSumNumbers}/>
          </Row>
          <Row>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="," onClick={() => handleAddNumber(',')}/>
            <Button label="=" onClick={() => handleAddNumber('=')}/>
          </Row>
        </Content>
      </Container>
  );
}

export default App;
