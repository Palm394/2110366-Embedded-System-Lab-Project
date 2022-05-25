#include <FirebaseESP8266.h>
#include <ESP8266WiFi.h>

#define WIFI_SSID "<WIFI_NAME>";
#define WIFI_PASSWORD "<WIFI_PASSWORD>"

#define FIREBASE_HOST "limit-people-19e80-default-rtdb.asia-southeast1.firebasedatabase.app"
#define FIREBASE_KEY "u5CwTtfZPrItD0pzhyTSAM0cj5DO1pbrnFe1p7Ar"

FirebaseData firebaseData;

void setup() {
    connectWifi();
    Firebase.begin(FIREBASE_HOST, FIREBASE_KEY);
    //recieve from stm32
    //int recieved_data = ......;
    if(Firebase.setInt(firebaseData, "/count", 6)) {
        Serial.println("Added");
    } else {
        Serial.println("Error : " + firebaseData.errorReason());
    }
}

void loop() {

}

void connectWifi() {
    Serial.begin(115200);
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    Serial.print("connecting");
    while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        delay(500);
    }
    Serial.println();
    Serial.print("connected: ");
    Serial.println(WiFi.localIP());
}
