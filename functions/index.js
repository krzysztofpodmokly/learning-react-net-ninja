const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


// 2. User joining notification

exports.helloWorld = functions.region('europe-west1').https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('notification added => ', doc))
});

// 1. Create notification that new project was created in database
exports.projectCreated = functions.region('europe-west1').firestore
    .document('projects/{projectId}')
    .onCreate(doc => {
        const project = doc.data();
        const notification = {
            content: 'Added a new project',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification)
})