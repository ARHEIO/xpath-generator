import React from 'react';
import { Container, Icon, Tag, TagType } from 'precise-ui'

type DeletableTagProps = {
  onClick: () => void
  label: string
  type?: TagType
}

export const DeletableTag: React.FC<DeletableTagProps> = ({onClick, label, type}) =>
  <Tag onClick={onClick} type={type ?? 'primary'}>
    <Container style={{display: 'flex', fontSize: '16px', alignItems: 'center'}}>
      <span>{label}</span>
      <Icon style={{paddingLeft: '8px', alignItems: 'center'}} name="Cancel" />
    </Container>
  </Tag>;

