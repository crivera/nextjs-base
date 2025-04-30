import { type Config } from "drizzle-kit"

import { env } from "~/env"
import packageJson from "./package.json"

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL
  },
  tablesFilter: [packageJson.name + "_*"],
  verbose: true
} satisfies Config
