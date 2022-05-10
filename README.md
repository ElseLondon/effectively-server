# Effectively Server
As it stands, we cannot add custom routes to our Effectively codebase. This simple node.js express server is for handling any bespoke interactions our current Effectively cannot handle.

We currently have two routes `setRoomAgenda` & `getRoomAgenda` - these store the room's name, duration, and agenda points for sharing between separate clients.

Run the app locally with:

    npm start

Deploy the app to G-Cloud with the following:

    gcloud app deploy

## Todo
* create route for wiping the current memory cache?
* create Firestore DB?