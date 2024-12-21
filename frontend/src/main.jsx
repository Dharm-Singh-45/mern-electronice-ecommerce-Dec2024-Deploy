import { render } from 'preact'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './routes/index.jsx'

render(<RouterProvider router={router} />, document.getElementById('app'))
