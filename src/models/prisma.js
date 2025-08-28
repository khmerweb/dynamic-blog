// src/models/prisma.js

import { PrismaClient } from "@prisma/client"
import { PrismaLibSQL } from '@prisma/adapter-libsql'

let prisma
const adapter = new PrismaLibSQL({
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: `${process.env.TURSO_AUTH_TOKEN}`,
})

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({ adapter })
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({ adapter })
  }

  prisma = global.prisma
}

export default prisma