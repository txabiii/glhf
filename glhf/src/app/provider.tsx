import { StoriesProvider } from '@component/context/StoriesContext';

export function Providers({ children }: any) {
  return (
    <StoriesProvider>
      {children}
    </StoriesProvider>
  )
}