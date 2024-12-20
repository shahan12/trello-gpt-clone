import { Account, Client, ID, Databases } from 'appwrite';
const client = new Client();
client.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Databases(client);

export {client , account , databases , storage , ID}