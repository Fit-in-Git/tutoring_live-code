# Schritt 1: npm init -y

# Schritt 2: npm i express <- express.js ist ein lightweight webserver framework => andere wären zb. NestJS, Koa.js, Adonis.js

# Schritt 3: package.json bearbeiten => type module => dev script => "nodemon server.js"


´´´
   Server (zb aws, netlify, gh, cloudfare) => hier wird anwendung gehostet

   server hat eine feste ip adresse (static ip) zb http:192.274.41.0

   DNS server (Domain Name System) => übersetzt domain (google.com) bei anfrage mit ip 

   frontend: example.com => 192.274.41.0:5173

   backend: example.com/api => 192.274.41.0:3000

   dashboard: admin.example.com => 192.274.41.0:5174
´´´