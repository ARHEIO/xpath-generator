import React, { useState } from 'react';
import { colors, Container, Grid, GridArea, Headline, PaddedContainer, Skeleton, ThemeContext, themes } from 'precise-ui'
import { Formatter } from './components/Formatter';
import { flexVerticalCenter } from './styles';
import { useWindowDimensions } from './hooks';
import { breakpoints } from 'precise-ui/dist/es6/themes';

const Header = () =>
  <PaddedContainer gutter="xxlarge">
    <header>
      <Headline style={{color: colors.whiteSmoke}}>Xpath Generator</Headline>
    </header>
  </PaddedContainer>

const Body = () => {
  const [selector, setSelector] = useState<string>();
  const onChange = (event: string) => {
    setSelector(event);
  }

  return (
    <>
      <PaddedContainer gutter="large">
        <Container style={{ width: 'unset', padding: '16px', borderRadius: '6px', backgroundColor: colors.white}}>
          <Formatter onChange={onChange} />
        </Container>
      </PaddedContainer>

      <PaddedContainer gutter="large">
        <Container style={{ width: 'unset', padding: '24px', borderRadius: '6px', backgroundColor: colors.white}}>
          {selector
            ? <code>{selector}</code>
            : <Skeleton isText isPulsing={false} height={'18px'}  />
          }
        </Container>
      </PaddedContainer>
    </>
  );
}

export const App: React.VFC = () => {
  const { width } = useWindowDimensions();

  const isLorge = width > breakpoints.large;
  return (
    <ThemeContext.Provider value={{ ...themes, ui2: colors.grey6, ui3: colors.grey6 }}>
      <Container style={{ height: '100vh', backgroundColor: colors.whiteSmoke }}>
          <Grid rows={['1fr', '4fr']} columns={8} spacing={'16px'}>
            <GridArea colSpan={8} row={0} column={0} style={{ backgroundColor: '#141b4d' }} />

            <GridArea colSpan={isLorge ? 6 : 8} row={0} column={isLorge ? 1 : 0} style={flexVerticalCenter}>
              <Header />
            </GridArea>

            <GridArea colSpan={isLorge ? 6 : 8} row={1} column={isLorge ? 1 : 0}>
              <Body />
            </GridArea>
          </Grid>
      </Container>
    </ThemeContext.Provider>
  );
}
