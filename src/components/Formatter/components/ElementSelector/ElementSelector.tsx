import { PaddedContainer, Label, DropdownField, InputChangeEvent, Grid } from "precise-ui/dist/es6"
import React from "react";

type ElementSelectorProps = {
  onChange:(element: string) => void
};

export const ElementSelector: React.FC<ElementSelectorProps> = ({onChange}) => {

  const onChangeElement = (newValue: string) => {
    onChange(newValue);
  }

  return (
    <Grid columns={1} rows={['333px', '1fr']}>
      <div>
        <PaddedContainer gutter='small'>
          <Label>Element</Label>
        </PaddedContainer>

        <PaddedContainer gutter='small'>
          <DropdownField data={['button', 'a']} direction={0} onChange={
            ({value}: InputChangeEvent<string[]>) => onChangeElement(value[0])
          }/>
        </PaddedContainer>
      </div>
    </Grid>
  )
}