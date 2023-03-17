import React, { FC, LazyExoticComponent, ComponentType } from 'react'

type ContainerProps = {
  Test1: LazyExoticComponent<ComponentType>
  Test2: LazyExoticComponent<ComponentType>
  Test3: LazyExoticComponent<ComponentType>
}

export const Container: FC<ContainerProps> = ({ Test1, Test2, Test3 }) => (
  <div>
    <h3>GPB Container</h3>
    <Test1 />
    <Test2 />
    <Test3 />
  </div>
)
