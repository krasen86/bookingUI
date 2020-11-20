const mqtt = require('mqtt');
import {mqttVariables} from "@/config/mqttVariables";


export const MQTT = mqtt.connect(mqttVariables.URL);