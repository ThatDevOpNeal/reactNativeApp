# Quick Instructions
## Neal Bharucha

### Android
- Be sure to run the command `npm run eject` or `yarn run eject` if android and ios folder aren't there.
    - Currently have only the _android_ folder being followed on github. Not fully.
- Android studio must be installed, make sure proper SDK (27 at the time) is installed.
    - Install whatever else it tells the user to install.
- AVD must be used (under tools).
    - Virtual device tested on:
        - _Google Pixel 2_
        - _Google Pixel_ 
    - If developing, _CTRL+M_, will open up settings.
        - Allow `Live reload`
        - Allow `Hot reload`
            - Both of the above will make it easier during development.
- if `npm run android` or `yarn run android` does not work check _build.gradle_ file.
    - under `repositories` add `google()`