import { PrismaClient } from "@prisma/client";
/* tackling hot reloading by react, thus, the trick is to save the prismaclient in a global file */
const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;
