import '../styles/globals.css'
import { AuthProvider } from '../context/userContext'
import { UploadProvider } from '../context/uploadContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <UploadProvider>
        <Component {...pageProps} />
      </UploadProvider>
    </AuthProvider>
  )
}

export default MyApp
