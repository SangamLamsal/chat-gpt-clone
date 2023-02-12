import { Inter } from '@next/font/google'
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from '@heroicons/react/24/outline'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-5xl font-bold mb-20">CHAT-GPT</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">&quot;Explain Something to me&quot;</p>
            <p className="infoText">
              &quot;What is the difference between a dog and cat?&quot;
            </p>
            <p className="infoText">
              &quot;What is the color of the sun?&quot;
            </p>
          </div>
        </div>
        {/* ############################################ */}
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Bolt Icon */}
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Change the ChatGPT Model to use</p>
            <p className="infoText">
              Message are stored in Firebse&lsquo;s Firestore
            </p>
            <p className="infoText">
              Hot Toast notification when ChatGPT is thinking
            </p>
          </div>
        </div>
        {/* ############################################ */}
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* ExclamationTriangleIcon */}
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful instrucions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of the world events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
