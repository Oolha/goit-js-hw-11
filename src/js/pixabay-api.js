
export function fetchUser(request) {
const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
    const params = new URLSearchParams({
        key: '44419663-0e2c09df92781957132f7cc0f',
        q: request,
        image_type: 'photo', 
        orientation: 'horizontal',
        safesearch: true,

  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
console.log(url);
    const headers = {
        'Content-Type': 'application/json',
        'X-RateLimit-Limit': '100',
        'X-RateLimit-Remaining': '99',
        'X-RateLimit-Reset': 0.6,
    
  };

  return fetch(url, { headers }).then(res => res.json());
 }
