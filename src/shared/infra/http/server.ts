import 'dotenv/config'
import { setupApp } from '@/main/config'
import env from '@/main/middlewares/core/env'

const app = setupApp()

app.listen(env.port, () =>
	console.log(`Server is running at: http://localhost:${env.port}`),
)
