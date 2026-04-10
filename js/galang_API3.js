// Instalación: npm install @lionralfs/discogs-client
const { DiscogsClient } = require('@lionralfs/discogs-client');

const client = new DiscogsClient({
  userAgent: 'MiApp/1.0',
  auth: { token: 'TU_TOKEN_PERSONAL' }
});

const db = client.database();

async function buscar(query) {
  try {
    const { data } = await db.search({ query, type: 'release' });
    return data.results;
  } catch (err) {
    console.error(err);
  }
}
