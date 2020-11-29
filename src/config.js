const config = {
  apiUrl: 'http://localhost/api',
  endpoints: {
    pharmacy: {
      read: {
        method: 'GET',
        action: '/remedios/listaSimplificada'
      },
      create: {
        method: 'POST',
        action: '/remedios'
      },
      select: {
        method: 'GET',
        action: '/remedios/'
      },
      delete: {
        method: 'DELETE',
        action: '/remedios/'
      },
      update: {
        method: 'PUT',
        action: '/remedios/'
      }
    }
  }
};

export default config;
