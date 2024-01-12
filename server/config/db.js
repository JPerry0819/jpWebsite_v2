const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://jessicabruner23:RXLafdWgeTj6nysQ@jpprofile.ad6ifln.mongodb.net/?retryWrites=true&w=majority';

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error'));
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        // You can perform operations here if needed
        console.log('MongoDB connection successful');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


