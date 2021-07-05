# Desktop App Template
typescript, electron, electron-store, react(cra), react-redux, react-thunk, redux-persist

# Get started
#### 1. Clone and install
```bash
git clone https://github.com/WahaWaher/erts-app app-name
cd app-name && yarn
cd ui && yarn
cd ..
```
#### 2. Fill/edit package.json
#### 3. Scripts
```bash
yarn dev:ui # start dev ui
yarn dev:main # start dev main process
yarn dev:ts # start typescript compiler for main process (watch mode)

yarn build:pre # make unpacked prebuild
yarn build:release # build release for win x64 (installer, zip)
```