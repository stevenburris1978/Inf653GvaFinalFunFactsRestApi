// Cross-Origin Resource Sharing
const whiteList = [
    "https://www.google.com",
    "http://127.0.0.1:5500",
    "http://localhost:3000",
    "https://kayscrochetmobileapp-5c1e1888702b.herokuapp.com",
    "https://www.kayscrochet.us",
    "https://kayscrochetapp-e13180bf49a3.herokuapp.com/"
  ];
  
  const corsOptions = {
    origin: (origin, callback) => {
      if (whiteList.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    optionsSuccessStatus: 200,
  };