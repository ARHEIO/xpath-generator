import React, { useState } from 'react';
import { Grid, GridArea, Headline, PaddedContainer } from 'precise-ui'
import './App.scss';
import { Formatter } from '../Formatter';

const Header = () =>
  <header className="App-header">
    <PaddedContainer gutter="large">
      <Headline>Xpath Generator</Headline>
    </PaddedContainer>
  </header>;

const Body = () => {
  const [selector, setSelector] = useState<string>();
  const onChange = (event: string) => {
    setSelector(event);
  }

  return (
    <body>
      <PaddedContainer gutter="large">
        <Formatter onChange={onChange}/>
      </PaddedContainer>

      <PaddedContainer gutter="large">
        <PaddedContainer gutter="small">
          {selector}
        </PaddedContainer>
      </PaddedContainer>
    </body>
  );
}

export const App: React.VFC = () => {
  return (
    <div className="App">
      <Grid rows={['48px', '3fr']} columns={5} spacing={'16px'} >
        <GridArea colSpan={3} row={0} column={1}>
          <Header/>
        </GridArea>

        <GridArea colSpan={3} row={1} column={1}>
          <Body/>
        </GridArea>
      </Grid>
    </div>
  );
}
