export const statusMonitorConfig = {
  pageTitle: 'Nest.js Monitoring Page',
  port: 8888,
  path: '/status',
  ignoreStartsWith: '/health/alive',
  spans: [
    {
      interval: 1, // Every second
      retention: 60, // Keep 60 datapoints in memory
    },
    {
      interval: 5, // Every 5 seconds
      retention: 60,
    },
    {
      interval: 15, // Every 15 seconds
      retention: 60,
    }
  ],
  chartVisibility: {
    cpu: true,
    mem: true,
    load: true,
    responseTime: true,
    rps: true,
    statusCodes: true,
  },
  healthChecks: [
    // {
    //   protocol: 'http',
    //   host: 'localhost',
    //   path: '/health/alive',
    //   port: 8888,
    // },
    // {
    //   protocol: 'http',
    //   host: 'localhost',
    //   path: '/health/dead',
    //   port: 8888,
    // },
  ]
}