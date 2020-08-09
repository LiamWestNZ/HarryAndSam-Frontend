import backendLookup from '../lookup/lookup'

export function apiProfileDetail(userName, callback) {
    backendLookup("GET", `/profile/${userName}`, callback)
  }

export function apiProfileUpdate(userName, callback, data) {
  backendLookup("PUT", `/profile/${userName}/edit`, callback, data)
}

