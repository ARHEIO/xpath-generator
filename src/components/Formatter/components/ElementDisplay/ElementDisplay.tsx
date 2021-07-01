import { PaddedContainer, Skeleton } from "precise-ui/dist/es6"
import React from "react";
import { DeletableTag } from "../../../DeletableTag";

type ElementDisplayProps = {
  onDeleteElement:() => void
  element: string|null
};

export const ElementDisplay: React.FC<ElementDisplayProps> = ({onDeleteElement, element}) => (
  <PaddedContainer gutter="small">
    {element
      ? <DeletableTag onClick={() => onDeleteElement()} label={element} />
      : <Skeleton isText isPulsing={false} height={'25px'} />
    }
  </PaddedContainer>
)

