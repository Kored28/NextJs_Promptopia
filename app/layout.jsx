import Navbar from '@components/Navbar'
import Provider from '@components/Provider'
import '@styles/global.css'

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI prompts",
  icons: "/assets/images/logo.svg"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient'/>
          </div>

          <main className='app'>
            <Navbar/>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
