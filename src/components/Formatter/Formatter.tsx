import React, { useEffect, useState } from 'react';
import { Grid } from 'precise-ui'
import { ElementSelector } from './components/ElementSelector';
import { ConditionSelector } from './components/ConditionSelector';
import { ConditionDisplay } from './components/ConditionDisplay';
import { ElementDisplay } from './components/ElementDisplay';

type FormatterProps = {
  onChange: (selector: string) => void
}

export const Formatter: React.FC<FormatterProps> = ({onChange}) => {
  const [element, setElement] = useState<string|null>(null);
  const [conditions, setConditions] = useState<string[]>([]);

  useEffect(() => {
    if (!element) {
      onChange('');
    } else if (conditions.length > 0) {
      const reducedConditions = conditions.length !== 1
        ? conditions[0] + conditions.slice(1).reduce((carry, condition) => carry + ' and ' + (condition), '')
        : conditions[0];

      onChange('//' + element + (reducedConditions && '[' + reducedConditions + ']'));
    } else {
      onChange('//' + element);
    }

  }, [element, conditions, onChange])

  const addCondition = (condition: string) => setConditions(conditions => [...conditions, condition]);
  const removeConditionAtIndex = (indexToRemove: number) => setConditions(
    conditions.filter((a, index) => index !== indexToRemove)
  );

  return (
    <Grid columns={2} rows={['1fr', 'fit-content']} spacing='16px'>
      <ElementSelector onChange={(element) => setElement(element)} />
      <ConditionSelector onSubmitCondition={addCondition} />
      <ElementDisplay element={element} onDeleteElement={() => setElement(null)} />
      <ConditionDisplay conditions={conditions} onDeleteCondition={removeConditionAtIndex} />
    </Grid>
  );
}
