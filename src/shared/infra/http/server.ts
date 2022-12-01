import 'reflect-metadata'
import 'dotenv/config'
import { PostgresHelper } from '@/shared/infra/database'
import { setupApp } from '@/main/config'
import env from '@/main/middlewares/core/env'

PostgresHelper.connect()
	.then((_) => {
		const app = setupApp()

		app.listen(env.port, () =>
			console.log(
				`Server is running at: http://localhost:${env.port}`,
			),
		)
	})
	.catch(console.error)
