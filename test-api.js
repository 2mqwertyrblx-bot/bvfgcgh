const apiKey = 'SoX04FtldF9lgqpE0ILOVyfiaf0oHuGjEdZ0HldN8mFrpWW6Q4sEROmwlrZkUdjd';
const timestamp = Date.now();

const endpoints = [
  `https://api.paylix.gg/v1/groups?timestamp=${timestamp}`,
  `https://api.paylix.gg/groups?timestamp=${timestamp}`,
  `https://api.paylix.gg/api/v1/groups?timestamp=${timestamp}`,
  `https://api.paylix.gg/api/groups?timestamp=${timestamp}`,
  `https://api.paylix.gg/products?timestamp=${timestamp}`,
  `https://api.paylix.gg/v1/products?timestamp=${timestamp}`,
];

async function testEndpoint(url) {
  try {
    console.log(`\n\nTesting: ${url}`);
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
    });
    
    const text = await res.text();
    console.log('Status:', res.status, res.statusText);
    
    try {
      const json = JSON.parse(text);
      console.log('Response:', JSON.stringify(json, null, 2).substring(0, 300));
      if (json.data) {
        console.log('✓ Has data!');
      }
    } catch (e) {
      console.log('Response:', text.substring(0, 300));
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
}

async function runTests() {
  for (const endpoint of endpoints) {
    await testEndpoint(endpoint);
  }
}

runTests();
