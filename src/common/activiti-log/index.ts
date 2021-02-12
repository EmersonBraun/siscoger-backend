/* eslint-disable no-restricted-globals */
/* eslint-disable array-callback-return */
import mongoose from 'mongoose';
import { LogSchema } from '../../modules/log/schema/log.schema';

// MONGO_CONNECTION=
type LogActivity = {
  module: string;
  action:
    | 'login'
    | 'show'
    | 'create'
    | 'update'
    | 'delete'
    | 'restore'
    | 'forceDelete';
  user: any;
  data: any;
  old?: any;
  changes?: any;
};

function debugLog({ module, action, changes }: LogActivity): void {
  console.log(`
    Inserido o LOG do módulo ${module} com a ação ${action}
  `);
  console.log(changes);
}

// function compareData({ data, old }: LogActivity) {
//   const changes = [];
//   Object.entries(data).map(([key, value]) => {
//     // console.log(`chave ${key}  mudou o valor ${old[key]} -> ${value}`);
//     if (!old[key]) changes[key] = value;
//     if (old[key] && old[key] !== value) changes[key] = value;
//   });

//   return changes;
// }

export async function activityLog(
  logData: LogActivity,
  debug = false,
): Promise<void> {
  const mongo = await mongoose.connect('mongodb://localhost:27017/siscoger');
  const Log = mongo.model('logs', LogSchema);
  // if (logData.action === 'update') logData.changes = compareData(logData);
  const register = await Log.create(logData as any);

  if (register && debug) debugLog(logData);
}
