import React, { FC } from "react";

type ContainerProps = {
  Test1: React.LazyExoticComponent<React.ComponentType<{}>>;
  Test2: React.LazyExoticComponent<React.ComponentType<{}>>;
  Test3: React.LazyExoticComponent<React.ComponentType<{}>>;
};

export const Container: FC<ContainerProps> = ({
  Test1,
  Test2,
  Test3,
}) => {
  return (
    <div>
      <h3>GPB Container</h3>
      <Test1 />
      <Test2 />
      <Test3 />
    </div>
  );
};
