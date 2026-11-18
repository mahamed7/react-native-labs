<div align="center">

# 📱 React Native Labs

**Hands-on React Native + Expo apps from my Mobile Application Development course. Each folder is a standalone, runnable app focused on one core skill.**

[![CI](https://github.com/mahamed7/react-native-labs/actions/workflows/ci.yml/badge.svg)](https://github.com/mahamed7/react-native-labs/actions/workflows/ci.yml)
![React Native](https://img.shields.io/badge/React%20Native-0.85+-61DAFB?logo=react&logoColor=black)
![Expo](https://img.shields.io/badge/Expo-SDK%2056--57-000020?logo=expo&logoColor=white)
![NativeWind](https://img.shields.io/badge/Styling-NativeWind-38BDF8?logo=tailwindcss&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

</div>

---

## The labs

| # | App | Skill practised | Stack |
| :-: | :-- | :-- | :-- |
| 1 | [**Monflow Wallet UI**](monflow-wallet-ui) | Turning a fintech dashboard design into reusable, utility-styled components | Expo 57, NativeWind (Tailwind), Expo vector icons, ESLint |
| 2 | [**Navigation Login**](navigation-login) | Stack navigation and passing data between screens | Expo 56, React Navigation 7 (native stack) |

Related projects: [Firebase Realtime Tasks](https://github.com/mahamed7/firebase-realtime-tasks) (real-time database) and [Notes API](https://github.com/mahamed7/notes-api) (the REST back end used in later labs).

---

### 1 · Monflow Wallet UI

A personal-finance home screen: balance card, income/expense statistics and a recent-transactions list.

- **Component-driven:** `StatCard` (primary and secondary variants) and `TransactionItem` (income, expense and pending, each with its own icon, colour and sign) are reused across the screen
- **Tailwind on mobile:** styled with **NativeWind** `className` utilities instead of `StyleSheet` objects
- **Privacy toggle:** an eye icon hides and shows the balance through component state
- **Safe-area aware** layout in a scrollable view
- **Linted** with the Expo ESLint config in CI

```
monflow-wallet-ui/
├── App.js                    # screen layout + balance visibility state
├── components/
│   ├── StatCard.js
│   └── TransactionItem.js
├── tailwind.config.js · global.css · babel.config.js · metro.config.js   # NativeWind setup
└── eslint.config.js
```

### 2 · Navigation Login

A two-screen flow: the user types a name on **Login**, then **Home** greets them by that name and can navigate back.

- `NavigationContainer` + `createNativeStackNavigator` with `initialRouteName="Login"`
- Passes data between screens with **route params** (`navigation.navigate("Home", { studentName })` → `route.params`)
- Controlled `TextInput` with `useState`

```
navigation-login/
├── App.js                # navigator + screen registration
├── screens/
│   ├── LoginScreen.js
│   └── HomeScreen.js
└── components/PostCard.js   # reusable shadowed card, ready for a feed exercise
```

---

## Running a lab

**Prerequisites:** Node.js 20 or later, and the **Expo Go** app on your phone (or an Android/iOS emulator).

```bash
git clone https://github.com/mahamed7/react-native-labs.git
cd react-native-labs/monflow-wallet-ui     # or navigation-login
npm install
npx expo start                             # scan the QR code with Expo Go
```

In `monflow-wallet-ui`, `npm run lint` runs ESLint.

## What I learned

- Breaking a design into small, prop-driven components
- Utility-first styling on mobile with NativeWind
- How a native stack navigator manages screens and passes parameters

## Author

**Saabir Dahir Mahamud** · [Portfolio](https://mahamed7.github.io/Portfolio/) · [GitHub](https://github.com/mahamed7)

Released under the [MIT License](LICENSE).
