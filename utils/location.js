const GOOGLE_API_KEY = 'AIzaSyDLGxQV9fGzCZd-u0aNodDZDwbj9Z2Hclg'

export function getMapPreview(lat,lng) {
    const imagePreview = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:C%7C${lat},${lng}&key=${GOOGLE_API_KEY}`
    return imagePreview
    
}

// https://maps.googleapis.com/maps/api/staticmap?center=40.714%2c%20-73.998&zoom=12&size=400x400&key=AIzaSyDEfjfY_pDpbpjm2_UCFjQ2FeJWV1OZwbc


// reverse geocoding api request
export async function getAddress(lat,lng){
   const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`
   const response = await fetch(url);
   if(!response.ok){
    throw new Error('Failed to fetch address')
   }

   const data = await response.json()
   const address = data.results[0].formatted_address
   return address
}