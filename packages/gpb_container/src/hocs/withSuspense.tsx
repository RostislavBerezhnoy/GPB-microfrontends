import { LazyExoticComponent, ComponentType, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { WrappedBox, Loader } from 'gpb_ui'

export const withSuspense = (Component: LazyExoticComponent<ComponentType>) => (
  <Suspense
    fallback={
      <WrappedBox>
        <Loader />
      </WrappedBox>
    }
  >
    <ErrorBoundary
      fallback={
        <WrappedBox>
          <h1>Something went wrong</h1>
        </WrappedBox>
      }
    >
      <Component />
    </ErrorBoundary>
  </Suspense>
)
