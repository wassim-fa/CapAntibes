import { useRouter } from 'next/router'

export const useIsHome = () => {
  const router = useRouter()
  return router.route === '/'
}
