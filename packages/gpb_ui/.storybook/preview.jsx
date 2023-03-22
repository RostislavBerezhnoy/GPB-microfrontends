import { Toaster } from 'react-hot-toast'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withToastProvider = (Story, context) => (
  <>
    <Toaster position='bottom-right' />
    <Story {...context} />
  </>
)

export const decorators = [withToastProvider]