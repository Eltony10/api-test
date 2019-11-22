const {Datastore} = require('@google-cloud/datastore');
const ds = new Datastore({ namespace: 'tutorial' });

const kind = 'files';

function key(id) {
  return ds.key([kind, id]);
}

module.exports.list = async () => {
  // asynchronously get a list of entities with names
  let [data] = await ds.createQuery(kind).select('name').order('name').run();
  // extract only the names
  data = data.map((val) => val.name);
  return data;
};

module.exports.post = async (id, val) => {
  const entity = {
    key: key(id),
    data: { name: id, val },
  }
  await ds.save(entity);
};

module.exports.put = async (id, val) => {
  const entity = {
    key: key(id),
    data: { name: id, val },
  }
  await ds.save(entity);
};