const isProduction = process.env.NODE_ENV === 'production';

const devApiConfig = {
  baseUrl: 'https://v3.football.api-sports.io/',
  apiKey: '4366926e22a653634c8da9bfa63ce7a4',
  apiHost: 'v3.football.api-sports.io',
};

const prodApiConfig = {
  baseUrl: 'https://v3.football.api-sports.io/',
  apiKey: '4366926e22a653634c8da9bfa63ce7a4',
  apiHost: 'v3.football.api-sports.io',
};

const apiConfig = isProduction ? prodApiConfig : devApiConfig;

export default apiConfig;
