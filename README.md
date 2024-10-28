# install dependencies

npm install

# run application in development mode

npm start

# build application for production

- npm run build

# run application in production mode

- enter dist folder
- npx serve

### NOTES

In order to fullfill the project requirements, I have extanded API model with required properties like AVB, Price , Style and Type.

# Zustand:

Could be implemented simplier, without slices, but the best practices, especialy for large projects, is to devide store on slices based on features.
Slices then will be merged in one global store for application.
When we dealing with nested object in Zustand store, update that object require to spread state, go to that nested object and immutable change that nested part of the object. It is a little bit difficult to handle this scenario. To overcome this problem we use immer middleware.
