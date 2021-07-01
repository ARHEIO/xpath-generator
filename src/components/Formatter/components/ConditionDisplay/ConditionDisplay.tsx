import { PaddedContainer, Skeleton, Grid } from "precise-ui/dist/es6"
import React from "react";
import { DeletableTag } from "../../../DeletableTag";

type ConditionDisplayProps = {
  onDeleteCondition:(conditionIndex: number) => void
  conditions: string[]
};

export const ConditionDisplay: React.FC<ConditionDisplayProps> = ({onDeleteCondition, conditions}) => (
  <PaddedContainer gutter="small">
    <Grid columns={1} spacing='8px'>
      {conditions.length > 0
        ? conditions.map((condition, index) => <DeletableTag type="secondary" onClick={() => onDeleteCondition(index)} key={index} label={condition} />)
        : <Skeleton isText isPulsing={false} height={'25px'} /> }
    </Grid>
  </PaddedContainer>
)

