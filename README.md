# LiveMTC

LiveMTC is a plugin/app combination that outputs Midi Time Code from Ableton Live. It is available for macOS and Windows, and can be downloaded from our [website](https://showsync.com/tools#livemtc). For support, please get in touch via [email](mailto:firstcontact@showsync.com) or join [our forum](https://forum.showsync.com).

This repository is public and maintained by Showsync. You are welcome to suggest changes by opening a pull request.

## Deploying

Deploying is only done by Showsync.

### Prepare:

- Have an Apple developer account.
- Make sure you have xcode 11.3.1 or later (download from developer account if necessary: https://developer.apple.com/download/more/, search for xcode 11.3.1).
- Have the Showsync Developer ID certificate installed: 
	- First ask Hidde or Mattijs for an invitation to the developer group of the SMG foundation
	- Open Xcode and go to Preferences -> Accounts -> your Apple developer account -> Stichting SMG -> Manage Certificates -> Press "+" -> Choose "Apple Development".
- Make sure you have an app specific password with your apple-id, if not:
	- Go to https://appleid.apple.com/ and log in with your apple ID.
	- Under security go to APP-SPECIFIC PASSWORDS and create a new label and then a password. Be sure to save them both. You'll need them later.
	- Open the keychain access app on your mac -> add/save the label and the password to your keychain.
- Install this once: `brew install akeru-inc/tap/xcnotary`

### Build:

- Open the `LiveMTC Bridge.maxproj` file in Max. 
- Make sure the `LiveMTC Bridge.maxpat` patcher is in the "disconnected"/"device off" state.
- In the `[standalone]` object in the `LiveMTC Bridge.maxpat` patcher, make sure that the same valid path is set for the application icon for the respective OS. If you're on macOS for example, only update the path to the macOS icon if necessary. 
- Build the application from Max (to a folder App)
- After the application is build, perform the next OS specific steps:
    - macOS: 
        - Add this CFBundleName field under <key>CFBundleExecutable</key>:
            <key>CFBundleName</key>
            <string>LiveMTC Bridge</string>
            to the Contents/Info.plist (right-click -> Show Package Contents).
        - Add the entire `fonts` folder (found in the repo under `LiveMTC Bridge/other`) to : `Contents/Resources/C74`.
        - In Terminal, enter the following:
            - codesign -f -s "Developer ID Application: Stichting SMG (P92XQLN5T4)" -v --entitlements <path-to-entitlements-xml-file>/LiveMTC\ Bridge.xml --deep --options runtime <path-to-app>/LiveMTC\ Bridge.app
            - xcnotary notarize <path-to-app>/LiveMTC\ Bridge.app  --developer-account <your-apple-developer-account> --developer-password-keychain-item <the-label-name-of-the-app-specific-password-you-saved-in-your-keychain>
    - Windows: 
        - Add the entire `fonts` folder (found in the repo under `LiveMTC Bridge/other`) to: `LiveMTC Bridge/resources`.

### Distribute:

- Once all lights of a PR check are green, head to the Details page of the check.
- Go to the Summary page, and scroll down to the bottom to download the `Dist.zip` file, which includes the `MTC.amxd` and `LiveMTC Manual.url` files. 
- Zip the two files together with the built LiveMTC Application (macOS) or LiveMTC folder (Windows).
- Upoad to our server.

---

Background info:

https://developer.apple.com/documentation/xcode/notarizing_macos_software_before_distribution/customizing_the_notarization_workflow?language=objc

https://cycling74.com/forums/issue-with-code-signing-mac-standalones-with-hardened-runtime

https://docs.cycling74.com/max8/vignettes/standalones
