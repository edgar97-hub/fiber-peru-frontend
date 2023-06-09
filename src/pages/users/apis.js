import { apis } from '../../services/Apis'

export async function insert(value) {
  var token = localStorage.getItem('token')
  var response = await fetch(apis.SERVER + apis.PLANS_INTERNET, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(value),
  })
  response = await response.json()
  return response
}

export async function update(value) {
  var token = localStorage.getItem('token')
  var response = await fetch(apis.SERVER + apis.PLANS_INTERNET, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(value),
  })
  response = await response.json()
  console.log(response)
  return response
}

export async function remove(value) {
  var token = localStorage.getItem('token')
  var response = await fetch(apis.SERVER + apis.PLANS_INTERNET, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(value),
  })
  response = await response.json()
  return response
}