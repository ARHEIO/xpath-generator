import { PaddedContainer, Tag, Label, DropdownField, InputChangeEvent, Skeleton, Icon } from "precise-ui/dist/es6"
import React, { useState } from "react";
import './styles.scss';

type ElementSelectorProps = {
  onChange:(element?: string) => void
};

export const ElementSelector: React.FC<ElementSelectorProps> = ({onChange}) => {
  const [element, setElement] = useState<string|null>(null);

  const onChangeElement = (newValue: string|null) => {
    if (newValue) {
      onChange(newValue);
    } else {
      onChange();
    }

    setElement(newValue);
  }

  return (
    <>
      <PaddedContainer gutter="small">
        {element
          ? <code>{element}</code>
          : <Skeleton isText isPulsing={false} />}
      </PaddedContainer>

      <PaddedContainer gutter="small">
        {element
          ? <Tag className="tag-boi" onClick={() => onChangeElement(null)} type="primary">{element} <Icon name="Cancel" /></Tag>
          : <Skeleton isText isPulsing={false} height={'23px'} />
        }
      </PaddedContainer>

      <PaddedContainer gutter='small'>
        <Label>Element</Label>
      </PaddedContainer>

      <PaddedContainer gutter='small'>
        <DropdownField data={['button', 'a']} direction={0} onChange={
          ({value}: InputChangeEvent<string[]>) => onChangeElement(value[0])
        }/>
      </PaddedContainer>
    </>
  )
}