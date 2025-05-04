interface ConfigInterface {
  urls: {
    admin: string;
    home: string;
  };
}

const config: ConfigInterface = {
  urls: {
    admin: "http://localhost:8000/api/admin",
    home: "http://localhost:8000/api",
  },
};

export default config;
