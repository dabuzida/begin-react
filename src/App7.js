import React, { useState, } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';
const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;
const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    console.log('확인');
    setDialog(false);
  };
  const onCancel = () => {
    console.log('취소');
    setDialog(false);
  };
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595'
        }
      }}
    >
      <>
        <AppBlock>
          <ButtonGroup>
            <Button size="large">BUTTON1</Button>
            <Button>BUTTON1</Button>
            <Button size="small">BUTTON1</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="gray" size="large">
              BUTTON2
            </Button>
            <Button color="gray">BUTTON2</Button>
            <Button color="gray" size="small">
              BUTTON2
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="pink" size="large">
              BUTTON3
            </Button>
            <Button color="pink">BUTTON3</Button>
            <Button color="pink" size="small">
              BUTTON3
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large" outline>
              BUTTON4
            </Button>
            <Button color="gray" outline>
              BUTTON4
            </Button>
            <Button color="pink" size="small" outline>
              BUTTON4
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large" fullWidth>
              BUTTON5
            </Button>
            <Button size="large" color="gray" fullWidth>
              BUTTON5
            </Button>
            <Button onClick={onClick} size="large" color="pink" fullWidth>
              삭제
            </Button>
          </ButtonGroup>
        </AppBlock>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          onConfirm={onConfirm}
          onCancel={onCancel}
          visible={dialog}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </>
    </ThemeProvider >
  );
}




export default App;