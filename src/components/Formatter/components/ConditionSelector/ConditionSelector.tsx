import { PaddedContainer, Label, DropdownField, TextField, Checkbox, Button, Form, FormSubmitEvent, Grid } from "precise-ui/dist/es6"
import React from "react";

enum KEYS {
  CLASS = '@class',
  ID = '@id',
  TEXT = 'text()',
  TYPE = '@type',
  CHECKED = '@checked',
}

const ARRAY_KEYS = [
  KEYS.CLASS,
  KEYS.ID,
  KEYS.TEXT,
  KEYS.TYPE,
  KEYS.CHECKED,
]

type Condition = {key?: KEYS, value?: string, contains?: boolean}

const mapConditionToString = ({key, value, contains}: Condition) =>
  key === KEYS.CHECKED
    ? `${key}`
    : (contains ? `contains(${key}, "${value}")` : `${key}="${value}"`);

type ConditionSelectorProps = {
  onSubmitCondition:(element: string) => void
};

export const ConditionSelector: React.FC<ConditionSelectorProps> = ({onSubmitCondition}) => {
  const onFormSubmit = ({data: { contains, key, value }}: FormSubmitEvent) => {
    onSubmitCondition(mapConditionToString({
      contains,
      value,
      key: ARRAY_KEYS[key]
    }));
  }

  return (
    <Grid columns={1} rows={['333px', '1fr']}>
      <Form onSubmit={onFormSubmit} >
        <PaddedContainer gutter="small">
          <Label>Attribute</Label>
        </PaddedContainer>

        <PaddedContainer gutter="small">
          <DropdownField data={ARRAY_KEYS} name="key"/>
        </PaddedContainer>

        <PaddedContainer gutter="small">
          <Label>Value</Label>
        </PaddedContainer>

        <PaddedContainer gutter="small">
          <TextField name="value" autoComplete='off' />
        </PaddedContainer>

        <PaddedContainer gutter="small">
          <Checkbox name="contains">Contains</Checkbox>
        </PaddedContainer>

        <PaddedContainer gutter="small">
          <Button>Add Condition</Button>
        </PaddedContainer>
      </Form>
    </Grid>
  )
}
