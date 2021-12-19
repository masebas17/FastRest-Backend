import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import {routeMenu} from "./route";

admin.initializeApp(functions.config().firebase);
const base_datos = admin.firestore();
base_datos.settings({ignoreUndefinedProperties : true, timestampasInSnapshot: true});

const server = express();
server.use(cors({origin: true}));


routeMenu(server);

export {base_datos};
export const api = functions.https.onRequest(server);
