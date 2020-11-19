# Dentistimo client 

## Project setup

### Prerequisites
    In order to connect to the MQTT broker make sure that the Broker is conrigured to accespt websokets on port 1884
    ex. For Mosquitto Ecliplse broker add to the mosquitto.conf file
        listener 1884
        protocol websockets
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
