import React, { useEffect, useState } from 'react';
import { Button, Checkbox, DropdownField, Form, Grid, Icon, Label, PaddedContainer, Skeleton, Tag, TextField } from 'precise-ui'
import { ElementSelector } from '../ElementSelector';
import './styles.scss';


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

type FormatterProps = {
  onChange: (selector: string) => void
}

export const Formatter: React.FC<FormatterProps> = ({onChange}) => {
  const [element, setElement] = useState<string>();
  const [tmpCondition, setTmpCondition] = useState<Condition>();
  const [conditions, setConditions] = useState<Condition[]>([]);

  useEffect(() => {
    if (element) {
      if (conditions.length > 0) {
        const reducedConditions = conditions.length === 1
          ? mapConditionToString(conditions[0])
          : mapConditionToString(conditions[0]) + conditions.slice(1).reduce(
            (carry, condition) => carry + ' and ' + mapConditionToString(condition),
            ''
          );

        onChange('//' + element + (reducedConditions && '[' + reducedConditions + ']'));
      } else {
        onChange('//' + element);
      }
    } else {
      onChange('');
    }
  }, [element, conditions, onChange])

  return (
    <Grid columns={2}>
      <ElementSelector onChange={(element) => setElement(element)} />
        {element &&
        <>
            <PaddedContainer gutter="small">
              {tmpCondition ? <code>{mapConditionToString(tmpCondition)}</code> : <Skeleton isText isPulsing={false} />}
            </PaddedContainer>

            <PaddedContainer gutter="small">
              {conditions.length > 0 ? conditions.map((condition, index) =>
                <Tag className="tag-boi" onClick={() => setConditions(c => c.filter((v, i) => i !== index))} type="secondary">
                  {mapConditionToString(condition)} <Icon name="Cancel" />
                </Tag>
              ) : <Skeleton isText isPulsing={false} height={'23px'} /> }
            </PaddedContainer>

            <Form
              onChange={(e) => {
                const {key, contains, value} = e.value;
                if (key.length) {
                  setTmpCondition({
                    key: ARRAY_KEYS[key],
                    contains,
                    value
                  })
                }
              }}
              onSubmit={(e) => {
                if (tmpCondition) {
                  setConditions(conditions => [...conditions, tmpCondition]);
                  setTmpCondition(undefined);
                }
              }}
            >
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
              <TextField name="value"/>
            </PaddedContainer>

            <PaddedContainer gutter="small">
              <Checkbox name="contains">Contains</Checkbox>
            </PaddedContainer>

            <PaddedContainer gutter="small">
              <Button>Submit</Button>
            </PaddedContainer>
          </Form>
        </>}
    </Grid>
  );
}


/**
 * //button[text()="Edit details"]
 * //button[contains(text(), "Create License")]

 * //div[@class="addressBook-table"]
 * //button[contains(@class, "dropdown-toggle")]

 * //div[@id="addressbook-contacts-table"]
 * //div[@id="addressbook-contacts-table"]//button[contains(@class, "dropdown-toggle")]
 * 
 * //input[@id="address_book_contact_isPreferred" and @checked]
 * //input[@type="checkbox" and @class="license-checkbox"]
 */
