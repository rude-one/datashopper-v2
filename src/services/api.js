const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

class ApiService {
  constructor(baseUrl = API_BASE_URL) {
    this.baseUrl = baseUrl
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    }

    const response = await fetch(url, config)

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      throw new Error(error.message || `HTTP error ${response.status}`)
    }

    return response.json()
  }

  get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString()
    const url = queryString ? `${endpoint}?${queryString}` : endpoint
    return this.request(url, { method: 'GET' })
  }

  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' })
  }
}

export const api = new ApiService()

// Dashboard API
export const dashboardApi = {
  getOverview(websiteId, startDate, endDate) {
    return api.get('/dashboard/overview', { websiteId, startDate, endDate })
  },

  getMetrics(websiteId, startDate, endDate) {
    return api.get('/dashboard/metrics', { websiteId, startDate, endDate })
  },

  getChartData(websiteId, startDate, endDate) {
    return api.get('/dashboard/chart', { websiteId, startDate, endDate })
  },

  getTopPages(websiteId, startDate, endDate, limit = 10) {
    return api.get('/dashboard/top-pages', { websiteId, startDate, endDate, limit })
  },

  getTopSources(websiteId, startDate, endDate, limit = 10) {
    return api.get('/dashboard/top-sources', { websiteId, startDate, endDate, limit })
  },

  getTopCities(websiteId, startDate, endDate, limit = 10) {
    return api.get('/dashboard/top-cities', { websiteId, startDate, endDate, limit })
  },

  getInsights(websiteId, startDate, endDate) {
    return api.get('/dashboard/insights', { websiteId, startDate, endDate })
  }
}

// Websites API
export const websitesApi = {
  getAll() {
    return api.get('/websites')
  },

  getById(id) {
    return api.get(`/websites/${id}`)
  },

  create(data) {
    return api.post('/websites', data)
  },

  update(id, data) {
    return api.put(`/websites/${id}`, data)
  },

  delete(id) {
    return api.delete(`/websites/${id}`)
  }
}

// Visitors API
export const visitorsApi = {
  getIdentified(websiteId, params = {}) {
    return api.get(`/websites/${websiteId}/visitors`, params)
  },

  getById(websiteId, visitorId) {
    return api.get(`/websites/${websiteId}/visitors/${visitorId}`)
  },

  export(websiteId, params = {}) {
    return api.get(`/websites/${websiteId}/visitors/export`, params)
  }
}

// Audiences API
export const audiencesApi = {
  getAll() {
    return api.get('/audiences')
  },

  getById(id) {
    return api.get(`/audiences/${id}`)
  },

  create(data) {
    return api.post('/audiences', data)
  },

  update(id, data) {
    return api.put(`/audiences/${id}`, data)
  },

  delete(id) {
    return api.delete(`/audiences/${id}`)
  }
}
