import { LazyExoticComponent, ComponentType, Suspense } from 'react'
import { WrappedBox, Loader } from 'gpb_ui'

export const withSuspense = (Component: LazyExoticComponent<ComponentType>) => (
  <Suspense
    fallback={
      <WrappedBox>
        <Loader />
      </WrappedBox>
    }
  >
    <Component />
  </Suspense>
)
