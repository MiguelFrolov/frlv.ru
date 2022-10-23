import React from 'react'
import Card from './Card';

export default function Grid(props) {

  const cells = props.contentArr.map((contentObj, index) =>
  <React.Fragment key={index}>
      <Card contentObj={contentObj} />
  </React.Fragment>
  )

  return (
    <>
      {cells}
    </>
  )
}