# Dentistimo bookingUI 

## Link to main documentation repository

- [Documentation repositoy](https://git.chalmers.se/courses/dit355/2020/group-2/documentation)

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
cd src
npm run serve
```

### Compiles and minifies for production
```
cd src
npm run build
```

### Lints and fixes files
```
cd src
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Diagrams

### low-level bookingUI component diagram
![Component Diagram](./documentation/ComponentBookingUI-1.png)
