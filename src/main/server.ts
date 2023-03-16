import { env } from "../../env";
import app from "./config/app";

const server = app.listen(env.port, () => console.log(`app is running at port ${env.port}`))

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    console.log('HTTP server closed')
  })
})