const http = require('http');
const pool = require('./db');

// async function main() {
//   try {
//     const result = await pool.query('SELECT * FROM engineers');
//     console.log(result.rows);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     await pool.end();
//   }
// }

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        return res.end();
    }

    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET' && req.url === '/buildings') {
        try {
            const result = await pool.query('SELECT * FROM BuildingBlocks');

            res.writeHead(200);
            res.end(JSON.stringify(result.rows));
        } catch (error) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: 'Database error' }));
        }
    }
    if (req.method === 'GET' && req.url === '/engineers') {
        try {
            const result = await pool.query('SELECT * FROM Engineers');

            res.writeHead(200);
            res.end(JSON.stringify(result.rows));
        } catch (error) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: 'Database error' }));
        }
    }
    if (req.method === 'GET' && req.url === '/materials') {
        try {
            const result = await pool.query('SELECT * FROM Materials');

            res.writeHead(200);
            res.end(JSON.stringify(result.rows));
        } catch (error) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: 'Database error' }));
        }
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Route not found' }));
    }const http = require('http');
const pool = require('./db');

// async function main() {
//   try {
//     const result = await pool.query('SELECT * FROM engineers');
//     console.log(result.rows);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     await pool.end();
//   }
// }

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        return res.end();
    }

    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET' && req.url === '/buildings') {
        try {
            const result = await pool.query('SELECT * FROM BuildingBlocks');

            res.writeHead(200);
            res.end(JSON.stringify(result.rows));
        } catch (error) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: 'Database error' }));
        }
    }
    else if (req.method === 'GET' && req.url === '/engineers') {
        try {
            const result = await pool.query('SELECT * FROM Engineers');

            res.writeHead(200);
            res.end(JSON.stringify(result.rows));
        } catch (error) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: 'Database error' }));
        }
    }
    else if (req.method === 'GET' && req.url === '/materials') {
        try {
            const result = await pool.query('SELECT * FROM Materials');

            res.writeHead(200);
            res.end(JSON.stringify(result.rows));
        } catch (error) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: 'Database error' }));
        }
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Route not found' }));
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});