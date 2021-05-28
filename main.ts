basic.forever(function () {
    tinkercademy.crashSensorSetup(DigitalPin.P2)
    if (tinkercademy.crashSensor()) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
