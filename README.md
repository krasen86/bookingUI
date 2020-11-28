# Dentistimo client 

## Project setup

### Prerequisites
In order to connect to the MQTT broker make sure the Broker is configured to accept websockets on port 1884
- ex. For Mosquitto Eclipse broker add to the mosquitto.conf file 

```
   port 1883
   listener 1884
   protocol websockets
``` 
- Install the dependency packages from npm
``` 
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
